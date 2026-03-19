/**
 * jell-utils v1.0.0
 * Korean-specialized TypeScript utility library
 * Barrel export — re-exports all modules for backward compatibility.
 *
 * Usage:
 *   import util from 'jell-utils'        // default object (v0.x compat)
 *   import { truncate } from 'jell-utils' // named exports (v1.x)
 *   import { truncate } from 'jell-utils/string' // subpath import (v1.x)
 */
// @ts-nocheck

export * from './string';
export * from './array';
export * from './object';
export * from './async';
export * from './date';
export * from './korean';
export * from './number';
export { isEmail, isPhone, isPhoneNumber, isUrl, isUUID, formatPhoneNumber, formatBusinessNumber } from './validation';
export { formatBytes, formatPercent } from './format';
import * as stringUtils from './string';
import * as arrayUtils from './array';
import * as objectUtils from './object';
import * as asyncUtils from './async';
import * as dateUtils from './date';
import * as koreanUtils from './korean';
import * as numberUtils from './number';
import * as validationUtils from './validation';
import * as formatUtils from './format';
/**
 * Default export object — backward-compatible with v0.x `import util from 'jell-utils'`
 * All original function names are preserved.
 */
declare const util: {
    parseTag: typeof stringUtils.parseTag;
    toCamelCase: typeof stringUtils.toCamelCase;
    toSnakeCase: typeof stringUtils.toSnakeCase;
    toTitleCase: typeof stringUtils.toTitleCase;
    toText: typeof stringUtils.toText;
    toHtml: typeof stringUtils.toHtml;
    clearTag: typeof stringUtils.clearTag;
    replaceBetween: typeof stringUtils.replaceBetween;
    extractNumbers: typeof stringUtils.extractNumbers;
    getFileExtension: typeof stringUtils.getFileExtension;
    maskString: typeof stringUtils.maskString;
    objectToQueryString: typeof stringUtils.objectToQueryString;
    truncate: typeof stringUtils.truncate;
    slugify: typeof stringUtils.slugify;
    camelToKebab: typeof stringUtils.camelToKebab;
    kebabToCamel: typeof stringUtils.kebabToCamel;
    maskEmail: typeof stringUtils.maskEmail;
    maskPhone: typeof stringUtils.maskPhone;
    equalArrays: typeof arrayUtils.equalArrays;
    groupBy: typeof arrayUtils.groupBy;
    sortBy: typeof arrayUtils.sortBy;
    chunk: typeof arrayUtils.chunk;
    unique: typeof arrayUtils.unique;
    shuffle: typeof arrayUtils.shuffle;
    flatten: typeof arrayUtils.flatten;
    clone: typeof objectUtils.clone;
    getByPath: typeof objectUtils.getByPath;
    setByPath: typeof objectUtils.setByPath;
    deepMerge: typeof objectUtils.deepMerge;
    pick: typeof objectUtils.pick;
    omit: typeof objectUtils.omit;
    diff: typeof objectUtils.diff;
    isEmpty: typeof objectUtils.isEmpty;
    retry: typeof asyncUtils.retry;
    timeout: typeof asyncUtils.timeout;
    parallel: typeof asyncUtils.parallel;
    serial: typeof asyncUtils.serial;
    getNowDate: typeof dateUtils.getNowDate;
    getKoreanDate: typeof dateUtils.getKoreanDate;
    formatDate: typeof dateUtils.formatDate;
    calDDay: typeof dateUtils.calDDay;
    dateDiff: typeof dateUtils.dateDiff;
    formatDateAdvanced: typeof dateUtils.formatDateAdvanced;
    timeAgo: typeof dateUtils.timeAgo;
    getDaysInMonth: typeof dateUtils.getDaysInMonth;
    isLeapYear: typeof dateUtils.isLeapYear;
    relative: typeof dateUtils.relative;
    isWeekend: typeof dateUtils.isWeekend;
    addDays: typeof dateUtils.addDays;
    diffDays: typeof dateUtils.diffDays;
    isKorean: typeof koreanUtils.isKorean;
    chosungSearch: typeof koreanUtils.chosungSearch;
    getChosung: typeof koreanUtils.getChosung;
    withEunNeun: typeof koreanUtils.withEunNeun;
    withIGa: typeof koreanUtils.withIGa;
    withEulReul: typeof koreanUtils.withEulReul;
    parseNumber: typeof numberUtils.parseNumber;
    parseTime: typeof numberUtils.parseTime;
    formatNumber: typeof numberUtils.formatNumber;
    formatCurrency: typeof numberUtils.formatCurrency;
    formatFileSize: typeof numberUtils.formatFileSize;
    numberToKorean: typeof numberUtils.numberToKorean;
    parseNumberFromString: typeof numberUtils.parseNumberFromString;
    isBusinessNumber: typeof validationUtils.isBusinessNumber;
    isEmail: typeof validationUtils.isEmail;
    isPhoneNumber: typeof validationUtils.isPhoneNumber;
    isPhone: typeof validationUtils.isPhone;
    isUrl: typeof validationUtils.isUrl;
    isUUID: typeof validationUtils.isUUID;
    formatPhoneNumber: typeof validationUtils.formatPhoneNumber;
    formatBusinessNumber: typeof validationUtils.formatBusinessNumber;
    formatBytes: typeof formatUtils.formatBytes;
    formatPercent: typeof formatUtils.formatPercent;
};
export default util;
