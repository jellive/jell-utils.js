import util from '../dist'

describe('String Utilities Extended 3', () => {
  describe('toSnakeCase non-string input', () => {
    test('should return empty string for non-string input', () => {
      expect(util.toSnakeCase(null as any)).toBe('')
      expect(util.toSnakeCase(123 as any)).toBe('')
    })
  })

  describe('toTitleCase regex branches', () => {
    test('should split camelCase via regex', () => {
      // Exercises /([a-z])([A-Z])/ regex
      expect(util.toTitleCase('helloWorld')).toBe('Hello World')
      expect(util.toTitleCase('myVariableName')).toBe('My Variable Name')
    })

    test('should split underscore via replace', () => {
      // Exercises /_/g replace
      expect(util.toTitleCase('hello_world')).toBe('Hello World')
    })

    test('should filter empty words from split', () => {
      // Exercises filter(word => word.length > 0)
      expect(util.toTitleCase('  hello  world  ')).toBe('Hello World')
    })
  })

  describe('maskString length boundary', () => {
    test('should mask when string length is exactly visibleStart + visibleEnd + 1', () => {
      // length=7, visibleStart=3, visibleEnd=3 → 7 > 6 → mask
      expect(util.maskString('1234567', 3, 3)).toBe('123*567')
    })

    test('should NOT mask when string length equals visibleStart + visibleEnd', () => {
      // length=6, visibleStart=3, visibleEnd=3 → 6 <= 6 → return as-is
      expect(util.maskString('123456', 3, 3)).toBe('123456')
    })

    test('should use default visibleStart=3 and visibleEnd=3', () => {
      expect(util.maskString('1234567890')).toBe('123****890')
    })
  })

  describe('slugify regex chains', () => {
    test('should remove non-word chars', () => {
      // Exercises /[^\w\s-]/g
      expect(util.slugify('hello@world!')).toBe('helloworld')
    })

    test('should replace spaces with hyphens', () => {
      // Exercises /[\s_]+/g
      expect(util.slugify('hello world')).toBe('hello-world')
    })

    test('should replace underscores with hyphens', () => {
      // Exercises /[\s_]+/g matching underscore
      expect(util.slugify('hello_world')).toBe('hello-world')
    })

    test('should trim leading/trailing hyphens', () => {
      // Exercises /^-+|-+$/g
      expect(util.slugify('-hello-world-')).toBe('hello-world')
    })

    test('should handle consecutive special chars', () => {
      expect(util.slugify('hello   world')).toBe('hello-world')
    })
  })

  describe('maskEmail atIndex === -1 branch', () => {
    test('should return original if no @ (atIndex < 0)', () => {
      // Exercises atIndex < 0 return
      expect(util.maskEmail('notanemail')).toBe('notanemail')
    })
  })
})
