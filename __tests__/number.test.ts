import util from '../dist'

describe('Number Utilities', () => {
  describe('parseNumber', () => {
    test('should parse integer', () => {
      expect(util.parseNumber('123', 0)).toBe(123)
      expect(util.parseNumber('456', 0)).toBe(456)
    })

    test('should parse float', () => {
      expect(util.parseNumber('123.45', 0, true)).toBe(123.45)
      expect(util.parseNumber('0.99', 0, true)).toBe(0.99)
    })

    test('should return default value for invalid input', () => {
      expect(util.parseNumber('abc', 100)).toBe(100)
      expect(util.parseNumber('', 50)).toBe(50)
    })
  })

  describe('parseTime', () => {
    test('should parse MM:SS format', () => {
      expect(util.parseTime('01:30', 0)).toBe(90000) // 1분 30초 = 90000ms
      expect(util.parseTime('05:00', 0)).toBe(300000) // 5분 = 300000ms
    })

    test('should parse HH:MM:SS format', () => {
      expect(util.parseTime('01:30:00', 0)).toBe(90000) // 1분 30초 (HH:MM:SS에서 third는 milliseconds)
      expect(util.parseTime('00:01:30', 0)).toBe(1030) // 1초 30ms
    })

    test('should return default value for invalid format', () => {
      expect(util.parseTime('invalid', 1000)).toBe(1000)
      expect(util.parseTime('', 2000)).toBe(2000)
    })
  })

  describe('formatNumber', () => {
    test('should format integer with thousands separator', () => {
      expect(util.formatNumber(1000)).toBe('1,000')
      expect(util.formatNumber(1234567)).toBe('1,234,567')
    })

    test('should format decimal with thousands separator', () => {
      expect(util.formatNumber(1234.56)).toBe('1,234.56')
    })

    test('should handle zero', () => {
      expect(util.formatNumber(0)).toBe('0')
    })

    test('should handle negative numbers', () => {
      expect(util.formatNumber(-1234567)).toBe('-1,234,567')
    })
  })

  describe('formatCurrency', () => {
    test('should format with default currency (KRW)', () => {
      expect(util.formatCurrency(1000)).toBe('1,000원')
      expect(util.formatCurrency(1234567)).toBe('1,234,567원')
    })

    test('should format with USD', () => {
      expect(util.formatCurrency(1000, 'USD')).toBe('$1,000')
    })

    test('should format with EUR', () => {
      expect(util.formatCurrency(1000, 'EUR')).toBe('€1,000')
    })

    test('should format with JPY', () => {
      expect(util.formatCurrency(1000, 'JPY')).toBe('¥1,000')
    })
  })

  describe('formatFileSize', () => {
    test('should format bytes', () => {
      expect(util.formatFileSize(500)).toBe('500 B')
    })

    test('should format kilobytes', () => {
      expect(util.formatFileSize(1024)).toBe('1 KB')
    })

    test('should format megabytes', () => {
      expect(util.formatFileSize(1048576)).toBe('1 MB')
    })

    test('should format gigabytes', () => {
      expect(util.formatFileSize(1073741824)).toBe('1 GB')
    })

    test('should format with precision', () => {
      expect(util.formatFileSize(1536, 2)).toBe('1.50 KB')
    })
  })

  describe('numberToKorean', () => {
    test('should convert single digits', () => {
      expect(util.numberToKorean(1)).toBe('일')
      expect(util.numberToKorean(5)).toBe('오')
    })

    test('should convert tens', () => {
      expect(util.numberToKorean(10)).toBe('십')
      expect(util.numberToKorean(15)).toBe('십오')
      expect(util.numberToKorean(99)).toBe('구십구')
    })

    test('should convert hundreds', () => {
      expect(util.numberToKorean(100)).toBe('백')
      expect(util.numberToKorean(123)).toBe('백이십삼')
    })

    test('should convert thousands', () => {
      expect(util.numberToKorean(1000)).toBe('천')
      expect(util.numberToKorean(1234)).toBe('천이백삼십사')
    })

    test('should convert ten thousands (만)', () => {
      expect(util.numberToKorean(10000)).toBe('만')
      expect(util.numberToKorean(12345)).toBe('만이천삼백사십오')
    })

    test('should convert hundred million (억)', () => {
      expect(util.numberToKorean(100000000)).toBe('일억')
    })

    test('should handle zero', () => {
      expect(util.numberToKorean(0)).toBe('영')
    })
  })

  describe('parseNumberFromString', () => {
    test('should parse number from formatted string', () => {
      expect(util.parseNumberFromString('1,234')).toBe(1234)
      expect(util.parseNumberFromString('1,234.56')).toBe(1234.56)
    })

    test('should parse number from currency string', () => {
      expect(util.parseNumberFromString('$1,000')).toBe(1000)
      expect(util.parseNumberFromString('1,000원')).toBe(1000)
    })

    test('should handle plain numbers', () => {
      expect(util.parseNumberFromString('12345')).toBe(12345)
    })
  })
})
