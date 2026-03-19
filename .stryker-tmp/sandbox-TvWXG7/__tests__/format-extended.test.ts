// @ts-nocheck
import util from '../dist'

describe('Format Utilities Extended', () => {
  describe('formatNumber with locale', () => {
    test('should format with default en-US locale', () => {
      expect(util.formatNumber(1000)).toBe('1,000')
    })

    test('should format large number', () => {
      expect(util.formatNumber(1000000)).toBe('1,000,000')
    })
  })

  describe('formatCurrency all symbols', () => {
    test('should use prefix=false for KRW (suffix)', () => {
      expect(util.formatCurrency(500, 'KRW')).toBe('500원')
    })

    test('should use prefix=true for USD', () => {
      expect(util.formatCurrency(500, 'USD')).toBe('$500')
    })

    test('should use prefix=true for EUR', () => {
      expect(util.formatCurrency(500, 'EUR')).toBe('€500')
    })

    test('should use prefix=true for JPY', () => {
      expect(util.formatCurrency(500, 'JPY')).toBe('¥500')
    })

    test('should use prefix=true for CNY', () => {
      expect(util.formatCurrency(500, 'CNY')).toBe('¥500')
    })
  })

  describe('formatBytes precision boundary', () => {
    test('should use precision=0 for bytes (unitIndex===0)', () => {
      // When precision is undefined and unitIndex===0, decimals = 0
      expect(util.formatBytes(100)).toBe('100 B')
    })

    test('should use precision=2 for KB (unitIndex>0)', () => {
      // When precision is undefined and unitIndex>0, decimals = 2
      expect(util.formatBytes(2048)).toBe('2.00 KB')
    })

    test('should use explicit precision=0 for KB', () => {
      expect(util.formatBytes(2048, 0)).toBe('2 KB')
    })
  })
})
