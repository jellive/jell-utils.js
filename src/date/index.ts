/**
 * Date utility functions
 * @module date
 */

/**
 * Generate string from now time with datetime format
 * @returns String now datetime format (YYYY-MM-DD HH:MM:SS)
 */
export function getNowDate(): string {
  const date = new Date()
  let dateString = new Date(
    date.getTime() - date.getTimezoneOffset() * 60000
  ).toISOString()
  dateString = dateString.replace('T', ' ').split('.')[0]
  return dateString
}

/**
 * Generate string from inputted time with Korean date format
 * @param dateString - Date input (Date object or string)
 * @param isYear - Whether to include year in output
 * @returns Korean date format string
 */
export function getKoreanDate(
  dateString: Date | string = new Date(),
  isYear = false
): string {
  if (dateString == null || dateString === '') return ''
  const targetDate = new Date(dateString as string)
  if (isNaN(targetDate.getTime())) return ''
  const year = targetDate.getFullYear()
  const month = `0${targetDate.getMonth() + 1}`.slice(-2)
  const date = `0${targetDate.getDate()}`.slice(-2)
  if (isYear) return `${year}년 ${month}월 ${date}일`
  return `${month}월 ${date}일`
}

/**
 * Convert date to yyyy-mm-dd format string
 * @param date - Date formatted string or Date object
 * @returns yyyy-mm-dd formatted string
 */
export function formatDate(date: Date | string = new Date()): string {
  const d = new Date(date as string)
  let month = `${d.getMonth() + 1}`
  let day = `${d.getDate()}`
  const year = d.getFullYear()
  if (month.length < 2) month = '0' + month
  if (day.length < 2) day = '0' + day
  return [year, month, day].join('-')
}

/**
 * Calculate d-day with target date
 * @param date - Target date
 * @returns d-day number (positive = future, negative = past)
 */
export function calDDay(date: Date | string = new Date()): number {
  const countDownDate = new Date(date as string)
  const now = new Date().getTime()
  const distance = countDownDate.getTime() - now
  return Math.floor(distance / (1000 * 60 * 60 * 24))
}

/**
 * Calculate difference between two dates
 * @param date1 - First date
 * @param date2 - Second date (defaults to now)
 * @returns Object with days, hours, minutes, seconds difference
 */
export function dateDiff(
  date1: Date | string,
  date2: Date | string = new Date()
): { days: number; hours: number; minutes: number; seconds: number } {
  const d1 = new Date(date1).getTime()
  const d2 = new Date(date2).getTime()
  const diff = Math.abs(d2 - d1)
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((diff % (1000 * 60)) / 1000)
  return { days, hours, minutes, seconds }
}

/**
 * Format date with custom format tokens
 * @param date - Date object or date string
 * @param format - Format string with tokens (YYYY, MM, DD, HH, mm, ss, ddd, dddd)
 * @returns Formatted date string
 */
export function formatDateAdvanced(date: Date | string, format: string): string {
  const d = new Date(date as string)
  const weekdays = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일']
  const replacements: Record<string, string> = {
    YYYY: d.getFullYear().toString(),
    MM: (d.getMonth() + 1).toString().padStart(2, '0'),
    DD: d.getDate().toString().padStart(2, '0'),
    HH: d.getHours().toString().padStart(2, '0'),
    mm: d.getMinutes().toString().padStart(2, '0'),
    ss: d.getSeconds().toString().padStart(2, '0'),
    dddd: weekdays[d.getDay()],
    ddd: weekdays[d.getDay()].charAt(0)
  }
  let result = format
  const tokens = ['YYYY', 'dddd', 'ddd', 'MM', 'DD', 'HH', 'mm', 'ss']
  for (const token of tokens) {
    result = result.replace(new RegExp(token, 'g'), replacements[token])
  }
  return result
}

/**
 * Get relative time string in Korean
 * @param date - Date object or date string
 * @returns Korean relative time string (e.g., '방금 전', '5분 전', '어제')
 */
export function timeAgo(date: Date | string): string {
  const now = Date.now()
  const past = new Date(date as string).getTime()
  const diff = now - past
  const minute = 60 * 1000
  const hour = 60 * minute
  const day = 24 * hour
  const week = 7 * day
  const month = 30 * day
  const year = 365 * day
  if (diff < minute) return '방금 전'
  if (diff < hour) return `${Math.floor(diff / minute)}분 전`
  if (diff < day) return `${Math.floor(diff / hour)}시간 전`
  if (diff < 2 * day) return '어제'
  if (diff < week) return `${Math.floor(diff / day)}일 전`
  if (diff < month) return `${Math.floor(diff / week)}주 전`
  if (diff < year) return `${Math.floor(diff / month)}개월 전`
  return `${Math.floor(diff / year)}년 전`
}

/**
 * Get the number of days in a month
 * @param year - Year (e.g., 2025)
 * @param month - Month (1-12)
 * @returns Number of days in the month
 */
export function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month, 0).getDate()
}

/**
 * Check if a year is a leap year
 * @param year - Year to check
 * @returns true if leap year, false otherwise
 */
export function isLeapYear(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
}

/**
 * Get a human-readable relative time string (alias for timeAgo, supports future dates)
 * @param date - Date object or date string
 * @returns Korean relative time string
 */
export function relative(date: Date | string): string {
  return timeAgo(date)
}

/**
 * Check if a date falls on a weekend (Saturday or Sunday)
 * @param date - Date to check (defaults to now)
 * @returns true if weekend, false otherwise
 */
export function isWeekend(date: Date | string = new Date()): boolean {
  if (date == null) return false
  const d = new Date(date as string)
  if (isNaN(d.getTime())) return false
  const day = d.getDay()
  return day === 0 || day === 6
}

/**
 * Add a number of days to a date
 * @param date - Base date
 * @param days - Number of days to add (negative to subtract)
 * @returns New date with days added
 */
export function addDays(date: Date | string, days: number): Date {
  if (date == null || date === '') return new Date(NaN)
  const d = new Date(date as string)
  if (isNaN(d.getTime())) return new Date(NaN)
  d.setDate(d.getDate() + days)
  return d
}

/**
 * Get the difference in whole days between two dates
 * @param date1 - First date
 * @param date2 - Second date (defaults to now)
 * @returns Number of whole days between the dates (absolute value)
 */
export function diffDays(
  date1: Date | string,
  date2: Date | string = new Date()
): number {
  if (date1 == null || date1 === '') return NaN
  const d1 = new Date(date1 as string)
  const d2 = new Date(date2 as string)
  if (isNaN(d1.getTime()) || isNaN(d2.getTime())) return NaN
  const msPerDay = 1000 * 60 * 60 * 24
  return Math.abs(Math.floor((d2.getTime() - d1.getTime()) / msPerDay))
}
