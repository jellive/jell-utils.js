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


export * from './string'
export * from './array'
export * from './object'
export * from './async'
export * from './date'
export * from './korean'
export * from './number'
// validation: skip isBusinessNumber (already exported from korean above)
export { isEmail, isPhone, isPhoneNumber, isUrl, isUUID, formatPhoneNumber, formatBusinessNumber } from './validation'
// format: skip formatNumber, formatCurrency (already exported from number above)
export { formatBytes, formatPercent } from './format'

import * as stringUtils from './string'
import * as arrayUtils from './array'
import * as objectUtils from './object'
import * as asyncUtils from './async'
import * as dateUtils from './date'
import * as koreanUtils from './korean'
import * as numberUtils from './number'
import * as validationUtils from './validation'
import * as formatUtils from './format'

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
}

export default util
