// @ts-nocheck
import util from '../dist'

describe('Format mutation killers', () => {
  describe('formatBytes — units.length boundary', () => {
    // Survived: unitIndex < units.length - 1  →  unitIndex <= units.length - 1
    // Survived: unitIndex < units.length - 1  →  unitIndex < units.length + 1
    // Survived: size >= 1024 && true
    // Fix: provide a value that reaches the last unit (TB) so the loop stops
    // exactly at units.length - 1 and doesn't loop further.
    test('should stop at TB (last unit) and not loop beyond', () => {
      // 1 TB exactly
      const oneTB = 1024 * 1024 * 1024 * 1024
      expect(util.formatBytes(oneTB)).toBe('1.00 TB')
      // 1023 TB should still be TB, not loop past it
      expect(util.formatBytes(oneTB * 1023)).toBe('1023.00 TB')
    })

    test('should not go past TB even for very large values', () => {
      // With unitIndex < units.length + 1 mutant, loop would go past TB
      const hugeByte = 1024 * 1024 * 1024 * 1024 * 9999
      const result = util.formatBytes(hugeByte)
      expect(result).toContain('TB')
      expect(result).not.toContain('PB')
    })

    // Survived: while (size >= 1024 && true) — infinite loop but tests timeout kills it
    // More targeted: value just under 1024 stays as B
    test('size exactly 1024 promotes to KB not stays as B', () => {
      expect(util.formatBytes(1024)).toBe('1.00 KB')
    })

    test('size 1023 stays as B (loop condition respects >= 1024)', () => {
      expect(util.formatBytes(1023)).toBe('1023 B')
    })
  })

  describe('formatCurrency — JPY/CNY no-coverage', () => {
    test('JPY prefix=true uses ¥ symbol as prefix', () => {
      // Kills NoCoverage on JPY symbol/prefix/object
      const result = util.formatCurrency(12345, 'JPY')
      expect(result).toBe('¥12,345')
      expect(result.startsWith('¥')).toBe(true)
    })

    test('CNY prefix=true uses ¥ symbol as prefix', () => {
      // Kills NoCoverage on CNY symbol/prefix/object
      const result = util.formatCurrency(12345, 'CNY')
      expect(result).toBe('¥12,345')
      expect(result.startsWith('¥')).toBe(true)
    })

    test('JPY prefix false would fail — verifies prefix=true branch', () => {
      // If BooleanLiteral mutant flipped prefix to false, result would be suffix
      const result = util.formatCurrency(100, 'JPY')
      expect(result.indexOf('¥')).toBe(0) // must be prefix position
    })

    test('CNY prefix false would fail — verifies prefix=true branch', () => {
      const result = util.formatCurrency(100, 'CNY')
      expect(result.indexOf('¥')).toBe(0) // must be prefix position
    })

    test('prefix branch returns symbol+formatted (not empty template)', () => {
      // Kills NoCoverage on template literal: `${symbol}${formatted}`
      const usd = util.formatCurrency(500, 'USD')
      expect(usd).toBe('$500')
      expect(usd.length).toBeGreaterThan(1)
    })

    test('suffix branch returns formatted+symbol (not empty template)', () => {
      // Kills NoCoverage on template literal: `${formatted}${symbol}`
      const krw = util.formatCurrency(500, 'KRW')
      expect(krw).toBe('500원')
      expect(krw.endsWith('원')).toBe(true)
    })
  })

  describe('formatPercent — isDecimal branch', () => {
    test('isDecimal=false uses value as-is (not multiplied by 100)', () => {
      expect(util.formatPercent(50, 0, false)).toBe('50%')
      expect(util.formatPercent(50, 0, true)).toBe('5000%')
    })
  })
})
