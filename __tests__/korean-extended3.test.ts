import util from '../dist'

describe('Korean Utilities Extended 3', () => {
  describe('getChosung upper boundary (code <= 55203)', () => {
    test('should return chosung for char at exactly 55203 (힣)', () => {
      // 힣 is 55203, which is the last Korean character
      const result = util.getChosung('힣')
      expect(typeof result).toBe('string')
      expect(result.length).toBeGreaterThan(0)
      // It should be a chosung character, not the original
      expect(result).not.toBe('힣')
    })

    test('should return original for char just above 55203', () => {
      // Code 55204 is just above the Korean range
      const charAbove = String.fromCharCode(55204)
      expect(util.getChosung(charAbove)).toBe(charAbove)
    })

    test('should return original for char just below 44032', () => {
      const charBelow = String.fromCharCode(44031)
      expect(util.getChosung(charBelow)).toBe(charBelow)
    })
  })

  describe('withEunNeun upper boundary', () => {
    test('should handle 힣 (code=55203, in Korean range)', () => {
      // (55203 - 44032) % 28 = 11171 % 28 = 11171 - 398*28 = 11171 - 11144 = 27 ≠ 0 → has final consonant → 은
      expect(util.withEunNeun('힣')).toBe('힣은')
    })

    test('should handle char just above 55203 (non-Korean → 는)', () => {
      const charAbove = String.fromCharCode(55204)
      expect(util.withEunNeun(charAbove)).toBe(charAbove + '는')
    })
  })

  describe('withIGa upper boundary', () => {
    test('should handle 힣 in Korean range', () => {
      expect(util.withIGa('힣')).toBe('힣이')
    })

    test('should handle char just above 55203', () => {
      const charAbove = String.fromCharCode(55204)
      expect(util.withIGa(charAbove)).toBe(charAbove + '가')
    })
  })

  describe('withEulReul upper boundary', () => {
    test('should handle 힣 in Korean range', () => {
      expect(util.withEulReul('힣')).toBe('힣을')
    })

    test('should handle char just above 55203', () => {
      const charAbove = String.fromCharCode(55204)
      expect(util.withEulReul(charAbove)).toBe(charAbove + '를')
    })
  })
})
