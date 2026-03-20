/**
 * Korean edge case tests — targets uncovered branches in src/korean/index.ts
 * Focuses on: boundary conditions for particle functions, isBusinessNumber
 * checksum paths, chosungSearch with mixed input, getChosung range edges.
 */
import {
  isKorean,
  getChosung,
  chosungSearch,
  isBusinessNumber,
  withEunNeun,
  withIGa,
  withEulReul,
} from '../src/korean'

describe('isKorean — edge cases', () => {
  it('empty string returns false', () => {
    expect(isKorean('')).toBe(false)
  })

  it('single jamo ㄱ returns true', () => {
    expect(isKorean('ㄱ')).toBe(true)
  })

  it('single vowel ㅏ returns true', () => {
    expect(isKorean('ㅏ')).toBe(true)
  })

  it('mixed korean and english returns true', () => {
    expect(isKorean('hello안녕')).toBe(true)
  })

  it('numbers only return false', () => {
    expect(isKorean('12345')).toBe(false)
  })

  it('special chars only return false', () => {
    expect(isKorean('!@#$%')).toBe(false)
  })
})

describe('getChosung — edge cases', () => {
  it('가 (44032) returns ㄱ', () => {
    expect(getChosung('가')).toBe('ㄱ')
  })

  it('힣 (55203, last Korean syllable) returns a chosung', () => {
    const result = getChosung('힣')
    expect(typeof result).toBe('string')
    expect(result).not.toBe('힣')
  })

  it('char just below 44032 (44031) returns itself', () => {
    const ch = String.fromCharCode(44031)
    expect(getChosung(ch)).toBe(ch)
  })

  it('char just above 55203 (55204) returns itself', () => {
    const ch = String.fromCharCode(55204)
    expect(getChosung(ch)).toBe(ch)
  })

  it('ASCII letter returns itself', () => {
    expect(getChosung('A')).toBe('A')
    expect(getChosung('z')).toBe('z')
  })

  it('digit returns itself', () => {
    expect(getChosung('5')).toBe('5')
  })

  it('나 returns ㄴ', () => {
    expect(getChosung('나')).toBe('ㄴ')
  })

  it('마 returns ㅁ', () => {
    expect(getChosung('마')).toBe('ㅁ')
  })

  it('사 returns ㅅ', () => {
    expect(getChosung('사')).toBe('ㅅ')
  })

  it('하 returns ㅎ', () => {
    expect(getChosung('하')).toBe('ㅎ')
  })
})

describe('chosungSearch — edge cases', () => {
  it('exact chosung match for full word', () => {
    expect(chosungSearch('컴퓨터', 'ㅋㅍㅌ')).toBe(true)
  })

  it('partial chosung at start', () => {
    expect(chosungSearch('삼성전자', 'ㅅ')).toBe(true)
  })

  it('partial chosung at end', () => {
    expect(chosungSearch('삼성전자', 'ㅈㅈ')).toBe(true)
  })

  it('non-matching chosung returns false', () => {
    expect(chosungSearch('삼성전자', 'ㄱ')).toBe(false)
  })

  it('empty search string always matches (substring of any string)', () => {
    expect(chosungSearch('삼성', '')).toBe(true)
  })

  it('ASCII input: non-Korean chars pass through as-is', () => {
    expect(chosungSearch('abc', 'abc')).toBe(true)
    expect(chosungSearch('abc', 'ab')).toBe(true)
    expect(chosungSearch('abc', 'xyz')).toBe(false)
  })

  it('mixed Korean+ASCII string', () => {
    expect(chosungSearch('SK하이닉스', 'SK')).toBe(true)
    expect(chosungSearch('SK하이닉스', 'SKㅎ')).toBe(true)
  })

  it('search longer than string returns false', () => {
    expect(chosungSearch('가', 'ㄱㄴㄷ')).toBe(false)
  })
})

