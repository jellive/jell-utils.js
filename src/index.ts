const util = {
  /**
   * @description return message is korean
   * @param message target string.
   * @returns boolean
   */
  isKorean: (message: string): boolean => {
    const regex = /[ㄱ-ㅎㅏ-ㅣ가-힣]/gi
    return regex.test(message)
  },

  /**
   * @description return deep copied object by original object using structuredClone or JSON fallback.
   * @param obj object to deep clone
   * @returns deep cloned object
   */
  clone: <T>(obj: T): T => {
    if (obj === null || typeof obj !== 'object') {
      return obj
    }

    // Use structuredClone if available (modern browsers/Node.js 17+)
    if (typeof structuredClone !== 'undefined') {
      return structuredClone(obj)
    }

    // Fallback to JSON method (handles most common cases)
    try {
      return JSON.parse(JSON.stringify(obj)) as T
    } catch {
      // Final fallback for non-serializable objects
      if (Array.isArray(obj)) {
        return obj.map((item: unknown) =>
          typeof item === 'object' && item !== null ? util.clone(item) : item
        ) as T
      }

      const copy = {} as T
      for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          const value = obj[key]
          copy[key] =
            typeof value === 'object' && value !== null
              ? util.clone(value)
              : value
        }
      }
      return copy
    }
  },
  /**
   * @description encode uri parsing (like &lt; => <, &gt; => >)
   * @param txt Original string
   * @returns tag parsed string
   */
  parseTag: (txt: string): string => {
    return txt.replace(/&lt;/gi, '<').replace(/&gt;/gi, '>')
  },
  /**
   * @description parseNumber with defaultvalue and proper validation
   * @param target original string to parse
   * @param defaultValue return default value if parsing fails
   * @param isFloat whether to parse as float or integer
   * @returns parsed number value or default value
   */
  parseNumber: (
    target: string,
    defaultValue: number,
    isFloat = false
  ): number => {
    if (!target || typeof target !== 'string' || target.trim() === '') {
      return defaultValue
    }

    const parsed = isFloat ? parseFloat(target) : parseInt(target, 10)
    return isNaN(parsed) ? defaultValue : parsed
  },
  /**
   * @description parse time string to milliseconds
   * @param target required format such as '00:11:22' (HH:MM:SS) or '11:22' (MM:SS)
   * @param defaultValue default value if parsing fails
   * @returns parsed milliseconds or default value
   */
  parseTime: (target: string, defaultValue: number): number => {
    if (!target || typeof target !== 'string' || target.trim() === '') {
      return defaultValue
    }

    if (target.indexOf(':') === -1) {
      const parsed = parseInt(target, 10)
      return isNaN(parsed) ? defaultValue : parsed
    }

    const timeValues = target.split(':').map(value => {
      const parsed = parseInt(value.trim(), 10)
      return isNaN(parsed) ? 0 : parsed
    })

    if (timeValues.length < 2 || timeValues.length > 3) {
      return defaultValue
    }

    const [first, second, third = 0] = timeValues

    if (timeValues.length === 3) {
      // HH:MM:SS format - treat third value as milliseconds
      return first * 60 * 1000 + second * 1000 + third
    } else {
      // MM:SS format
      return first * 60 * 1000 + second * 1000
    }
  },
  /**
   * @description generate string from now time with datetime format.
   * @returns string now datetime format
   */
  getNowDate: (): string => {
    const date = new Date()
    let dateString = new Date(
      date.getTime() - date.getTimezoneOffset() * 60000
    ).toISOString()
    dateString = dateString.replace('T', ' ').split('.')[0]

    return dateString
  },
  /**
   * @description generate string from inputed time with korean date format.
   * @param dateString date input (Date object or string)
   * @param isYear whether to include year in output
   * @returns string korean date format
   */
  getKoreanDate: (
    dateString: Date | string = new Date(),
    isYear = false
  ): string => {
    const targetDate = new Date(dateString as string)
    const year = targetDate.getFullYear()
    const month = `0${targetDate.getMonth() + 1}`.slice(-2)
    const date = `0${targetDate.getDate()}`.slice(-2)

    if (isYear) return `${year}년 ${month}월 ${date}일`
    return `${month}월 ${date}일`
  },
  /**
   * @description convert date to yyyy-mm-dd format string.
   * @param date date formatted string.
   * @returns yyyy-mm-dd formatted string.
   */
  formatDate: (date: Date | string = new Date()): string => {
    const d = new Date(date as string)
    let month = `${d.getMonth() + 1}`
    let day = `${d.getDate()}`
    const year = d.getFullYear()
    if (month.length < 2) month = '0' + month
    if (day.length < 2) day = '0' + day

    return [year, month, day].join('-')
  },
  /**
   * @description calculate d-day with target date.
   * @param date target date
   * @returns d-day
   */
  calDDay: (date: Date | string = new Date()): number => {
    const countDownDate = new Date(date as string)
    const now = new Date().getTime()
    const distance = countDownDate.getTime() - now

    const countDown = Math.floor(distance / (1000 * 60 * 60 * 24))
    return countDown
  },
  /**
   * @description replace word in str with index.
   * @param str original string
   * @param txt replace word
   * @param startIndex slice first index
   * @param endIndex slice last index
   * @returns
   */
  replaceBetween: (
    str: string,
    txt: string,
    startIndex: number,
    endIndex: number
  ): string => {
    const newStr = `${str.substring(0, startIndex)}${txt}${str.substring(
      endIndex
    )}`
    return newStr
  },
  /**
   * @description convert string to camelCase format
   * @param txt input string to convert (supports snake_case and space-separated)
   * @returns camelCase formatted string
   */
  toCamelCase: (txt: string): string => {
    txt = typeof txt !== 'string' ? '' : txt
    const txtArr = txt.split(/_| /g).map((word, index) => {
      let firstvarter
      if (index == 0) {
        firstvarter = word.charAt(0).toLowerCase()
      } else {
        firstvarter = word.charAt(0).toUpperCase()
      }

      word = firstvarter.concat(word.substr(1))
      return word
    })
    return txtArr.join('')
  },
  /**
   * @description convert string to snake_case format
   * @param txt input string to convert
   * @returns snake_case formatted string
   */
  toSnakeCase: (txt: string): string => {
    txt = typeof txt !== 'string' ? '' : txt
    txt = txt.toLowerCase().replace(/ /g, '_')
    return txt
  },
  /**
   * @description make title case string (first character capital and word space)
   * @param txt input string to convert
   * @returns title case string with proper spacing
   */
  toTitleCase: (txt: string): string => {
    if (typeof txt !== 'string') return ''

    // Convert snake_case to spaces and handle camelCase
    const result = txt
      .replace(/_/g, ' ') // Replace underscores with spaces
      .replace(/([a-z])([A-Z])/g, '$1 $2') // Add space before capital letters in camelCase
      .split(/\s+/) // Split by any whitespace
      .filter(word => word.length > 0) // Remove empty strings
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ')

    return result
  },
  /**
   * @description convert HTML br tags to line breaks
   * @param txt input string with br tags
   * @returns string with br tags converted to newlines
   */
  toText: (txt: string): string => {
    return txt.replace(/<br>/gi, '\n')
  },
  /**
   * @description convert line breaks to HTML br tags
   * @param txt input string with newlines
   * @returns string with newlines converted to br tags
   */
  toHtml: (txt: string): string => {
    return txt.replace(/\n/gi, '<br>')
  },
  /**
   * @description safely remove HTML tags from text, preventing XSS attacks
   * @param txt input string with HTML tags
   * @param preserveErrorTags whether to preserve elements with 'suggestCheck' class
   * @returns sanitized text with specified tags removed
   */
  clearTag: (txt: string, preserveErrorTags = false): string => {
    if (typeof txt !== 'string') return ''

    // Create a temporary DOM element for safe parsing
    const tempDiv = document.createElement('div')

    // Set textContent first to avoid XSS, then replace with innerHTML for parsing
    tempDiv.textContent = ''
    try {
      tempDiv.innerHTML = txt
    } catch {
      // If innerHTML parsing fails, return original text stripped of all tags
      return txt.replace(/<[^>]*>/g, '')
    }

    const tagsToRemove = ['div', 'font', 'span']

    // Remove specified tags while preserving content
    tagsToRemove.forEach(tagName => {
      const elements = tempDiv.querySelectorAll(tagName)

      for (let i = 0; i < elements.length; i++) {
        const element = elements[i]
        const hasErrorClass = element.className.indexOf('suggestCheck') !== -1

        // Skip if we want to preserve error tags and this element has the error class
        if (preserveErrorTags && hasErrorClass) {
          continue
        }

        // Replace element with its content
        const parent = element.parentNode
        if (parent) {
          // Create text node from inner content to prevent XSS
          const textContent = element.textContent || ''
          const textNode = document.createTextNode(textContent)
          parent.replaceChild(textNode, element)
        }
      }
    })

    // Convert <br> tags to newlines and get text content
    const result = tempDiv.innerHTML.replace(/<br\s*\/?>/gi, '\n')

    // Final sanitization: remove any remaining script tags and dangerous content
    return result.replace(
      /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
      ''
    )
  },
  /**
   * @description check if two arrays are equal (shallow comparison)
   * @param a first array to compare
   * @param b second array to compare
   * @returns true if arrays are equal, false otherwise
   */
  equalArrays: (a: unknown[], b: unknown[]): boolean => {
    if (a === b) return true
    if (!a || !b) return false
    if (a.length != b.length) return false

    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false
    }
    return true
  },

  /**
   * @description check iOS device client with user agent.
   * @returns true if client is iOS device, false otherwise
   */
  isiOS: (): boolean => {
    return /iPhone|iPad|iPod/i.test(navigator.userAgent)
  },

  /**
   * @description validate Korean business registration number (사업자등록번호)
   * @param businessNumber business registration number string (10 digits)
   * @returns true if valid, false otherwise
   */
  isBusinessNumber: (businessNumber: string): boolean => {
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
  },

  /**
   * @description get nested object value by path string
   * @param obj target object
   * @param path path string (e.g., 'user.profile.name')
   * @param defaultValue default value if path not found
   * @returns value at path or default value
   */
  getByPath: <T = unknown>(
    obj: Record<string, unknown>,
    path: string,
    defaultValue?: T
  ): T => {
    const keys = path.split('.')
    let result: unknown = obj

    for (const key of keys) {
      if (result === null || result === undefined) {
        return defaultValue as T
      }
      result = (result as Record<string, unknown>)[key]
    }

    return result === undefined ? (defaultValue as T) : (result as T)
  },

  /**
   * @description set nested object value by path string
   * @param obj target object
   * @param path path string (e.g., 'user.profile.name')
   * @param value value to set
   */
  setByPath: (
    obj: Record<string, unknown>,
    path: string,
    value: unknown
  ): void => {
    const keys = path.split('.')
    const lastKey = keys.pop()

    if (!lastKey) return

    let current: Record<string, unknown> = obj
    for (const key of keys) {
      if (!(key in current) || typeof current[key] !== 'object') {
        current[key] = {}
      }
      current = current[key] as Record<string, unknown>
    }

    current[lastKey] = value
  },

  /**
   * @description group array of objects by key
   * @param array array to group
   * @param key key to group by
   * @returns grouped object
   */
  groupBy: <T extends Record<string, unknown>>(
    array: T[],
    key: keyof T
  ): Record<string, T[]> => {
    return array.reduce(
      (result, item) => {
        const groupKey = String(item[key])
        if (!result[groupKey]) {
          result[groupKey] = []
        }
        result[groupKey].push(item)
        return result
      },
      {} as Record<string, T[]>
    )
  },

  /**
   * @description extract only numbers from string
   * @param str input string
   * @returns string containing only numbers
   */
  extractNumbers: (str: string): string => {
    return str.replace(/[^0-9]/g, '')
  },

  /**
   * @description get file extension from filename or path
   * @param filename filename or path
   * @returns file extension without dot (e.g., 'jpg', 'pdf')
   */
  getFileExtension: (filename: string): string => {
    const parts = filename.split('.')
    return parts.length > 1 ? parts[parts.length - 1].toLowerCase() : ''
  },

  /**
   * @description calculate difference between two dates
   * @param date1 first date
   * @param date2 second date
   * @returns object with days, hours, minutes, seconds difference
   */
  dateDiff: (
    date1: Date | string,
    date2: Date | string = new Date()
  ): { days: number; hours: number; minutes: number; seconds: number } => {
    const d1 = new Date(date1).getTime()
    const d2 = new Date(date2).getTime()
    const diff = Math.abs(d2 - d1)

    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((diff % (1000 * 60)) / 1000)

    return { days, hours, minutes, seconds }
  },

  /**
   * @description deep merge two objects
   * @param target target object
   * @param source source object
   * @returns merged object
   */
  deepMerge: <T extends Record<string, unknown>>(
    target: T,
    source: Partial<T>
  ): T => {
    const result = { ...target }

    for (const key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        const sourceValue = source[key]
        const targetValue = result[key]

        if (
          sourceValue &&
          typeof sourceValue === 'object' &&
          !Array.isArray(sourceValue) &&
          targetValue &&
          typeof targetValue === 'object' &&
          !Array.isArray(targetValue)
        ) {
          result[key] = util.deepMerge(
            targetValue as Record<string, unknown>,
            sourceValue as Partial<Record<string, unknown>>
          ) as T[Extract<keyof T, string>]
        } else {
          result[key] = sourceValue as T[Extract<keyof T, string>]
        }
      }
    }

    return result
  },

  /**
   * @description retry async function with exponential backoff
   * @param fn async function to retry
   * @param maxRetries maximum number of retries
   * @param delay initial delay in milliseconds
   * @returns promise with function result
   */
  retry: async <T>(
    fn: () => Promise<T>,
    maxRetries = 3,
    delay = 1000
  ): Promise<T> => {
    let lastError: Error

    for (let i = 0; i < maxRetries; i++) {
      try {
        return await fn()
      } catch (error) {
        lastError = error as Error
        if (i < maxRetries - 1) {
          await new Promise(resolve =>
            setTimeout(resolve, delay * Math.pow(2, i))
          )
        }
      }
    }

    throw lastError!
  },

  /**
   * @description search Korean string by chosung (초성)
   * @param str target string to search in
   * @param search chosung search string
   * @returns true if chosung matches
   */
  chosungSearch: (str: string, search: string): boolean => {
    const chosungList = [
      'ㄱ',
      'ㄲ',
      'ㄴ',
      'ㄷ',
      'ㄸ',
      'ㄹ',
      'ㅁ',
      'ㅂ',
      'ㅃ',
      'ㅅ',
      'ㅆ',
      'ㅇ',
      'ㅈ',
      'ㅉ',
      'ㅊ',
      'ㅋ',
      'ㅌ',
      'ㅍ',
      'ㅎ'
    ]

    const getChosung = (char: string): string => {
      const code = char.charCodeAt(0)
      if (code >= 44032 && code <= 55203) {
        const index = Math.floor((code - 44032) / 588)
        return chosungList[index]
      }
      return char
    }

    const strChosung = str.split('').map(getChosung).join('')
    return strChosung.includes(search)
  },

  /**
   * @description sort array of objects by key
   * @param array array to sort
   * @param key key to sort by
   * @param order sort order ('asc' or 'desc')
   * @returns sorted array
   */
  sortBy: <T extends Record<string, unknown>>(
    array: T[],
    key: keyof T,
    order: 'asc' | 'desc' = 'asc'
  ): T[] => {
    return [...array].sort((a, b) => {
      const aVal = a[key]
      const bVal = b[key]

      if (aVal < bVal) return order === 'asc' ? -1 : 1
      if (aVal > bVal) return order === 'asc' ? 1 : -1
      return 0
    })
  },

  /**
   * @description convert object to URL query string
   * @param obj object to convert
   * @returns query string (e.g., 'key1=value1&key2=value2')
   */
  objectToQueryString: (obj: Record<string, unknown>): string => {
    return Object.entries(obj)
      .filter(([, value]) => value !== undefined && value !== null)
      .map(
        ([key, value]) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`
      )
      .join('&')
  },

  /**
   * @description mask sensitive string (e.g., credit card, phone)
   * @param str string to mask
   * @param visibleStart number of visible characters at start
   * @param visibleEnd number of visible characters at end
   * @param maskChar character to use for masking
   * @returns masked string
   */
  maskString: (
    str: string,
    visibleStart = 3,
    visibleEnd = 3,
    maskChar = '*'
  ): string => {
    if (str.length <= visibleStart + visibleEnd) return str

    const start = str.substring(0, visibleStart)
    const end = str.substring(str.length - visibleEnd)
    const masked = maskChar.repeat(str.length - visibleStart - visibleEnd)

    return start + masked + end
  },

  // ==================== Date Utilities (v0.2.0) ====================

  /**
   * @description Format date with custom format tokens
   * @param date Date object or date string
   * @param format Format string with tokens (YYYY, MM, DD, HH, mm, ss, ddd, dddd)
   * @returns Formatted date string
   */
  formatDateAdvanced: (date: Date | string, format: string): string => {
    const d = new Date(date as string)
    const weekdays = [
      '일요일',
      '월요일',
      '화요일',
      '수요일',
      '목요일',
      '금요일',
      '토요일'
    ]

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
    // Replace longer tokens first to avoid partial matches
    const tokens = ['YYYY', 'dddd', 'ddd', 'MM', 'DD', 'HH', 'mm', 'ss']
    for (const token of tokens) {
      result = result.replace(new RegExp(token, 'g'), replacements[token])
    }
    return result
  },

  /**
   * @description Get relative time string in Korean
   * @param date Date object or date string
   * @returns Korean relative time string (e.g., '방금 전', '5분 전', '어제')
   */
  timeAgo: (date: Date | string): string => {
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
  },

  /**
   * @description Get the number of days in a month
   * @param year Year (e.g., 2025)
   * @param month Month (1-12)
   * @returns Number of days in the month
   */
  getDaysInMonth: (year: number, month: number): number => {
    return new Date(year, month, 0).getDate()
  },

  /**
   * @description Check if a year is a leap year
   * @param year Year to check
   * @returns true if leap year, false otherwise
   */
  isLeapYear: (year: number): boolean => {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
  },

  // ==================== Number Utilities (v0.2.0) ====================

  /**
   * @description Format number with thousand separators
   * @param num Number to format
   * @returns Formatted string with commas
   */
  formatNumber: (num: number): string => {
    return num.toLocaleString('en-US')
  },

  /**
   * @description Format number as currency
   * @param amount Amount to format
   * @param currency Currency code (KRW, USD, EUR, JPY, CNY)
   * @returns Formatted currency string
   */
  formatCurrency: (
    amount: number,
    currency: 'KRW' | 'USD' | 'EUR' | 'JPY' | 'CNY' = 'KRW'
  ): string => {
    const formatted = util.formatNumber(amount)

    const symbols: Record<string, { symbol: string; prefix: boolean }> = {
      KRW: { symbol: '원', prefix: false },
      USD: { symbol: '$', prefix: true },
      EUR: { symbol: '€', prefix: true },
      JPY: { symbol: '¥', prefix: true },
      CNY: { symbol: '¥', prefix: true }
    }

    const { symbol, prefix } = symbols[currency]
    return prefix ? `${symbol}${formatted}` : `${formatted}${symbol}`
  },

  /**
   * @description Format bytes to human-readable file size
   * @param bytes Number of bytes
   * @param precision Decimal precision (default: 0 for B/KB, 2 for larger)
   * @returns Formatted file size string
   */
  formatFileSize: (bytes: number, precision?: number): string => {
    const units = ['B', 'KB', 'MB', 'GB', 'TB']
    let size = bytes
    let unitIndex = 0

    while (size >= 1024 && unitIndex < units.length - 1) {
      size /= 1024
      unitIndex++
    }

    const decimals =
      precision !== undefined ? precision : unitIndex === 0 ? 0 : 0
    return `${size.toFixed(decimals)} ${units[unitIndex]}`
  },

  /**
   * @description Convert number to Korean words
   * @param num Number to convert
   * @returns Korean number string (e.g., '천이백삼십사')
   */
  numberToKorean: (num: number): string => {
    if (num === 0) return '영'

    const digits = ['', '일', '이', '삼', '사', '오', '육', '칠', '팔', '구']
    const units = ['', '십', '백', '천']
    const bigUnits = ['', '만', '억', '조']

    const processGroup = (n: number): string => {
      let result = ''
      let temp = n

      for (let i = 3; i >= 0; i--) {
        const digit = Math.floor(temp / Math.pow(10, i))
        temp %= Math.pow(10, i)

        if (digit > 0) {
          // Omit '일' before 십, 백, 천 (but not for units[0])
          if (digit > 1 || i === 0) {
            result += digits[digit]
          }
          result += units[i]
        }
      }
      return result
    }

    let result = ''
    let groupIndex = 0
    let remaining = num

    while (remaining > 0) {
      const group = remaining % 10000
      if (group > 0) {
        const groupStr = processGroup(group)
        // '만' 단위에서 1은 생략, '억' 이상에서는 '일' 포함
        if (group === 1 && groupIndex >= 1) {
          if (groupIndex >= 2) {
            // 억 이상: '일억', '일조'
            result = '일' + bigUnits[groupIndex] + result
          } else {
            // 만: '만' (일 생략)
            result = bigUnits[groupIndex] + result
          }
        } else {
          result = groupStr + bigUnits[groupIndex] + result
        }
      }
      remaining = Math.floor(remaining / 10000)
      groupIndex++
    }

    return result
  },

  /**
   * @description Parse number from formatted string
   * @param str String containing number (with commas, currency symbols, etc.)
   * @returns Parsed number
   */
  parseNumberFromString: (str: string): number => {
    const cleaned = str.replace(/[^0-9.-]/g, '')
    return parseFloat(cleaned)
  },

  // ==================== Validation Utilities (v0.2.0) ====================

  /**
   * @description Validate email address
   * @param email Email address to validate
   * @returns true if valid email, false otherwise
   */
  isEmail: (email: string): boolean => {
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    return emailRegex.test(email)
  },

  /**
   * @description Validate Korean phone number
   * @param phone Phone number to validate
   * @returns true if valid Korean phone number, false otherwise
   */
  isPhoneNumber: (phone: string): boolean => {
    const mobileRegex = /^01[016789]-?\d{3,4}-?\d{4}$/
    const landlineRegex = /^0[2-6][1-5]?-?\d{3,4}-?\d{4}$/

    return mobileRegex.test(phone) || landlineRegex.test(phone)
  },

  /**
   * @description Validate URL
   * @param url URL to validate
   * @returns true if valid URL, false otherwise
   */
  isUrl: (url: string): boolean => {
    try {
      const parsed = new URL(url)
      return ['http:', 'https:', 'ftp:'].includes(parsed.protocol)
    } catch {
      return false
    }
  },

  /**
   * @description Format Korean phone number with hyphens
   * @param phone Phone number to format
   * @returns Formatted phone number
   */
  formatPhoneNumber: (phone: string): string => {
    const digits = phone.replace(/[^0-9]/g, '')

    if (digits.startsWith('02')) {
      // Seoul: 02-XXXX-XXXX
      if (digits.length === 10) {
        return `${digits.slice(0, 2)}-${digits.slice(2, 6)}-${digits.slice(6)}`
      } else if (digits.length === 9) {
        return `${digits.slice(0, 2)}-${digits.slice(2, 5)}-${digits.slice(5)}`
      }
    } else if (digits.startsWith('01')) {
      // Mobile: 01X-XXXX-XXXX or 01X-XXX-XXXX
      if (digits.length === 11) {
        return `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7)}`
      } else if (digits.length === 10) {
        return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`
      }
    } else if (/^0[3-6]/.test(digits)) {
      // Area code: 0XX-XXXX-XXXX
      if (digits.length === 11) {
        return `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7)}`
      } else if (digits.length === 10) {
        return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`
      }
    }

    return phone
  },

  /**
   * @description Format Korean business registration number
   * @param brn Business registration number
   * @returns Formatted business number (XXX-XX-XXXXX)
   */
  formatBusinessNumber: (brn: string): string => {
    const digits = brn.replace(/[^0-9]/g, '')

    if (digits.length !== 10) {
      return brn
    }

    return `${digits.slice(0, 3)}-${digits.slice(3, 5)}-${digits.slice(5)}`
  }
}
export default util
