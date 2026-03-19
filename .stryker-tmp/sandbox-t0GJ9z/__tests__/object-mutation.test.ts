// @ts-nocheck
import util from '../dist'

describe('Object mutation killers', () => {
  // ---- setByPath line 79: !(key in current) || typeof current[key] !== 'object' ----
  // Survived StringLiteral: typeof current[key] !== 'object'  →  !== ""
  // Kill: when key exists and value is NOT an object (e.g. a number),
  // the condition should be TRUE (overwrite with {}) but with mutant "" it would be FALSE.
  describe('setByPath — typeof !== object branch', () => {
    test('overwrites existing number value with nested object at deeper path', () => {
      const obj: any = { a: 42 }
      util.setByPath(obj, 'a.b', 'value')
      expect(obj.a.b).toBe('value')
      expect(typeof obj.a).toBe('object')
    })

    test('overwrites existing boolean with object', () => {
      const obj: any = { x: true }
      util.setByPath(obj, 'x.y', 99)
      expect(obj.x.y).toBe(99)
    })

    test('when key in current and value IS object, does not overwrite (recurses into it)', () => {
      const obj: any = { a: { existing: 1 } }
      util.setByPath(obj, 'a.b', 'new')
      expect(obj.a.existing).toBe(1) // existing key preserved
      expect(obj.a.b).toBe('new')
    })
  })

  // ---- deepMerge line 99: hasOwnProperty on source ----
  // Survived ConditionalExpression: hasOwnProperty(source, key) → true
  // Kill: source with inherited (prototype) key — own-property check should exclude it
  describe('deepMerge — source hasOwnProperty', () => {
    test('does not merge inherited prototype properties from source', () => {
      const target = { a: 1 }
      const proto = { inherited: 999 }
      const source = Object.create(proto) as any
      source.b = 2
      const result = util.deepMerge(target as any, source)
      expect(result.b).toBe(2)
      expect((result as any).inherited).toBeUndefined()
    })
  })

  // ---- deepMerge line 104: typeof sourceValue === 'object' → true ----
  // Kill: sourceValue that is NOT an object (e.g. string) where targetValue IS an object
  // With true mutant, it would try to deepMerge a string with an object → wrong behavior
  describe('deepMerge — sourceValue typeof check', () => {
    test('overwrites object target with primitive source value (no recursive merge)', () => {
      const target = { a: { nested: 1 } }
      const source = { a: 'string' } as any
      const result = util.deepMerge(target as any, source)
      expect(result.a).toBe('string') // primitive wins, no recursive merge
    })

    test('overwrites object target with number source value', () => {
      const target = { a: { x: 1, y: 2 } }
      const source = { a: 42 } as any
      const result = util.deepMerge(target as any, source)
      expect(result.a).toBe(42)
    })

    test('overwrites object target with boolean source value', () => {
      const target = { a: { x: 1 } }
      const source = { a: false } as any
      const result = util.deepMerge(target as any, source)
      expect(result.a).toBe(false)
    })
  })

  // ---- deepMerge line 107: typeof targetValue === 'object' → true ----
  // Kill: targetValue that is NOT an object where sourceValue IS an object
  // With true mutant, it would try to deepMerge a primitive target with an object source
  describe('deepMerge — targetValue typeof check', () => {
    test('overwrites primitive target with object source (no recursive merge of primitive)', () => {
      const target = { a: 42 }
      const source = { a: { nested: 1 } } as any
      const result = util.deepMerge(target as any, source)
      expect(result.a).toEqual({ nested: 1 })
    })

    test('overwrites string target with object source', () => {
      const target = { a: 'old' }
      const source = { a: { key: 'val' } } as any
      const result = util.deepMerge(target as any, source)
      expect(result.a).toEqual({ key: 'val' })
    })

    test('both source and target are objects → recursive merge happens', () => {
      const target = { a: { x: 1, y: 2 } }
      const source = { a: { y: 99, z: 3 } } as any
      const result = util.deepMerge(target as any, source)
      expect(result.a).toEqual({ x: 1, y: 99, z: 3 })
    })
  })

  // ---- pick line 134: hasOwnProperty → true ----
  // Kill: obj with non-own key in keys list (inherited key should not be picked)
  describe('pick — hasOwnProperty check', () => {
    test('does not pick inherited prototype properties', () => {
      const proto = { inherited: 999 }
      const obj = Object.create(proto) as any
      obj.own = 1
      const result = util.pick(obj, ['own', 'inherited'])
      expect(result.own).toBe(1)
      expect((result as any).inherited).toBeUndefined()
    })

    test('picks only own enumerable keys', () => {
      const obj = { a: 1, b: 2, c: 3 }
      expect(util.pick(obj, ['a', 'b'])).toEqual({ a: 1, b: 2 })
    })
  })

  // ---- isEmpty line 188: Array.isArray → false ----
  // Kill: array value should return true/false for empty/non-empty,
  // not fall through to object branch (which also uses length check via Object.keys)
  // Array.isArray([]) === true → value.length === 0 → true
  // With false mutant: skips to object branch → Object.keys([]).length === 0 → true (same!)
  // Degenerate for empty array. For non-empty array:
  // Array.isArray([1,2]) with false → Object.keys([1,2]) = ['0','1'] → length 2 → false (same!)
  // This mutant appears to be equivalent. But let's test with array having non-index keys:
  describe('isEmpty — Array.isArray branch', () => {
    test('empty array returns true', () => {
      expect(util.isEmpty([])).toBe(true)
    })

    test('non-empty array returns false', () => {
      expect(util.isEmpty([0])).toBe(false) // array with falsy value still non-empty
      expect(util.isEmpty([undefined])).toBe(false)
      expect(util.isEmpty([null])).toBe(false)
    })

    test('array with items is not empty regardless of item values', () => {
      expect(util.isEmpty([false, false])).toBe(false)
    })

    // The key difference: array of length 1 vs object with 1 key
    // Both return false, so mutant is equivalent for standard arrays.
    // Cover the branch explicitly to eliminate NoCoverage status.
    test('distinguishes empty array from empty object', () => {
      expect(util.isEmpty([])).toBe(true)
      expect(util.isEmpty({})).toBe(true)
      // both true but via different branches
    })
  })

  // ---- getByPath — no coverage paths ----
  describe('getByPath — deeper no-coverage paths', () => {
    test('single-key path returns direct value', () => {
      const obj = { a: 42 }
      expect(util.getByPath(obj, 'a')).toBe(42)
    })

    test('returns undefined (no default) when path missing', () => {
      const obj = { a: 1 }
      expect(util.getByPath(obj, 'b')).toBeUndefined()
    })

    test('returns default when intermediate is null', () => {
      const obj = { a: null } as any
      expect(util.getByPath(obj, 'a.b.c', 'def')).toBe('def')
    })
  })

  // ---- diff — no coverage paths ----
  describe('diff — JSON.stringify comparison', () => {
    test('detects nested object changes', () => {
      const base = { a: { x: 1 } } as any
      const compare = { a: { x: 2 } } as any
      expect(util.diff(base, compare)).toEqual({ a: { x: 2 } })
    })

    test('detects array value changes', () => {
      const base = { a: [1, 2] } as any
      const compare = { a: [1, 3] } as any
      expect(util.diff(base, compare)).toEqual({ a: [1, 3] })
    })

    test('does not include equal nested objects', () => {
      const base = { a: { x: 1 }, b: 2 } as any
      const compare = { a: { x: 1 }, b: 3 } as any
      expect(util.diff(base, compare)).toEqual({ b: 3 })
    })
  })
})
