/**
 * Date utility functions
 * @module date
 */
/**
 * Generate string from now time with datetime format
 * @returns String now datetime format (YYYY-MM-DD HH:MM:SS)
 */
export declare function getNowDate(): string;
/**
 * Generate string from inputted time with Korean date format
 * @param dateString - Date input (Date object or string)
 * @param isYear - Whether to include year in output
 * @returns Korean date format string
 */
export declare function getKoreanDate(dateString?: Date | string, isYear?: boolean): string;
/**
 * Convert date to yyyy-mm-dd format string
 * @param date - Date formatted string or Date object
 * @returns yyyy-mm-dd formatted string
 */
export declare function formatDate(date?: Date | string): string;
/**
 * Calculate d-day with target date
 * @param date - Target date
 * @returns d-day number (positive = future, negative = past)
 */
export declare function calDDay(date?: Date | string): number;
/**
 * Calculate difference between two dates
 * @param date1 - First date
 * @param date2 - Second date (defaults to now)
 * @returns Object with days, hours, minutes, seconds difference
 */
export declare function dateDiff(date1: Date | string, date2?: Date | string): {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
};
/**
 * Format date with custom format tokens
 * @param date - Date object or date string
 * @param format - Format string with tokens (YYYY, MM, DD, HH, mm, ss, ddd, dddd)
 * @returns Formatted date string
 */
export declare function formatDateAdvanced(date: Date | string, format: string): string;
/**
 * Get relative time string in Korean
 * @param date - Date object or date string
 * @returns Korean relative time string (e.g., '방금 전', '5분 전', '어제')
 */
export declare function timeAgo(date: Date | string): string;
/**
 * Get the number of days in a month
 * @param year - Year (e.g., 2025)
 * @param month - Month (1-12)
 * @returns Number of days in the month
 */
export declare function getDaysInMonth(year: number, month: number): number;
/**
 * Check if a year is a leap year
 * @param year - Year to check
 * @returns true if leap year, false otherwise
 */
export declare function isLeapYear(year: number): boolean;
/**
 * Get a human-readable relative time string (alias for timeAgo, supports future dates)
 * @param date - Date object or date string
 * @returns Korean relative time string
 */
export declare function relative(date: Date | string): string;
/**
 * Check if a date falls on a weekend (Saturday or Sunday)
 * @param date - Date to check (defaults to now)
 * @returns true if weekend, false otherwise
 */
export declare function isWeekend(date?: Date | string): boolean;
/**
 * Add a number of days to a date
 * @param date - Base date
 * @param days - Number of days to add (negative to subtract)
 * @returns New date with days added
 */
export declare function addDays(date: Date | string, days: number): Date;
/**
 * Get the difference in whole days between two dates
 * @param date1 - First date
 * @param date2 - Second date (defaults to now)
 * @returns Number of whole days between the dates (absolute value)
 */
export declare function diffDays(date1: Date | string, date2?: Date | string): number;
