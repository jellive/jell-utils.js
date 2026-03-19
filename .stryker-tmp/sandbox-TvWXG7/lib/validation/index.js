// @ts-nocheck
"use strict";
/**
 * Validation utility functions
 * @module validation
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmail = isEmail;
exports.isPhone = isPhone;
exports.isPhoneNumber = isPhoneNumber;
exports.isUrl = isUrl;
exports.isUUID = isUUID;
exports.isBusinessNumber = isBusinessNumber;
exports.formatPhoneNumber = formatPhoneNumber;
exports.formatBusinessNumber = formatBusinessNumber;
/**
 * Validate email address
 * @param email - Email address to validate
 * @returns true if valid email, false otherwise
 */
function isEmail(email) {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return emailRegex.test(email);
}
/**
 * Validate Korean phone number
 * @param phone - Phone number to validate
 * @returns true if valid Korean phone number, false otherwise
 */
function isPhone(phone) {
    const mobileRegex = /^01[016789]-?\d{3,4}-?\d{4}$/;
    const landlineRegex = /^0[2-6][1-5]?-?\d{3,4}-?\d{4}$/;
    return mobileRegex.test(phone) || landlineRegex.test(phone);
}
/**
 * Validate Korean phone number (alias for isPhone)
 * @param phone - Phone number to validate
 * @returns true if valid Korean phone number, false otherwise
 */
function isPhoneNumber(phone) {
    return isPhone(phone);
}
/**
 * Validate URL
 * @param url - URL to validate
 * @returns true if valid URL, false otherwise
 */
function isUrl(url) {
    try {
        const parsed = new URL(url);
        return ['http:', 'https:', 'ftp:'].includes(parsed.protocol);
    }
    catch (_a) {
        return false;
    }
}
/**
 * Validate UUID (v1-v5)
 * @param uuid - UUID string to validate
 * @returns true if valid UUID, false otherwise
 */
function isUUID(uuid) {
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    return uuidRegex.test(uuid);
}
/**
 * Validate Korean business registration number (사업자등록번호)
 * @param businessNumber - Business registration number string (10 digits)
 * @returns true if valid, false otherwise
 */
function isBusinessNumber(businessNumber) {
    const cleaned = businessNumber.replace(/[^0-9]/g, '');
    if (cleaned.length !== 10)
        return false;
    const digits = cleaned.split('').map(Number);
    const checksum = [1, 3, 7, 1, 3, 7, 1, 3, 5];
    let sum = 0;
    for (let i = 0; i < 9; i++) {
        sum += digits[i] * checksum[i];
    }
    sum += Math.floor((digits[8] * 5) / 10);
    const result = (10 - (sum % 10)) % 10;
    return result === digits[9];
}
/**
 * Format Korean phone number with hyphens
 * @param phone - Phone number to format
 * @returns Formatted phone number
 */
function formatPhoneNumber(phone) {
    const digits = phone.replace(/[^0-9]/g, '');
    if (digits.startsWith('02')) {
        if (digits.length === 10) {
            return `${digits.slice(0, 2)}-${digits.slice(2, 6)}-${digits.slice(6)}`;
        }
        else if (digits.length === 9) {
            return `${digits.slice(0, 2)}-${digits.slice(2, 5)}-${digits.slice(5)}`;
        }
    }
    else if (digits.startsWith('01')) {
        if (digits.length === 11) {
            return `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7)}`;
        }
        else if (digits.length === 10) {
            return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;
        }
    }
    else if (/^0[3-6]/.test(digits)) {
        if (digits.length === 11) {
            return `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7)}`;
        }
        else if (digits.length === 10) {
            return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;
        }
    }
    return phone;
}
/**
 * Format Korean business registration number
 * @param brn - Business registration number
 * @returns Formatted business number (XXX-XX-XXXXX)
 */
function formatBusinessNumber(brn) {
    const digits = brn.replace(/[^0-9]/g, '');
    if (digits.length !== 10) {
        return brn;
    }
    return `${digits.slice(0, 3)}-${digits.slice(3, 5)}-${digits.slice(5)}`;
}
