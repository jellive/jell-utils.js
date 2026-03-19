import util from '../dist'

describe('Validation Utilities Extended', () => {
  describe('isUUID', () => {
    test('should validate v4 UUID', () => {
      expect(util.isUUID('550e8400-e29b-41d4-a716-446655440000')).toBe(true)
    })

    test('should validate v1 UUID', () => {
      expect(util.isUUID('6ba7b810-9dad-11d1-80b4-00c04fd430c8')).toBe(true)
    })

    test('should reject invalid UUID', () => {
      expect(util.isUUID('not-a-uuid')).toBe(false)
      expect(util.isUUID('550e8400-e29b-61d4-a716-446655440000')).toBe(false) // version 6 invalid
      expect(util.isUUID('')).toBe(false)
    })

    test('should reject UUID with wrong format', () => {
      expect(util.isUUID('550e8400e29b41d4a716446655440000')).toBe(false) // no hyphens
    })
  })

  describe('isPhone', () => {
    test('should validate mobile number formats', () => {
      expect(util.isPhone('010-1234-5678')).toBe(true)
      expect(util.isPhone('01012345678')).toBe(true)
      expect(util.isPhone('016-123-4567')).toBe(true)
      expect(util.isPhone('019-1234-5678')).toBe(true)
    })

    test('should validate landline number formats', () => {
      expect(util.isPhone('02-123-4567')).toBe(true)
      expect(util.isPhone('031-123-4567')).toBe(true)
      expect(util.isPhone('051-1234-5678')).toBe(true)
    })

    test('should reject invalid phone numbers', () => {
      expect(util.isPhone('1234567890')).toBe(false)
      expect(util.isPhone('000-000-0000')).toBe(false)
    })
  })

  describe('formatPhoneNumber extended', () => {
    test('should format 9-digit Seoul number', () => {
      expect(util.formatPhoneNumber('021234567')).toBe('02-123-4567')
    })

    test('should format 10-digit mobile number', () => {
      expect(util.formatPhoneNumber('0101234567')).toBe('010-123-4567')
    })

    test('should handle regional area code 11-digit', () => {
      expect(util.formatPhoneNumber('05112345678')).toBe('051-1234-5678')
    })

    test('should handle regional area code 10-digit', () => {
      expect(util.formatPhoneNumber('0511234567')).toBe('051-123-4567')
    })

    test('should return original for unrecognized format', () => {
      expect(util.formatPhoneNumber('12345')).toBe('12345')
    })
  })
})
