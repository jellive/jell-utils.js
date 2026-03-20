/**
 * Integration tests — error handling across modules.
 * Tests invalid inputs, boundary values, and cross-module error propagation.
 */

import { truncate, slugify, maskEmail, maskPhone, toCamelCase, toSnakeCase, extractNumbers, objectToQueryString, maskString, replaceBetween, getFileExtension, camelToKebab, kebabToCamel, toTitleCase, toText, toHtml, parseTag } from '../../src/string'
import { getNowDate, getKoreanDate, formatDate, calDDay, dateDiff, formatDateAdvanced, timeAgo, getDaysInMonth, isLeapYear, isWeekend, addDays, diffDays, relative } from '../../src/date'
import { formatNumber, formatCurrency, formatFileSize, numberToKorean, parseNumber, parseNumberFromString, parseTime } from '../../src/number'
import { isEmail, isPhone, isUrl, isUUID, isBusinessNumber, formatPhoneNumber, formatBusinessNumber } from '../../src/validation'
import { isKorean, withEunNeun, withIGa, withEulReul, chosungSearch, getChosung } from '../../src/korean'
import { groupBy, sortBy, chunk, unique, flatten, equalArrays, shuffle } from '../../src/array'
import { formatBytes, formatPercent } from '../../src/format'
import { clone, getByPath, setByPath, deepMerge, pick, omit, diff, isEmpty } from '../../src/object'
import { retry, timeout, parallel, serial } from '../../src/async'

// ---------------------------------------------------------------------------
// String module — invalid inputs & boundary values
// ---------------------------------------------------------------------------

describe('error-handling: string module', () => {
  describe('truncate', () => {
    it('returns empty string for non-string input', () => {
      expect(truncate(null as unknown as string, 5)).toBe('')
      expect(truncate(undefined as unknown as string, 5)).toBe('')
      expect(truncate(42 as unknown as string, 5)).toBe('')
    })

    it('does not truncate when length equals maxLength', () => {
      expect(truncate('hello', 5)).toBe('hello')
    })

    it('handles maxLength shorter than suffix length', () => {
      // suffix='...' (3 chars), maxLength=2 → slice(0, -1) + '...'
      const result = truncate('abcdef', 2)
      expect(typeof result).toBe('string')
    })

    it('handles custom suffix', () => {
      // suffix='…' (1 char), maxLength=7 → slice(0, 6) + '…'
      expect(truncate('hello world', 7, '…')).toBe('hello …')
    })

    it('returns the string unchanged when shorter than maxLength', () => {
      expect(truncate('hi', 100)).toBe('hi')
    })
  })

  describe('slugify', () => {
    it('returns empty string for non-string', () => {
      expect(slugify(null as unknown as string)).toBe('')
    })

    it('handles strings with only special characters', () => {
      expect(slugify('!@#$%^')).toBe('')
    })

    it('handles leading/trailing hyphens after cleaning', () => {
      expect(slugify('--hello--')).toBe('hello')
    })

    it('handles consecutive spaces', () => {
      expect(slugify('a   b')).toBe('a-b')
    })

    it('handles unicode non-ascii letters', () => {
      // Non-word chars are removed, result may be empty or partial
      const result = slugify('한글 test')
      expect(typeof result).toBe('string')
    })
  })

  describe('maskEmail', () => {
    it('returns empty string for non-string', () => {
      expect(maskEmail(null as unknown as string)).toBe('')
    })

    it('returns input unchanged when no @ sign', () => {
      expect(maskEmail('notanemail')).toBe('notanemail')
    })

    it('masks very short local parts (1 char)', () => {
      const result = maskEmail('a@b.com')
      expect(result).toContain('@b.com')
    })

    it('masks very short local parts (2 chars)', () => {
      const result = maskEmail('ab@example.com')
      expect(result).toContain('@example.com')
      expect(result).toContain('*')
    })
  })

  describe('maskPhone', () => {
    it('returns empty string for non-string', () => {
      expect(maskPhone(null as unknown as string)).toBe('')
    })

    it('returns input unchanged for unrecognized digit counts', () => {
      expect(maskPhone('12345')).toBe('12345')
    })

    it('masks 10-digit numbers with 3-***-format', () => {
      const result = maskPhone('0101234567')
      expect(result).toContain('***')
    })
  })

  describe('maskString', () => {
    it('returns input when too short to mask', () => {
      expect(maskString('ab', 1, 1)).toBe('ab')
    })

    it('uses custom mask character', () => {
      expect(maskString('1234567890', 3, 3, '#')).toBe('123####890')
    })
  })

  describe('replaceBetween', () => {
    it('replaces middle of string correctly', () => {
      expect(replaceBetween('hello world', 'X', 5, 6)).toBe('helloXworld')
    })

    it('handles start index at 0', () => {
      expect(replaceBetween('abcdef', 'ZZZ', 0, 3)).toBe('ZZZdef')
    })
  })

  describe('getFileExtension', () => {
    it('returns empty string for no extension', () => {
      expect(getFileExtension('filename')).toBe('')
    })

    it('returns lowercase extension', () => {
      expect(getFileExtension('photo.JPG')).toBe('jpg')
    })

    it('handles multiple dots', () => {
      expect(getFileExtension('archive.tar.gz')).toBe('gz')
    })
  })

  describe('camelToKebab / kebabToCamel', () => {
    it('camelToKebab returns empty string for non-string', () => {
      expect(camelToKebab(null as unknown as string)).toBe('')
    })

    it('kebabToCamel returns empty string for non-string', () => {
      expect(kebabToCamel(null as unknown as string)).toBe('')
    })

    it('camelToKebab handles already-lowercase', () => {
      expect(camelToKebab('helloworld')).toBe('helloworld')
    })

    it('kebabToCamel handles no hyphens', () => {
      expect(kebabToCamel('helloworld')).toBe('helloworld')
    })

    it('round-trips correctly', () => {
      const kebab = camelToKebab('helloWorldFoo')
      expect(kebabToCamel(kebab)).toBe('helloWorldFoo')
    })
  })

  describe('toTitleCase', () => {
    it('returns empty string for non-string', () => {
      expect(toTitleCase(null as unknown as string)).toBe('')
    })

    it('converts camelCase with word splits', () => {
      expect(toTitleCase('helloWorld')).toBe('Hello World')
    })

    it('converts snake_case', () => {
      expect(toTitleCase('hello_world')).toBe('Hello World')
    })
  })

  describe('toText / toHtml', () => {
    it('toText converts <br> to newline', () => {
      expect(toText('line1<br>line2')).toBe('line1\nline2')
    })

    it('toHtml converts newline to <br>', () => {
      expect(toHtml('line1\nline2')).toBe('line1<br>line2')
    })
  })

  describe('parseTag', () => {
    it('converts HTML entities to characters', () => {
      expect(parseTag('&lt;b&gt;bold&lt;/b&gt;')).toBe('<b>bold</b>')
    })

    it('handles strings with no entities', () => {
      expect(parseTag('hello')).toBe('hello')
    })
  })

  describe('extractNumbers', () => {
    it('returns empty string for no digits', () => {
      expect(extractNumbers('abc')).toBe('')
    })

    it('handles mixed content', () => {
      expect(extractNumbers('a1b2c3')).toBe('123')
    })
  })

  describe('objectToQueryString', () => {
    it('filters out null and undefined values', () => {
      const result = objectToQueryString({ a: 1, b: null, c: undefined, d: 'x' })
      expect(result).toContain('a=1')
      expect(result).toContain('d=x')
      expect(result).not.toContain('b=')
      expect(result).not.toContain('c=')
    })

    it('returns empty string for empty object', () => {
      expect(objectToQueryString({})).toBe('')
    })
  })

  describe('toCamelCase / toSnakeCase', () => {
    it('toCamelCase handles non-string input', () => {
      expect(toCamelCase(null as unknown as string)).toBe('')
    })

    it('toSnakeCase handles non-string input', () => {
      expect(toSnakeCase(null as unknown as string)).toBe('')
    })

    it('toCamelCase handles multiple underscores', () => {
      expect(toCamelCase('foo_bar_baz')).toBe('fooBarBaz')
    })

    it('toSnakeCase handles multiple spaces', () => {
      expect(toSnakeCase('foo bar baz')).toBe('foo_bar_baz')
    })
  })
})

