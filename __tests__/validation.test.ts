import util from '../lib'

describe('Validation Utilities', () => {
  describe('isEmail', () => {
    test('should validate correct email addresses', () => {
      expect(util.isEmail('test@example.com')).toBe(true)
      expect(util.isEmail('user.name@domain.co.kr')).toBe(true)
      expect(util.isEmail('name+tag@mail.com')).toBe(true)
    })

    test('should reject invalid email addresses', () => {
      expect(util.isEmail('invalid-email')).toBe(false)
      expect(util.isEmail('test@')).toBe(false)
      expect(util.isEmail('@example.com')).toBe(false)
      expect(util.isEmail('test@test')).toBe(true) // Valid per RFC - local TLD
    })

    test('should handle edge cases', () => {
      expect(util.isEmail('')).toBe(false)
      expect(util.isEmail('test@@example.com')).toBe(false)
    })
  })

  describe('isPhoneNumber', () => {
    test('should validate mobile numbers', () => {
      expect(util.isPhoneNumber('010-1234-5678')).toBe(true)
      expect(util.isPhoneNumber('01012345678')).toBe(true)
      expect(util.isPhoneNumber('011-123-4567')).toBe(true)
    })

    test('should validate landline numbers', () => {
      expect(util.isPhoneNumber('02-123-4567')).toBe(true)
      expect(util.isPhoneNumber('02-1234-5678')).toBe(true)
      expect(util.isPhoneNumber('031-1234-5678')).toBe(true)
    })

    test('should reject invalid numbers', () => {
      expect(util.isPhoneNumber('1234-5678')).toBe(false)
      expect(util.isPhoneNumber('010-12-34')).toBe(false)
    })
  })

  describe('isUrl', () => {
    test('should validate correct URLs', () => {
      expect(util.isUrl('https://example.com')).toBe(true)
      expect(util.isUrl('http://localhost:3000')).toBe(true)
      expect(util.isUrl('ftp://files.example.com')).toBe(true)
    })

    test('should validate URLs with paths', () => {
      expect(util.isUrl('https://example.com/path/to/page')).toBe(true)
      expect(util.isUrl('http://example.com/path?query=value')).toBe(true)
    })

    test('should reject invalid URLs', () => {
      expect(util.isUrl('not-a-url')).toBe(false)
      expect(util.isUrl('example.com')).toBe(false)
      expect(util.isUrl('')).toBe(false)
    })
  })

  describe('isBusinessNumber', () => {
    test('should validate correct business number with valid checksum', () => {
      // Test business numbers that pass the checksum algorithm
      expect(util.isBusinessNumber('123-45-67891')).toBe(true)
      expect(util.isBusinessNumber('220-81-00001')).toBe(true)
      expect(util.isBusinessNumber('105-86-01012')).toBe(true)
    })

    test('should validate without hyphens', () => {
      expect(util.isBusinessNumber('1234567891')).toBe(true)
      expect(util.isBusinessNumber('2208100001')).toBe(true)
    })

    test('should reject invalid checksum', () => {
      expect(util.isBusinessNumber('123-45-67890')).toBe(false)
      expect(util.isBusinessNumber('111-11-11111')).toBe(false)
    })

    test('should reject invalid length', () => {
      expect(util.isBusinessNumber('12345')).toBe(false)
      expect(util.isBusinessNumber('12345678901')).toBe(false)
    })
  })

  describe('formatPhoneNumber', () => {
    test('should format mobile numbers', () => {
      expect(util.formatPhoneNumber('01012345678')).toBe('010-1234-5678')
    })

    test('should format Seoul numbers', () => {
      expect(util.formatPhoneNumber('0212345678')).toBe('02-1234-5678')
    })

    test('should format area code numbers', () => {
      expect(util.formatPhoneNumber('03112345678')).toBe('031-1234-5678')
    })

    test('should return original if already formatted', () => {
      expect(util.formatPhoneNumber('010-1234-5678')).toBe('010-1234-5678')
    })
  })

  describe('formatBusinessNumber', () => {
    test('should format business number', () => {
      expect(util.formatBusinessNumber('1234567890')).toBe('123-45-67890')
    })

    test('should handle already formatted', () => {
      expect(util.formatBusinessNumber('123-45-67890')).toBe('123-45-67890')
    })

    test('should return original for invalid length', () => {
      expect(util.formatBusinessNumber('12345')).toBe('12345')
    })
  })
})
