/**
 * Format utility functions
 * @module format
 */
// @ts-nocheck


/**
 * Format bytes to human-readable file size string
 * @param bytes - Number of bytes
 * @param precision - Decimal places (default: auto — 0 for B, 2 for larger)
 * @returns Formatted file size string (e.g., '1.50 KB', '2 MB')
 */
export function formatBytes(bytes: number, precision?: number): string {
  const units = ['B', 'KB', 'MB', 'GB', 'TB']
  let size = bytes
  let unitIndex = 0
  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024
    unitIndex++
  }
  const decimals = precision !== undefined ? precision : unitIndex === 0 ? 0 : 2
  return `${size.toFixed(decimals)} ${units[unitIndex]}`
}

/**
 * Format number with thousand separators
 * @param num - Number to format
 * @param locale - Locale string (default: 'en-US')
 * @returns Formatted string with separators
 */
export function formatNumber(num: number, locale = 'en-US'): string {
  return num.toLocaleString(locale)
}

/**
 * Format number as currency
 * @param amount - Amount to format
 * @param currency - Currency code (KRW, USD, EUR, JPY, CNY)
 * @returns Formatted currency string
 */
export function formatCurrency(
  amount: number,
  currency: 'KRW' | 'USD' | 'EUR' | 'JPY' | 'CNY' = 'KRW'
): string {
  const formatted = formatNumber(amount)
  const symbols: Record<string, { symbol: string; prefix: boolean }> = {
    KRW: { symbol: '원', prefix: false },
    USD: { symbol: '$', prefix: true },
    EUR: { symbol: '€', prefix: true },
    JPY: { symbol: '¥', prefix: true },
    CNY: { symbol: '¥', prefix: true }
  }
  const { symbol, prefix } = symbols[currency]
  return prefix ? `${symbol}${formatted}` : `${formatted}${symbol}`
}

/**
 * Format a number as a percentage string
 * @param value - Number to format as percent (e.g., 0.42 or 42)
 * @param decimals - Decimal places (default: 1)
 * @param isDecimal - If true, value is treated as a decimal fraction (0.42 -> 42%)
 * @returns Formatted percent string (e.g., '42.0%')
 */
export function formatPercent(
  value: number,
  decimals = 1,
  isDecimal = false
): string {
  const pct = isDecimal ? value * 100 : value
  return `${pct.toFixed(decimals)}%`
}
