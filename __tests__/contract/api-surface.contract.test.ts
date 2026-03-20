/**
 * Contract tests — API surface stability.
 * Verify all public exports exist, are callable functions/values,
 * and have the expected arity (parameter count).
 * These tests act as a regression guard: if a refactor accidentally
 * removes or renames a public export, this suite fails immediately.
 */

import * as indexModule from '../../src/index'
import * as stringModule from '../../src/string'
import * as arrayModule from '../../src/array'
import * as objectModule from '../../src/object'
import * as asyncModule from '../../src/async'
import * as dateModule from '../../src/date'
import * as koreanModule from '../../src/korean'
import * as numberModule from '../../src/number'
import * as validationModule from '../../src/validation'
import * as formatModule from '../../src/format'

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function expectFn(mod: Record<string, unknown>, name: string, arity?: number) {
  expect(typeof mod[name]).toBe('function')
  if (arity !== undefined) {
    expect((mod[name] as Function).length).toBe(arity)
  }
}

// ---------------------------------------------------------------------------
// src/string — public export shape
// ---------------------------------------------------------------------------

describe('Contract: src/string exports', () => {
  const exports = [
    'parseTag', 'toCamelCase', 'toSnakeCase', 'toTitleCase',
    'toText', 'toHtml', 'clearTag', 'replaceBetween', 'extractNumbers',
    'getFileExtension', 'maskString', 'objectToQueryString', 'truncate',
    'slugify', 'camelToKebab', 'kebabToCamel', 'maskEmail', 'maskPhone',
  ]

  it.each(exports)('%s is exported as a function', (name) => {
    expectFn(stringModule as unknown as Record<string, unknown>, name)
  })

  it('truncate has arity 2 (str, maxLength — suffix has default)', () => {
    expectFn(stringModule as unknown as Record<string, unknown>, 'truncate', 2)
  })

  it('maskString has arity 1 (str — remaining params have defaults)', () => {
    expectFn(stringModule as unknown as Record<string, unknown>, 'maskString', 1)
  })
})

// ---------------------------------------------------------------------------
// src/array — public export shape
// ---------------------------------------------------------------------------

describe('Contract: src/array exports', () => {
  const exports = [
    'equalArrays', 'groupBy', 'sortBy', 'chunk', 'unique', 'shuffle', 'flatten',
  ]

  it.each(exports)('%s is exported as a function', (name) => {
    expectFn(arrayModule as unknown as Record<string, unknown>, name)
  })

  it('chunk has arity 2 (array, size)', () => {
    expectFn(arrayModule as unknown as Record<string, unknown>, 'chunk', 2)
  })
})

// ---------------------------------------------------------------------------
// src/object — public export shape
// ---------------------------------------------------------------------------

describe('Contract: src/object exports', () => {
  const exports = [
    'clone', 'getByPath', 'setByPath', 'deepMerge', 'pick', 'omit', 'diff', 'isEmpty',
  ]

  it.each(exports)('%s is exported as a function', (name) => {
    expectFn(objectModule as unknown as Record<string, unknown>, name)
  })
})

// ---------------------------------------------------------------------------
// src/async — public export shape
// ---------------------------------------------------------------------------

describe('Contract: src/async exports', () => {
  const exports = ['retry', 'timeout', 'parallel', 'serial']

  it.each(exports)('%s is exported as a function', (name) => {
    expectFn(asyncModule as unknown as Record<string, unknown>, name)
  })
})

// ---------------------------------------------------------------------------
// src/date — public export shape
// ---------------------------------------------------------------------------

describe('Contract: src/date exports', () => {
  const exports = [
    'getNowDate', 'getKoreanDate', 'formatDate', 'calDDay', 'dateDiff',
    'formatDateAdvanced', 'timeAgo', 'getDaysInMonth', 'isLeapYear',
    'relative', 'isWeekend', 'addDays', 'diffDays',
  ]

  it.each(exports)('%s is exported as a function', (name) => {
    expectFn(dateModule as unknown as Record<string, unknown>, name)
  })
})

// ---------------------------------------------------------------------------
// src/korean — public export shape
// ---------------------------------------------------------------------------

describe('Contract: src/korean exports', () => {
  const exports = [
    'isKorean', 'chosungSearch', 'getChosung',
    'withEunNeun', 'withIGa', 'withEulReul', 'isBusinessNumber',
  ]

  it.each(exports)('%s is exported as a function', (name) => {
    expectFn(koreanModule as unknown as Record<string, unknown>, name)
  })

  it('withEunNeun has arity 1 (word)', () => {
    expectFn(koreanModule as unknown as Record<string, unknown>, 'withEunNeun', 1)
  })

  it('chosungSearch has arity 2 (str, search)', () => {
    expectFn(koreanModule as unknown as Record<string, unknown>, 'chosungSearch', 2)
  })
})

// ---------------------------------------------------------------------------
// src/number — public export shape
// ---------------------------------------------------------------------------

