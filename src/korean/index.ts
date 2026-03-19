/**
 * Korean language utility functions
 * @module korean
 */

const CHOSUNG_LIST = [
  'ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ',
  'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'
]

/**
 * Check if message contains Korean characters
 * @param message - Target string
 * @returns true if string contains Korean characters
 */
export function isKorean(message: string): boolean {
  const regex = /[ㄱ-ㅎㅏ-ㅣ가-힣]/gi
  return regex.test(message)
}

/**
 * Get the chosung (초성, leading consonant) of a Korean character
 * @param char - A single Korean character
 * @returns Chosung character, or the original char if not Korean
 */
export function getChosung(char: string): string {
  const code = char.charCodeAt(0)
  if (code >= 44032 && code <= 55203) {
    const index = Math.floor((code - 44032) / 588)
    return CHOSUNG_LIST[index]
  }
  return char
}

/**
 * Search Korean string by chosung (초성)
 * @param str - Target string to search in
 * @param search - Chosung search string
 * @returns true if chosung matches
 */
export function chosungSearch(str: string, search: string): boolean {
  const strChosung = str.split('').map(getChosung).join('')
  return strChosung.includes(search)
}

/**
 * Validate Korean business registration number (사업자등록번호)
 * @param businessNumber - Business registration number string (10 digits)
 * @returns true if valid, false otherwise
 */
export function isBusinessNumber(businessNumber: string): boolean {
  const cleaned = businessNumber.replace(/[^0-9]/g, '')
  if (cleaned.length !== 10) return false
  const digits = cleaned.split('').map(Number)
  const checksum = [1, 3, 7, 1, 3, 7, 1, 3, 5]
  let sum = 0
  for (let i = 0; i < 9; i++) {
    sum += digits[i] * checksum[i]
  }
  sum += Math.floor((digits[8] * 5) / 10)
  const result = (10 - (sum % 10)) % 10
  return result === digits[9]
}

/**
 * Append the correct Korean subject particle (은/는) based on last character
 * @param word - Korean word
 * @returns Word with correct 은 or 는 appended
 */
export function withEunNeun(word: string): string {
  if (!word) return word
  const lastChar = word[word.length - 1]
  const code = lastChar.charCodeAt(0)
  if (code < 44032 || code > 55203) return word + '는'
  const hasFinalConsonant = (code - 44032) % 28 !== 0
  return word + (hasFinalConsonant ? '은' : '는')
}

/**
 * Append the correct Korean subject particle (이/가) based on last character
 * @param word - Korean word
 * @returns Word with correct 이 or 가 appended
 */
export function withIGa(word: string): string {
  if (!word) return word
  const lastChar = word[word.length - 1]
  const code = lastChar.charCodeAt(0)
  if (code < 44032 || code > 55203) return word + '가'
  const hasFinalConsonant = (code - 44032) % 28 !== 0
  return word + (hasFinalConsonant ? '이' : '가')
}

/**
 * Append the correct Korean object particle (을/를) based on last character
 * @param word - Korean word
 * @returns Word with correct 을 or 를 appended
 */
export function withEulReul(word: string): string {
  if (!word) return word
  const lastChar = word[word.length - 1]
  const code = lastChar.charCodeAt(0)
  if (code < 44032 || code > 55203) return word + '를'
  const hasFinalConsonant = (code - 44032) % 28 !== 0
  return word + (hasFinalConsonant ? '을' : '를')
}
