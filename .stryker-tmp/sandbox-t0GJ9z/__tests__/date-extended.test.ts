// @ts-nocheck
import util from '../dist'

describe('Date Utilities Extended', () => {
  describe('getNowDate arithmetic', () => {
    test('should return ISO-like string with timezone offset applied', () => {
      const result = util.getNowDate()
      // Verify format YYYY-MM-DD HH:MM:SS
      expect(result).toMatch(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/)
      // Verify it's a valid date string
      const parts = result.split(' ')
      expect(new Date(parts[0]).getTime()).not.toBeNaN()
    })
  })

  describe('getKoreanDate padding', () => {
    test('should pad single-digit months and days', () => {
      const date = new Date('2024-01-05')
      expect(util.getKoreanDate(date, false)).toBe('01월 05일')
    })

    test('should handle month boundary (December)', () => {
      const date = new Date('2024-12-31')
      expect(util.getKoreanDate(date, true)).toBe('2024년 12월 31일')
    })

    test('should handle string date input', () => {
      expect(util.getKoreanDate('2024-03-15', true)).toBe('2024년 03월 15일')
    })

    test('should return empty string for empty string', () => {
      expect(util.getKoreanDate('')).toBe('')
    })
  })

  describe('formatDate padding', () => {
    test('should pad single-digit month', () => {
      const date = new Date('2024-01-15')
      expect(util.formatDate(date)).toBe('2024-01-15')
    })

    test('should pad single-digit day', () => {
      const date = new Date('2024-03-05')
      expect(util.formatDate(date)).toBe('2024-03-05')
    })

    test('should accept string input', () => {
      expect(util.formatDate('2024-11-20')).toBe('2024-11-20')
    })
  })

  describe('formatDateAdvanced weekdays', () => {
    test('should format Sunday', () => {
      const sunday = new Date('2025-12-28') // Sunday
      expect(util.formatDateAdvanced(sunday, 'dddd')).toBe('일요일')
      expect(util.formatDateAdvanced(sunday, 'ddd')).toBe('일')
    })

    test('should format Monday', () => {
      const monday = new Date('2025-12-29') // Monday
      expect(util.formatDateAdvanced(monday, 'dddd')).toBe('월요일')
      expect(util.formatDateAdvanced(monday, 'ddd')).toBe('월')
    })

    test('should format Tuesday', () => {
      const tuesday = new Date('2025-12-30') // Tuesday
      expect(util.formatDateAdvanced(tuesday, 'dddd')).toBe('화요일')
    })

    test('should format Wednesday', () => {
      const wednesday = new Date('2025-12-31') // Wednesday
      expect(util.formatDateAdvanced(wednesday, 'dddd')).toBe('수요일')
    })

    test('should format Thursday', () => {
      const thursday = new Date('2026-01-01') // Thursday
      expect(util.formatDateAdvanced(thursday, 'dddd')).toBe('목요일')
    })

    test('should format Saturday', () => {
      const saturday = new Date('2025-12-27') // Saturday
      expect(util.formatDateAdvanced(saturday, 'dddd')).toBe('토요일')
    })

    test('should replace all token occurrences', () => {
      const date = new Date('2025-03-05')
      expect(util.formatDateAdvanced(date, 'YYYY/MM/DD')).toBe('2025/03/05')
    })
  })

  describe('timeAgo boundary values', () => {
    test('should return "방금 전" for exactly 59 seconds ago', () => {
      const date = new Date(Date.now() - 59 * 1000)
      expect(util.timeAgo(date)).toBe('방금 전')
    })

    test('should return "1분 전" for exactly 1 minute ago', () => {
      const date = new Date(Date.now() - 61 * 1000)
      expect(util.timeAgo(date)).toBe('1분 전')
    })

    test('should return "1시간 전" for exactly 1 hour ago', () => {
      const date = new Date(Date.now() - 61 * 60 * 1000)
      expect(util.timeAgo(date)).toBe('1시간 전')
    })

    test('should return "어제" for between 24 and 48 hours ago', () => {
      const date = new Date(Date.now() - 25 * 60 * 60 * 1000)
      expect(util.timeAgo(date)).toBe('어제')
    })

    test('should return "X일 전" for 2-6 days ago', () => {
      const date = new Date(Date.now() - 2 * 24 * 60 * 60 * 1000)
      expect(util.timeAgo(date)).toBe('2일 전')
    })

    test('should return "1주 전" for 7 days ago', () => {
      const date = new Date(Date.now() - 8 * 24 * 60 * 60 * 1000)
      expect(util.timeAgo(date)).toBe('1주 전')
    })

    test('should return "1개월 전" for 30 days ago', () => {
      const date = new Date(Date.now() - 32 * 24 * 60 * 60 * 1000)
      expect(util.timeAgo(date)).toBe('1개월 전')
    })

    test('should return "1년 전" for 365 days ago', () => {
      const date = new Date(Date.now() - 366 * 24 * 60 * 60 * 1000)
      expect(util.timeAgo(date)).toBe('1년 전')
    })
  })

  describe('isWeekend', () => {
    test('should return true for Sunday', () => {
      const sunday = new Date('2025-12-28') // Sunday
      expect(util.isWeekend(sunday)).toBe(true)
    })

    test('should return true for Saturday', () => {
      const saturday = new Date('2025-12-27') // Saturday
      expect(util.isWeekend(saturday)).toBe(true)
    })

    test('should return false for weekday', () => {
      const monday = new Date('2025-12-29') // Monday
      expect(util.isWeekend(monday)).toBe(false)
    })

    test('should accept string date', () => {
      expect(util.isWeekend('2025-12-28')).toBe(true)
      expect(util.isWeekend('2025-12-29')).toBe(false)
    })
  })

  describe('addDays', () => {
    test('should add positive days', () => {
      const date = new Date('2025-01-01')
      const result = util.addDays(date, 5)
      expect(result.getDate()).toBe(6)
      expect(result.getMonth()).toBe(0)
    })

    test('should subtract days with negative value', () => {
      const date = new Date('2025-01-10')
      const result = util.addDays(date, -5)
      expect(result.getDate()).toBe(5)
    })

    test('should add zero days (no change)', () => {
      const date = new Date('2025-06-15')
      const result = util.addDays(date, 0)
      expect(result.getDate()).toBe(15)
    })

    test('should accept string date', () => {
      const result = util.addDays('2025-01-01', 10)
      expect(result.getDate()).toBe(11)
    })

    test('should return NaN date for empty string', () => {
      const result = util.addDays('', 5)
      expect(isNaN(result.getTime())).toBe(true)
    })
  })

  describe('diffDays', () => {
    test('should return correct number of days', () => {
      expect(util.diffDays('2025-01-01', '2025-01-10')).toBe(9)
    })

    test('should return absolute value (order independent)', () => {
      expect(util.diffDays('2025-01-10', '2025-01-01')).toBe(9)
    })

    test('should return 0 for same date', () => {
      expect(util.diffDays('2025-06-15', '2025-06-15')).toBe(0)
    })

    test('should use today as second arg default', () => {
      const result = util.diffDays(new Date())
      expect(result).toBe(0)
    })
  })

  describe('relative (alias for timeAgo)', () => {
    test('should return same result as timeAgo', () => {
      const date = new Date(Date.now() - 30000)
      expect(util.relative(date)).toBe('방금 전')
    })
  })
})
