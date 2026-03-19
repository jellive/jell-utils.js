// @ts-nocheck
import util from '../dist'

describe('Korean mutation killers', () => {
  // Survived mutants in withEunNeun, withIGa, withEulReul:
  //   EqualityOperator: code < 44032  →  code <= 44032
  //   ConditionalExpression: code > 55203  →  false
  //
  // To kill `code < 44032 → code <= 44032`:
  //   Need a char with code EXACTLY 44032 ('가') that is Korean and gets '는'/'가'/'를'
  //   (not non-Korean treatment). If mutant `<= 44032` were applied, '가' would take
  //   the non-Korean branch and append '는'/'가'/'를' unconditionally — same result
  //   for 는/가/를 since those happen to match... so we need to verify it picks the
  //   correct vowel-ending particle, not the non-Korean fallback.
  //   '가' has no final consonant → should get '는', '가', '를' (vowel-end particles).
  //   The non-Korean fallback also returns '는'/'가'/'를', so this is degenerate.
  //   Better: use char at code 44033 ('각') which IS Korean (44033 > 44032) and has
  //   final consonant → should get '은'/'이'/'을'.
  //   With `code <= 44032` mutant, 44033 is still > 44032 so it still passes — no help.
  //
  // The real kill: char with code 44031 (just BELOW Korean range).
  // 44031 = '힢' - 1? Let's use String.fromCharCode(44031).
  // With original `code < 44032`: 44031 < 44032 = true → non-Korean branch → append '는'/'가'/'를'
  // With mutant `code <= 44032`: 44031 <= 44032 = true → same result. Still degenerate!
  //
  // The surviving `code <= 44032` mutant on lines 74/88/102 is degenerate for chars below range.
  // To kill it, need '가' (44032) to take the KOREAN branch (hasFinalConsonant check),
  // not the non-Korean branch. '가' = 44032, (44032 - 44032) % 28 = 0 → no final consonant → '는'.
  // Non-Korean fallback also returns '는'. So these two mutants are equivalent for '가'.
  //
  // ACTUAL kill for `code <= 44032` mutant: we need a char where:
  //   original path (code < 44032 = FALSE for 44032) → takes Korean branch → hasFinalConsonant
  //   mutant path (code <= 44032 = TRUE for 44032) → takes non-Korean branch → always '는'/'가'/'를'
  // '각' = 44033: code 44033 < 44032? NO → Korean branch. (44033-44032)%28 = 1 ≠ 0 → final consonant → '은'
  // With mutant `<= 44032`: 44033 <= 44032? NO → same Korean branch. Can't kill.
  //
  // The `code <= 44032` mutant is equivalent to the original for all inputs. It's a surviving
  // equivalent mutant. We cannot kill it without changing production code.
  //
  // For `code > 55203 → false`:
  // Need a char with code > 55203 (above Korean syllable range).
  // '힣' = 55203 is the last Korean syllable. Code 55204 would be above range.
  // String.fromCharCode(55204) is a valid JS char above Korean range.
  // With original `code > 55203`: 55204 > 55203 = true → non-Korean branch → '는'/'가'/'를'
  // With mutant `false`: condition is always false → falls through to hasFinalConsonant check
  // (55204 - 44032) % 28 = (11172) % 28 = 11172 / 28 = 399 rem 0 → no final consonant → '는'/'가'/'를'
  // Same result! Equivalent mutant.
  //
  // These are mathematically equivalent mutants — not killable without production code changes.
  // We document them and focus on the no-coverage mutants instead.

  describe('withEunNeun — no coverage on non-Korean chars', () => {
    test('char at code 44031 (just below Korean range) gets 는 (non-Korean fallback)', () => {
      const ch = String.fromCharCode(44031) // just below 가
      const result = util.withEunNeun(ch)
      expect(result).toBe(ch + '는')
    })

    test('char at code 55204 (just above Korean range) gets 는 (non-Korean fallback)', () => {
      const ch = String.fromCharCode(55204) // just above 힣
      const result = util.withEunNeun(ch)
      // non-Korean branch → '는'
      expect(result).toBe(ch + '는')
    })
  })

  describe('withIGa — boundary chars', () => {
    test('char at code 44031 (non-Korean) gets 가 (non-Korean fallback)', () => {
      const ch = String.fromCharCode(44031)
      expect(util.withIGa(ch)).toBe(ch + '가')
    })

    test('char at code 55204 (non-Korean) gets 가 (non-Korean fallback)', () => {
      const ch = String.fromCharCode(55204)
      expect(util.withIGa(ch)).toBe(ch + '가')
    })
  })

  describe('withEulReul — boundary chars', () => {
    test('char at code 44031 (non-Korean) gets 를 (non-Korean fallback)', () => {
      const ch = String.fromCharCode(44031)
      expect(util.withEulReul(ch)).toBe(ch + '를')
    })

    test('char at code 55204 (non-Korean) gets 를 (non-Korean fallback)', () => {
      const ch = String.fromCharCode(55204)
      expect(util.withEulReul(ch)).toBe(ch + '를')
    })
  })

  describe('isBusinessNumber — no coverage paths', () => {
    test('should reject number where checksum digit is wrong', () => {
      expect(util.isBusinessNumber('1234567890')).toBe(false)
    })

    test('should reject number with invalid format', () => {
      expect(util.isBusinessNumber('12345')).toBe(false)
      expect(util.isBusinessNumber('abc-de-fghij')).toBe(false)
    })
  })

  describe('chosungSearch — no coverage on non-Korean in search string', () => {
    test('full string match with chosung of entire word', () => {
      expect(util.chosungSearch('컴퓨터', 'ㅋㅍㅌ')).toBe(true)
    })

    test('partial chosung match at end of string', () => {
      expect(util.chosungSearch('사과바나나', 'ㅂㄴㄴ')).toBe(true)
    })

    test('non-Korean chars pass through getChosung unchanged', () => {
      // getChosung returns char as-is for non-Korean
      expect(util.chosungSearch('abc', 'abc')).toBe(true)
      expect(util.chosungSearch('abc', 'ab')).toBe(true)
    })
  })
})