describe('Contract: src/number exports', () => {
  const exports = [
    'parseNumber', 'parseTime', 'formatNumber', 'formatCurrency',
    'formatFileSize', 'numberToKorean', 'parseNumberFromString',
  ]

  it.each(exports)('%s is exported as a function', (name) => {
    expectFn(numberModule as unknown as Record<string, unknown>, name)
  })

  it('formatCurrency has arity 1 (amount — currency has default KRW)', () => {
    expectFn(numberModule as unknown as Record<string, unknown>, 'formatCurrency', 1)
  })
})

// ---------------------------------------------------------------------------
// src/validation — public export shape
// ---------------------------------------------------------------------------

describe('Contract: src/validation exports', () => {
  const exports = [
    'isEmail', 'isPhone', 'isPhoneNumber', 'isUrl', 'isUUID',
    'isBusinessNumber', 'formatPhoneNumber', 'formatBusinessNumber',
  ]

  it.each(exports)('%s is exported as a function', (name) => {
    expectFn(validationModule as unknown as Record<string, unknown>, name)
  })
})

// ---------------------------------------------------------------------------
// src/format — public export shape
// ---------------------------------------------------------------------------

describe('Contract: src/format exports', () => {
  const exports = ['formatBytes', 'formatNumber', 'formatCurrency', 'formatPercent']

  it.each(exports)('%s is exported as a function', (name) => {
    expectFn(formatModule as unknown as Record<string, unknown>, name)
  })

  it('formatBytes has arity 2 (bytes, precision)', () => {
    expectFn(formatModule as unknown as Record<string, unknown>, 'formatBytes', 2)
  })

  it('formatPercent has arity 1 (value — decimals and isDecimal have defaults)', () => {
    expectFn(formatModule as unknown as Record<string, unknown>, 'formatPercent', 1)
  })
})

// ---------------------------------------------------------------------------
// src/index — barrel exports cover all modules
// ---------------------------------------------------------------------------

describe('Contract: src/index barrel exports', () => {
  it('re-exports string functions', () => {
    expect(typeof indexModule.truncate).toBe('function')
    expect(typeof indexModule.slugify).toBe('function')
    expect(typeof indexModule.maskEmail).toBe('function')
    expect(typeof indexModule.maskPhone).toBe('function')
    expect(typeof indexModule.toCamelCase).toBe('function')
    expect(typeof indexModule.toSnakeCase).toBe('function')
  })

  it('re-exports number functions', () => {
    expect(typeof indexModule.formatNumber).toBe('function')
    expect(typeof indexModule.formatCurrency).toBe('function')
    expect(typeof indexModule.numberToKorean).toBe('function')
    expect(typeof indexModule.parseNumber).toBe('function')
  })

  it('re-exports korean functions', () => {
    expect(typeof indexModule.isKorean).toBe('function')
    expect(typeof indexModule.withEunNeun).toBe('function')
    expect(typeof indexModule.withIGa).toBe('function')
    expect(typeof indexModule.withEulReul).toBe('function')
    expect(typeof indexModule.chosungSearch).toBe('function')
    expect(typeof indexModule.getChosung).toBe('function')
  })

  it('re-exports validation functions', () => {
    expect(typeof indexModule.isEmail).toBe('function')
    expect(typeof indexModule.isPhone).toBe('function')
    expect(typeof indexModule.isUrl).toBe('function')
    expect(typeof indexModule.isUUID).toBe('function')
    expect(typeof indexModule.formatPhoneNumber).toBe('function')
    expect(typeof indexModule.formatBusinessNumber).toBe('function')
  })

  it('re-exports array functions', () => {
    expect(typeof indexModule.groupBy).toBe('function')
    expect(typeof indexModule.sortBy).toBe('function')
    expect(typeof indexModule.chunk).toBe('function')
    expect(typeof indexModule.unique).toBe('function')
    expect(typeof indexModule.flatten).toBe('function')
    expect(typeof indexModule.shuffle).toBe('function')
  })

  it('re-exports format functions (formatBytes, formatPercent)', () => {
    expect(typeof indexModule.formatBytes).toBe('function')
    expect(typeof indexModule.formatPercent).toBe('function')
  })

  it('default export is an object with all v0.x functions', () => {
    const util = indexModule.default
    expect(typeof util).toBe('object')
    expect(util).not.toBeNull()

    const expectedKeys = [
      // string
      'parseTag', 'toCamelCase', 'toSnakeCase', 'toTitleCase', 'toText', 'toHtml',
      'clearTag', 'replaceBetween', 'extractNumbers', 'getFileExtension', 'maskString',
      'objectToQueryString', 'truncate', 'slugify', 'camelToKebab', 'kebabToCamel',
      'maskEmail', 'maskPhone',
      // array
      'equalArrays', 'groupBy', 'sortBy', 'chunk', 'unique', 'shuffle', 'flatten',
      // object
      'clone', 'getByPath', 'setByPath', 'deepMerge', 'pick', 'omit', 'diff', 'isEmpty',
      // async
      'retry', 'timeout', 'parallel', 'serial',
      // date
      'getNowDate', 'getKoreanDate', 'formatDate', 'calDDay', 'dateDiff',
      'formatDateAdvanced', 'timeAgo', 'getDaysInMonth', 'isLeapYear',
      'relative', 'isWeekend', 'addDays', 'diffDays',
      // korean
      'isKorean', 'chosungSearch', 'getChosung', 'withEunNeun', 'withIGa', 'withEulReul',
      // number
      'parseNumber', 'parseTime', 'formatNumber', 'formatCurrency', 'formatFileSize',
      'numberToKorean', 'parseNumberFromString',
      // validation
      'isBusinessNumber', 'isEmail', 'isPhoneNumber', 'isPhone', 'isUrl', 'isUUID',
      'formatPhoneNumber', 'formatBusinessNumber',
      // format
      'formatBytes', 'formatPercent',
    ]

    for (const key of expectedKeys) {
      expect(typeof (util as Record<string, unknown>)[key]).toBe('function')
    }
  })

  it('default export functions produce correct types (smoke)', () => {
    const util = indexModule.default as Record<string, Function>
    expect(typeof util.truncate('hi', 10)).toBe('string')
    expect(typeof util.formatNumber(1000)).toBe('string')
    expect(typeof util.isKorean('한')).toBe('boolean')
    expect(typeof util.chunk([1, 2, 3], 2)).toBe('object')
  })
})

