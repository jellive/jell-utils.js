import util from '../lib'

describe('Number Utilities', () => {
  describe('parseNumber', () => {
    test('should parse integer', () => {
      expect(util.parseNumber('123', 0)).toBe(123)
      expect(util.parseNumber('456', 0)).toBe(456)
    })

    test('should parse float', () => {
      expect(util.parseNumber('123.45', 0, true)).toBe(123.45)
      expect(util.parseNumber('0.99', 0, true)).toBe(0.99)
    })

    test('should return default value for invalid input', () => {
      expect(util.parseNumber('abc', 100)).toBe(100)
      expect(util.parseNumber('', 50)).toBe(50)
    })
  })

  describe('parseTime', () => {
    test('should parse MM:SS format', () => {
      expect(util.parseTime('01:30', 0)).toBe(90000) // 1분 30초 = 90000ms
      expect(util.parseTime('05:00', 0)).toBe(300000) // 5분 = 300000ms
    })

    test('should parse HH:MM:SS format', () => {
      expect(util.parseTime('01:30:00', 0)).toBe(90000) // 1분 30초 (HH:MM:SS에서 third는 milliseconds)
      expect(util.parseTime('00:01:30', 0)).toBe(1030) // 1초 30ms
    })

    test('should return default value for invalid format', () => {
      expect(util.parseTime('invalid', 1000)).toBe(1000)
      expect(util.parseTime('', 2000)).toBe(2000)
    })
  })
})
