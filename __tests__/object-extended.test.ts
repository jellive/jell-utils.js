import util from '../dist'

describe('Object Utilities Extended', () => {
  describe('pick', () => {
    test('should pick specified keys', () => {
      const obj = { a: 1, b: 2, c: 3 }
      expect(util.pick(obj, ['a', 'c'])).toEqual({ a: 1, c: 3 })
    })

    test('should return empty object for empty keys array', () => {
      const obj = { a: 1, b: 2 }
      expect(util.pick(obj, [])).toEqual({})
    })

    test('should ignore non-existent keys', () => {
      const obj = { a: 1 }
      expect(util.pick(obj, ['a', 'b' as any])).toEqual({ a: 1 })
    })
  })

  describe('omit', () => {
    test('should omit specified keys', () => {
      const obj = { a: 1, b: 2, c: 3 }
      expect(util.omit(obj, ['b'])).toEqual({ a: 1, c: 3 })
    })

    test('should return copy of object for empty keys array', () => {
      const obj = { a: 1, b: 2 }
      expect(util.omit(obj, [])).toEqual({ a: 1, b: 2 })
    })

    test('should omit multiple keys', () => {
      const obj = { a: 1, b: 2, c: 3, d: 4 }
      expect(util.omit(obj, ['a', 'c'])).toEqual({ b: 2, d: 4 })
    })
  })

  describe('diff', () => {
    test('should return differing keys with new values', () => {
      const base = { a: 1, b: 2, c: 3 }
      const compare = { a: 1, b: 99, c: 3 }
      expect(util.diff(base, compare)).toEqual({ b: 99 })
    })

    test('should return empty object when objects are equal', () => {
      const obj = { a: 1, b: 2 }
      expect(util.diff(obj, { ...obj })).toEqual({})
    })

    test('should include keys only in compare', () => {
      const base = { a: 1 }
      const compare = { a: 1, b: 2 } as any
      expect(util.diff(base, compare)).toEqual({ b: 2 })
    })

    test('should include keys only in base (with undefined value)', () => {
      const base = { a: 1, b: 2 } as any
      const compare = { a: 1 }
      expect(util.diff(base, compare)).toEqual({ b: undefined })
    })
  })

  describe('isEmpty', () => {
    test('should return true for null and undefined', () => {
      expect(util.isEmpty(null)).toBe(true)
      expect(util.isEmpty(undefined)).toBe(true)
    })

    test('should return true for empty string', () => {
      expect(util.isEmpty('')).toBe(true)
    })

    test('should return false for non-empty string', () => {
      expect(util.isEmpty('hello')).toBe(false)
    })

    test('should return true for empty array', () => {
      expect(util.isEmpty([])).toBe(true)
    })

    test('should return false for non-empty array', () => {
      expect(util.isEmpty([1, 2, 3])).toBe(false)
    })

    test('should return true for empty object', () => {
      expect(util.isEmpty({})).toBe(true)
    })

    test('should return false for non-empty object', () => {
      expect(util.isEmpty({ a: 1 })).toBe(false)
    })

    test('should return false for numbers', () => {
      expect(util.isEmpty(0)).toBe(false)
      expect(util.isEmpty(42)).toBe(false)
    })
  })

  describe('deepMerge extended', () => {
    test('should not mutate original objects', () => {
      const target = { a: 1, b: { c: 2 } }
      const source = { b: { d: 3 } } as any
      const result = util.deepMerge(target, source)
      expect(result.b).toEqual({ c: 2, d: 3 })
      expect(target.b).toEqual({ c: 2 })
    })

    test('should overwrite non-object values', () => {
      const target = { a: 1, b: [1, 2] }
      const source = { b: [3, 4] } as any
      const result = util.deepMerge(target, source)
      expect(result.b).toEqual([3, 4])
    })
  })

  describe('setByPath extended', () => {
    test('should handle empty path gracefully', () => {
      const obj: any = {}
      util.setByPath(obj, '', 'value')
      // empty lastKey — no-op
    })

    test('should overwrite nested non-object with object', () => {
      const obj: any = { a: { b: 'old' } }
      util.setByPath(obj, 'a.b.c', 'new')
      expect(obj.a.b.c).toBe('new')
    })
  })
})
