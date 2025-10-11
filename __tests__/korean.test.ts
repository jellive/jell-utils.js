import util from '../lib'

describe('Korean Utilities', () => {
  describe('isKorean', () => {
    test('should detect Korean characters', () => {
      expect(util.isKorean('한글')).toBe(true)
      expect(util.isKorean('asdf한글')).toBe(true)
      expect(util.isKorean('ㄱㄴㄷ')).toBe(true)
    })

    test('should return false for non-Korean', () => {
      expect(util.isKorean('english')).toBe(false)
      expect(util.isKorean('123456')).toBe(false)
    })
  })

  describe('isBusinessNumber', () => {
    test('should validate correct business numbers', () => {
      // 실제 유효한 사업자등록번호 샘플
      expect(util.isBusinessNumber('1018626554')).toBe(true)
      expect(util.isBusinessNumber('101-86-26554')).toBe(true) // 하이픈 포함
    })

    test('should reject invalid business numbers', () => {
      expect(util.isBusinessNumber('1234567890')).toBe(false)
      expect(util.isBusinessNumber('123456789')).toBe(false) // 9자리
      expect(util.isBusinessNumber('12345678901')).toBe(false) // 11자리
      expect(util.isBusinessNumber('abcdefghij')).toBe(false)
    })
  })

  describe('chosungSearch', () => {
    test('should search by Korean chosung', () => {
      expect(util.chosungSearch('사과', 'ㅅㄱ')).toBe(true)
      expect(util.chosungSearch('바나나', 'ㅂㄴㄴ')).toBe(true)
      expect(util.chosungSearch('김철수', 'ㄱㅊㅅ')).toBe(true)
    })

    test('should return false for non-matching chosung', () => {
      expect(util.chosungSearch('사과', 'ㅂㄴ')).toBe(false)
      expect(util.chosungSearch('바나나', 'ㅅㄱ')).toBe(false)
    })
  })
})
