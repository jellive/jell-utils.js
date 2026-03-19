// @ts-nocheck
"use strict";
/**
 * Format utility functions
 * @module format
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatBytes = formatBytes;
exports.formatNumber = formatNumber;
exports.formatCurrency = formatCurrency;
exports.formatPercent = formatPercent;
/**
 * Format bytes to human-readable file size string
 * @param bytes - Number of bytes
 * @param precision - Decimal places (default: auto — 0 for B, 2 for larger)
 * @returns Formatted file size string (e.g., '1.50 KB', '2 MB')
 */
function formatBytes(bytes, precision) {
    const units = ['B', 'KB', 'MB', 'GB', 'TB'];
    let size = bytes;
    let unitIndex = 0;
    while (size >= 1024 && unitIndex < units.length - 1) {
        size /= 1024;
        unitIndex++;
    }
    const decimals = precision !== undefined ? precision : unitIndex === 0 ? 0 : 2;
    return `${size.toFixed(decimals)} ${units[unitIndex]}`;
}
/**
 * Format number with thousand separators
 * @param num - Number to format
 * @param locale - Locale string (default: 'en-US')
 * @returns Formatted string with separators
 */
function formatNumber(num, locale = 'en-US') {
    return num.toLocaleString(locale);
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
 * Format a number as a percentage string
 * @param value - Number to format as percent (e.g., 0.42 or 42)
 * @param decimals - Decimal places (default: 1)
 * @param isDecimal - If true, value is treated as a decimal fraction (0.42 -> 42%)
 * @returns Formatted percent string (e.g., '42.0%')
 */
function formatPercent(value, decimals = 1, isDecimal = false) {
    const pct = isDecimal ? value * 100 : value;
    return `${pct.toFixed(decimals)}%`;
}