// ---------------------------------------------------------------------------
// Number module — invalid inputs & boundary values
// ---------------------------------------------------------------------------

describe('error-handling: number module', () => {
  describe('parseNumber', () => {
    it('returns default for empty string', () => {
      expect(parseNumber('', 99)).toBe(99)
    })

    it('returns default for whitespace-only string', () => {
      expect(parseNumber('   ', 99)).toBe(99)
    })

    it('returns default for NaN string', () => {
      expect(parseNumber('abc', 99)).toBe(99)
    })

    it('parses float when isFloat=true', () => {
      expect(parseNumber('3.14', 0, true)).toBe(3.14)
    })

    it('truncates decimal with isFloat=false', () => {
      expect(parseNumber('3.99', 0, false)).toBe(3)
    })
  })

  describe('parseTime', () => {
    it('returns default for empty string', () => {
      expect(parseTime('', 0)).toBe(0)
    })

    it('parses MM:SS format', () => {
      expect(parseTime('01:30', 0)).toBe(90000) // 90 seconds in ms
    })

    it('parses HH:MM:SS format (MM:SS:ms interpretation)', () => {
      // parseTime interprets HH:MM:SS as minutes:seconds:ms
      // 01:00:00 → 1min + 0sec + 0ms = 60000ms
      expect(parseTime('01:00:00', 0)).toBe(60000)
    })

    it('returns default for invalid format (too many colons)', () => {
      expect(parseTime('01:02:03:04', 0)).toBe(0)
    })

    it('handles non-numeric segment gracefully', () => {
      expect(parseTime('aa:bb', 0)).toBe(0)
    })

    it('parses plain integer without colon', () => {
      expect(parseTime('5000', 0)).toBe(5000)
    })
  })

  describe('formatNumber', () => {
    it('formats zero', () => {
      expect(formatNumber(0)).toBe('0')
    })

    it('formats negative numbers', () => {
      expect(formatNumber(-1234)).toContain('1,234')
    })

    it('formats large numbers', () => {
      expect(formatNumber(1000000)).toBe('1,000,000')
    })
  })

  describe('formatCurrency', () => {
    it('formats EUR with prefix symbol', () => {
      expect(formatCurrency(100, 'EUR')).toBe('€100')
    })

    it('formats JPY with prefix symbol', () => {
      expect(formatCurrency(500, 'JPY')).toBe('¥500')
    })

    it('formats CNY with prefix symbol', () => {
      expect(formatCurrency(200, 'CNY')).toBe('¥200')
    })

    it('formats KRW as default', () => {
      expect(formatCurrency(1000)).toBe('1,000원')
    })
  })

  describe('formatFileSize', () => {
    it('formats 0 bytes', () => {
      expect(formatFileSize(0)).toBe('0 B')
    })

    it('formats GB', () => {
      expect(formatFileSize(1024 * 1024 * 1024)).toBe('1 GB')
    })

    it('uses precision parameter', () => {
      expect(formatFileSize(1500, 2)).toBe('1.46 KB')
    })
  })

  describe('numberToKorean', () => {
    it('handles single digits', () => {
      expect(numberToKorean(5)).toBe('오')
    })

    it('handles exact 만', () => {
      expect(numberToKorean(10000)).toBe('만')
    })

    it('handles 억', () => {
      // 100,000,000 = 1억 → '일억' (group=1, groupIndex>=2 → '일' + bigUnit)
      expect(numberToKorean(100000000)).toBe('일억')
    })

    it('handles 조', () => {
      expect(numberToKorean(1000000000000)).toBe('일조')
    })

    it('handles complex numbers', () => {
      expect(numberToKorean(12345)).toBe('만이천삼백사십오')
    })
  })

  describe('parseNumberFromString', () => {
    it('handles plain number strings', () => {
      expect(parseNumberFromString('42')).toBe(42)
    })

    it('handles negative amounts', () => {
      expect(parseNumberFromString('-1,234')).toBe(-1234)
    })

    it('handles strings with only non-numeric chars', () => {
      expect(isNaN(parseNumberFromString('abc'))).toBe(true)
    })
  })
})

