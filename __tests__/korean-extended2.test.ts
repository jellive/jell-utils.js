import util from '../dist'

describe('Korean Utilities Extended 2', () => {
  describe('isBusinessNumber in korean module (direct function)', () => {
    test('should validate correct business number', () => {
      expect(util.isBusinessNumber('1018626554')).toBe(true)
    })

    test('should reject invalid length', () => {
      expect(util.isBusinessNumber('123456789')).toBe(false)
      expect(util.isBusinessNumber('12345678901')).toBe(false)
    })

    test('should reject invalid checksum', () => {
      expect(util.isBusinessNumber('1234567890')).toBe(false)
    })
  })

  describe('chosung list coverage', () => {
    test('should cover all chosung entries', () => {
      // Test all 19 chosung characters by using known syllables
      expect(util.getChosung('가')).toBe('ㄱ')  // index 0
      expect(util.getChosung('까')).toBe('ㄲ')  // index 1
      expect(util.getChosung('나')).toBe('ㄴ')  // index 2
      expect(util.getChosung('다')).toBe('ㄷ')  // index 3
      expect(util.getChosung('따')).toBe('ㄸ')  // index 4
      expect(util.getChosung('라')).toBe('ㄹ')  // index 5
      expect(util.getChosung('마')).toBe('ㅁ')  // index 6
      expect(util.getChosung('바')).toBe('ㅂ')  // index 7
      expect(util.getChosung('빠')).toBe('ㅃ')  // index 8
      expect(util.getChosung('사')).toBe('ㅅ')  // index 9
      expect(util.getChosung('싸')).toBe('ㅆ')  // index 10
      expect(util.getChosung('아')).toBe('ㅇ')  // index 11
      expect(util.getChosung('자')).toBe('ㅈ')  // index 12
      expect(util.getChosung('짜')).toBe('ㅉ')  // index 13
      expect(util.getChosung('차')).toBe('ㅊ')  // index 14
      expect(util.getChosung('카')).toBe('ㅋ')  // index 15
      expect(util.getChosung('타')).toBe('ㅌ')  // index 16
      expect(util.getChosung('파')).toBe('ㅍ')  // index 17
      expect(util.getChosung('하')).toBe('ㅎ')  // index 18
    })
  })

  describe('withEunNeun code boundary', () => {
    test('should handle char at exactly 44032 (가 — no final consonant)', () => {
      // 가 is 44032, (44032-44032)%28 = 0 → no final consonant → 는
      expect(util.withEunNeun('가')).toBe('가는')
    })

    test('should handle char below 44032 (non-Korean)', () => {
      // ASCII char — code < 44032, falls through to word + '는'
      expect(util.withEunNeun('a')).toBe('a는')
    })

    test('should handle char above 55203 (non-Korean range)', () => {
      // Char code above 55203
      expect(util.withEunNeun('힣')).toBe('힣은') // 힣 = 55203, has final consonant
    })
  })

  describe('withIGa code boundary', () => {
    test('should handle char at exactly 44032', () => {
      expect(util.withIGa('가')).toBe('가가')
    })

    test('should handle char with final consonant', () => {
      expect(util.withIGa('힣')).toBe('힣이')
    })
  })

  describe('withEulReul code boundary', () => {
    test('should handle char at exactly 44032', () => {
      expect(util.withEulReul('가')).toBe('가를')
    })

    test('should handle char with final consonant', () => {
      expect(util.withEulReul('힣')).toBe('힣을')
    })
  })
})
