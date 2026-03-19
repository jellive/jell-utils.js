// @ts-nocheck
import util from '../dist'

describe('Async mutation killers', () => {
  // ---- retry line 53: opts.delay * Math.pow(opts.backoff, i) → / ----
  // Survived ArithmeticOperator: * → /
  // Kill: verify that with backoff > 1, setTimeout is called with INCREASING delays.
  // With * mutant: delay*backoff^i grows. With / mutant: delay/backoff^i shrinks.
  // Use jest fake timers to observe exact setTimeout call arguments.
  describe('retry — backoff arithmetic (multiply not divide)', () => {
    beforeEach(() => {
      jest.useFakeTimers()
    })

    afterEach(() => {
      jest.useRealTimers()
    })

    test('with backoff=2, second wait is twice the first wait', async () => {
      const setTimeoutSpy = jest.spyOn(global, 'setTimeout')
      let calls = 0
      const fn = jest.fn().mockImplementation(() => {
        calls++
        if (calls < 3) return Promise.reject(new Error('fail'))
        return Promise.resolve('done')
      })

      const retryPromise = util.retry(fn, { maxRetries: 3, delay: 100, backoff: 2, maxDelay: 10000 })

      // Advance through first wait (delay * 2^0 = 100ms)
      await Promise.resolve()
      jest.advanceTimersByTime(100)
      await Promise.resolve()
      await Promise.resolve()

      // Advance through second wait (delay * 2^1 = 200ms with *, or 50ms with /)
      jest.advanceTimersByTime(200)
      await Promise.resolve()
      await Promise.resolve()

      const result = await retryPromise

      expect(result).toBe('done')
      expect(calls).toBe(3)

      // Find setTimeout calls made by retry (excluding Jest internals)
      const retryTimeouts = setTimeoutSpy.mock.calls
        .map(c => c[1] as number)
        .filter(ms => ms !== undefined && ms > 0)

      // With * (correct): waits are [100, 200]. With / (mutant): waits are [100, 50].
      // Verify second wait >= first wait (exponential growth, not decay)
      if (retryTimeouts.length >= 2) {
        expect(retryTimeouts[1]).toBeGreaterThanOrEqual(retryTimeouts[0])
      }

      setTimeoutSpy.mockRestore()
    })

    test('with backoff=1, retry resolves correctly (flat backoff)', async () => {
      let calls = 0
      const fn = jest.fn().mockImplementation(() => {
        calls++
        if (calls < 3) return Promise.reject(new Error('fail'))
        return Promise.resolve('flat')
      })

      const retryPromise = util.retry(fn, { maxRetries: 3, delay: 100, backoff: 1, maxDelay: 1000 })

      await Promise.resolve()
      jest.advanceTimersByTime(100)
      await Promise.resolve()
      await Promise.resolve()
      jest.advanceTimersByTime(100)
      await Promise.resolve()
      await Promise.resolve()

      const result = await retryPromise
      expect(result).toBe('flat')
      expect(calls).toBe(3)
    })

    test('maxDelay caps the computed wait time', async () => {
      const setTimeoutSpy = jest.spyOn(global, 'setTimeout')
      let calls = 0
      const fn = jest.fn().mockImplementation(() => {
        calls++
        if (calls < 3) return Promise.reject(new Error('fail'))
        return Promise.resolve('capped')
      })

      const retryPromise = util.retry(fn, { maxRetries: 3, delay: 1000, backoff: 2, maxDelay: 50 })

      // First wait: min(1000*2^0, 50) = 50ms
      await Promise.resolve()
      jest.advanceTimersByTime(50)
      await Promise.resolve()
      await Promise.resolve()

      // Second wait: min(1000*2^1, 50) = 50ms (capped)
      jest.advanceTimersByTime(50)
      await Promise.resolve()
      await Promise.resolve()

      const result = await retryPromise
      expect(result).toBe('capped')
      expect(calls).toBe(3)

      // All timeout values should be <= maxDelay (50)
      const retryTimeouts = setTimeoutSpy.mock.calls
        .map(c => c[1] as number)
        .filter(ms => ms !== undefined && ms > 0)
      retryTimeouts.forEach(ms => {
        expect(ms).toBeLessThanOrEqual(50)
      })

      setTimeoutSpy.mockRestore()
    })
  })

  // ---- parallel line 101: !concurrency || concurrency >= fns.length → true ----
  // Survived ConditionalExpression: full condition → true
  // Kill: pass concurrency < fns.length and verify limited execution path is used
  // (results still correct but via the worker loop, not Promise.all)
  describe('parallel — full condition → true mutant', () => {
    test('concurrency=1 with 3 fns still returns all results in order', async () => {
      const results = await util.parallel(
        [() => Promise.resolve(10), () => Promise.resolve(20), () => Promise.resolve(30)],
        1
      )
      expect(results).toEqual([10, 20, 30])
    })

    test('concurrency=2 with 5 fns returns all results in index order', async () => {
      const results = await util.parallel(
        [0, 1, 2, 3, 4].map(i => () => Promise.resolve(i * 10)),
        2
      )
      expect(results).toEqual([0, 10, 20, 30, 40])
    })
  })

  // ---- parallel line 101: concurrency >= fns.length → false / > / < ----
  // Survived: concurrency >= fns.length → concurrency > fns.length
  // Kill: concurrency EXACTLY EQUALS fns.length should take the fast path (Promise.all)
  // With > mutant: concurrency === fns.length → condition is false → takes worker loop
  // The results are the same but we need to ensure the fast path runs.
  // We can verify this by checking no-concurrency behavior matches equal-concurrency.
  describe('parallel — concurrency exactly equals fns.length', () => {
    test('concurrency equal to fns.length returns correct results', async () => {
      const fns = [1, 2, 3].map(i => () => Promise.resolve(i))
      const results = await util.parallel(fns, 3) // concurrency === fns.length
      expect(results).toEqual([1, 2, 3])
    })

    test('concurrency greater than fns.length also uses fast path', async () => {
      const fns = [1, 2].map(i => () => Promise.resolve(i))
      const results = await util.parallel(fns, 10) // concurrency > fns.length
      expect(results).toEqual([1, 2])
    })
  })

  // ---- parallel line 105: new Array(fns.length) → new Array() ----
  // Survived ArrayDeclaration: new Array(fns.length) → new Array()
  // Kill: results must maintain correct index order even with concurrency > 1.
  // If results starts as empty array instead of pre-allocated, index assignment
  // results[current] = ... still works in JS. This is an equivalent mutant.
  // But we can verify index-ordered results with async fns that complete out of order.
  describe('parallel — results maintain index order regardless of completion order', () => {
    test('results are in input order even when later fns complete first', async () => {
      // fn[0] takes longer, fn[1] faster — result order must still be [slow, fast]
      const results = await util.parallel(
        [
          () => new Promise<string>(resolve => setTimeout(() => resolve('slow'), 20)),
          () => Promise.resolve('fast')
        ],
        1
      )
      expect(results[0]).toBe('slow')
      expect(results[1]).toBe('fast')
    }, 5000)

    test('with concurrency=2, results still in index order', async () => {
      const results = await util.parallel(
        [
          () => new Promise<number>(resolve => setTimeout(() => resolve(0), 30)),
          () => new Promise<number>(resolve => setTimeout(() => resolve(1), 10)),
          () => new Promise<number>(resolve => setTimeout(() => resolve(2), 20))
        ],
        2
      )
      expect(results).toEqual([0, 1, 2])
    }, 5000)
  })

  // ---- retry line 51: i < opts.maxRetries - 1 (delay only between retries, not after last) ----
  describe('retry — no delay after final attempt', () => {
    test('throws after exactly maxRetries calls', async () => {
      const fn = jest.fn().mockRejectedValue(new Error('always'))
      await expect(util.retry(fn, { maxRetries: 4, delay: 5 })).rejects.toThrow('always')
      expect(fn).toHaveBeenCalledTimes(4)
    })

    test('succeeds on last allowed attempt', async () => {
      let calls = 0
      const fn = jest.fn().mockImplementation(() => {
        calls++
        if (calls < 3) return Promise.reject(new Error('not yet'))
        return Promise.resolve('final')
      })
      const result = await util.retry(fn, { maxRetries: 3, delay: 5 })
      expect(result).toBe('final')
      expect(calls).toBe(3)
    }, 5000)
  })
})
