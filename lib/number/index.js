"use strict";
/**
 * Number utility functions
 * @module number
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseNumber = parseNumber;
exports.parseTime = parseTime;
exports.formatNumber = formatNumber;
exports.formatCurrency = formatCurrency;
exports.formatFileSize = formatFileSize;
exports.numberToKorean = numberToKorean;
exports.parseNumberFromString = parseNumberFromString;
/**
 * Parse number with default value and proper validation
 * @param target - Original string to parse
 * @param defaultValue - Return default value if parsing fails
 * @param isFloat - Whether to parse as float or integer
 * @returns Parsed number value or default value
 */
function parseNumber(target, defaultValue, isFloat = false) {
    if (!target || typeof target !== 'string' || target.trim() === '') {
        return defaultValue;
    }
    const parsed = isFloat ? parseFloat(target) : parseInt(target, 10);
    return isNaN(parsed) ? defaultValue : parsed;
}
/**
 * Parse time string to milliseconds
 * @param target - Required format such as '00:11:22' (HH:MM:SS) or '11:22' (MM:SS)
 * @param defaultValue - Default value if parsing fails
 * @returns Parsed milliseconds or default value
 */
function parseTime(target, defaultValue) {
    if (!target || typeof target !== 'string' || target.trim() === '') {
        return defaultValue;
    }
    if (target.indexOf(':') === -1) {
        const parsed = parseInt(target, 10);
        return isNaN(parsed) ? defaultValue : parsed;
    }
    const timeValues = target.split(':').map(value => {
        const parsed = parseInt(value.trim(), 10);
        return isNaN(parsed) ? 0 : parsed;
    });
    if (timeValues.length < 2 || timeValues.length > 3) {
        return defaultValue;
    }
    const [first, second, third = 0] = timeValues;
    if (timeValues.length === 3) {
        return first * 60 * 1000 + second * 1000 + third;
    }
    else {
        return first * 60 * 1000 + second * 1000;
    }
}
/**
 * Format number with thousand separators
 * @param num - Number to format
 * @returns Formatted string with commas
 */
function formatNumber(num) {
    return num.toLocaleString('en-US');
}
/**
 * Format number as currency
 * @param amount - Amount to format
 * @param currency - Currency code (KRW, USD, EUR, JPY, CNY)
 * @returns Formatted currency string
 */
function formatCurrency(amount, currency = 'KRW') {
    const formatted = formatNumber(amount);
    const symbols = {
        KRW: { symbol: '원', prefix: false },
        USD: { symbol: '$', prefix: true },
        EUR: { symbol: '€', prefix: true },
        JPY: { symbol: '¥', prefix: true },
        CNY: { symbol: '¥', prefix: true }
    };
    const { symbol, prefix } = symbols[currency];
    return prefix ? `${symbol}${formatted}` : `${formatted}${symbol}`;
}
/**
 * Format bytes to human-readable file size
 * @param bytes - Number of bytes
 * @param precision - Decimal precision (default: 0)
 * @returns Formatted file size string
 */
function formatFileSize(bytes, precision) {
    const units = ['B', 'KB', 'MB', 'GB', 'TB'];
    let size = bytes;
    let unitIndex = 0;
    while (size >= 1024 && unitIndex < units.length - 1) {
        size /= 1024;
        unitIndex++;
    }
    const decimals = precision !== undefined ? precision : unitIndex === 0 ? 0 : 0;
    return `${size.toFixed(decimals)} ${units[unitIndex]}`;
}
/**
 * Convert number to Korean words
 * @param num - Number to convert
 * @returns Korean number string (e.g., '천이백삼십사')
 */
function numberToKorean(num) {
    if (num === 0)
        return '영';
    const digits = ['', '일', '이', '삼', '사', '오', '육', '칠', '팔', '구'];
    const units = ['', '십', '백', '천'];
    const bigUnits = ['', '만', '억', '조'];
    const processGroup = (n) => {
        let result = '';
        let temp = n;
        for (let i = 3; i >= 0; i--) {
            const digit = Math.floor(temp / Math.pow(10, i));
            temp %= Math.pow(10, i);
            if (digit > 0) {
                if (digit > 1 || i === 0) {
                    result += digits[digit];
                }
                result += units[i];
            }
        }
        return result;
    };
    let result = '';
    let groupIndex = 0;
    let remaining = num;
    while (remaining > 0) {
        const group = remaining % 10000;
        if (group > 0) {
            const groupStr = processGroup(group);
            if (group === 1 && groupIndex >= 1) {
                if (groupIndex >= 2) {
                    result = '일' + bigUnits[groupIndex] + result;
                }
                else {
                    result = bigUnits[groupIndex] + result;
                }
            }
            else {
                result = groupStr + bigUnits[groupIndex] + result;
            }
        }
        remaining = Math.floor(remaining / 10000);
        groupIndex++;
    }
    return result;
}
/**
 * Parse number from formatted string
 * @param str - String containing number (with commas, currency symbols, etc.)
 * @returns Parsed number
 */
function parseNumberFromString(str) {
    const cleaned = str.replace(/[^0-9.-]/g, '');
    return parseFloat(cleaned);
}
