import util from '../dist'

describe('Async Utilities Extended', () => {
  describe('timeout', () => {
    test('should resolve when promise completes before timeout', async () => {
      const promise = Promise.resolve('done')
      const result = await util.timeout(promise, 1000)
      expect(result).toBe('done')
    })

    test('should reject when promise exceeds timeout', async () => {
      const slow = new Promise(resolve => setTimeout(resolve, 500))
      await expect(util.timeout(slow, 50)).rejects.toThrow('timed out')
    })

    test('should reject with custom message', async () => {
      const slow = new Promise(resolve => setTimeout(resolve, 500))
      await expect(util.timeout(slow, 50, 'Custom timeout')).rejects.toThrow('Custom timeout')
    })

    test('should propagate promise rejection', async () => {
      const failing = Promise.reject(new Error('original error'))
      await expect(util.timeout(failing, 1000)).rejects.toThrow('original error')
    })
  })

  describe('parallel', () => {
    test('should run all functions in parallel', async () => {
      const results = await util.parallel([
        () => Promise.resolve(1),
        () => Promise.resolve(2),
        () => Promise.resolve(3)
      ])
      expect(results).toEqual([1, 2, 3])
    })

    test('should respect concurrency limit', async () => {
      const order: number[] = []
      const fns = [0, 1, 2, 3].map(i => async () => {
        order.push(i)
        return i
      })
      const results = await util.parallel(fns, 2)
      expect(results).toEqual([0, 1, 2, 3])
    })

    test('should handle empty array', async () => {
      const results = await util.parallel([])
      expect(results).toEqual([])
    })

    test('should run all at once when no concurrency limit', async () => {
      const results = await util.parallel([
        () => Promise.resolve('a'),
        () => Promise.resolve('b')
      ])
      expect(results).toEqual(['a', 'b'])
    })
  })

  describe('serial', () => {
    test('should run functions one after another', async () => {
      const order: number[] = []
      const fns = [1, 2, 3].map(i => async () => {
        order.push(i)
        return i
      })
      const results = await util.serial(fns)
      expect(results).toEqual([1, 2, 3])
      expect(order).toEqual([1, 2, 3])
    })

    test('should handle empty array', async () => {
      const results = await util.serial([])
      expect(results).toEqual([])
    })

    test('should propagate errors', async () => {
      const fns = [
        () => Promise.resolve(1),
        () => Promise.reject(new Error('fail')),
        () => Promise.resolve(3)
      ]
      await expect(util.serial(fns)).rejects.toThrow('fail')
    })
  })

  describe('retry with RetryOptions object', () => {
    test('should accept options object', async () => {
      let calls = 0
      const fn = jest.fn().mockImplementation(() => {
        calls++
        if (calls < 2) return Promise.reject(new Error('fail'))
        return Promise.resolve('ok')
      })
      const result = await util.retry(fn, { maxRetries: 3, delay: 10, maxDelay: 100, backoff: 2 })
      expect(result).toBe('ok')
      expect(calls).toBe(2)
    })

    test('should use defaults for missing options', async () => {
      const fn = jest.fn().mockResolvedValue('success')
      const result = await util.retry(fn, {})
      expect(result).toBe('success')
    })
  })
})
