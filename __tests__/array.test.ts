import util from '../lib'

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
  })
})
