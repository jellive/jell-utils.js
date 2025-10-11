import util from '../lib'

describe('Async Utilities', () => {
  describe('retry', () => {
    test('should succeed on first try', async () => {
      const fn = jest.fn().mockResolvedValue('success')
      const result = await util.retry(fn)

      expect(result).toBe('success')
      expect(fn).toHaveBeenCalledTimes(1)
    })

    test('should retry on failure and eventually succeed', async () => {
      let attempts = 0
      const fn = jest.fn().mockImplementation(() => {
        attempts++
        if (attempts < 3) {
          return Promise.reject(new Error('Failed'))
        }
        return Promise.resolve('success')
      })

      const result = await util.retry(fn, 3, 10)

      expect(result).toBe('success')
      expect(fn).toHaveBeenCalledTimes(3)
    })

    test('should throw error after max retries', async () => {
      const fn = jest.fn().mockRejectedValue(new Error('Always fails'))

      await expect(util.retry(fn, 2, 10)).rejects.toThrow('Always fails')
      expect(fn).toHaveBeenCalledTimes(2)
    })
  })

  describe('clone', () => {
    test('should deep clone object', () => {
      const original = { a: 1, b: { c: 2, d: [3, 4] } }
      const cloned = util.clone(original)

      expect(cloned).toEqual(original)
      expect(cloned).not.toBe(original)
      expect(cloned.b).not.toBe(original.b)
    })

    test('should clone array', () => {
      const original = [1, 2, { a: 3 }]
      const cloned = util.clone(original)

      expect(cloned).toEqual(original)
      expect(cloned).not.toBe(original)
    })

    test('should handle primitives', () => {
      expect(util.clone(null)).toBe(null)
      expect(util.clone(123)).toBe(123)
      expect(util.clone('test')).toBe('test')
    })
  })
})
