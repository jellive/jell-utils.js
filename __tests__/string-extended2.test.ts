import util from '../dist'

describe('String Utilities Extended 2', () => {
  describe('maskEmail boundary cases', () => {
    test('should handle single char local part', () => {
      const result = util.maskEmail('a@example.com')
      // local.length <= 2, show local[0] + mask rest + domain
      expect(result).toBe('a@example.com') // length 1, no chars to mask
    })

    test('should handle 2-char local part', () => {
      const result = util.maskEmail('ab@example.com')
      expect(result).toBe('a*@example.com')
    })

    test('should handle exactly 3-char local part', () => {
      const result = util.maskEmail('abc@example.com')
      // visible = max(2, ceil(3/3)) = max(2,1) = 2
      expect(result).toBe('ab*@example.com')
    })

    test('should handle 6-char local part', () => {
      const result = util.maskEmail('abcdef@example.com')
      // visible = max(2, ceil(6/3)) = max(2,2) = 2
      expect(result).toBe('ab****@example.com')
    })

    test('should handle 9-char local part', () => {
      const result = util.maskEmail('abcdefghi@example.com')
      // visible = max(2, ceil(9/3)) = max(2,3) = 3
      expect(result).toBe('abc******@example.com')
    })
  })

  describe('maskString boundary cases', () => {
    test('should use default maskChar *', () => {
      expect(util.maskString('1234567890', 2, 2)).toBe('12******90')
    })

    test('should use custom maskChar', () => {
      expect(util.maskString('1234567890', 2, 2, '#')).toBe('12######90')
    })

    test('should handle visibleStart + visibleEnd = str.length (no masking)', () => {
      expect(util.maskString('12345', 3, 2)).toBe('12345')
    })
  })

  describe('getFileExtension edge cases', () => {
    test('should handle multiple dots', () => {
      expect(util.getFileExtension('archive.tar.gz')).toBe('gz')
    })

    test('should return lowercase extension', () => {
      expect(util.getFileExtension('IMAGE.JPG')).toBe('jpg')
    })
  })

  describe('objectToQueryString edge cases', () => {
    test('should handle boolean values', () => {
      const result = util.objectToQueryString({ active: true, deleted: false })
      expect(result).toContain('active=true')
      expect(result).toContain('deleted=false')
    })

    test('should handle number values', () => {
      const result = util.objectToQueryString({ page: 1, size: 20 })
      expect(result).toBe('page=1&size=20')
    })
  })

  describe('toCamelCase edge cases', () => {
    test('should handle non-string input', () => {
      expect(util.toCamelCase(null as any)).toBe('')
    })

    test('should handle single word', () => {
      expect(util.toCamelCase('hello')).toBe('hello')
    })
  })

  describe('toTitleCase edge cases', () => {
    test('should handle non-string input', () => {
      expect(util.toTitleCase(null as any)).toBe('')
    })

    test('should handle multiple spaces', () => {
      expect(util.toTitleCase('hello  world')).toBe('Hello World')
    })
  })
})
