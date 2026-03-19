// @ts-nocheck
import util from '../dist'

describe('Korean Utilities Extended', () => {
  describe('getChosung', () => {
    test('should return chosung of Korean character', () => {
      expect(util.getChosung('가')).toBe('ㄱ')
      expect(util.getChosung('나')).toBe('ㄴ')
      expect(util.getChosung('사')).toBe('ㅅ')
      expect(util.getChosung('하')).toBe('ㅎ')
    })

    test('should return original char for non-Korean', () => {
      expect(util.getChosung('a')).toBe('a')
      expect(util.getChosung('1')).toBe('1')
    })
  })

  describe('withEunNeun', () => {
    test('should append 은 when last char has final consonant', () => {
      expect(util.withEunNeun('밥')).toBe('밥은')
      expect(util.withEunNeun('국')).toBe('국은')
    })

    test('should append 는 when last char has no final consonant', () => {
      expect(util.withEunNeun('나')).toBe('나는')
      expect(util.withEunNeun('바다')).toBe('바다는')
    })

    test('should append 는 for non-Korean last char', () => {
      expect(util.withEunNeun('abc')).toBe('abc는')
    })

    test('should return empty string for empty input', () => {
      expect(util.withEunNeun('')).toBe('')
    })
  })

  describe('withIGa', () => {
    test('should append 이 when last char has final consonant', () => {
      expect(util.withIGa('밥')).toBe('밥이')
      expect(util.withIGa('국')).toBe('국이')
    })

    test('should append 가 when last char has no final consonant', () => {
      expect(util.withIGa('나')).toBe('나가')
      expect(util.withIGa('바다')).toBe('바다가')
    })

    test('should append 가 for non-Korean last char', () => {
      expect(util.withIGa('abc')).toBe('abc가')
    })

    test('should return empty string for empty input', () => {
      expect(util.withIGa('')).toBe('')
    })
  })

  describe('withEulReul', () => {
    test('should append 을 when last char has final consonant', () => {
      expect(util.withEulReul('밥')).toBe('밥을')
      expect(util.withEulReul('국')).toBe('국을')
    })

    test('should append 를 when last char has no final consonant', () => {
      expect(util.withEulReul('나')).toBe('나를')
      expect(util.withEulReul('바다')).toBe('바다를')
    })

    test('should append 를 for non-Korean last char', () => {
      expect(util.withEulReul('abc')).toBe('abc를')
    })

    test('should return empty string for empty input', () => {
      expect(util.withEulReul('')).toBe('')
    })
  })
})