// ---------------------------------------------------------------------------
// Return-type contracts — functions return expected JS types
// ---------------------------------------------------------------------------

describe('Contract: return types', () => {
  it('string functions return strings', () => {
    expect(typeof stringModule.truncate('hello world', 5)).toBe('string')
    expect(typeof stringModule.slugify('Hello World')).toBe('string')
    expect(typeof stringModule.toCamelCase('foo_bar')).toBe('string')
    expect(typeof stringModule.toSnakeCase('FooBar')).toBe('string')
    expect(typeof stringModule.maskEmail('a@b.com')).toBe('string')
    expect(typeof stringModule.maskPhone('01012345678')).toBe('string')
    expect(typeof stringModule.extractNumbers('abc123')).toBe('string')
  })

  it('array functions return arrays', () => {
    expect(Array.isArray(arrayModule.chunk([1, 2, 3], 2))).toBe(true)
    expect(Array.isArray(arrayModule.unique([1, 1, 2]))).toBe(true)
    expect(Array.isArray(arrayModule.flatten([[1], [2]]))).toBe(true)
    expect(Array.isArray(arrayModule.shuffle([1, 2, 3]))).toBe(true)
  })

  it('groupBy returns a plain object (Record)', () => {
    const result = arrayModule.groupBy([{ k: 'a' }, { k: 'b' }], 'k')
    expect(typeof result).toBe('object')
    expect(Array.isArray(result)).toBe(false)
  })

  it('korean particle functions return strings', () => {
    expect(typeof koreanModule.withEunNeun('밥')).toBe('string')
    expect(typeof koreanModule.withIGa('밥')).toBe('string')
    expect(typeof koreanModule.withEulReul('밥')).toBe('string')
    expect(typeof koreanModule.getChosung('가')).toBe('string')
  })

  it('korean boolean functions return booleans', () => {
    expect(typeof koreanModule.isKorean('한')).toBe('boolean')
    expect(typeof koreanModule.chosungSearch('삼성', 'ㅅ')).toBe('boolean')
    expect(typeof koreanModule.isBusinessNumber('1234567890')).toBe('boolean')
  })

  it('format functions return strings', () => {
    expect(typeof formatModule.formatBytes(1024)).toBe('string')
    expect(typeof formatModule.formatPercent(50)).toBe('string')
    expect(typeof formatModule.formatNumber(1000)).toBe('string')
    expect(typeof formatModule.formatCurrency(5000)).toBe('string')
  })

  it('validation functions return booleans', () => {
    expect(typeof validationModule.isEmail('a@b.com')).toBe('boolean')
    expect(typeof validationModule.isPhone('010-1234-5678')).toBe('boolean')
    expect(typeof validationModule.isUrl('https://example.com')).toBe('boolean')
    expect(typeof validationModule.isUUID('550e8400-e29b-41d4-a716-446655440000')).toBe('boolean')
    expect(typeof validationModule.isBusinessNumber('1234567890')).toBe('boolean')
  })

  it('number functions return expected types', () => {
    expect(typeof numberModule.formatNumber(1000)).toBe('string')
    expect(typeof numberModule.formatCurrency(1000)).toBe('string')
    expect(typeof numberModule.formatFileSize(1024)).toBe('string')
    expect(typeof numberModule.numberToKorean(1)).toBe('string')
    expect(typeof numberModule.parseNumber('42', 0)).toBe('number')
    expect(typeof numberModule.parseNumberFromString('$1,000')).toBe('number')
  })
})