// ---------------------------------------------------------------------------
// Validation module — invalid inputs & boundary values
// ---------------------------------------------------------------------------

describe('error-handling: validation module', () => {
  describe('isEmail', () => {
    it('returns false for null', () => {
      expect(isEmail(null as unknown as string)).toBe(false)
    })

    it('returns false for empty string', () => {
      expect(isEmail('')).toBe(false)
    })

    it('returns true for email without explicit TLD (regex allows it)', () => {
      // The regex allows @domain without a dot — this is by design
      expect(isEmail('user@domain')).toBe(true)
    })

    it('returns true for email with subdomain', () => {
      expect(isEmail('user@mail.example.com')).toBe(true)
    })
  })

  describe('isPhone', () => {
    it('returns false for null', () => {
      expect(isPhone(null as unknown as string)).toBe(false)
    })

    it('returns false for too-short number', () => {
      expect(isPhone('0101234')).toBe(false)
    })

    it('validates 010 with 8-digit suffix', () => {
      expect(isPhone('010-1234-5678')).toBe(true)
    })

    it('validates 02 landline (9 digits)', () => {
      expect(isPhone('02-123-4567')).toBe(true)
    })

    it('validates 02 landline (10 digits)', () => {
      expect(isPhone('02-1234-5678')).toBe(true)
    })
  })

  describe('isUrl', () => {
    it('returns false for null', () => {
      expect(isUrl(null as unknown as string)).toBe(false)
    })

    it('returns false for ftp-less url', () => {
      expect(isUrl('ssh://example.com')).toBe(false)
    })

    it('accepts ftp URL', () => {
      expect(isUrl('ftp://ftp.example.com')).toBe(true)
    })

    it('returns false for bare domain', () => {
      expect(isUrl('example.com')).toBe(false)
    })
  })

  describe('isUUID', () => {
    it('returns false for null', () => {
      expect(isUUID(null as unknown as string)).toBe(false)
    })

    it('returns false for UUID v6+ (unsupported)', () => {
      // v6 would have '6' in the version field — regex only allows [1-5]
      expect(isUUID('550e8400-e29b-61d4-a716-446655440000')).toBe(false)
    })

    it('validates lowercase UUID', () => {
      expect(isUUID('550e8400-e29b-41d4-a716-446655440000')).toBe(true)
    })

    it('validates uppercase UUID', () => {
      expect(isUUID('550E8400-E29B-41D4-A716-446655440000')).toBe(true)
    })
  })

  describe('isBusinessNumber', () => {
    it('returns false for too-short input', () => {
      expect(isBusinessNumber('123456789')).toBe(false)
    })

    it('returns false for too-long input', () => {
      expect(isBusinessNumber('12345678901')).toBe(false)
    })

    it('returns false for non-numeric chars after cleaning = wrong length', () => {
      expect(isBusinessNumber('abc')).toBe(false)
    })

    it('returns boolean for 10-digit input', () => {
      expect(typeof isBusinessNumber('1234567890')).toBe('boolean')
    })
  })

  describe('formatPhoneNumber', () => {
    it('formats 02 landline with 9 digits', () => {
      expect(formatPhoneNumber('021234567')).toBe('02-123-4567')
    })

    it('formats 02 landline with 10 digits', () => {
      expect(formatPhoneNumber('0212345678')).toBe('02-1234-5678')
    })

    it('formats 010 mobile with 11 digits', () => {
      expect(formatPhoneNumber('01012345678')).toBe('010-1234-5678')
    })

    it('formats 010 mobile with 10 digits', () => {
      expect(formatPhoneNumber('0101234567')).toBe('010-123-4567')
    })

    it('formats 031 regional with 11 digits', () => {
      expect(formatPhoneNumber('03112345678')).toBe('031-1234-5678')
    })

    it('returns input unchanged for unrecognized format', () => {
      expect(formatPhoneNumber('12345')).toBe('12345')
    })
  })

  describe('formatBusinessNumber', () => {
    it('formats 10 digits correctly', () => {
      expect(formatBusinessNumber('1234567890')).toBe('123-45-67890')
    })

    it('returns input unchanged for wrong length', () => {
      expect(formatBusinessNumber('123')).toBe('123')
    })
  })
})

