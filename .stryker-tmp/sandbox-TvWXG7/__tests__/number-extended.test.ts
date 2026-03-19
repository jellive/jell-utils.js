// @ts-nocheck
import util from '../dist'

describe('Number Utilities Extended', () => {
  describe('parseNumber default isFloat behavior', () => {
    test('should parse integer by default (isFloat=false)', () => {
      // Exercises the isFloat = false default — not passing 3rd arg
      expect(util.parseNumber('3.14', 0)).toBe(3)
    })

    test('should parse integer portion when isFloat=false', () => {
      expect(util.parseNumber('42.9', 0, false)).toBe(42)
    })

    test('should handle non-string non-null input (e.g., number passed as string type)', () => {
      // Exercises typeof target !== 'string' branch
      expect(util.parseNumber(123 as any, 99)).toBe(99)
      expect(util.parseNumber({} as any, 99)).toBe(99)
    })

    test('should handle whitespace-only string', () => {
      expect(util.parseNumber('   ', 5)).toBe(5)
    })
  })

  describe('parseTime edge cases', () => {
    test('should parse plain number string (no colon)', () => {
      // Exercises indexOf(':') === -1 branch
      expect(util.parseTime('5000', 0)).toBe(5000)
    })

    test('should return default for non-numeric plain string', () => {
      expect(util.parseTime('abc', 999)).toBe(999)
    })

    test('should handle non-string input', () => {
      expect(util.parseTime(null as any, 42)).toBe(42)
      expect(util.parseTime(123 as any, 42)).toBe(42)
    })

    test('should handle whitespace-only string', () => {
      expect(util.parseTime('   ', 100)).toBe(100)
    })

    test('should handle time values with spaces', () => {
      expect(util.parseTime('01 : 30', 0)).toBe(90000)
    })
  })

  describe('formatFileSize precision branch', () => {
    test('should use 0 decimals for bytes (unitIndex=0, precision undefined)', () => {
      expect(util.formatFileSize(512)).toBe('512 B')
    })

    test('should use provided precision over auto', () => {
      expect(util.formatFileSize(512, 2)).toBe('512.00 B')
    })

    test('should handle TB boundary', () => {
      const tb = 1024 * 1024 * 1024 * 1024
      expect(util.formatFileSize(tb)).toBe('1 TB')
    })
  })

  describe('numberToKorean extended', () => {
    test('should convert all digit values', () => {
      expect(util.numberToKorean(2)).toBe('이')
      expect(util.numberToKorean(3)).toBe('삼')
      expect(util.numberToKorean(4)).toBe('사')
      expect(util.numberToKorean(6)).toBe('육')
      expect(util.numberToKorean(7)).toBe('칠')
      expect(util.numberToKorean(8)).toBe('팔')
      expect(util.numberToKorean(9)).toBe('구')
    })

    test('should convert 조 (trillion) level', () => {
      // 1조 = 1_000_000_000_000
      // groupIndex=3, group=1 → 일조
      expect(util.numberToKorean(1_000_000_000_000)).toBe('일조')
    })

    test('should convert 2조', () => {
      expect(util.numberToKorean(2_000_000_000_000)).toBe('이조')
    })

    test('should convert 1억 (100 million)', () => {
      expect(util.numberToKorean(100_000_000)).toBe('일억')
    })

    test('should convert 2억', () => {
      expect(util.numberToKorean(200_000_000)).toBe('이억')
    })

    test('should convert number with all unit levels', () => {
      // 1234 → 천이백삼십사
      expect(util.numberToKorean(1234)).toBe('천이백삼십사')
    })

    test('should convert number requiring bigUnit with group=1', () => {
      // 10000 → 만 (group=1, groupIndex=1, bigUnits[1]='만')
      expect(util.numberToKorean(10000)).toBe('만')
      // 100000000 → 일억 (group=1, groupIndex=2, bigUnits[2]='억')
      expect(util.numberToKorean(100000000)).toBe('일억')
    })
  })

  describe('parseNumberFromString', () => {
    test('should handle string with only non-numeric chars', () => {
      const result = util.parseNumberFromString('abc')
      expect(isNaN(result)).toBe(true)
    })

    test('should handle negative number string', () => {
      expect(util.parseNumberFromString('-42.5')).toBe(-42.5)
    })
  })
})
