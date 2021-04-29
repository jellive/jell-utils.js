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
   * @description return deep copied object by original object.
   * @todo need change Record<string, unknown> to Object(Typescript warning)
   * @param obj Record<string, unknown>
   * @returns Record<string, unknown>
   */
  clone: (obj: Record<string, unknown>): Record<string, unknown> => {
    // if (obj === null || typeof obj !== 'object') {
    //   return obj
    // }
    const copy = obj.constructor() as Record<string, unknown>
    for (const attr in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, attr)) {
        // from: https://ourcodeworld.com/articles/read/1425/how-to-fix-eslint-error-do-not-access-objectprototype-method-hasownproperty-from-target-object-no-prototype-builtins
        copy[attr] = obj[attr]
      }
    }
    return copy
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
   * @description parseNumber with defaultvalue
   * @param target original string
   * @param defaultValue return default value
   * @returns parsed number value.
   */
  parseNumber: (
    target: string,
    defaultValue: number,
    isFloat = false
  ): number => {
    if (!target || typeof parseInt(target) !== 'number') {
      return defaultValue
    }

    return isFloat ? parseFloat(target) : parseInt(target)
  },
  /**
   *
   * @param target required format such as '00:11:22' / '11:22'
   * @param defaultValue
   * @returns
   */
  parseTime: (target: string, defaultValue: number): number => {
    if (!target.includes(':'))
      return defaultValue ? defaultValue : parseInt(target)

    const matched = target.match(/:/gi)
    if (target && matched) {
      const isMilliSecond = matched.length == 2
      const timeValues = target.split(':').map(value => parseInt(value, 0))
      let minute = 0
      let second = 0
      let milliSecond = 0
      if (isMilliSecond) {
        minute = timeValues[0] || 0
        second = timeValues[1] || 0
        milliSecond = timeValues[2] || 0
      } else {
        minute = timeValues[0] || 0
        second = timeValues[1] || 0
      }
      const milliSeconds: number =
        minute * 60 * 1000 + second * 1000 + milliSecond
      return milliSeconds
    } else {
      return 0
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
   * @returns string korean date format
   */
  getKoreanDate: (dateString = new Date(), isYear = false): string => {
    const targetDate = new Date(dateString)
    const year = targetDate.getFullYear()
    const month = `0${targetDate.getMonth() + 1}`.substr(-2)
    const date = `0${targetDate.getDate()}`.substr(-2)

    if (isYear) return `${year}년 ${month}월 ${date}일`
    return `${month}월 ${date}일`
  },
  /**
   * @description convert date to yyyy-mm-dd format string.
   * @param date date formatted string.
   * @returns yyyy-mm-dd formatted string.
   */
  formatDate: (date: Date | string = new Date()): string => {
    const d = new Date(date)
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
    const countDownDate = new Date(date)
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
   * @description make camel cased word.
   * @param txt
   * @returns
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
   * @description make snake cased word.
   * @param txt
   * @returns
   */
  toSnakeCase: (txt: string): string => {
    txt = typeof txt !== 'string' ? '' : txt
    txt = txt.toLowerCase().replace(/ /g, '_')
    return txt
  },
  /**
   * @description make title case string(first character capital and word space)
   * @param txt
   * @returns
   */
  toTitleCase: (txt: string): string => {
    txt = typeof txt !== 'string' ? '' : txt

    // snake case
    txt = txt.replace(/_/g, ' ')
    txt = txt
      .split(' ')
      .map(word => word.charAt(0).toUpperCase().concat(word.substr(1)))
      .join(' ')

    // input space when camel case
    const upperCases = txt.match(/[A-Z]/g) || []
    upperCases.forEach(varter => {
      const regEx = new RegExp(varter, 'g')
      txt = txt.replace(regEx, ' ' + varter)
    })

    while (/{2}/g.exec(txt) != null) {
      txt = txt.replace(/{2}/g, ' ')
    }
    txt = txt.trim()

    return txt
  },
  /**
   * @description br tag to line break.
   * @param txt
   * @returns
   */
  toText: (txt: string): string => {
    return txt.replace(/<br>/gi, '\n')
  },
  /**
   * @description line break to br tag.
   * @param txt
   * @returns
   */
  toHtml: (txt: string): string => {
    return txt.replace(/\n/gi, '<br>')
  },
  /**
   * @description remove tag brace text.
   * @param txt string
   * @param isError (beta) check 'suggestCheck' tag.
   * @returns
   */
  clearTag: (txt: string, isError = false): string => {
    const txtWrap = document.createElement('div')
    txtWrap.innerHTML = txt

    const tags = ['div', 'font', 'span']
    tags.forEach(tag => {
      let elements = txtWrap.querySelectorAll(tag)
      let errorWraps = txtWrap.querySelectorAll(`${tag}.suggestCheck`)
      let isContinue = isError
        ? elements.length - errorWraps.length > 0
        : elements.length > 0

      while (isContinue) {
        elements.forEach(element => {
          const isErrorWrap = element.className.includes('suggestCheck')
          if (!isError || !isErrorWrap) {
            element.outerHTML = element.innerHTML
          }
        })

        elements = txtWrap.querySelectorAll(tag)
        errorWraps = txtWrap.querySelectorAll(`${tag}.suggestCheck`)
        isContinue = isError
          ? elements.length - errorWraps.length > 0
          : elements.length > 0
      }
    })

    const clearedTxt = txtWrap.innerHTML.replace(/<br>/gi, '\n')
    return clearedTxt
  },
  /**
   * @description check same between two array.
   * @param a array
   * @param b array
   * @returns
   */
  equalArrays: (a: unknown[], b: unknown[]): boolean => {
    if (a === b) return true
    if (!a || !b) return false
    if (a.length != b.length) return false

    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false
    }
    return true
  }
}
export { util }