// ---------------------------------------------------------------------------
// Korean module — invalid inputs & boundary values
// ---------------------------------------------------------------------------

describe('error-handling: korean module', () => {
  describe('withEunNeun', () => {
    it('handles empty string', () => {
      expect(withEunNeun('')).toBe('')
    })

    it('appends 는 for non-Korean last char', () => {
      expect(withEunNeun('hello')).toBe('hello는')
    })

    it('appends 은 for consonant-final Korean', () => {
      expect(withEunNeun('밥')).toBe('밥은')
    })

    it('appends 는 for vowel-final Korean', () => {
      expect(withEunNeun('나')).toBe('나는')
    })
  })

  describe('withIGa', () => {
    it('handles empty string', () => {
      expect(withIGa('')).toBe('')
    })

    it('appends 가 for non-Korean last char', () => {
      expect(withIGa('A')).toBe('A가')
    })
  })

  describe('withEulReul', () => {
    it('handles empty string', () => {
      expect(withEulReul('')).toBe('')
    })

    it('appends 를 for non-Korean last char', () => {
      expect(withEulReul('X')).toBe('X를')
    })
  })

  describe('chosungSearch', () => {
    it('returns false when chosung is not present', () => {
      expect(chosungSearch('안녕하세요', 'ㅂ')).toBe(false)
    })

    it('works with multi-chosung search', () => {
      expect(chosungSearch('대한민국', 'ㄷㅎ')).toBe(true)
    })

    it('handles empty search string (always matches)', () => {
      expect(chosungSearch('한국어', '')).toBe(true)
    })
  })

  describe('getChosung', () => {
    it('returns chosung for Korean character', () => {
      expect(getChosung('한')).toBe('ㅎ')
    })

    it('returns non-Korean character unchanged', () => {
      expect(getChosung('A')).toBe('A')
    })

    it('returns digit unchanged', () => {
      expect(getChosung('1')).toBe('1')
    })
  })

  describe('isKorean', () => {
    it('returns false for empty string', () => {
      expect(isKorean('')).toBe(false)
    })

    it('returns false for English text', () => {
      expect(isKorean('hello')).toBe(false)
    })

    it('returns true for mixed Korean/English', () => {
      expect(isKorean('hello안녕')).toBe(true)
    })

    it('returns true for Korean jamo only', () => {
      expect(isKorean('ㄱㄴㄷ')).toBe(true)
    })
  })
})

// ---------------------------------------------------------------------------
// Array module — invalid inputs & boundary values
// ---------------------------------------------------------------------------

