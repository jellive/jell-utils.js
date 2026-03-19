import util from '../dist'

describe('Object Utilities Extended 3', () => {
  describe('getByPath undefined return', () => {
    test('should return undefined when no defaultValue and path not found', () => {
      const obj = { a: 1 }
      expect(util.getByPath(obj, 'b')).toBeUndefined()
    })

    test('should return 0 when found value is 0 (not undefined)', () => {
      const obj = { a: 0 }
      expect(util.getByPath(obj, 'a', 99)).toBe(0)
    })

    test('should return false when found value is false', () => {
      const obj = { a: false }
      expect(util.getByPath(obj, 'a', true)).toBe(false)
    })
  })

  describe('setByPath with no lastKey', () => {
    test('should be a no-op for empty path', () => {
      const obj: any = { existing: 1 }
      util.setByPath(obj, '', 'value')
      expect(obj.existing).toBe(1)
    })
  })

  describe('deepMerge all condition branches', () => {
    test('should recurse when both source and target are plain objects', () => {
      const t = { a: { x: 1, y: 2 } }
      const s = { a: { y: 99, z: 3 } } as any
      expect(util.deepMerge(t, s)).toEqual({ a: { x: 1, y: 99, z: 3 } })
    })

    test('should overwrite when source is object but target is not', () => {
      const t = { a: 'string' }
      const s = { a: { nested: 1 } } as any
      expect(util.deepMerge(t, s)).toEqual({ a: { nested: 1 } })
    })

    test('should overwrite when source is array (not recurse)', () => {
      const t = { a: { x: 1 } }
      const s = { a: [1, 2, 3] } as any
      expect(util.deepMerge(t, s)).toEqual({ a: [1, 2, 3] })
    })

    test('should overwrite when target is array', () => {
      const t = { a: [1, 2] }
      const s = { a: { x: 1 } } as any
      expect(util.deepMerge(t, s)).toEqual({ a: { x: 1 } })
    })

    test('should handle source key with null value', () => {
      const t = { a: 1 }
      const s = { a: null } as any
      expect(util.deepMerge(t, s)).toEqual({ a: null })
    })
  })

  describe('clone null/object boundary', () => {
    test('should return null for null input', () => {
      expect(util.clone(null)).toBeNull()
    })

    test('should return number directly (not object)', () => {
      expect(util.clone(42)).toBe(42)
    })

    test('should return string directly', () => {
      expect(util.clone('hello')).toBe('hello')
    })

    test('should return false directly', () => {
      expect(util.clone(false)).toBe(false)
    })
  })

  describe('isEmpty number/boolean branch', () => {
    test('should return false for number 0', () => {
      expect(util.isEmpty(0)).toBe(false)
    })

    test('should return false for boolean false', () => {
      expect(util.isEmpty(false)).toBe(false)
    })

    test('should return false for non-zero number', () => {
      expect(util.isEmpty(42)).toBe(false)
    })
  })

  describe('diff with nested objects', () => {
    test('should detect nested object differences via JSON.stringify', () => {
      const base = { a: { x: 1 } }
      const compare = { a: { x: 2 } } as any
      const result = util.diff(base, compare)
      expect(result).toEqual({ a: { x: 2 } })
    })

    test('should return empty when objects are deeply equal', () => {
      const base = { a: { x: 1 }, b: [1, 2] }
      const compare = { a: { x: 1 }, b: [1, 2] }
      expect(util.diff(base, compare)).toEqual({})
    })
  })
})
