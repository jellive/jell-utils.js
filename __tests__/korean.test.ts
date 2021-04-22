import { isKorean } from '../src'

test('this string is korean', () => {
  expect(isKorean('asdf한글')).toBe(true)
})

test('this string is not korean', () => {
  expect(isKorean('english')).toBe(false)
})
