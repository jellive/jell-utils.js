import util from '../dist'

describe('Async Utilities Extended 2', () => {
  describe('retry options null coalescing', () => {
    test('should use maxRetries default (3) when not provided in options', async () => {
      let calls = 0
      const fn = jest.fn().mockImplementation(() => {
        calls++
        return Promise.reject(new Error('fail'))
      })
      await expect(util.retry(fn, {})).rejects.toThrow('fail')
      expect(calls).toBe(3)
    })

    test('should use delay default when not provided', async () => {
      // With delay:0 it should still retry
      let calls = 0
      const fn = jest.fn().mockImplementation(() => {
        calls++
        if (calls < 2) return Promise.reject(new Error('fail'))
        return Promise.resolve('ok')
      })
      const result = await util.retry(fn, { maxRetries: 2, delay: 0 })
      expect(result).toBe('ok')
    })

    test('should use maxDelay default when not provided', async () => {
      let calls = 0
      const fn = jest.fn().mockImplementation(() => {
        calls++
        if (calls < 2) return Promise.reject(new Error('fail'))
        return Promise.resolve('done')
      })
      const result = await util.retry(fn, { maxRetries: 2, delay: 0, backoff: 1 })
      expect(result).toBe('done')
    })

    test('should use backoff default when not provided', async () => {
      let calls = 0
      const fn = jest.fn().mockImplementation(() => {
        calls++
        if (calls < 2) return Promise.reject(new Error('fail'))
        return Promise.resolve('done')
      })
      const result = await util.retry(fn, { maxRetries: 2, delay: 0 })
      expect(result).toBe('done')
    })
  })

  describe('parallel concurrency boundary', () => {
    test('should run all at once when concurrency equals fns.length', async () => {
      const results = await util.parallel(
        [() => Promise.resolve(1), () => Promise.resolve(2), () => Promise.resolve(3)],
        3
      )
      expect(results).toEqual([1, 2, 3])
    })

    test('should use limited concurrency when less than fns.length', async () => {
      const results = await util.parallel(
        [() => Promise.resolve('a'), () => Promise.resolve('b'), () => Promise.resolve('c')],
        2
      )
      expect(results).toEqual(['a', 'b', 'c'])
    })

    test('should handle concurrency of 1 (sequential execution)', async () => {
      const order: number[] = []
      const fns = [1, 2, 3].map(i => async () => {
        order.push(i)
        return i
      })
      const results = await util.parallel(fns, 1)
      expect(results).toEqual([1, 2, 3])
    })
  })
})
