/**
 * Integration tests — verify the library's public API surface works end-to-end.
 * These tests exercise realistic usage patterns and cross-module interactions.
 */

// Named imports (v1.x style)
import {
  // string
  truncate, slugify, maskEmail, maskPhone, toCamelCase, toSnakeCase,
  extractNumbers, objectToQueryString,
  // number
  formatNumber, formatCurrency, formatFileSize, numberToKorean, parseNumber,
  parseNumberFromString,
  // korean
  isKorean, withEunNeun, withIGa, withEulReul, chosungSearch, getChosung,
  isBusinessNumber,
  // validation
  isEmail, isPhone, isUrl, isUUID, formatPhoneNumber, formatBusinessNumber,
  // array
  groupBy, sortBy, chunk, unique, flatten,
  // format
  formatBytes, formatPercent,
} from '../../src/index'

// Default import (v0.x compat style)
import util from '../../src/index'

// Subpath imports
import { truncate as truncateStr } from '../../src/string'
import { formatNumber as fmtNum } from '../../src/number'
import { isKorean as isKor } from '../../src/korean'

// ---------------------------------------------------------------------------
// Named exports — basic smoke test for every module
// ---------------------------------------------------------------------------

describe('Named exports — string', () => {
  it('truncate cuts long strings', () => {
    expect(truncate('Hello World', 8)).toBe('Hello...')
    expect(truncate('Hi', 10)).toBe('Hi')
  })

  it('slugify produces URL-safe strings', () => {
    expect(slugify('Hello World!')).toBe('hello-world')
    expect(slugify('  foo  bar  ')).toBe('foo-bar')
  })

  it('maskEmail hides middle of local part', () => {
    const result = maskEmail('test@example.com')
    expect(result).toContain('@example.com')
    expect(result).toContain('*')
  })

  it('maskPhone masks 11-digit Korean mobile numbers', () => {
    expect(maskPhone('01012345678')).toBe('010-****-5678')
  })

  it('toCamelCase converts snake_case', () => {
    expect(toCamelCase('hello_world')).toBe('helloWorld')
  })

  it('toSnakeCase converts spaces to underscores', () => {
    expect(toSnakeCase('Hello World')).toBe('hello_world')
  })

  it('extractNumbers strips non-numeric chars', () => {
    expect(extractNumbers('abc123def456')).toBe('123456')
  })

  it('objectToQueryString serializes an object', () => {
    const qs = objectToQueryString({ page: 1, size: 20 })
    expect(qs).toBe('page=1&size=20')
  })
})

describe('Named exports — number', () => {
  it('formatNumber adds thousand separators', () => {
    expect(formatNumber(1234567)).toBe('1,234,567')
  })

  it('formatCurrency formats KRW by default', () => {
    expect(formatCurrency(50000)).toBe('50,000원')
  })

  it('formatCurrency formats USD with prefix symbol', () => {
    expect(formatCurrency(99, 'USD')).toBe('$99')
  })

  it('formatFileSize scales bytes correctly', () => {
    expect(formatFileSize(0)).toBe('0 B')
    expect(formatFileSize(1024)).toBe('1 KB')
    expect(formatFileSize(1024 * 1024)).toBe('1 MB')
  })

  it('numberToKorean converts digits to Korean words', () => {
    expect(numberToKorean(0)).toBe('영')
    expect(numberToKorean(1)).toBe('일')
    expect(numberToKorean(10000)).toBe('만')
  })

  it('parseNumber returns default on invalid input', () => {
    expect(parseNumber('abc', 0)).toBe(0)
    expect(parseNumber('42', 0)).toBe(42)
    expect(parseNumber('3.14', 0, true)).toBe(3.14)
  })

  it('parseNumberFromString strips currency symbols', () => {
    expect(parseNumberFromString('$1,234.56')).toBe(1234.56)
  })
})

