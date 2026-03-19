// @ts-nocheck
import util from '../dist'

describe('String Utilities Extended', () => {
  describe('truncate', () => {
    test('should truncate long string with default suffix', () => {
      expect(util.truncate('Hello World', 8)).toBe('Hello...')
    })

    test('should not truncate short string', () => {
      expect(util.truncate('Hi', 10)).toBe('Hi')
    })

    test('should truncate with custom suffix', () => {
      expect(util.truncate('Hello World', 7, '…')).toBe('Hello …')
    })

    test('should return empty string for non-string input', () => {
      expect(util.truncate(null as any, 5)).toBe('')
    })

    test('should handle string exactly at maxLength', () => {
      expect(util.truncate('Hello', 5)).toBe('Hello')
    })
  })

  describe('slugify', () => {
    test('should convert string to slug', () => {
      expect(util.slugify('Hello World')).toBe('hello-world')
    })

    test('should remove special characters', () => {
      expect(util.slugify('Hello, World!')).toBe('hello-world')
    })

    test('should replace underscores with hyphens', () => {
      expect(util.slugify('hello_world')).toBe('hello-world')
    })

    test('should trim leading and trailing hyphens', () => {
      expect(util.slugify('  Hello World  ')).toBe('hello-world')
    })

    test('should return empty string for non-string', () => {
      expect(util.slugify(null as any)).toBe('')
    })
  })

  describe('camelToKebab', () => {
    test('should convert camelCase to kebab-case', () => {
      expect(util.camelToKebab('helloWorld')).toBe('hello-world')
      expect(util.camelToKebab('myVariableName')).toBe('my-variable-name')
    })

    test('should handle already lowercase string', () => {
      expect(util.camelToKebab('hello')).toBe('hello')
    })

    test('should return empty string for non-string', () => {
      expect(util.camelToKebab(null as any)).toBe('')
    })
  })

  describe('kebabToCamel', () => {
    test('should convert kebab-case to camelCase', () => {
      expect(util.kebabToCamel('hello-world')).toBe('helloWorld')
      expect(util.kebabToCamel('my-variable-name')).toBe('myVariableName')
    })

    test('should handle string without hyphens', () => {
      expect(util.kebabToCamel('hello')).toBe('hello')
    })

    test('should return empty string for non-string', () => {
      expect(util.kebabToCamel(null as any)).toBe('')
    })
  })

  describe('maskEmail', () => {
    test('should mask middle of local part', () => {
      expect(util.maskEmail('test@example.com')).toBe('te**@example.com')
    })

    test('should handle short local part', () => {
      expect(util.maskEmail('ab@example.com')).toBe('a*@example.com')
    })

    test('should handle long local part', () => {
      const result = util.maskEmail('username@example.com')
      expect(result).toContain('@example.com')
      expect(result).toContain('*')
    })

    test('should return input if no @ sign', () => {
      expect(util.maskEmail('notanemail')).toBe('notanemail')
    })

    test('should return empty string for non-string', () => {
      expect(util.maskEmail(null as any)).toBe('')
    })
  })

  describe('maskPhone', () => {
    test('should mask 11-digit phone number', () => {
      expect(util.maskPhone('01012345678')).toBe('010-****-5678')
    })

    test('should mask 10-digit phone number', () => {
      expect(util.maskPhone('0101234567')).toBe('010-***-567')
    })

    test('should handle formatted phone number', () => {
      expect(util.maskPhone('010-1234-5678')).toBe('010-****-5678')
    })

    test('should return original for unknown format', () => {
      expect(util.maskPhone('12345')).toBe('12345')
    })

    test('should return empty string for non-string', () => {
      expect(util.maskPhone(null as any)).toBe('')
    })
  })

  describe('objectToQueryString', () => {
    test('should handle empty object', () => {
      expect(util.objectToQueryString({})).toBe('')
    })

    test('should encode special characters', () => {
      const result = util.objectToQueryString({ q: 'hello world' })
      expect(result).toBe('q=hello%20world')
    })

    test('should filter null and undefined', () => {
      const result = util.objectToQueryString({ a: 1, b: null, c: undefined })
      expect(result).toBe('a=1')
    })

    test('should join multiple params with &', () => {
      const result = util.objectToQueryString({ a: '1', b: '2' })
      expect(result).toBe('a=1&b=2')
    })
  })
})
