/**
 * Format edge case tests — targets uncovered branches in src/format/index.ts
 * Focuses on: formatBytes boundary/precision, formatPercent edge values,
 * formatCurrency all currency codes, formatNumber locale behaviour.
 */
import { formatBytes, formatPercent, formatNumber, formatCurrency } from '../src/format'

describe('formatBytes — edge cases', () => {
  it('0 bytes returns "0 B"', () => {
    expect(formatBytes(0)).toBe('0 B')
  })

  it('negative bytes: treated as negative number, stays in B unit', () => {
    const result = formatBytes(-1)
    expect(result).toContain('B')
  })

  it('exactly 1 KB (1024)', () => {
    expect(formatBytes(1024)).toBe('1.00 KB')
  })

  it('exactly 1 MB (1024^2)', () => {
    expect(formatBytes(1024 ** 2)).toBe('1.00 MB')
  })

  it('exactly 1 GB (1024^3)', () => {
    expect(formatBytes(1024 ** 3)).toBe('1.00 GB')
  })

  it('exactly 1 TB (1024^4) — last unit, loop stops', () => {
    expect(formatBytes(1024 ** 4)).toBe('1.00 TB')
  })

  it('value larger than 1 TB stays in TB (no PB unit)', () => {
    const result = formatBytes(1024 ** 4 * 999)
    expect(result).toContain('TB')
    expect(result).not.toContain('PB')
  })

  it('1023 bytes stays as B (< 1024 threshold)', () => {
    expect(formatBytes(1023)).toBe('1023 B')
  })

  it('explicit precision=0 suppresses decimals for KB', () => {
    expect(formatBytes(2048, 0)).toBe('2 KB')
  })

  it('explicit precision=4 for MB', () => {
    expect(formatBytes(1024 ** 2, 4)).toBe('1.0000 MB')
  })

  it('precision=0 overrides auto for B unit', () => {
    // auto for B is 0, explicit 0 is same — still "500 B"
    expect(formatBytes(500, 0)).toBe('500 B')
  })

  it('precision=1 for KB', () => {
    expect(formatBytes(2048, 1)).toBe('2.0 KB')
  })

  it('1.5 KB with default precision', () => {
    expect(formatBytes(1536)).toBe('1.50 KB')
  })
})

describe('formatPercent — edge cases', () => {
  it('0% with isDecimal=false', () => {
    expect(formatPercent(0)).toBe('0.0%')
  })

  it('100% with isDecimal=false', () => {
    expect(formatPercent(100)).toBe('100.0%')
  })

  it('0.0 with isDecimal=true returns 0.0%', () => {
    expect(formatPercent(0, 1, true)).toBe('0.0%')
  })

  it('1.0 (100%) with isDecimal=true', () => {
    expect(formatPercent(1, 1, true)).toBe('100.0%')
  })

  it('decimals=0 strips decimal point', () => {
    expect(formatPercent(75, 0)).toBe('75%')
    expect(formatPercent(0.5, 0, true)).toBe('50%')
  })

  it('decimals=2 shows two decimal places', () => {
    expect(formatPercent(33.333, 2)).toBe('33.33%')
  })

  it('negative value', () => {
    expect(formatPercent(-10, 1)).toBe('-10.0%')
  })

  it('isDecimal=true with value > 1', () => {
    // 1.5 → 150%
    expect(formatPercent(1.5, 1, true)).toBe('150.0%')
  })

  it('default decimals=1 with isDecimal=false', () => {
    expect(formatPercent(42)).toBe('42.0%')
  })

  it('default decimals=1 with isDecimal=true', () => {
    expect(formatPercent(0.42, 1, true)).toBe('42.0%')
  })
})

describe('formatNumber — edge cases', () => {
  it('0 formats correctly', () => {
    expect(formatNumber(0)).toBe('0')
  })

  it('negative number', () => {
    expect(formatNumber(-1234)).toBe('-1,234')
  })

  it('float number', () => {
    const result = formatNumber(1234.56)
    expect(result).toContain('1,234')
  })

  it('very large number', () => {
    expect(formatNumber(1_000_000_000)).toBe('1,000,000,000')
  })
})

describe('formatCurrency — all currency codes', () => {
  it('KRW uses suffix 원', () => {
    const result = formatCurrency(1000, 'KRW')
    expect(result).toBe('1,000원')
    expect(result.endsWith('원')).toBe(true)
  })

  it('USD uses prefix $', () => {
    const result = formatCurrency(1000, 'USD')
    expect(result).toBe('$1,000')
    expect(result.startsWith('$')).toBe(true)
  })

  it('EUR uses prefix €', () => {
    const result = formatCurrency(1000, 'EUR')
    expect(result).toBe('€1,000')
    expect(result.startsWith('€')).toBe(true)
  })

  it('JPY uses prefix ¥', () => {
    const result = formatCurrency(1000, 'JPY')
    expect(result).toBe('¥1,000')
    expect(result.startsWith('¥')).toBe(true)
  })

  it('CNY uses prefix ¥', () => {
    const result = formatCurrency(1000, 'CNY')
    expect(result).toBe('¥1,000')
    expect(result.startsWith('¥')).toBe(true)
  })

  it('default currency is KRW', () => {
    expect(formatCurrency(500)).toBe('500원')
  })

  it('0 amount', () => {
    expect(formatCurrency(0, 'KRW')).toBe('0원')
    expect(formatCurrency(0, 'USD')).toBe('$0')
  })

  it('large KRW amount', () => {
    expect(formatCurrency(50_000_000, 'KRW')).toBe('50,000,000원')
  })
})
