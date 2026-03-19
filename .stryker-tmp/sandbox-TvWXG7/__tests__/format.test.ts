// @ts-nocheck
import util from '../dist'

describe('Format Utilities', () => {
  describe('formatBytes', () => {
    test('should format bytes', () => {
      expect(util.formatBytes(0)).toBe('0 B')
      expect(util.formatBytes(500)).toBe('500 B')
      expect(util.formatBytes(1023)).toBe('1023 B')
    })

    test('should format kilobytes with auto precision', () => {
      expect(util.formatBytes(1024)).toBe('1.00 KB')
      expect(util.formatBytes(1536)).toBe('1.50 KB')
    })

    test('should format megabytes', () => {
      expect(util.formatBytes(1048576)).toBe('1.00 MB')
      expect(util.formatBytes(1572864)).toBe('1.50 MB')
    })

    test('should format gigabytes', () => {
      expect(util.formatBytes(1073741824)).toBe('1.00 GB')
    })

    test('should format terabytes', () => {
      expect(util.formatBytes(1099511627776)).toBe('1.00 TB')
    })

    test('should respect custom precision', () => {
      expect(util.formatBytes(1536, 0)).toBe('2 KB')
      expect(util.formatBytes(1536, 3)).toBe('1.500 KB')
    })

    test('should format bytes with precision 0', () => {
      expect(util.formatBytes(500, 0)).toBe('500 B')
    })
  })

  describe('formatPercent', () => {
    test('should format whole number percent with default decimals', () => {
      expect(util.formatPercent(42)).toBe('42.0%')
      expect(util.formatPercent(100)).toBe('100.0%')
      expect(util.formatPercent(0)).toBe('0.0%')
    })

    test('should format decimal fraction when isDecimal=true', () => {
      expect(util.formatPercent(0.42, 1, true)).toBe('42.0%')
      expect(util.formatPercent(1.0, 1, true)).toBe('100.0%')
      expect(util.formatPercent(0, 1, true)).toBe('0.0%')
    })

    test('should respect custom decimal places', () => {
      expect(util.formatPercent(42.567, 2)).toBe('42.57%')
      expect(util.formatPercent(42, 0)).toBe('42%')
    })

    test('should format negative percent', () => {
      expect(util.formatPercent(-5, 1)).toBe('-5.0%')
    })
  })

  describe('formatNumber', () => {
    test('should format with en-US locale by default', () => {
      expect(util.formatNumber(1000)).toBe('1,000')
      expect(util.formatNumber(1234567)).toBe('1,234,567')
    })

    test('should handle zero', () => {
      expect(util.formatNumber(0)).toBe('0')
    })

    test('should handle negative numbers', () => {
      expect(util.formatNumber(-1000)).toBe('-1,000')
    })
  })

  describe('formatCurrency', () => {
    test('should format KRW by default (suffix)', () => {
      expect(util.formatCurrency(1000)).toBe('1,000원')
    })

    test('should format USD (prefix)', () => {
      expect(util.formatCurrency(1000, 'USD')).toBe('$1,000')
    })

    test('should format EUR (prefix)', () => {
      expect(util.formatCurrency(500, 'EUR')).toBe('€500')
    })

    test('should format JPY (prefix)', () => {
      expect(util.formatCurrency(1000, 'JPY')).toBe('¥1,000')
    })

    test('should format CNY (prefix)', () => {
      expect(util.formatCurrency(1000, 'CNY')).toBe('¥1,000')
    })
  })
})
