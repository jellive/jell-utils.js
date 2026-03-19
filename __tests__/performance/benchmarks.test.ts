/**
 * Performance benchmarks for critical utility functions.
 * Uses Node.js built-in performance.now() — no external dependencies.
 *
 * Strategy: each benchmark runs N iterations and asserts the total wall-clock
 * time stays under a generous threshold (10x expected). The goal is to catch
 * catastrophic regressions (e.g. O(n²) where O(n) is expected), not micro-
 * optimise to nanoseconds.
 */

import { formatNumber, formatCurrency, numberToKorean } from '../../src/number'
import { truncate, slugify, toCamelCase, maskEmail } from '../../src/string'
import { isKorean, chosungSearch, withEunNeun } from '../../src/korean'
import { isEmail, isPhone, isUrl } from '../../src/validation'
import { groupBy, sortBy, chunk, unique } from '../../src/array'

// ---------------------------------------------------------------------------
// Helper
// ---------------------------------------------------------------------------

function bench(label: string, iterations: number, fn: () => void): number {
  const start = performance.now()
  for (let i = 0; i < iterations; i++) fn()
  const elapsed = performance.now() - start
  return elapsed
}

const ITERATIONS = 10_000

// ---------------------------------------------------------------------------
// Number benchmarks
// ---------------------------------------------------------------------------

describe('Performance — number', () => {
  it(`formatNumber x${ITERATIONS} completes < 500ms`, () => {
    const ms = bench('formatNumber', ITERATIONS, () => formatNumber(1234567))
    expect(ms).toBeLessThan(500)
  })

  it(`formatCurrency x${ITERATIONS} completes < 500ms`, () => {
    const ms = bench('formatCurrency', ITERATIONS, () => formatCurrency(99000, 'KRW'))
    expect(ms).toBeLessThan(500)
  })

  it(`numberToKorean x${ITERATIONS} completes < 500ms`, () => {
    const ms = bench('numberToKorean', ITERATIONS, () => numberToKorean(123456789))
    expect(ms).toBeLessThan(500)
  })
})

// ---------------------------------------------------------------------------
// String benchmarks
// ---------------------------------------------------------------------------

describe('Performance — string', () => {
  const longStr = 'a'.repeat(1000)

  it(`truncate x${ITERATIONS} completes < 200ms`, () => {
    const ms = bench('truncate', ITERATIONS, () => truncate(longStr, 100))
    expect(ms).toBeLessThan(200)
  })

  it(`slugify x${ITERATIONS} completes < 500ms`, () => {
    const ms = bench('slugify', ITERATIONS, () => slugify('Hello World! This is a Test String.'))
    expect(ms).toBeLessThan(500)
  })

  it(`toCamelCase x${ITERATIONS} completes < 500ms`, () => {
    const ms = bench('toCamelCase', ITERATIONS, () => toCamelCase('hello_world_foo_bar'))
    expect(ms).toBeLessThan(500)
  })

  it(`maskEmail x${ITERATIONS} completes < 200ms`, () => {
    const ms = bench('maskEmail', ITERATIONS, () => maskEmail('user@example.com'))
    expect(ms).toBeLessThan(200)
  })
})

// ---------------------------------------------------------------------------
// Korean benchmarks
// ---------------------------------------------------------------------------

describe('Performance — korean', () => {
  it(`isKorean x${ITERATIONS} completes < 200ms`, () => {
    const ms = bench('isKorean', ITERATIONS, () => isKorean('안녕하세요 Hello'))
    expect(ms).toBeLessThan(200)
  })

  it(`chosungSearch x${ITERATIONS} completes < 500ms`, () => {
    const ms = bench('chosungSearch', ITERATIONS, () =>
      chosungSearch('삼성전자주식회사', 'ㅅㅅ')
    )
    expect(ms).toBeLessThan(500)
  })

  it(`withEunNeun x${ITERATIONS} completes < 200ms`, () => {
    const ms = bench('withEunNeun', ITERATIONS, () => withEunNeun('책'))
    expect(ms).toBeLessThan(200)
  })
})

// ---------------------------------------------------------------------------
// Validation benchmarks
// ---------------------------------------------------------------------------

describe('Performance — validation', () => {
  it(`isEmail x${ITERATIONS} completes < 500ms`, () => {
    const ms = bench('isEmail', ITERATIONS, () => isEmail('user@example.com'))
    expect(ms).toBeLessThan(500)
  })

  it(`isPhone x${ITERATIONS} completes < 500ms`, () => {
    const ms = bench('isPhone', ITERATIONS, () => isPhone('010-1234-5678'))
    expect(ms).toBeLessThan(500)
  })

  it(`isUrl x${ITERATIONS} completes < 500ms`, () => {
    const ms = bench('isUrl', ITERATIONS, () => isUrl('https://example.com/path?q=1'))
    expect(ms).toBeLessThan(500)
  })
})

// ---------------------------------------------------------------------------
// Array benchmarks (larger input)
// ---------------------------------------------------------------------------

describe('Performance — array (1,000 items)', () => {
  const SIZE = 1_000
  const data = Array.from({ length: SIZE }, (_, i) => ({
    category: i % 5 === 0 ? 'A' : i % 3 === 0 ? 'B' : 'C',
    value: Math.floor(Math.random() * 1000),
  }))
  const flat = Array.from({ length: SIZE }, (_, i) => i % 100)

  it('groupBy 1,000 items completes < 50ms', () => {
    const ms = bench('groupBy', 100, () => groupBy(data, 'category'))
    expect(ms).toBeLessThan(50)
  })

  it('sortBy 1,000 items completes < 100ms', () => {
    const ms = bench('sortBy', 100, () => sortBy(data, 'value'))
    expect(ms).toBeLessThan(100)
  })

  it('chunk 1,000 items completes < 50ms', () => {
    const ms = bench('chunk', 100, () => chunk(flat, 10))
    expect(ms).toBeLessThan(50)
  })

  it('unique 1,000 items completes < 50ms', () => {
    const ms = bench('unique', 100, () => unique(flat))
    expect(ms).toBeLessThan(50)
  })
})
