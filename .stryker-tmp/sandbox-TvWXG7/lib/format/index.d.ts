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
export declare function formatBytes(bytes: number, precision?: number): string;
/**
 * Format number with thousand separators
 * @param num - Number to format
 * @param locale - Locale string (default: 'en-US')
 * @returns Formatted string with separators
 */
export declare function formatNumber(num: number, locale?: string): string;
/**
 * Format number as currency
 * @param amount - Amount to format
 * @param currency - Currency code (KRW, USD, EUR, JPY, CNY)
 * @returns Formatted currency string
 */
export declare function formatCurrency(amount: number, currency?: 'KRW' | 'USD' | 'EUR' | 'JPY' | 'CNY'): string;
/**
 * Format a number as a percentage string
 * @param value - Number to format as percent (e.g., 0.42 or 42)
 * @param decimals - Decimal places (default: 1)
 * @param isDecimal - If true, value is treated as a decimal fraction (0.42 -> 42%)
 * @returns Formatted percent string (e.g., '42.0%')
 */
export declare function formatPercent(value: number, decimals?: number, isDecimal?: boolean): string;
