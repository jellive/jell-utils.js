import util from '../dist'

describe('Date Utilities', () => {
  describe('getNowDate', () => {
    test('should return current date in datetime format', () => {
      const result = util.getNowDate()
      expect(result).toMatch(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/)
    })
  })

  describe('getKoreanDate', () => {
    test('should return Korean date format without year', () => {
      const date = new Date('2024-03-15')
      const result = util.getKoreanDate(date, false)
      expect(result).toBe('03월 15일')
    })

    test('should return Korean date format with year', () => {
      const date = new Date('2024-03-15')
      const result = util.getKoreanDate(date, true)
      expect(result).toBe('2024년 03월 15일')
    })
  })

  describe('formatDate', () => {
    test('should format date as yyyy-mm-dd', () => {
      const date = new Date('2024-03-05')
      const result = util.formatDate(date)
      expect(result).toBe('2024-03-05')
    })
  })

  describe('calDDay', () => {
    test('should calculate d-day', () => {
      const tomorrow = new Date()
      tomorrow.setDate(tomorrow.getDate() + 1)
      const result = util.calDDay(tomorrow)
      expect(result).toBeGreaterThanOrEqual(0) // Tomorrow or today
      expect(result).toBeLessThanOrEqual(1) // Should be 0 or 1
    })
  })

  describe('dateDiff', () => {
    test('should calculate difference between dates', () => {
      const date1 = new Date('2024-01-01 00:00:00')
      const date2 = new Date('2024-01-02 03:30:45')
      const result = util.dateDiff(date1, date2)

      expect(result.days).toBe(1)
      expect(result.hours).toBe(3)
      expect(result.minutes).toBe(30)
      expect(result.seconds).toBe(45)
    })
  })

  describe('formatDateAdvanced', () => {
    test('should format date with YYYY-MM-DD', () => {
      const date = new Date('2025-12-26')
      expect(util.formatDateAdvanced(date, 'YYYY-MM-DD')).toBe('2025-12-26')
    })

    test('should format date with Korean format', () => {
      const date = new Date('2025-12-26')
      expect(util.formatDateAdvanced(date, 'YYYY년 MM월 DD일')).toBe('2025년 12월 26일')
    })

    test('should handle time tokens', () => {
      const date = new Date('2025-12-26T14:30:45')
      expect(util.formatDateAdvanced(date, 'HH:mm:ss')).toBe('14:30:45')
    })

    test('should handle weekday tokens', () => {
      const date = new Date('2025-12-26') // Friday
      expect(util.formatDateAdvanced(date, 'dddd')).toBe('금요일')
      expect(util.formatDateAdvanced(date, 'ddd')).toBe('금')
    })

    test('should handle full format', () => {
      const date = new Date('2025-12-26T14:30:00')
      expect(util.formatDateAdvanced(date, 'YYYY/MM/DD HH:mm')).toBe('2025/12/26 14:30')
    })
  })

  describe('timeAgo', () => {
    test('should return "방금 전" for less than 1 minute', () => {
      const date = new Date(Date.now() - 30000) // 30 seconds ago
      expect(util.timeAgo(date)).toBe('방금 전')
    })

    test('should return "X분 전" for less than 1 hour', () => {
      const date = new Date(Date.now() - 5 * 60 * 1000) // 5 minutes ago
      expect(util.timeAgo(date)).toBe('5분 전')
    })

    test('should return "X시간 전" for less than 24 hours', () => {
      const date = new Date(Date.now() - 3 * 60 * 60 * 1000) // 3 hours ago
      expect(util.timeAgo(date)).toBe('3시간 전')
    })

    test('should return "어제" for yesterday', () => {
      const date = new Date(Date.now() - 36 * 60 * 60 * 1000) // 36 hours ago
      expect(util.timeAgo(date)).toBe('어제')
    })

    test('should return "X일 전" for less than 7 days', () => {
      const date = new Date(Date.now() - 3 * 24 * 60 * 60 * 1000) // 3 days ago
      expect(util.timeAgo(date)).toBe('3일 전')
    })

    test('should return "X주 전" for less than 30 days', () => {
      const date = new Date(Date.now() - 14 * 24 * 60 * 60 * 1000) // 14 days ago
      expect(util.timeAgo(date)).toBe('2주 전')
    })

    test('should return "X개월 전" for less than 12 months', () => {
      const date = new Date(Date.now() - 60 * 24 * 60 * 60 * 1000) // 60 days ago
      expect(util.timeAgo(date)).toBe('2개월 전')
    })

    test('should return "X년 전" for more than 12 months', () => {
      const date = new Date(Date.now() - 400 * 24 * 60 * 60 * 1000) // 400 days ago
      expect(util.timeAgo(date)).toBe('1년 전')
    })
  })

  describe('getDaysInMonth', () => {
    test('should return 28 for February in non-leap year', () => {
      expect(util.getDaysInMonth(2025, 2)).toBe(28)
    })

    test('should return 29 for February in leap year', () => {
      expect(util.getDaysInMonth(2024, 2)).toBe(29)
    })

    test('should return 31 for December', () => {
      expect(util.getDaysInMonth(2025, 12)).toBe(31)
    })

    test('should return 30 for April', () => {
      expect(util.getDaysInMonth(2025, 4)).toBe(30)
    })
  })

  describe('isLeapYear', () => {
    test('should return true for divisible by 4 non-century year', () => {
      expect(util.isLeapYear(2024)).toBe(true)
    })

    test('should return false for non-leap year', () => {
      expect(util.isLeapYear(2025)).toBe(false)
    })

    test('should return true for year divisible by 400', () => {
      expect(util.isLeapYear(2000)).toBe(true)
    })

    test('should return false for century year not divisible by 400', () => {
      expect(util.isLeapYear(1900)).toBe(false)
    })
  })

  describe('null/invalid input guards', () => {
    test('should return empty string for null input to getKoreanDate', () => {
      expect(util.getKoreanDate(null as any)).toBe('')
    })

    test('should return empty string for invalid date string to getKoreanDate', () => {
      expect(util.getKoreanDate('not-a-date')).toBe('')
    })

    test('should return false for null input to isWeekend', () => {
      expect(util.isWeekend(null as any)).toBe(false)
    })

    test('should return false for invalid date string to isWeekend', () => {
      expect(util.isWeekend('not-a-date')).toBe(false)
    })

    test('should return invalid Date for null input to addDays', () => {
      const result = util.addDays(null as any, 1)
      expect(isNaN(result.getTime())).toBe(true)
    })

    test('should return NaN for null input to diffDays', () => {
      expect(util.diffDays(null as any)).toBeNaN()
    })

    test('should return NaN for invalid date string to diffDays', () => {
      expect(util.diffDays('not-a-date')).toBeNaN()
    })
  })
})