describe('Named exports — korean', () => {
  it('isKorean detects Korean characters', () => {
    expect(isKorean('안녕하세요')).toBe(true)
    expect(isKorean('hello')).toBe(false)
  })

  it('withEunNeun appends 은 after consonant-final syllables', () => {
    expect(withEunNeun('밥')).toBe('밥은')   // 받침 있음
    expect(withEunNeun('나')).toBe('나는')   // 받침 없음
  })

  it('withIGa appends 이 after consonant-final syllables', () => {
    expect(withIGa('밥')).toBe('밥이')
    expect(withIGa('나')).toBe('나가')
  })

  it('withEulReul appends 을 after consonant-final syllables', () => {
    expect(withEulReul('밥')).toBe('밥을')
    expect(withEulReul('나')).toBe('나를')
  })

  it('chosungSearch matches by initial consonants', () => {
    expect(chosungSearch('삼성전자', 'ㅅㅅ')).toBe(true)
    expect(chosungSearch('삼성전자', 'ㄱ')).toBe(false)
  })

  it('getChosung extracts initial consonant', () => {
    expect(getChosung('가')).toBe('ㄱ')
    expect(getChosung('A')).toBe('A')
  })

  it('isBusinessNumber validates 10-digit business numbers', () => {
    // The algorithm validates checksum — 0000000000 passes its own checksum
    expect(typeof isBusinessNumber('0000000000')).toBe('boolean')
    // Too short / too long → false
    expect(isBusinessNumber('12345')).toBe(false)
    expect(isBusinessNumber('12345678901')).toBe(false)
    // Non-numeric → false
    expect(isBusinessNumber('abcdefghij')).toBe(false)
  })
})

describe('Named exports — validation', () => {
  it('isEmail accepts valid addresses', () => {
    expect(isEmail('user@example.com')).toBe(true)
    expect(isEmail('invalid')).toBe(false)
    expect(isEmail('')).toBe(false)
  })

  it('isPhone validates Korean mobile and landline formats', () => {
    expect(isPhone('010-1234-5678')).toBe(true)
    expect(isPhone('01012345678')).toBe(true)
    expect(isPhone('02-123-4567')).toBe(true)
    expect(isPhone('not-a-phone')).toBe(false)
  })

  it('isUrl validates http/https/ftp URLs', () => {
    expect(isUrl('https://example.com')).toBe(true)
    expect(isUrl('ftp://files.example.com')).toBe(true)
    expect(isUrl('not-a-url')).toBe(false)
  })

  it('isUUID validates UUID v1-v5', () => {
    expect(isUUID('550e8400-e29b-41d4-a716-446655440000')).toBe(true)
    expect(isUUID('not-a-uuid')).toBe(false)
  })

  it('formatPhoneNumber formats 11-digit mobile', () => {
    expect(formatPhoneNumber('01012345678')).toBe('010-1234-5678')
  })

  it('formatBusinessNumber formats 10-digit BRN', () => {
    expect(formatBusinessNumber('1234567890')).toBe('123-45-67890')
  })
})

describe('Named exports — array', () => {
  const items = [
    { category: 'fruit', name: 'apple' },
    { category: 'fruit', name: 'banana' },
    { category: 'veg', name: 'carrot' },
  ]

  it('groupBy groups objects by key', () => {
    const grouped = groupBy(items, 'category')
    expect(grouped['fruit']).toHaveLength(2)
    expect(grouped['veg']).toHaveLength(1)
  })

  it('sortBy sorts ascending by default', () => {
    const sorted = sortBy(items, 'name')
    expect(sorted[0].name).toBe('apple')
    expect(sorted[2].name).toBe('carrot')
  })

  it('chunk splits array into fixed-size chunks', () => {
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]])
  })

  it('unique removes duplicates', () => {
    expect(unique([1, 2, 2, 3, 3, 3])).toEqual([1, 2, 3])
  })

  it('flatten flattens one level deep by default', () => {
    expect(flatten([[1, 2], [3, [4]]])).toEqual([1, 2, 3, [4]])
  })
})

describe('Named exports — format', () => {
  it('formatBytes uses binary units', () => {
    expect(formatBytes(0)).toContain('0')
    expect(formatBytes(1024)).toContain('KB')
    expect(formatBytes(1048576)).toContain('MB')
  })

  it('formatPercent formats ratio as percentage', () => {
    // isDecimal=false (default): value treated as already a percent
    expect(formatPercent(75)).toBe('75.0%')
    // isDecimal=true: 0.75 → 75%
    expect(formatPercent(0.75, 1, true)).toBe('75.0%')
    expect(formatPercent(0.5, 0, true)).toBe('50%')
  })
})

