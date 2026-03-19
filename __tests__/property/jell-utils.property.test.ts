/**
 * Property-based tests for jell-utils
 * Uses fast-check to test functions against arbitrary inputs
 */
import * as fc from 'fast-check'
import {
  formatNumber,
  parseNumberFromString,
  truncate,
  toCamelCase,
  toSnakeCase,
  slugify,
  equalArrays,
  groupBy,
  sortBy,
  maskString,
  extractNumbers,
} from '../../dist'

// ─── Number Properties ────────────────────────────────────────────────────────

describe('formatNumber - property tests', () => {
  test('formatNumber always returns a non-empty string for any finite number', () => {
    fc.assert(
      fc.property(fc.float({ noNaN: true, noDefaultInfinity: true }), (n) => {
        const result = formatNumber(n)
        expect(typeof result).toBe('string')
        expect(result.length).toBeGreaterThan(0)
      })
    )
  })

  test('formatNumber preserves sign: negative input produces string containing "-"', () => {
    fc.assert(
      fc.property(fc.integer({ min: -1_000_000, max: -1 }), (n) => {
        expect(formatNumber(n)).toContain('-')
      })
    )
  })

  test('parseNumberFromString(formatNumber(n)) roundtrips for integers', () => {
    fc.assert(
      fc.property(fc.integer({ min: -999_999, max: 999_999 }), (n) => {
        const formatted = formatNumber(n)
        const parsed = parseNumberFromString(formatted)
        expect(parsed).toBe(n)
      })
    )
  })
})

// ─── String Properties ────────────────────────────────────────────────────────

describe('truncate - property tests', () => {
  test('truncated string is never longer than maxLength', () => {
    fc.assert(
      fc.property(
        fc.string(),
        fc.integer({ min: 4, max: 200 }),
        (str, max) => {
          const result = truncate(str, max)
          expect(result.length).toBeLessThanOrEqual(max)
        }
      )
    )
  })

  test('truncate returns original string when maxLength >= string length', () => {
    fc.assert(
      fc.property(fc.string({ maxLength: 50 }), (str) => {
        const result = truncate(str, str.length + 10)
        expect(result).toBe(str)
      })
    )
  })
})

describe('toCamelCase - property tests', () => {
  test('toCamelCase output contains no underscores or spaces', () => {
    fc.assert(
      fc.property(fc.string({ minLength: 1, maxLength: 50 }), (str) => {
        const result = toCamelCase(str)
        expect(result).not.toMatch(/[_ ]/)
      })
    )
  })

  test('toCamelCase is idempotent for already-camel strings (no underscores/spaces)', () => {
    fc.assert(
      fc.property(
        fc.stringMatching(/^[a-zA-Z][a-zA-Z0-9]*$/),
        (str) => {
          const once = toCamelCase(str)
          const twice = toCamelCase(once)
          expect(twice).toBe(once)
        }
      )
    )
  })
})

describe('toSnakeCase - property tests', () => {
  test('toSnakeCase output is always lowercase', () => {
    fc.assert(
      fc.property(fc.string({ minLength: 1, maxLength: 50 }), (str) => {
        const result = toSnakeCase(str)
        expect(result).toBe(result.toLowerCase())
      })
    )
  })

  test('toSnakeCase contains no spaces', () => {
    fc.assert(
      fc.property(fc.string({ minLength: 0, maxLength: 50 }), (str) => {
        expect(toSnakeCase(str)).not.toContain(' ')
      })
    )
  })
})

describe('slugify - property tests', () => {
  test('slugify output is always lowercase', () => {
    fc.assert(
      fc.property(fc.string({ minLength: 1, maxLength: 80 }), (str) => {
        const result = slugify(str)
        expect(result).toBe(result.toLowerCase())
      })
    )
  })

  test('slugify output contains no spaces', () => {
    fc.assert(
      fc.property(fc.string({ maxLength: 80 }), (str) => {
        expect(slugify(str)).not.toContain(' ')
      })
    )
  })
})

describe('maskString - property tests', () => {
  test('maskString output has same length as input', () => {
    fc.assert(
      fc.property(
        fc.string({ minLength: 1, maxLength: 50 }),
        fc.integer({ min: 0, max: 5 }),
        fc.integer({ min: 0, max: 5 }),
        (str, start, end) => {
          const result = maskString(str, start, end)
          expect(result.length).toBe(str.length)
        }
      )
    )
  })
})

// ─── Array Properties ─────────────────────────────────────────────────────────

describe('equalArrays - property tests', () => {
  test('equalArrays is reflexive: a equals itself', () => {
    fc.assert(
      fc.property(fc.array(fc.integer()), (arr) => {
        expect(equalArrays(arr, arr)).toBe(true)
      })
    )
  })

  test('equalArrays is symmetric', () => {
    fc.assert(
      fc.property(fc.array(fc.integer()), fc.array(fc.integer()), (a, b) => {
        expect(equalArrays(a, b)).toBe(equalArrays(b, a))
      })
    )
  })

  test('arrays with different lengths are never equal', () => {
    fc.assert(
      fc.property(
        fc.array(fc.integer(), { minLength: 1 }),
        (arr) => {
          const shorter = arr.slice(0, arr.length - 1)
          expect(equalArrays(arr, shorter)).toBe(false)
        }
      )
    )
  })
})

describe('sortBy - property tests', () => {
  test('sortBy preserves array length', () => {
    fc.assert(
      fc.property(
        fc.array(
          fc.record({ id: fc.integer(), value: fc.string() }),
          { maxLength: 20 }
        ),
        (arr) => {
          const sorted = sortBy(arr, 'id', 'asc')
          expect(sorted.length).toBe(arr.length)
        }
      )
    )
  })

  test('sortBy asc produces non-decreasing order', () => {
    fc.assert(
      fc.property(
        fc.array(fc.record({ n: fc.integer() }), { maxLength: 20 }),
        (arr) => {
          const sorted = sortBy(arr, 'n', 'asc')
          for (let i = 1; i < sorted.length; i++) {
            expect(sorted[i].n).toBeGreaterThanOrEqual(sorted[i - 1].n)
          }
        }
      )
    )
  })

  test('sortBy does not mutate original array', () => {
    fc.assert(
      fc.property(
        fc.array(fc.record({ n: fc.integer() }), { minLength: 1, maxLength: 10 }),
        (arr) => {
          const copy = [...arr]
          sortBy(arr, 'n', 'asc')
          expect(arr).toEqual(copy)
        }
      )
    )
  })
})

describe('extractNumbers - property tests', () => {
  test('extractNumbers returns only numeric characters', () => {
    fc.assert(
      fc.property(fc.string(), (str) => {
        const result = extractNumbers(str)
        expect(result).toMatch(/^[0-9]*$/)
      })
    )
  })

  test('extractNumbers on digit-only string returns same string', () => {
    fc.assert(
      fc.property(fc.stringMatching(/^[0-9]+$/), (str) => {
        expect(extractNumbers(str)).toBe(str)
      })
    )
  })
})
