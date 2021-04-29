import util from '../lib'

test('this string is korean', () => {
  expect(util.isKorean('asdf한글')).toBe(true)
})

test('this string is not korean', () => {
  expect(util.isKorean('english')).toBe(false)
})

test('clone', () => {
  const a = { a: 1, b: 2, c: 3 }
  const b = util.clone(a)
  expect(JSON.stringify(b)).toBe(JSON.stringify(a))
})

test('equalArrays is true', () => {
  const a = [1, 2, 3]
  const b = [1, 2, 3]
  expect(util.equalArrays(a, b)).toBe(true)
})

test('equalArays is false', () => {
  const a = [1, 2, 3]
  const b = [1, 2, 4]
  expect(util.equalArrays(a, b)).toBe(false)
})
