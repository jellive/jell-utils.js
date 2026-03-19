/**
 * Number utility functions
 * @module number
 */
/**
 * Parse number with default value and proper validation
 * @param target - Original string to parse
 * @param defaultValue - Return default value if parsing fails
 * @param isFloat - Whether to parse as float or integer
 * @returns Parsed number value or default value
 */
export declare function parseNumber(target: string, defaultValue: number, isFloat?: boolean): number;
/**
 * Parse time string to milliseconds
 * @param target - Required format such as '00:11:22' (HH:MM:SS) or '11:22' (MM:SS)
 * @param defaultValue - Default value if parsing fails
 * @returns Parsed milliseconds or default value
 */
export declare function parseTime(target: string, defaultValue: number): number;
/**
 * Format number with thousand separators
 * @param num - Number to format
 * @returns Formatted string with commas
 */
export declare function formatNumber(num: number): string;
/**
 * Format number as currency
 * @param amount - Amount to format
 * @param currency - Currency code (KRW, USD, EUR, JPY, CNY)
 * @returns Formatted currency string
 */
export declare function formatCurrency(amount: number, currency?: 'KRW' | 'USD' | 'EUR' | 'JPY' | 'CNY'): string;
/**
 * Format bytes to human-readable file size
 * @param bytes - Number of bytes
 * @param precision - Decimal precision (default: 0)
 * @returns Formatted file size string
 */
export declare function formatFileSize(bytes: number, precision?: number): string;
/**
 * Convert number to Korean words
 * @param num - Number to convert
 * @returns Korean number string (e.g., '천이백삼십사')
 */
export declare function numberToKorean(num: number): string;
/**
 * Parse number from formatted string
 * @param str - String containing number (with commas, currency symbols, etc.)
 * @returns Parsed number
 */
export declare function parseNumberFromString(str: string): number;
