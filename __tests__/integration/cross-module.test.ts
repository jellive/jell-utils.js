/**
 * Integration tests — cross-module interactions.
 * Verifies that functions from different modules compose correctly
 * in realistic, multi-step usage patterns.
 */

import { truncate, slugify, maskEmail, toCamelCase, toSnakeCase } from '../../src/string'
import { formatNumber, formatCurrency, numberToKorean } from '../../src/number'
import { isEmail, isPhone, formatPhoneNumber } from '../../src/validation'
import { isKorean, withEunNeun, chosungSearch } from '../../src/korean'
import { groupBy, sortBy, unique, chunk } from '../../src/array'
import { formatBytes, formatPercent } from '../../src/format'

// ---------------------------------------------------------------------------
// String + Validation cross-module
// ---------------------------------------------------------------------------

describe('cross-module: string + validation', () => {
  it('maskEmail preserves a valid email structure', () => {
    const email = 'hello@example.com'
    expect(isEmail(email)).toBe(true)
    const masked = maskEmail(email)
    // masked should still be a non-empty string
    expect(typeof masked).toBe('string')
    expect(masked.length).toBeGreaterThan(0)
    // original data is obscured
    expect(masked).not.toBe(email)
  })

  it('formatPhoneNumber output is recognized as a phone number', () => {
    const raw = '01012345678'
    const formatted = formatPhoneNumber(raw)
    expect(isPhone(formatted)).toBe(true)
  })

  it('slugify then toCamelCase round-trip preserves word count', () => {
    const input = 'Hello World Example'
    const slug = slugify(input)          // 'hello-world-example'
    const camel = toCamelCase(slug)      // 'helloWorldExample'
    // camel should contain all three words without separators
    expect(camel).toMatch(/hello/i)
    expect(camel).toMatch(/world/i)
    expect(camel).toMatch(/example/i)
  })

  it('toSnakeCase lowercases input and replaces spaces with underscores', () => {
    // toSnakeCase lowercases and replaces spaces — does not split camelCase
    expect(toSnakeCase('Hello World Foo')).toBe('hello_world_foo')
    expect(toSnakeCase('UPPER CASE')).toBe('upper_case')
    expect(toSnakeCase('already_snake')).toBe('already_snake')
  })
})

// ---------------------------------------------------------------------------
// Number + Format cross-module
// ---------------------------------------------------------------------------

describe('cross-module: number + format', () => {
  it('formatNumber and formatCurrency produce non-empty strings for the same value', () => {
    const value = 1_234_567
    const num = formatNumber(value)
    const cur = formatCurrency(value, 'KRW')
    expect(num.length).toBeGreaterThan(0)
    expect(cur.length).toBeGreaterThan(0)
  })

  it('formatBytes and formatPercent both handle zero without throwing', () => {
    expect(() => formatBytes(0)).not.toThrow()
    expect(() => formatPercent(0)).not.toThrow()
  })

  it('numberToKorean result is a Korean string', () => {
    const korean = numberToKorean(12345)
    expect(typeof korean).toBe('string')
    expect(korean.length).toBeGreaterThan(0)
    // Korean number words are in Korean script
    expect(isKorean(korean.replace(/\s/g, ''))).toBe(true)
  })
})

// ---------------------------------------------------------------------------
// Korean + String cross-module
// ---------------------------------------------------------------------------

describe('cross-module: korean + string', () => {
  it('withEunNeun appends correct particle for given noun', () => {
    const book = '책'   // ends with consonant → 은
    const result = withEunNeun(book)
    expect(result).toMatch(/은$/)
  })

  it('chosungSearch works after truncate does not cut the chosung target', () => {
    const longTitle = '삼성전자주식회사 공식 홈페이지'
    const truncated = truncate(longTitle, 20)
    // '삼성전자' should still be in the truncated string
    expect(chosungSearch(truncated, 'ㅅㅅ')).toBe(true)
  })
})

// ---------------------------------------------------------------------------
// Array + String cross-module
// ---------------------------------------------------------------------------

describe('cross-module: array + string', () => {
  const products = [
    { category: 'food', name: '사과' },
    { category: 'food', name: '바나나' },
    { category: 'drink', name: '물' },
    { category: 'drink', name: '주스' },
    { category: 'snack', name: '과자' },
  ]

  it('groupBy then slugify category keys produces valid slugs', () => {
    const grouped = groupBy(products, 'category')
    const keys = Object.keys(grouped)
    keys.forEach((key) => {
      const slug = slugify(key)
      expect(slug).toMatch(/^[a-z0-9-]+$/)
    })
  })

  it('sortBy name then truncate produces consistently shortened strings', () => {
    const sorted = sortBy(products, 'name')
    const truncated = sorted.map((p) => truncate(p.name, 3))
    truncated.forEach((t) => {
      expect(t.length).toBeLessThanOrEqual(6) // Korean chars may add ellipsis
    })
  })

  it('unique removes duplicate strings across module boundaries', () => {
    const tags = ['food', 'drink', 'food', 'snack', 'drink']
    const deduped = unique(tags)
    expect(deduped).toHaveLength(3)
  })

  it('chunk splits a slug list into pages of size 2', () => {
    const slugs = products.map((p) => slugify(p.name))
    const pages = chunk(slugs, 2)
    expect(pages[0]).toHaveLength(2)
    expect(pages.flat()).toHaveLength(slugs.length)
  })
})

// ---------------------------------------------------------------------------
// Validation + Korean cross-module
// ---------------------------------------------------------------------------

describe('cross-module: validation + korean', () => {
  it('isEmail returns false for Korean-only strings', () => {
    expect(isEmail('안녕하세요@')).toBe(false)
    expect(isEmail('사용자@도메인.한국')).toBe(false)
  })

  it('isPhone handles formatted and raw Korean mobile numbers', () => {
    expect(isPhone('010-1234-5678')).toBe(true)
    expect(isPhone('01012345678')).toBe(true)
  })
})