describe('error-handling: array module', () => {
  describe('equalArrays', () => {
    it('returns false for null inputs', () => {
      expect(equalArrays(null as unknown as unknown[], [])).toBe(false)
      expect(equalArrays([], null as unknown as unknown[])).toBe(false)
    })

    it('returns false for non-array inputs', () => {
      expect(equalArrays('abc' as unknown as unknown[], [])).toBe(false)
    })

    it('returns true for same reference', () => {
      const arr = [1, 2, 3]
      expect(equalArrays(arr, arr)).toBe(true)
    })

    it('returns false for different lengths', () => {
      expect(equalArrays([1, 2], [1, 2, 3])).toBe(false)
    })

    it('returns false for different elements', () => {
      expect(equalArrays([1, 2], [1, 3])).toBe(false)
    })
  })

  describe('groupBy', () => {
    it('returns empty object for null', () => {
      expect(groupBy(null as unknown as Record<string, unknown>[], 'key')).toEqual({})
    })

    it('handles items with same group key', () => {
      const items = [{ k: 'a', v: 1 }, { k: 'a', v: 2 }]
      const result = groupBy(items, 'k')
      expect(result['a']).toHaveLength(2)
    })
  })

  describe('sortBy', () => {
    it('returns empty array for null', () => {
      expect(sortBy(null as unknown as Record<string, unknown>[], 'key')).toEqual([])
    })

    it('sorts descending', () => {
      const arr = [{ v: 1 }, { v: 3 }, { v: 2 }]
      const result = sortBy(arr, 'v', 'desc')
      expect(result[0].v).toBe(3)
    })
  })

  describe('chunk', () => {
    it('returns empty array for null', () => {
      expect(chunk(null as unknown as unknown[], 2)).toEqual([])
    })

    it('returns empty array for size <= 0', () => {
      expect(chunk([1, 2, 3], 0)).toEqual([])
      expect(chunk([1, 2, 3], -1)).toEqual([])
    })

    it('returns single chunk when size >= length', () => {
      expect(chunk([1, 2, 3], 10)).toEqual([[1, 2, 3]])
    })
  })

  describe('unique', () => {
    it('returns empty array for null', () => {
      expect(unique(null as unknown as unknown[])).toEqual([])
    })

    it('handles array with objects (reference equality)', () => {
      const obj = { a: 1 }
      expect(unique([obj, obj, { a: 1 }])).toHaveLength(2)
    })
  })

  describe('flatten', () => {
    it('returns empty array for null', () => {
      expect(flatten(null as unknown as unknown[])).toEqual([])
    })

    it('flattens one level by default', () => {
      expect(flatten([[1, 2], [3, [4, 5]]])).toEqual([1, 2, 3, [4, 5]])
    })

    it('flattens deeply with depth=Infinity', () => {
      expect(flatten([[1, [2, [3]]]], Infinity)).toEqual([1, 2, 3])
    })
  })

  describe('shuffle', () => {
    it('returns empty array for null', () => {
      expect(shuffle(null as unknown as unknown[])).toEqual([])
    })

    it('returns array with same elements', () => {
      const arr = [1, 2, 3, 4, 5]
      const result = shuffle(arr)
      expect(result.sort()).toEqual([...arr].sort())
    })

    it('does not mutate the original array', () => {
      const arr = [1, 2, 3]
      shuffle(arr)
      expect(arr).toEqual([1, 2, 3])
    })
  })
})

// ---------------------------------------------------------------------------
// Format module — boundary values
// ---------------------------------------------------------------------------

describe('error-handling: format module', () => {
  describe('formatBytes', () => {
    it('formats 0 bytes', () => {
      expect(formatBytes(0)).toBe('0 B')
    })

    it('formats exact KB', () => {
      expect(formatBytes(1024)).toBe('1.00 KB')
    })

    it('formats exact MB', () => {
      expect(formatBytes(1024 * 1024)).toBe('1.00 MB')
    })

    it('formats exact GB', () => {
      expect(formatBytes(1024 * 1024 * 1024)).toBe('1.00 GB')
    })

    it('uses custom precision', () => {
      expect(formatBytes(1536, 1)).toBe('1.5 KB')
    })
  })

  describe('formatPercent', () => {
    it('formats 0%', () => {
      expect(formatPercent(0)).toBe('0.0%')
    })

    it('formats 100%', () => {
      expect(formatPercent(100)).toBe('100.0%')
    })

    it('converts decimal fraction', () => {
      expect(formatPercent(0.333, 2, true)).toBe('33.30%')
    })

    it('handles 0 decimals', () => {
      expect(formatPercent(75, 0)).toBe('75%')
    })
  })
})

// ---------------------------------------------------------------------------
// Object module — invalid inputs & boundary values
// ---------------------------------------------------------------------------

