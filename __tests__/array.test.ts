import util from '../dist'

describe('Array Utilities', () => {
  describe('groupBy', () => {
    test('should group array by key', () => {
      const items = [
        { name: 'Apple', category: 'fruit' },
        { name: 'Carrot', category: 'vegetable' },
        { name: 'Banana', category: 'fruit' }
      ]

      const result = util.groupBy(items, 'category')

      expect(result.fruit).toHaveLength(2)
      expect(result.vegetable).toHaveLength(1)
      expect(result.fruit[0].name).toBe('Apple')
    })
  })

  describe('sortBy', () => {
    test('should sort array by key in ascending order', () => {
      const items = [
        { name: 'Charlie', age: 30 },
        { name: 'Alice', age: 25 },
        { name: 'Bob', age: 35 }
      ]

      const result = util.sortBy(items, 'age', 'asc')

      expect(result[0].age).toBe(25)
      expect(result[2].age).toBe(35)
    })

    test('should sort array by key in descending order', () => {
      const items = [
        { name: 'Charlie', age: 30 },
        { name: 'Alice', age: 25 },
        { name: 'Bob', age: 35 }
      ]

      const result = util.sortBy(items, 'age', 'desc')

      expect(result[0].age).toBe(35)
      expect(result[2].age).toBe(25)
    })
  })

  describe('equalArrays', () => {
    test('should return true for equal arrays', () => {
      expect(util.equalArrays([1, 2, 3], [1, 2, 3])).toBe(true)
    })

    test('should return false for different arrays', () => {
      expect(util.equalArrays([1, 2, 3], [1, 2, 4])).toBe(false)
    })

    test('should return false for different lengths', () => {
      expect(util.equalArrays([1, 2], [1, 2, 3])).toBe(false)
    })

    test('should return false when either argument is null', () => {
      expect(util.equalArrays(null as any, [1, 2, 3])).toBe(false)
      expect(util.equalArrays([1, 2, 3], null as any)).toBe(false)
      expect(util.equalArrays(null as any, null as any)).toBe(false)
    })
  })

  describe('null/undefined guards', () => {
    test('should handle null input for groupBy', () => {
      expect(util.groupBy(null as any, 'key')).toEqual({})
    })

    test('should handle null input for sortBy', () => {
      expect(util.sortBy(null as any, 'key')).toEqual([])
    })

    test('should handle null input for unique', () => {
      expect(util.unique(null as any)).toEqual([])
    })

    test('should handle null input for shuffle', () => {
      expect(util.shuffle(null as any)).toEqual([])
    })

    test('should handle null input for flatten', () => {
      expect(util.flatten(null as any)).toEqual([])
    })

    test('should handle null input for chunk', () => {
      expect(util.chunk(null as any, 2)).toEqual([])
    })
  })
})
