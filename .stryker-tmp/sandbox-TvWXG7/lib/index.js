// @ts-nocheck
"use strict";
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatPercent = exports.formatBytes = exports.formatBusinessNumber = exports.formatPhoneNumber = exports.isUUID = exports.isUrl = exports.isPhoneNumber = exports.isPhone = exports.isEmail = void 0;
__exportStar(require("./string"), exports);
__exportStar(require("./array"), exports);
__exportStar(require("./object"), exports);
__exportStar(require("./async"), exports);
__exportStar(require("./date"), exports);
__exportStar(require("./korean"), exports);
__exportStar(require("./number"), exports);
// validation: skip isBusinessNumber (already exported from korean above)
var validation_1 = require("./validation");
Object.defineProperty(exports, "isEmail", { enumerable: true, get: function () { return validation_1.isEmail; } });
Object.defineProperty(exports, "isPhone", { enumerable: true, get: function () { return validation_1.isPhone; } });
Object.defineProperty(exports, "isPhoneNumber", { enumerable: true, get: function () { return validation_1.isPhoneNumber; } });
Object.defineProperty(exports, "isUrl", { enumerable: true, get: function () { return validation_1.isUrl; } });
Object.defineProperty(exports, "isUUID", { enumerable: true, get: function () { return validation_1.isUUID; } });
Object.defineProperty(exports, "formatPhoneNumber", { enumerable: true, get: function () { return validation_1.formatPhoneNumber; } });
Object.defineProperty(exports, "formatBusinessNumber", { enumerable: true, get: function () { return validation_1.formatBusinessNumber; } });
// format: skip formatNumber, formatCurrency (already exported from number above)
var format_1 = require("./format");
Object.defineProperty(exports, "formatBytes", { enumerable: true, get: function () { return format_1.formatBytes; } });
Object.defineProperty(exports, "formatPercent", { enumerable: true, get: function () { return format_1.formatPercent; } });
const stringUtils = __importStar(require("./string"));
const arrayUtils = __importStar(require("./array"));
const objectUtils = __importStar(require("./object"));
const asyncUtils = __importStar(require("./async"));
const dateUtils = __importStar(require("./date"));
const koreanUtils = __importStar(require("./korean"));
const numberUtils = __importStar(require("./number"));
const validationUtils = __importStar(require("./validation"));
const formatUtils = __importStar(require("./format"));
/**
 * Default export object — backward-compatible with v0.x `import util from 'jell-utils'`
 * All original function names are preserved.
 */
const util = {
    // string
    parseTag: stringUtils.parseTag,
    toCamelCase: stringUtils.toCamelCase,
    toSnakeCase: stringUtils.toSnakeCase,
    toTitleCase: stringUtils.toTitleCase,
    toText: stringUtils.toText,
    toHtml: stringUtils.toHtml,
    clearTag: stringUtils.clearTag,
    replaceBetween: stringUtils.replaceBetween,
    extractNumbers: stringUtils.extractNumbers,
    getFileExtension: stringUtils.getFileExtension,
    maskString: stringUtils.maskString,
    objectToQueryString: stringUtils.objectToQueryString,
    truncate: stringUtils.truncate,
    slugify: stringUtils.slugify,
    camelToKebab: stringUtils.camelToKebab,
    kebabToCamel: stringUtils.kebabToCamel,
    maskEmail: stringUtils.maskEmail,
    maskPhone: stringUtils.maskPhone,
    // array
    equalArrays: arrayUtils.equalArrays,
    groupBy: arrayUtils.groupBy,
    sortBy: arrayUtils.sortBy,
    chunk: arrayUtils.chunk,
    unique: arrayUtils.unique,
    shuffle: arrayUtils.shuffle,
    flatten: arrayUtils.flatten,
    // object
    clone: objectUtils.clone,
    getByPath: objectUtils.getByPath,
    setByPath: objectUtils.setByPath,
    deepMerge: objectUtils.deepMerge,
    pick: objectUtils.pick,
    omit: objectUtils.omit,
    diff: objectUtils.diff,
    isEmpty: objectUtils.isEmpty,
    // async
    retry: asyncUtils.retry,
    timeout: asyncUtils.timeout,
    parallel: asyncUtils.parallel,
    serial: asyncUtils.serial,
    // date
    getNowDate: dateUtils.getNowDate,
    getKoreanDate: dateUtils.getKoreanDate,
    formatDate: dateUtils.formatDate,
    calDDay: dateUtils.calDDay,
    dateDiff: dateUtils.dateDiff,
    formatDateAdvanced: dateUtils.formatDateAdvanced,
    timeAgo: dateUtils.timeAgo,
    getDaysInMonth: dateUtils.getDaysInMonth,
    isLeapYear: dateUtils.isLeapYear,
    relative: dateUtils.relative,
    isWeekend: dateUtils.isWeekend,
    addDays: dateUtils.addDays,
    diffDays: dateUtils.diffDays,
    // korean
    isKorean: koreanUtils.isKorean,
    chosungSearch: koreanUtils.chosungSearch,
    getChosung: koreanUtils.getChosung,
    withEunNeun: koreanUtils.withEunNeun,
    withIGa: koreanUtils.withIGa,
    withEulReul: koreanUtils.withEulReul,
    // number
    parseNumber: numberUtils.parseNumber,
    parseTime: numberUtils.parseTime,
    formatNumber: numberUtils.formatNumber,
    formatCurrency: numberUtils.formatCurrency,
    formatFileSize: numberUtils.formatFileSize,
    numberToKorean: numberUtils.numberToKorean,
    parseNumberFromString: numberUtils.parseNumberFromString,
    // validation (isBusinessNumber lives in both korean & validation — use validation)
    isBusinessNumber: validationUtils.isBusinessNumber,
    isEmail: validationUtils.isEmail,
    isPhoneNumber: validationUtils.isPhoneNumber,
    isPhone: validationUtils.isPhone,
    isUrl: validationUtils.isUrl,
    isUUID: validationUtils.isUUID,
    formatPhoneNumber: validationUtils.formatPhoneNumber,
    formatBusinessNumber: validationUtils.formatBusinessNumber,
    // format (new module)
    formatBytes: formatUtils.formatBytes,
    formatPercent: formatUtils.formatPercent,
};
exports.default = util;