describe('error-handling: object module', () => {
  describe('clone', () => {
    it('returns null unchanged', () => {
      expect(clone(null)).toBeNull()
    })

    it('returns primitive unchanged', () => {
      expect(clone(42)).toBe(42)
    })

    it('deep clones nested objects', () => {
      const obj = { a: { b: { c: 1 } } }
      const cloned = clone(obj)
      cloned.a.b.c = 99
      expect(obj.a.b.c).toBe(1)
    })

    it('clones arrays', () => {
      const arr = [1, [2, 3]]
      const cloned = clone(arr)
      expect(cloned).toEqual(arr)
      expect(cloned).not.toBe(arr)
    })
  })

  describe('getByPath', () => {
    it('retrieves nested value', () => {
      const obj = { a: { b: { c: 42 } } }
      expect(getByPath(obj, 'a.b.c')).toBe(42)
    })

    it('returns default for missing path', () => {
      expect(getByPath({}, 'a.b', 'default')).toBe('default')
    })

    it('returns default when intermediate is null', () => {
      expect(getByPath({ a: null } as Record<string, unknown>, 'a.b', 'fallback')).toBe('fallback')
    })
  })

  describe('setByPath', () => {
    it('sets nested value', () => {
      const obj: Record<string, unknown> = {}
      setByPath(obj, 'a.b.c', 99)
      expect((obj as { a: { b: { c: number } } }).a.b.c).toBe(99)
    })

    it('overwrites existing value', () => {
      const obj: Record<string, unknown> = { a: { b: 1 } }
      setByPath(obj, 'a.b', 2)
      expect((obj as { a: { b: number } }).a.b).toBe(2)
    })

    it('handles empty path gracefully', () => {
      const obj: Record<string, unknown> = {}
      expect(() => setByPath(obj, '', 1)).not.toThrow()
    })
  })

  describe('deepMerge', () => {
    it('merges top-level keys', () => {
      const result = deepMerge({ a: 1 } as Record<string, unknown>, { b: 2 })
      expect(result).toEqual({ a: 1, b: 2 })
    })

    it('deeply merges nested objects', () => {
      const base = { a: { x: 1, y: 2 } } as Record<string, unknown>
      const source = { a: { y: 99, z: 3 } }
      const result = deepMerge(base, source)
      expect((result as { a: Record<string, number> }).a).toEqual({ x: 1, y: 99, z: 3 })
    })

    it('does not merge arrays (replaces)', () => {
      const base = { arr: [1, 2] } as Record<string, unknown>
      const source = { arr: [3, 4] }
      const result = deepMerge(base, source)
      expect((result as { arr: number[] }).arr).toEqual([3, 4])
    })
  })

  describe('pick', () => {
    it('picks specified keys', () => {
      const obj = { a: 1, b: 2, c: 3 } as Record<string, unknown>
      expect(pick(obj, ['a', 'c'])).toEqual({ a: 1, c: 3 })
    })

    it('ignores keys not present in object', () => {
      const obj = { a: 1 } as Record<string, unknown>
      expect(pick(obj, ['a', 'b' as keyof typeof obj])).toEqual({ a: 1 })
    })
  })

  describe('omit', () => {
    it('omits specified keys', () => {
      const obj = { a: 1, b: 2, c: 3 } as Record<string, unknown>
      expect(omit(obj, ['b'])).toEqual({ a: 1, c: 3 })
    })

    it('returns full object when no keys match', () => {
      const obj = { a: 1, b: 2 } as Record<string, unknown>
      expect(omit(obj, ['z' as keyof typeof obj])).toEqual({ a: 1, b: 2 })
    })
  })

  describe('diff', () => {
    it('returns changed keys with new values', () => {
      const base = { a: 1, b: 2 } as Record<string, unknown>
      const compare = { a: 1, b: 99 } as Record<string, unknown>
      expect(diff(base, compare)).toEqual({ b: 99 })
    })

    it('returns keys present in compare but not base', () => {
      const base = { a: 1 } as Record<string, unknown>
      const compare = { a: 1, b: 2 } as Record<string, unknown>
      expect(diff(base, compare)).toEqual({ b: 2 })
    })

    it('returns empty object when identical', () => {
      const obj = { a: 1, b: 2 } as Record<string, unknown>
      expect(diff(obj, { ...obj })).toEqual({})
    })
  })

  describe('isEmpty', () => {
    it('returns true for null', () => {
      expect(isEmpty(null)).toBe(true)
    })

    it('returns true for undefined', () => {
      expect(isEmpty(undefined)).toBe(true)
    })

    it('returns true for empty string', () => {
      expect(isEmpty('')).toBe(true)
    })

    it('returns false for non-empty string', () => {
      expect(isEmpty('x')).toBe(false)
    })

    it('returns true for empty array', () => {
      expect(isEmpty([])).toBe(true)
    })

    it('returns false for non-empty array', () => {
      expect(isEmpty([1])).toBe(false)
    })

    it('returns true for empty object', () => {
      expect(isEmpty({})).toBe(true)
    })

    it('returns false for non-empty object', () => {
      expect(isEmpty({ a: 1 })).toBe(false)
    })

    it('returns false for number', () => {
      expect(isEmpty(0)).toBe(false)
    })
  })
})

// ---------------------------------------------------------------------------
// Date module — all functions exercised for coverage
// ---------------------------------------------------------------------------

