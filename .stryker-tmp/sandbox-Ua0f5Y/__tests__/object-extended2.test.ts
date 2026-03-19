// @ts-nocheck
import util from '../dist'

describe('Object Utilities clone (fallback path)', () => {
  // structuredClone is available in Node 17+, so we test the public behavior
  // The JSON fallback path is hit when structuredClone is undefined
  // We test that clone correctly handles edge cases
  describe('clone edge cases', () => {
    test('should clone deeply nested objects', () => {
      const obj = { a: { b: { c: { d: 42 } } } }
      const result = util.clone(obj)
      expect(result).toEqual(obj)
      expect(result).not.toBe(obj)
      expect(result.a.b.c).not.toBe(obj.a.b.c)
    })

    test('should clone object with array values', () => {
      const obj = { items: [1, 2, 3], name: 'test' }
      const result = util.clone(obj)
      expect(result).toEqual(obj)
      expect(result.items).not.toBe(obj.items)
    })

    test('should handle boolean primitive', () => {
      expect(util.clone(true)).toBe(true)
      expect(util.clone(false)).toBe(false)
    })

    test('should handle undefined primitive', () => {
      expect(util.clone(undefined)).toBe(undefined)
    })

    test('should clone array of objects', () => {
      const arr = [{ a: 1 }, { b: 2 }]
      const result = util.clone(arr)
      expect(result).toEqual(arr)
      expect(result[0]).not.toBe(arr[0])
    })

    test('should handle object with null values', () => {
      const obj = { a: null, b: 'hello' }
      const result = util.clone(obj)
      expect(result).toEqual(obj)
    })
  })

  describe('getByPath edge cases', () => {
    test('should handle null intermediate value', () => {
      const obj = { a: null } as any
      expect(util.getByPath(obj, 'a.b', 'default')).toBe('default')
    })

    test('should handle undefined intermediate value', () => {
      const obj = { a: undefined } as any
      expect(util.getByPath(obj, 'a.b', 'fallback')).toBe('fallback')
    })

    test('should return value when found (no default needed)', () => {
      const obj = { x: { y: 0 } }
      expect(util.getByPath(obj, 'x.y')).toBe(0)
    })
  })

  describe('setByPath edge cases', () => {
    test('should create intermediate objects', () => {
      const obj: any = {}
      util.setByPath(obj, 'a.b.c', 42)
      expect(obj.a.b.c).toBe(42)
    })

    test('should overwrite string with object', () => {
      const obj: any = { a: 'string' }
      util.setByPath(obj, 'a.b', 'value')
      expect(obj.a.b).toBe('value')
    })
  })

  describe('deepMerge nested objects', () => {
    test('should handle source with null value (overwrites target)', () => {
      const target = { a: { b: 1 } }
      const source = { a: null } as any
      const result = util.deepMerge(target, source)
      expect(result.a).toBeNull()
    })

    test('should handle source array (overwrites target array)', () => {
      const target = { items: [1, 2] }
      const source = { items: [3, 4, 5] } as any
      const result = util.deepMerge(target, source)
      expect(result.items).toEqual([3, 4, 5])
    })

    test('should handle empty objects', () => {
      expect(util.deepMerge({}, {})).toEqual({})
    })
  })
})
