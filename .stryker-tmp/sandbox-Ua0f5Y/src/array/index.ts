/**
 * Array utility functions
 * @module array
 */
// @ts-nocheck


/**
 * Check if two arrays are equal (shallow comparison)
 * @param a - First array to compare
 * @param b - Second array to compare
 * @returns true if arrays are equal, false otherwise
 */
export function equalArrays(a: unknown[], b: unknown[]): boolean {
  if (!a || !b) return false
  if (!Array.isArray(a) || !Array.isArray(b)) return false
  if (a === b) return true
  if (a.length != b.length) return false
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false
  }
  return true
}

/**
 * Group array of objects by key
 * @param array - Array to group
 * @param key - Key to group by
 * @returns Grouped object
 */
export function groupBy<T extends Record<string, unknown>>(
  array: T[],
  key: keyof T
): Record<string, T[]> {
  if (!array || !Array.isArray(array)) return {}
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
}

/**
 * Sort array of objects by key
 * @param array - Array to sort
 * @param key - Key to sort by
 * @param order - Sort order ('asc' or 'desc')
 * @returns Sorted array (new array, original unchanged)
 */
export function sortBy<T extends Record<string, unknown>>(
  array: T[],
  key: keyof T,
  order: 'asc' | 'desc' = 'asc'
): T[] {
  if (!array || !Array.isArray(array)) return []
  return [...array].sort((a, b) => {
    const aVal = a[key]
    const bVal = b[key]
    if (aVal < bVal) return order === 'asc' ? -1 : 1
    if (aVal > bVal) return order === 'asc' ? 1 : -1
    return 0
  })
}

/**
 * Split array into chunks of a specified size
 * @param array - Array to chunk
 * @param size - Chunk size
 * @returns Array of chunks
 */
export function chunk<T>(array: T[], size: number): T[][] {
  if (!array || !Array.isArray(array)) return []
  if (size <= 0) return []
  const result: T[][] = []
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size))
  }
  return result
}

/**
 * Remove duplicate values from an array
 * @param array - Input array
 * @returns Array with duplicates removed (preserves first occurrence)
 */
export function unique<T>(array: T[]): T[] {
  if (!array || !Array.isArray(array)) return []
  return [...new Set(array)]
}

/**
 * Randomly shuffle an array (Fisher-Yates algorithm)
 * @param array - Array to shuffle
 * @returns New shuffled array (original unchanged)
 */
export function shuffle<T>(array: T[]): T[] {
  if (!array || !Array.isArray(array)) return []
  const result = [...array]
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[result[i], result[j]] = [result[j], result[i]]
  }
  return result
}

/**
 * Flatten a nested array by one level (or deeply with depth param)
 * @param array - Array to flatten
 * @param depth - Depth to flatten (default: 1)
 * @returns Flattened array
 */
export function flatten<T>(array: T[], depth = 1): T[] {
  if (!array || !Array.isArray(array)) return []
  return (array as unknown[]).flat(depth) as T[]
}