describe('error-handling: date module', () => {
  describe('getNowDate', () => {
    it('returns a string matching YYYY-MM-DD HH:MM:SS pattern', () => {
      const result = getNowDate()
      expect(typeof result).toBe('string')
      expect(result).toMatch(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/)
    })
  })

  describe('getKoreanDate', () => {
    it('returns MM월 DD일 format by default', () => {
      const result = getKoreanDate(new Date('2025-03-16'))
      expect(result).toMatch(/\d{2}월 \d{2}일/)
    })

    it('includes year when isYear=true', () => {
      const result = getKoreanDate(new Date('2025-03-16'), true)
      expect(result).toContain('2025년')
    })

    it('returns empty string for null', () => {
      expect(getKoreanDate(null as unknown as string)).toBe('')
    })

    it('returns empty string for invalid date', () => {
      expect(getKoreanDate('not-a-date')).toBe('')
    })

    it('uses default (now) when no argument provided', () => {
      const result = getKoreanDate()
      expect(typeof result).toBe('string')
      expect(result.length).toBeGreaterThan(0)
    })
  })

  describe('formatDate', () => {
    it('formats date as YYYY-MM-DD', () => {
      expect(formatDate(new Date('2025-06-15'))).toBe('2025-06-15')
    })

    it('uses today when no argument provided', () => {
      const result = formatDate()
      expect(result).toMatch(/^\d{4}-\d{2}-\d{2}$/)
    })

    it('handles string date input', () => {
      expect(formatDate('2025-01-01')).toBe('2025-01-01')
    })
  })

  describe('calDDay', () => {
    it('returns positive number for future date', () => {
      const future = new Date()
      future.setDate(future.getDate() + 10)
      expect(calDDay(future)).toBeGreaterThan(0)
    })

    it('returns negative number for past date', () => {
      const past = new Date()
      past.setDate(past.getDate() - 10)
      expect(calDDay(past)).toBeLessThan(0)
    })

    it('uses today when no argument provided', () => {
      const result = calDDay()
      expect(typeof result).toBe('number')
    })
  })

  describe('dateDiff', () => {
    it('returns correct day diff', () => {
      const result = dateDiff('2025-01-01', '2025-01-03')
      expect(result.days).toBe(2)
      expect(result.hours).toBe(0)
    })

    it('uses today as second argument by default', () => {
      const result = dateDiff(new Date())
      expect(result.days).toBe(0)
    })

    it('handles reversed dates (always absolute)', () => {
      const result = dateDiff('2025-01-05', '2025-01-01')
      expect(result.days).toBe(4)
    })
  })

  describe('formatDateAdvanced', () => {
    const d = new Date('2025-03-16T14:30:45')

    it('formats YYYY-MM-DD', () => {
      expect(formatDateAdvanced(d, 'YYYY-MM-DD')).toBe('2025-03-16')
    })

    it('formats HH:mm:ss', () => {
      expect(formatDateAdvanced(d, 'HH:mm:ss')).toBe('14:30:45')
    })

    it('formats dddd (full weekday)', () => {
      const result = formatDateAdvanced(d, 'dddd')
      expect(['일요일','월요일','화요일','수요일','목요일','금요일','토요일']).toContain(result)
    })

    it('formats ddd (short weekday)', () => {
      const result = formatDateAdvanced(d, 'ddd')
      expect(['일','월','화','수','목','금','토']).toContain(result)
    })
  })

  describe('timeAgo / relative', () => {
    it('returns "방금 전" for time < 1 minute ago', () => {
      expect(timeAgo(new Date(Date.now() - 30000))).toBe('방금 전')
    })

    it('returns minutes ago for time < 1 hour ago', () => {
      const result = timeAgo(new Date(Date.now() - 5 * 60 * 1000))
      expect(result).toMatch(/분 전/)
    })

    it('returns hours ago for time < 1 day ago', () => {
      const result = timeAgo(new Date(Date.now() - 2 * 60 * 60 * 1000))
      expect(result).toMatch(/시간 전/)
    })

    it('returns "어제" for time ~1 day ago', () => {
      expect(timeAgo(new Date(Date.now() - 25 * 60 * 60 * 1000))).toBe('어제')
    })

    it('returns days ago for time < 1 week ago', () => {
      const result = timeAgo(new Date(Date.now() - 3 * 24 * 60 * 60 * 1000))
      expect(result).toMatch(/일 전/)
    })

    it('returns weeks ago for time < 1 month ago', () => {
      const result = timeAgo(new Date(Date.now() - 10 * 24 * 60 * 60 * 1000))
      expect(result).toMatch(/주 전/)
    })

    it('returns months ago for time < 1 year ago', () => {
      const result = timeAgo(new Date(Date.now() - 60 * 24 * 60 * 60 * 1000))
      expect(result).toMatch(/개월 전/)
    })

    it('returns years ago for time > 1 year ago', () => {
      const result = timeAgo(new Date(Date.now() - 400 * 24 * 60 * 60 * 1000))
      expect(result).toMatch(/년 전/)
    })

    it('relative is alias for timeAgo', () => {
      const date = new Date(Date.now() - 30000)
      expect(relative(date)).toBe(timeAgo(date))
    })
  })

  describe('getDaysInMonth', () => {
    it('returns 31 for January', () => {
      expect(getDaysInMonth(2025, 1)).toBe(31)
    })

    it('returns 28 for February in non-leap year', () => {
      expect(getDaysInMonth(2025, 2)).toBe(28)
    })

    it('returns 29 for February in leap year', () => {
      expect(getDaysInMonth(2024, 2)).toBe(29)
    })

    it('returns 30 for April', () => {
      expect(getDaysInMonth(2025, 4)).toBe(30)
    })
  })

  describe('isLeapYear', () => {
    it('returns true for divisible by 400', () => {
      expect(isLeapYear(2000)).toBe(true)
    })

    it('returns false for divisible by 100 but not 400', () => {
      expect(isLeapYear(1900)).toBe(false)
    })

    it('returns true for divisible by 4 but not 100', () => {
      expect(isLeapYear(2024)).toBe(true)
    })

    it('returns false for non-leap year', () => {
      expect(isLeapYear(2025)).toBe(false)
    })
  })

  describe('isWeekend', () => {
    it('returns true for Saturday (2025-03-15)', () => {
      expect(isWeekend(new Date('2025-03-15'))).toBe(true)
    })

    it('returns true for Sunday (2025-03-16)', () => {
      expect(isWeekend(new Date('2025-03-16'))).toBe(true)
    })

    it('returns false for Monday (2025-03-17)', () => {
      expect(isWeekend(new Date('2025-03-17'))).toBe(false)
    })

    it('returns false for invalid date', () => {
      expect(isWeekend('not-a-date')).toBe(false)
    })

    it('returns false for null', () => {
      expect(isWeekend(null as unknown as string)).toBe(false)
    })

    it('uses today when no argument provided', () => {
      const result = isWeekend()
      expect(typeof result).toBe('boolean')
    })
  })

  describe('addDays', () => {
    it('adds positive days', () => {
      const result = addDays('2025-01-01', 5)
      expect(result.getDate()).toBe(6)
    })

    it('subtracts days with negative value', () => {
      const result = addDays('2025-01-10', -3)
      expect(result.getDate()).toBe(7)
    })

    it('returns NaN date for null input', () => {
      const result = addDays(null as unknown as string, 5)
      expect(isNaN(result.getTime())).toBe(true)
    })

    it('returns NaN date for empty string', () => {
      const result = addDays('', 5)
      expect(isNaN(result.getTime())).toBe(true)
    })

    it('returns NaN date for invalid date string', () => {
      const result = addDays('not-a-date', 5)
      expect(isNaN(result.getTime())).toBe(true)
    })
  })

  describe('diffDays', () => {
    it('returns correct day count between dates', () => {
      expect(diffDays('2025-01-01', '2025-01-11')).toBe(10)
    })

    it('returns absolute value (order does not matter)', () => {
      expect(diffDays('2025-01-11', '2025-01-01')).toBe(10)
    })

    it('returns NaN for null input', () => {
      expect(isNaN(diffDays(null as unknown as string))).toBe(true)
    })

    it('returns NaN for empty string', () => {
      expect(isNaN(diffDays(''))).toBe(true)
    })

    it('returns NaN for invalid date', () => {
      expect(isNaN(diffDays('not-a-date'))).toBe(true)
    })

    it('uses today as second date when omitted', () => {
      const result = diffDays(new Date())
      expect(result).toBe(0)
    })
  })
})