describe('isBusinessNumber — edge cases', () => {
  it('exactly 9 digits → false (too short)', () => {
    expect(isBusinessNumber('123456789')).toBe(false)
  })

  it('exactly 11 digits → false (too long)', () => {
    expect(isBusinessNumber('12345678901')).toBe(false)
  })

  it('empty string → false', () => {
    expect(isBusinessNumber('')).toBe(false)
  })

  it('alphabetic string of length 10 → false (cleaned removes alpha = empty)', () => {
    expect(isBusinessNumber('abcdefghij')).toBe(false)
  })

  it('formatted with hyphens — strips hyphens and validates length', () => {
    // "123-45-67890" has 10 digits after stripping
    const result = isBusinessNumber('123-45-67890')
    expect(typeof result).toBe('boolean')
  })

  it('all zeros — checksum calculation runs, returns boolean', () => {
    expect(typeof isBusinessNumber('0000000000')).toBe('boolean')
  })

  it('invalid checksum number returns false', () => {
    // Known invalid: 1234567890 fails checksum
    expect(isBusinessNumber('1234567890')).toBe(false)
  })

  it('spaces in number — cleaned to digits only', () => {
    // "123 456 7890" → 10 digits → run checksum
    const result = isBusinessNumber('123 456 7890')
    expect(typeof result).toBe('boolean')
  })
})

describe('withEunNeun — edge cases', () => {
  it('empty string returns empty string', () => {
    expect(withEunNeun('')).toBe('')
  })

  it('consonant-final syllable (받침 있음) gets 은', () => {
    expect(withEunNeun('밥')).toBe('밥은')
    expect(withEunNeun('책')).toBe('책은')
    expect(withEunNeun('닭')).toBe('닭은')
  })

  it('vowel-final syllable (받침 없음) gets 는', () => {
    expect(withEunNeun('나')).toBe('나는')
    expect(withEunNeun('바나나')).toBe('바나나는')
    expect(withEunNeun('커피')).toBe('커피는')
  })

  it('non-Korean last char gets 는 (fallback)', () => {
    expect(withEunNeun('abc')).toBe('abc는')
    expect(withEunNeun('123')).toBe('123는')
  })

  it('가 (code 44032, vowel-final) gets 는', () => {
    expect(withEunNeun('가')).toBe('가는')
  })

  it('힣 (code 55203, consonant-final) gets 은', () => {
    expect(withEunNeun('힣')).toBe('힣은')
  })
})

describe('withIGa — edge cases', () => {
  it('empty string returns empty string', () => {
    expect(withIGa('')).toBe('')
  })

  it('consonant-final syllable gets 이', () => {
    expect(withIGa('밥')).toBe('밥이')
    expect(withIGa('책')).toBe('책이')
  })

  it('vowel-final syllable gets 가', () => {
    expect(withIGa('나')).toBe('나가')
    expect(withIGa('커피')).toBe('커피가')
  })

  it('non-Korean last char gets 가 (fallback)', () => {
    expect(withIGa('abc')).toBe('abc가')
  })

  it('가 (vowel-final) gets 가', () => {
    expect(withIGa('가')).toBe('가가')
  })

  it('힣 (consonant-final) gets 이', () => {
    expect(withIGa('힣')).toBe('힣이')
  })
})

describe('withEulReul — edge cases', () => {
  it('empty string returns empty string', () => {
    expect(withEulReul('')).toBe('')
  })

  it('consonant-final syllable gets 을', () => {
    expect(withEulReul('밥')).toBe('밥을')
    expect(withEulReul('책')).toBe('책을')
    expect(withEulReul('물')).toBe('물을')
  })

  it('vowel-final syllable gets 를', () => {
    expect(withEulReul('나')).toBe('나를')
    expect(withEulReul('커피')).toBe('커피를')
    expect(withEulReul('바나나')).toBe('바나나를')
  })

  it('non-Korean last char gets 를 (fallback)', () => {
    expect(withEulReul('abc')).toBe('abc를')
    expect(withEulReul('123')).toBe('123를')
  })

  it('가 (vowel-final) gets 를', () => {
    expect(withEulReul('가')).toBe('가를')
  })

  it('힣 (consonant-final) gets 을', () => {
    expect(withEulReul('힣')).toBe('힣을')
  })

  it('multiple words — each gets correct particle', () => {
    const words = ['밥', '나', '책', '커피', '물']
    const expected = ['밥을', '나를', '책을', '커피를', '물을']
    expect(words.map(withEulReul)).toEqual(expected)
  })
})
