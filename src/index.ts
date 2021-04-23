/**
 * @description return message is korean
 * @param message target string.
 * @returns boolean
 */
const isKorean = (message: string): boolean => {
  const regex = /[ㄱ-ㅎㅏ-ㅣ가-힣]/gi
  return regex.test(message)
}

export { isKorean }