// ---------------------------------------------------------------------------
// Async module — error propagation & boundary values
// ---------------------------------------------------------------------------

describe('error-handling: async module', () => {
  jest.setTimeout(15000)

  describe('retry', () => {
    it('resolves immediately on first success', async () => {
      const fn = jest.fn().mockResolvedValue('ok')
      await expect(retry(fn, 3, 0)).resolves.toBe('ok')
      expect(fn).toHaveBeenCalledTimes(1)
    })

    it('retries and eventually succeeds', async () => {
      let calls = 0
      const fn = jest.fn().mockImplementation(() => {
        calls++
        if (calls < 3) return Promise.reject(new Error('fail'))
        return Promise.resolve('success')
      })
      await expect(retry(fn, { maxRetries: 3, delay: 0 })).resolves.toBe('success')
      expect(fn).toHaveBeenCalledTimes(3)
    })

    it('throws last error after all retries exhausted', async () => {
      const fn = jest.fn().mockRejectedValue(new Error('always fails'))
      await expect(retry(fn, { maxRetries: 2, delay: 0 })).rejects.toThrow('always fails')
      expect(fn).toHaveBeenCalledTimes(2)
    })

    it('accepts RetryOptions object', async () => {
      const fn = jest.fn().mockResolvedValue(42)
      const result = await retry(fn, { maxRetries: 2, delay: 0, backoff: 1, maxDelay: 100 })
      expect(result).toBe(42)
    })
  })

  describe('timeout', () => {
    it('resolves when promise completes in time', async () => {
      const p = Promise.resolve('fast')
      await expect(timeout(p, 1000)).resolves.toBe('fast')
    })

    it('rejects with timeout error when too slow', async () => {
      const p = new Promise<never>(() => { /* never resolves */ })
      await expect(timeout(p, 10)).rejects.toThrow(/timed out/i)
    })

    it('uses custom error message', async () => {
      const p = new Promise<never>(() => { /* never resolves */ })
      await expect(timeout(p, 10, 'custom timeout')).rejects.toThrow('custom timeout')
    })

    it('propagates rejection from inner promise', async () => {
      const p = Promise.reject(new Error('inner error'))
      await expect(timeout(p, 1000)).rejects.toThrow('inner error')
    })
  })

  describe('parallel', () => {
    it('runs all fns without concurrency limit', async () => {
      const fns = [1, 2, 3].map(n => () => Promise.resolve(n))
      await expect(parallel(fns)).resolves.toEqual([1, 2, 3])
    })

    it('respects concurrency limit', async () => {
      const fns = [1, 2, 3, 4].map(n => () => Promise.resolve(n))
      await expect(parallel(fns, 2)).resolves.toEqual([1, 2, 3, 4])
    })

    it('handles empty array', async () => {
      await expect(parallel([])).resolves.toEqual([])
    })
  })

  describe('serial', () => {
    it('runs fns in sequence and returns results in order', async () => {
      const order: number[] = []
      const fns = [1, 2, 3].map(n => () => {
        order.push(n)
        return Promise.resolve(n * 10)
      })
      const results = await serial(fns)
      expect(results).toEqual([10, 20, 30])
      expect(order).toEqual([1, 2, 3])
    })

    it('handles empty array', async () => {
      await expect(serial([])).resolves.toEqual([])
    })
  })
})