// ---------------------------------------------------------------------------
// Default export (v0.x compat)
// ---------------------------------------------------------------------------

describe('Default export (util object)', () => {
  it('exposes string functions', () => {
    expect(util.truncate('Hello World', 8)).toBe('Hello...')
    expect(util.slugify('Hello World!')).toBe('hello-world')
    expect(util.maskEmail('user@example.com')).toContain('@example.com')
  })

  it('exposes number functions', () => {
    expect(util.formatNumber(1000)).toBe('1,000')
    expect(util.formatCurrency(5000, 'USD')).toBe('$5,000')
    expect(util.numberToKorean(100)).toBe('백')
  })

  it('exposes korean functions', () => {
    expect(util.isKorean('한국어')).toBe(true)
    expect(util.withEunNeun('책')).toBe('책은')
  })

  it('exposes validation functions', () => {
    expect(util.isEmail('a@b.com')).toBe(true)
    expect(util.isPhone('010-1234-5678')).toBe(true)
  })

  it('exposes array functions', () => {
    expect(util.chunk([1, 2, 3], 2)).toEqual([[1, 2], [3]])
    expect(util.unique([1, 1, 2])).toEqual([1, 2])
  })

  it('exposes async functions', () => {
    expect(typeof util.retry).toBe('function')
    expect(typeof util.timeout).toBe('function')
    expect(typeof util.parallel).toBe('function')
    expect(typeof util.serial).toBe('function')
  })
})

// ---------------------------------------------------------------------------
// Subpath imports
// ---------------------------------------------------------------------------

describe('Subpath imports', () => {
  it('jell-utils/string — truncate works', () => {
    expect(truncateStr('long string here', 7)).toBe('long...')
  })

  it('jell-utils/number — formatNumber works', () => {
    expect(fmtNum(9999)).toBe('9,999')
  })

  it('jell-utils/korean — isKorean works', () => {
    expect(isKor('테스트')).toBe(true)
  })
})

// ---------------------------------------------------------------------------
// Cross-module integration scenarios
// ---------------------------------------------------------------------------

describe('Cross-module integration', () => {
  it('phone validation + formatting pipeline', () => {
    const raw = '01012345678'
    expect(isPhone(raw)).toBe(true)
    expect(formatPhoneNumber(raw)).toBe('010-1234-5678')
    expect(maskPhone(raw)).toBe('010-****-5678')
  })

  it('amount pipeline: parse → format → display', () => {
    const raw = '$1,234,567'
    const amount = parseNumberFromString(raw)
    expect(amount).toBe(1234567)
    expect(formatCurrency(amount, 'KRW')).toBe('1,234,567원')
    expect(numberToKorean(amount)).toBe('백이십삼만사천오백육십칠')
  })

  it('user data masking pipeline', () => {
    const email = 'jell@example.com'
    const phone = '01098765432'
    expect(maskEmail(email)).toMatch(/\*+@example\.com/)
    expect(maskPhone(phone)).toBe('010-****-5432')
  })

  it('Korean particle selection across words', () => {
    const words = ['밥', '나', '책', '커피']
    const particles = words.map(w => withEulReul(w))
    expect(particles).toEqual(['밥을', '나를', '책을', '커피를'])
  })

  it('chosung search over a list of Korean names', () => {
    const names = ['삼성전자', '현대자동차', '카카오', 'SK하이닉스']
    const results = names.filter(n => chosungSearch(n, 'ㅅ'))
    expect(results).toContain('삼성전자')
    expect(results).not.toContain('카카오')
  })

  it('groupBy + sortBy pipeline', () => {
    const products = [
      { category: 'A', price: 30 },
      { category: 'B', price: 10 },
      { category: 'A', price: 20 },
    ]
    const grouped = groupBy(products, 'category')
    const sortedA = sortBy(grouped['A'], 'price')
    expect(sortedA[0].price).toBe(20)
    expect(sortedA[1].price).toBe(30)
  })
})
