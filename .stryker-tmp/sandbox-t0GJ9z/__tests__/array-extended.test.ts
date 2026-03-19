// @ts-nocheck
import util from '../dist'

describe('Array Utilities Extended', () => {
  describe('chunk', () => {
    test('should split array into chunks', () => {
      expect(util.chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]])
    })

    test('should handle chunk size equal to array length', () => {
      expect(util.chunk([1, 2, 3], 3)).toEqual([[1, 2, 3]])
    })

    test('should handle chunk size larger than array length', () => {
      expect(util.chunk([1, 2], 5)).toEqual([[1, 2]])
    })

    test('should return empty array for size <= 0', () => {
      expect(util.chunk([1, 2, 3], 0)).toEqual([])
      expect(util.chunk([1, 2, 3], -1)).toEqual([])
    })

    test('should return empty array for empty input', () => {
      expect(util.chunk([], 2)).toEqual([])
    })
  })

  describe('unique', () => {
    test('should remove duplicate values', () => {
      expect(util.unique([1, 2, 2, 3, 3, 3])).toEqual([1, 2, 3])
    })

    test('should preserve first occurrence order', () => {
      expect(util.unique([3, 1, 2, 1, 3])).toEqual([3, 1, 2])
    })

    test('should handle array with no duplicates', () => {
      expect(util.unique([1, 2, 3])).toEqual([1, 2, 3])
    })

    test('should handle empty array', () => {
      expect(util.unique([])).toEqual([])
    })

    test('should work with strings', () => {
      expect(util.unique(['a', 'b', 'a', 'c'])).toEqual(['a', 'b', 'c'])
    })
  })

  describe('shuffle', () => {
    test('should return array with same elements', () => {
      const arr = [1, 2, 3, 4, 5]
      const result = util.shuffle(arr)
      expect(result).toHaveLength(arr.length)
      expect(result.sort()).toEqual([...arr].sort())
    })

    test('should not mutate original array', () => {
      const arr = [1, 2, 3]
      util.shuffle(arr)
      expect(arr).toEqual([1, 2, 3])
    })

    test('should handle empty array', () => {
      expect(util.shuffle([])).toEqual([])
    })

    test('should handle single element array', () => {
      expect(util.shuffle([42])).toEqual([42])
    })
  })

  describe('flatten', () => {
    test('should flatten one level deep by default', () => {
      expect(util.flatten([[1, 2], [3, 4]])).toEqual([1, 2, 3, 4])
    })

    test('should flatten only one level with depth=1', () => {
      expect(util.flatten([[1, [2, 3]], [4]], 1)).toEqual([1, [2, 3], 4])
    })

    test('should flatten deeply with larger depth', () => {
      expect(util.flatten([[1, [2, [3]]]], 2)).toEqual([1, 2, [3]])
    })

    test('should handle empty array', () => {
      expect(util.flatten([])).toEqual([])
    })

    test('should handle already flat array', () => {
      expect(util.flatten([1, 2, 3])).toEqual([1, 2, 3])
    })
  })

  describe('equalArrays extended', () => {
    test('should return true for same reference', () => {
      const arr = [1, 2, 3]
      expect(util.equalArrays(arr, arr)).toBe(true)
    })

    test('should return false for non-array inputs', () => {
      expect(util.equalArrays('abc' as any, [1, 2, 3])).toBe(false)
      expect(util.equalArrays([1, 2, 3], 'abc' as any)).toBe(false)
    })
  })

  describe('sortBy extended', () => {
    test('should handle equal values (return 0)', () => {
      const items = [{ name: 'A', age: 25 }, { name: 'B', age: 25 }]
      const result = util.sortBy(items, 'age', 'asc')
      expect(result[0].age).toBe(25)
      expect(result[1].age).toBe(25)
    })
  })
})
