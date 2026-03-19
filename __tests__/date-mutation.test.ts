import util from '../dist'

describe('Date mutation killers', () => {
  // ---- addDays line 186: date === '' → "Stryker was here!" ----
  // Survived StringLiteral: date === ''  →  date === "Stryker was here!"
  // Kill: pass actual empty string and verify NaN Date returned
  describe('addDays — empty string guard', () => {
    test('empty string returns NaN date', () => {
      const result = util.addDays('', 5)
      expect(isNaN(result.getTime())).toBe(true)
    })

    test('non-empty invalid string falls through to isNaN guard', () => {
      // "not-a-date" is not empty and not null — hits isNaN(d.getTime()) branch
      const result = util.addDays('not-a-date', 3)
      expect(isNaN(result.getTime())).toBe(true)
    })
  })

  // ---- addDays line 188: if (isNaN(d.getTime())) → if (false) ----
  // Kill: pass an invalid date string (not empty, not null) so only the isNaN guard catches it
  describe('addDays — isNaN guard', () => {
    test('invalid date string (non-empty) returns NaN via isNaN guard', () => {
      const result = util.addDays('invalid-date-string', 1)
      expect(isNaN(result.getTime())).toBe(true)
    })

    test('valid date + 0 days returns same date (isNaN guard is false for valid input)', () => {
      const result = util.addDays('2025-06-01', 0)
      expect(isNaN(result.getTime())).toBe(false)
      expect(result.getFullYear()).toBe(2025)
    })
  })

  // ---- diffDays line 203: date1 === '' → false ----
  // Survived ConditionalExpression: date1 == null || date1 === '' → date1 == null || false
  // Kill: pass empty string as date1
  describe('diffDays — empty string guard for date1', () => {
    test('empty string date1 returns NaN', () => {
      expect(util.diffDays('')).toBeNaN()
    })

    test('empty string date1 with explicit date2 returns NaN', () => {
      expect(util.diffDays('', '2025-01-01')).toBeNaN()
    })
  })

  // ---- diffDays line 203: StringLiteral date1 === '' → "Stryker was here!" ----
  // Same kill as above — empty string test already covers it

  // ---- diffDays line 206: if (isNaN(d1.getTime()) || isNaN(d2.getTime())) → if (false) ----
  // Survived ConditionalExpression: condition → false
  // Kill: pass invalid string for date1 (non-empty, non-null — bypasses line 203 guard)
  describe('diffDays — isNaN guard for invalid date strings', () => {
    test('invalid date1 string (non-empty) returns NaN via isNaN guard', () => {
      expect(util.diffDays('not-a-date', '2025-01-01')).toBeNaN()
    })

    test('invalid date2 string returns NaN via isNaN guard', () => {
      expect(util.diffDays('2025-01-01', 'not-a-date')).toBeNaN()
    })

    test('both invalid returns NaN', () => {
      expect(util.diffDays('bad', 'also-bad')).toBeNaN()
    })
  })

  // ---- diffDays line 206: LogicalOperator || → && ----
  // Survived: isNaN(d1.getTime()) || isNaN(d2.getTime()) → &&
  // Kill: exactly one of the two is invalid (the other is valid)
  // With `&&`: both must be NaN to return NaN → if only d2 is invalid, returns wrong number
  // With `||`: either NaN → return NaN
  describe('diffDays — one valid one invalid (kills && mutant)', () => {
    test('valid date1 + invalid date2 returns NaN (kills && mutant)', () => {
      expect(util.diffDays('2025-01-01', 'invalid')).toBeNaN()
    })

    test('invalid date1 (non-empty) + valid date2 returns NaN (kills && mutant)', () => {
      expect(util.diffDays('invalid', '2025-01-01')).toBeNaN()
    })
  })

  // ---- timeAgo / relative — no-coverage on year boundary ----
  describe('timeAgo — exact boundary kills', () => {
    test('exactly 2 days ago returns "2일 전" not "어제"', () => {
      const date = new Date(Date.now() - 2 * 24 * 60 * 60 * 1000 - 1000)
      expect(util.timeAgo(date)).toBe('2일 전')
    })

    test('exactly 7 days ago returns "1주 전"', () => {
      const date = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000 - 1000)
      expect(util.timeAgo(date)).toBe('1주 전')
    })

    test('exactly 30 days ago returns "1개월 전"', () => {
      const date = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000 - 1000)
      expect(util.timeAgo(date)).toBe('1개월 전')
    })
  })

  // ---- isLeapYear — compound condition kills ----
  // year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
  describe('isLeapYear — all condition branches', () => {
    test('divisible by 4 and 100 but not 400 → false', () => {
      expect(util.isLeapYear(1900)).toBe(false)
      expect(util.isLeapYear(1800)).toBe(false)
    })

    test('divisible by 400 → true even though divisible by 100', () => {
      expect(util.isLeapYear(2000)).toBe(true)
      expect(util.isLeapYear(1600)).toBe(true)
    })

    test('divisible by 4 not by 100 → true', () => {
      expect(util.isLeapYear(2024)).toBe(true)
      expect(util.isLeapYear(2020)).toBe(true)
    })

    test('not divisible by 4 → false', () => {
      expect(util.isLeapYear(2023)).toBe(false)
      expect(util.isLeapYear(2021)).toBe(false)
    })
  })

  // ---- getKoreanDate — no coverage on null/empty/invalid ----
  describe('getKoreanDate — no coverage guards', () => {
    test('null returns empty string', () => {
      expect(util.getKoreanDate(null as any)).toBe('')
    })

    test('empty string returns empty string', () => {
      expect(util.getKoreanDate('')).toBe('')
    })

    test('invalid date string returns empty string', () => {
      expect(util.getKoreanDate('not-a-date')).toBe('')
    })
  })
})
