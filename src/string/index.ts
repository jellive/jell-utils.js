/**
 * String utility functions
 * @module string
 */

/**
 * Encode uri parsing (like &lt; => <, &gt; => >)
 * @param txt - Original string
 * @returns Tag parsed string
 */
export function parseTag(txt: string): string {
  return txt.replace(/&lt;/gi, '<').replace(/&gt;/gi, '>')
}

/**
 * Convert string to camelCase format
 * @param txt - Input string to convert (supports snake_case and space-separated)
 * @returns camelCase formatted string
 */
export function toCamelCase(txt: string): string {
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
}

/**
 * Convert string to snake_case format
 * @param txt - Input string to convert
 * @returns snake_case formatted string
 */
export function toSnakeCase(txt: string): string {
  txt = typeof txt !== 'string' ? '' : txt
  txt = txt.toLowerCase().replace(/ /g, '_')
  return txt
}

/**
 * Make title case string (first character capital and word space)
 * @param txt - Input string to convert
 * @returns Title case string with proper spacing
 */
export function toTitleCase(txt: string): string {
  if (typeof txt !== 'string') return ''
  const result = txt
    .replace(/_/g, ' ')
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .split(/\s+/)
    .filter(word => word.length > 0)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')
  return result
}

/**
 * Convert HTML br tags to line breaks
 * @param txt - Input string with br tags
 * @returns String with br tags converted to newlines
 */
export function toText(txt: string): string {
  return txt.replace(/<br>/gi, '\n')
}

/**
 * Convert line breaks to HTML br tags
 * @param txt - Input string with newlines
 * @returns String with newlines converted to br tags
 */
export function toHtml(txt: string): string {
  return txt.replace(/\n/gi, '<br>')
}

/**
 * Safely remove HTML tags from text, preventing XSS attacks.
 * Uses DOM parsing with textContent assignment to avoid XSS.
 * @param txt - Input string with HTML tags
 * @param preserveErrorTags - Whether to preserve elements with 'suggestCheck' class
 * @returns Sanitized text with specified tags removed
 */
export function clearTag(txt: string, preserveErrorTags = false): string {
  if (typeof txt !== 'string') return ''
  const tempDiv = document.createElement('div')
  tempDiv.textContent = ''
  try {
    tempDiv.innerHTML = txt
  } catch {
    return txt.replace(/<[^>]*>/g, '')
  }
  const tagsToRemove = ['div', 'font', 'span']
  tagsToRemove.forEach(tagName => {
    const elements = tempDiv.querySelectorAll(tagName)
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i]
      const hasErrorClass = element.className.indexOf('suggestCheck') !== -1
      if (preserveErrorTags && hasErrorClass) continue
      const parent = element.parentNode
      if (parent) {
        const textContent = element.textContent || ''
        const textNode = document.createTextNode(textContent)
        parent.replaceChild(textNode, element)
      }
    }
  })
  const result = tempDiv.innerHTML.replace(/<br\s*\/?>/gi, '\n')
  return result.replace(
    /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    ''
  )
}

/**
 * Replace word in str with index
 * @param str - Original string
 * @param txt - Replace word
 * @param startIndex - Slice first index
 * @param endIndex - Slice last index
 * @returns Modified string
 */
export function replaceBetween(
  str: string,
  txt: string,
  startIndex: number,
  endIndex: number
): string {
  return `${str.substring(0, startIndex)}${txt}${str.substring(endIndex)}`
}

/**
 * Extract only numbers from string
 * @param str - Input string
 * @returns String containing only numbers
 */
export function extractNumbers(str: string): string {
  return str.replace(/[^0-9]/g, '')
}

/**
 * Get file extension from filename or path
 * @param filename - Filename or path
 * @returns File extension without dot (e.g., 'jpg', 'pdf')
 */
export function getFileExtension(filename: string): string {
  const parts = filename.split('.')
  return parts.length > 1 ? parts[parts.length - 1].toLowerCase() : ''
}

/**
 * Mask sensitive string (e.g., credit card, phone)
 * @param str - String to mask
 * @param visibleStart - Number of visible characters at start
 * @param visibleEnd - Number of visible characters at end
 * @param maskChar - Character to use for masking
 * @returns Masked string
 */
export function maskString(
  str: string,
  visibleStart = 3,
  visibleEnd = 3,
  maskChar = '*'
): string {
  if (str.length <= visibleStart + visibleEnd) return str
  const start = str.substring(0, visibleStart)
  const end = str.substring(str.length - visibleEnd)
  const masked = maskChar.repeat(str.length - visibleStart - visibleEnd)
  return start + masked + end
}

/**
 * Convert object to URL query string
 * @param obj - Object to convert
 * @returns Query string (e.g., 'key1=value1&key2=value2')
 */
export function objectToQueryString(obj: Record<string, unknown>): string {
  return Object.entries(obj)
    .filter(([, value]) => value !== undefined && value !== null)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`
    )
    .join('&')
}

/**
 * Truncate a string to a maximum length, appending a suffix if truncated
 * @param str - Input string
 * @param maxLength - Maximum length before truncation
 * @param suffix - Suffix to append when truncated (default: '...')
 * @returns Truncated string
 */
export function truncate(str: string, maxLength: number, suffix = '...'): string {
  if (typeof str !== 'string') return ''
  if (str.length <= maxLength) return str
  return str.slice(0, maxLength - suffix.length) + suffix
}

/**
 * Convert a string to a URL-friendly slug
 * @param str - Input string
 * @returns Slugified string (lowercase, hyphens instead of spaces/special chars)
 */
export function slugify(str: string): string {
  if (typeof str !== 'string') return ''
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

/**
 * Convert camelCase string to kebab-case
 * @param str - camelCase input string
 * @returns kebab-case string
 */
export function camelToKebab(str: string): string {
  if (typeof str !== 'string') return ''
  return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()
}

/**
 * Convert kebab-case string to camelCase
 * @param str - kebab-case input string
 * @returns camelCase string
 */
export function kebabToCamel(str: string): string {
  if (typeof str !== 'string') return ''
  return str.replace(/-([a-z])/g, (_, char) => char.toUpperCase())
}

/**
 * Mask an email address for display (e.g., te***@example.com)
 * @param email - Email address to mask
 * @returns Masked email string
 */
export function maskEmail(email: string): string {
  if (typeof email !== 'string') return ''
  const atIndex = email.indexOf('@')
  if (atIndex < 0) return email
  const local = email.slice(0, atIndex)
  const domain = email.slice(atIndex)
  if (local.length <= 2) return local[0] + '*'.repeat(local.length - 1) + domain
  const visible = Math.max(2, Math.ceil(local.length / 3))
  return local.slice(0, visible) + '*'.repeat(local.length - visible) + domain
}

/**
 * Mask a phone number for display (e.g., 010-****-5678)
 * @param phone - Phone number string (digits and hyphens)
 * @returns Masked phone string
 */
export function maskPhone(phone: string): string {
  if (typeof phone !== 'string') return ''
  const digits = phone.replace(/[^0-9]/g, '')
  if (digits.length === 11) {
    return `${digits.slice(0, 3)}-****-${digits.slice(7)}`
  }
  if (digits.length === 10) {
    return `${digits.slice(0, 3)}-***-${digits.slice(7)}`
  }
  return phone
}
