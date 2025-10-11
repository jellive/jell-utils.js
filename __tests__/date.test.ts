import util from '../lib'

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
})
