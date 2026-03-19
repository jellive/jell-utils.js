/**
 * Object utility functions
 * @module object
 */

/**
 * Return deep copied object by original object using structuredClone or JSON fallback
 * @param obj - Object to deep clone
 * @returns Deep cloned object
 */
export function clone<T>(obj: T): T {
  if (obj === null || typeof obj !== 'object') {
    return obj
  }
  if (typeof structuredClone !== 'undefined') {
    return structuredClone(obj)
  }
  try {
    return JSON.parse(JSON.stringify(obj)) as T
  } catch {
    if (Array.isArray(obj)) {
      return obj.map((item: unknown) =>
        typeof item === 'object' && item !== null ? clone(item) : item
      ) as T
    }
    const copy = {} as T
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const value = obj[key]
        copy[key] =
          typeof value === 'object' && value !== null
            ? clone(value)
            : value
      }
    }
    return copy
  }
}

/**
 * Get nested object value by path string
 * @param obj - Target object
 * @param path - Path string (e.g., 'user.profile.name')
 * @param defaultValue - Default value if path not found
 * @returns Value at path or default value
 */
export function getByPath<T = unknown>(
  obj: Record<string, unknown>,
  path: string,
  defaultValue?: T
): T {
  const keys = path.split('.')
  let result: unknown = obj
  for (const key of keys) {
    if (result === null || result === undefined) {
      return defaultValue as T
    }
    result = (result as Record<string, unknown>)[key]
  }
  return result === undefined ? (defaultValue as T) : (result as T)
}

/**
 * Set nested object value by path string
 * @param obj - Target object
 * @param path - Path string (e.g., 'user.profile.name')
 * @param value - Value to set
 */
export function setByPath(
  obj: Record<string, unknown>,
  path: string,
  value: unknown
): void {
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
}

/**
 * Deep merge two objects
 * @param target - Target object
 * @param source - Source object
 * @returns Merged object (new object, originals unchanged)
 */
export function deepMerge<T extends Record<string, unknown>>(
  target: T,
  source: Partial<T>
): T {
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
        result[key] = deepMerge(
          targetValue as Record<string, unknown>,
          sourceValue as Partial<Record<string, unknown>>
        ) as T[Extract<keyof T, string>]
      } else {
        result[key] = sourceValue as T[Extract<keyof T, string>]
      }
    }
  }
  return result
}

/**
 * Pick specified keys from an object
 * @param obj - Source object
 * @param keys - Keys to pick
 * @returns New object with only the picked keys
 */
export function pick<T extends Record<string, unknown>, K extends keyof T>(
  obj: T,
  keys: K[]
): Pick<T, K> {
  const result = {} as Pick<T, K>
  for (const key of keys) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      result[key] = obj[key]
    }
  }
  return result
}

/**
 * Omit specified keys from an object
 * @param obj - Source object
 * @param keys - Keys to omit
 * @returns New object without the omitted keys
 */
export function omit<T extends Record<string, unknown>, K extends keyof T>(
  obj: T,
  keys: K[]
): Omit<T, K> {
  const result = { ...obj }
  for (const key of keys) {
    delete result[key]
  }
  return result as Omit<T, K>
}

/**
 * Get the diff between two objects (keys that differ, with new values)
 * @param base - Base object
 * @param compare - Object to compare against base
 * @returns Object containing keys that differ, with values from compare
 */
export function diff<T extends Record<string, unknown>>(
  base: T,
  compare: T
): Partial<T> {
  const result: Partial<T> = {}
  const allKeys = new Set([...Object.keys(base), ...Object.keys(compare)])
  for (const key of allKeys) {
    const baseVal = base[key]
    const compareVal = compare[key]
    if (JSON.stringify(baseVal) !== JSON.stringify(compareVal)) {
      result[key as keyof T] = compareVal as T[keyof T]
    }
  }
  return result
}

/**
 * Check if an object (or array/string/null) is empty
 * @param value - Value to check
 * @returns true if empty, false otherwise
 */
export function isEmpty(value: unknown): boolean {
  if (value === null || value === undefined) return true
  if (typeof value === 'string') return value.length === 0
  if (Array.isArray(value)) return value.length === 0
  if (typeof value === 'object') return Object.keys(value as object).length === 0
  return false
}
