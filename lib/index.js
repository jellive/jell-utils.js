"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var util = {
    /**
     * @description return message is korean
     * @param message target string.
     * @returns boolean
     */
    isKorean: function (message) {
        var regex = /[ㄱ-ㅎㅏ-ㅣ가-힣]/gi;
        return regex.test(message);
    },
    /**
     * @description return deep copied object by original object using structuredClone or JSON fallback.
     * @param obj object to deep clone
     * @returns deep cloned object
     */
    clone: function (obj) {
        if (obj === null || typeof obj !== 'object') {
            return obj;
        }
        // Use structuredClone if available (modern browsers/Node.js 17+)
        if (typeof structuredClone !== 'undefined') {
            return structuredClone(obj);
        }
        // Fallback to JSON method (handles most common cases)
        try {
            return JSON.parse(JSON.stringify(obj));
        }
        catch (_a) {
            // Final fallback for non-serializable objects
            if (Array.isArray(obj)) {
                return obj.map(function (item) {
                    return typeof item === 'object' && item !== null ? util.clone(item) : item;
                });
            }
            var copy = {};
            for (var key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key)) {
                    var value = obj[key];
                    copy[key] =
                        typeof value === 'object' && value !== null
                            ? util.clone(value)
                            : value;
                }
            }
            return copy;
        }
    },
    /**
     * @description encode uri parsing (like &lt; => <, &gt; => >)
     * @param txt Original string
     * @returns tag parsed string
     */
    parseTag: function (txt) {
        return txt.replace(/&lt;/gi, '<').replace(/&gt;/gi, '>');
    },
    /**
     * @description parseNumber with defaultvalue and proper validation
     * @param target original string to parse
     * @param defaultValue return default value if parsing fails
     * @param isFloat whether to parse as float or integer
     * @returns parsed number value or default value
     */
    parseNumber: function (target, defaultValue, isFloat) {
        if (isFloat === void 0) { isFloat = false; }
        if (!target || typeof target !== 'string' || target.trim() === '') {
            return defaultValue;
        }
        var parsed = isFloat ? parseFloat(target) : parseInt(target, 10);
        return isNaN(parsed) ? defaultValue : parsed;
    },
    /**
     * @description parse time string to milliseconds
     * @param target required format such as '00:11:22' (HH:MM:SS) or '11:22' (MM:SS)
     * @param defaultValue default value if parsing fails
     * @returns parsed milliseconds or default value
     */
    parseTime: function (target, defaultValue) {
        if (!target || typeof target !== 'string' || target.trim() === '') {
            return defaultValue;
        }
        if (target.indexOf(':') === -1) {
            var parsed = parseInt(target, 10);
            return isNaN(parsed) ? defaultValue : parsed;
        }
        var timeValues = target.split(':').map(function (value) {
            var parsed = parseInt(value.trim(), 10);
            return isNaN(parsed) ? 0 : parsed;
        });
        if (timeValues.length < 2 || timeValues.length > 3) {
            return defaultValue;
        }
        var first = timeValues[0], second = timeValues[1], _a = timeValues[2], third = _a === void 0 ? 0 : _a;
        if (timeValues.length === 3) {
            // HH:MM:SS format - treat third value as milliseconds
            return first * 60 * 1000 + second * 1000 + third;
        }
        else {
            // MM:SS format
            return first * 60 * 1000 + second * 1000;
        }
    },
    /**
     * @description generate string from now time with datetime format.
     * @returns string now datetime format
     */
    getNowDate: function () {
        var date = new Date();
        var dateString = new Date(date.getTime() - date.getTimezoneOffset() * 60000).toISOString();
        dateString = dateString.replace('T', ' ').split('.')[0];
        return dateString;
    },
    /**
     * @description generate string from inputed time with korean date format.
     * @param dateString date input (Date object or string)
     * @param isYear whether to include year in output
     * @returns string korean date format
     */
    getKoreanDate: function (dateString, isYear) {
        if (dateString === void 0) { dateString = new Date(); }
        if (isYear === void 0) { isYear = false; }
        var targetDate = new Date(dateString);
        var year = targetDate.getFullYear();
        var month = "0".concat(targetDate.getMonth() + 1).slice(-2);
        var date = "0".concat(targetDate.getDate()).slice(-2);
        if (isYear)
            return "".concat(year, "\uB144 ").concat(month, "\uC6D4 ").concat(date, "\uC77C");
        return "".concat(month, "\uC6D4 ").concat(date, "\uC77C");
    },
    /**
     * @description convert date to yyyy-mm-dd format string.
     * @param date date formatted string.
     * @returns yyyy-mm-dd formatted string.
     */
    formatDate: function (date) {
        if (date === void 0) { date = new Date(); }
        var d = new Date(date);
        var month = "".concat(d.getMonth() + 1);
        var day = "".concat(d.getDate());
        var year = d.getFullYear();
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        return [year, month, day].join('-');
    },
    /**
     * @description calculate d-day with target date.
     * @param date target date
     * @returns d-day
     */
    calDDay: function (date) {
        if (date === void 0) { date = new Date(); }
        var countDownDate = new Date(date);
        var now = new Date().getTime();
        var distance = countDownDate.getTime() - now;
        var countDown = Math.floor(distance / (1000 * 60 * 60 * 24));
        return countDown;
    },
    /**
     * @description replace word in str with index.
     * @param str original string
     * @param txt replace word
     * @param startIndex slice first index
     * @param endIndex slice last index
     * @returns
     */
    replaceBetween: function (str, txt, startIndex, endIndex) {
        var newStr = "".concat(str.substring(0, startIndex)).concat(txt).concat(str.substring(endIndex));
        return newStr;
    },
    /**
     * @description convert string to camelCase format
     * @param txt input string to convert (supports snake_case and space-separated)
     * @returns camelCase formatted string
     */
    toCamelCase: function (txt) {
        txt = typeof txt !== 'string' ? '' : txt;
        var txtArr = txt.split(/_| /g).map(function (word, index) {
            var firstvarter;
            if (index == 0) {
                firstvarter = word.charAt(0).toLowerCase();
            }
            else {
                firstvarter = word.charAt(0).toUpperCase();
            }
            word = firstvarter.concat(word.substr(1));
            return word;
        });
        return txtArr.join('');
    },
    /**
     * @description convert string to snake_case format
     * @param txt input string to convert
     * @returns snake_case formatted string
     */
    toSnakeCase: function (txt) {
        txt = typeof txt !== 'string' ? '' : txt;
        txt = txt.toLowerCase().replace(/ /g, '_');
        return txt;
    },
    /**
     * @description make title case string (first character capital and word space)
     * @param txt input string to convert
     * @returns title case string with proper spacing
     */
    toTitleCase: function (txt) {
        if (typeof txt !== 'string')
            return '';
        // Convert snake_case to spaces and handle camelCase
        var result = txt
            .replace(/_/g, ' ') // Replace underscores with spaces
            .replace(/([a-z])([A-Z])/g, '$1 $2') // Add space before capital letters in camelCase
            .split(/\s+/) // Split by any whitespace
            .filter(function (word) { return word.length > 0; }) // Remove empty strings
            .map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); })
            .join(' ');
        return result;
    },
    /**
     * @description convert HTML br tags to line breaks
     * @param txt input string with br tags
     * @returns string with br tags converted to newlines
     */
    toText: function (txt) {
        return txt.replace(/<br>/gi, '\n');
    },
    /**
     * @description convert line breaks to HTML br tags
     * @param txt input string with newlines
     * @returns string with newlines converted to br tags
     */
    toHtml: function (txt) {
        return txt.replace(/\n/gi, '<br>');
    },
    /**
     * @description safely remove HTML tags from text, preventing XSS attacks
     * @param txt input string with HTML tags
     * @param preserveErrorTags whether to preserve elements with 'suggestCheck' class
     * @returns sanitized text with specified tags removed
     */
    clearTag: function (txt, preserveErrorTags) {
        if (preserveErrorTags === void 0) { preserveErrorTags = false; }
        if (typeof txt !== 'string')
            return '';
        // Create a temporary DOM element for safe parsing
        var tempDiv = document.createElement('div');
        // Set textContent first to avoid XSS, then replace with innerHTML for parsing
        tempDiv.textContent = '';
        try {
            tempDiv.innerHTML = txt;
        }
        catch (_a) {
            // If innerHTML parsing fails, return original text stripped of all tags
            return txt.replace(/<[^>]*>/g, '');
        }
        var tagsToRemove = ['div', 'font', 'span'];
        // Remove specified tags while preserving content
        tagsToRemove.forEach(function (tagName) {
            var elements = tempDiv.querySelectorAll(tagName);
            for (var i = 0; i < elements.length; i++) {
                var element = elements[i];
                var hasErrorClass = element.className.indexOf('suggestCheck') !== -1;
                // Skip if we want to preserve error tags and this element has the error class
                if (preserveErrorTags && hasErrorClass) {
                    continue;
                }
                // Replace element with its content
                var parent_1 = element.parentNode;
                if (parent_1) {
                    // Create text node from inner content to prevent XSS
                    var textContent = element.textContent || '';
                    var textNode = document.createTextNode(textContent);
                    parent_1.replaceChild(textNode, element);
                }
            }
        });
        // Convert <br> tags to newlines and get text content
        var result = tempDiv.innerHTML.replace(/<br\s*\/?>/gi, '\n');
        // Final sanitization: remove any remaining script tags and dangerous content
        return result.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
    },
    /**
     * @description check if two arrays are equal (shallow comparison)
     * @param a first array to compare
     * @param b second array to compare
     * @returns true if arrays are equal, false otherwise
     */
    equalArrays: function (a, b) {
        if (a === b)
            return true;
        if (!a || !b)
            return false;
        if (a.length != b.length)
            return false;
        for (var i = 0; i < a.length; i++) {
            if (a[i] !== b[i])
                return false;
        }
        return true;
    },
    /**
     * @description check iOS device client with user agent.
     * @returns true if client is iOS device, false otherwise
     */
    isiOS: function () {
        return /iPhone|iPad|iPod/i.test(navigator.userAgent);
    },
    /**
     * @description validate Korean business registration number (사업자등록번호)
     * @param businessNumber business registration number string (10 digits)
     * @returns true if valid, false otherwise
     */
    isBusinessNumber: function (businessNumber) {
        var cleaned = businessNumber.replace(/[^0-9]/g, '');
        if (cleaned.length !== 10)
            return false;
        var digits = cleaned.split('').map(Number);
        var checksum = [1, 3, 7, 1, 3, 7, 1, 3, 5];
        var sum = 0;
        for (var i = 0; i < 9; i++) {
            sum += digits[i] * checksum[i];
        }
        sum += Math.floor((digits[8] * 5) / 10);
        var result = (10 - (sum % 10)) % 10;
        return result === digits[9];
    },
    /**
     * @description get nested object value by path string
     * @param obj target object
     * @param path path string (e.g., 'user.profile.name')
     * @param defaultValue default value if path not found
     * @returns value at path or default value
     */
    getByPath: function (obj, path, defaultValue) {
        var keys = path.split('.');
        var result = obj;
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            if (result === null || result === undefined) {
                return defaultValue;
            }
            result = result[key];
        }
        return result === undefined ? defaultValue : result;
    },
    /**
     * @description set nested object value by path string
     * @param obj target object
     * @param path path string (e.g., 'user.profile.name')
     * @param value value to set
     */
    setByPath: function (obj, path, value) {
        var keys = path.split('.');
        var lastKey = keys.pop();
        if (!lastKey)
            return;
        var current = obj;
        for (var _i = 0, keys_2 = keys; _i < keys_2.length; _i++) {
            var key = keys_2[_i];
            if (!(key in current) || typeof current[key] !== 'object') {
                current[key] = {};
            }
            current = current[key];
        }
        current[lastKey] = value;
    },
    /**
     * @description group array of objects by key
     * @param array array to group
     * @param key key to group by
     * @returns grouped object
     */
    groupBy: function (array, key) {
        return array.reduce(function (result, item) {
            var groupKey = String(item[key]);
            if (!result[groupKey]) {
                result[groupKey] = [];
            }
            result[groupKey].push(item);
            return result;
        }, {});
    },
    /**
     * @description extract only numbers from string
     * @param str input string
     * @returns string containing only numbers
     */
    extractNumbers: function (str) {
        return str.replace(/[^0-9]/g, '');
    },
    /**
     * @description get file extension from filename or path
     * @param filename filename or path
     * @returns file extension without dot (e.g., 'jpg', 'pdf')
     */
    getFileExtension: function (filename) {
        var parts = filename.split('.');
        return parts.length > 1 ? parts[parts.length - 1].toLowerCase() : '';
    },
    /**
     * @description calculate difference between two dates
     * @param date1 first date
     * @param date2 second date
     * @returns object with days, hours, minutes, seconds difference
     */
    dateDiff: function (date1, date2) {
        if (date2 === void 0) { date2 = new Date(); }
        var d1 = new Date(date1).getTime();
        var d2 = new Date(date2).getTime();
        var diff = Math.abs(d2 - d1);
        var days = Math.floor(diff / (1000 * 60 * 60 * 24));
        var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((diff % (1000 * 60)) / 1000);
        return { days: days, hours: hours, minutes: minutes, seconds: seconds };
    },
    /**
     * @description deep merge two objects
     * @param target target object
     * @param source source object
     * @returns merged object
     */
    deepMerge: function (target, source) {
        var result = __assign({}, target);
        for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                var sourceValue = source[key];
                var targetValue = result[key];
                if (sourceValue &&
                    typeof sourceValue === 'object' &&
                    !Array.isArray(sourceValue) &&
                    targetValue &&
                    typeof targetValue === 'object' &&
                    !Array.isArray(targetValue)) {
                    result[key] = util.deepMerge(targetValue, sourceValue);
                }
                else {
                    result[key] = sourceValue;
                }
            }
        }
        return result;
    },
    /**
     * @description retry async function with exponential backoff
     * @param fn async function to retry
     * @param maxRetries maximum number of retries
     * @param delay initial delay in milliseconds
     * @returns promise with function result
     */
    retry: function (fn_1) {
        var args_1 = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args_1[_i - 1] = arguments[_i];
        }
        return __awaiter(void 0, __spreadArray([fn_1], args_1, true), void 0, function (fn, maxRetries, delay) {
            var lastError, _loop_1, i, state_1;
            if (maxRetries === void 0) { maxRetries = 3; }
            if (delay === void 0) { delay = 1000; }
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _loop_1 = function (i) {
                            var _b, error_1;
                            return __generator(this, function (_c) {
                                switch (_c.label) {
                                    case 0:
                                        _c.trys.push([0, 2, , 5]);
                                        _b = {};
                                        return [4 /*yield*/, fn()];
                                    case 1: return [2 /*return*/, (_b.value = _c.sent(), _b)];
                                    case 2:
                                        error_1 = _c.sent();
                                        lastError = error_1;
                                        if (!(i < maxRetries - 1)) return [3 /*break*/, 4];
                                        return [4 /*yield*/, new Promise(function (resolve) {
                                                return setTimeout(resolve, delay * Math.pow(2, i));
                                            })];
                                    case 3:
                                        _c.sent();
                                        _c.label = 4;
                                    case 4: return [3 /*break*/, 5];
                                    case 5: return [2 /*return*/];
                                }
                            });
                        };
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < maxRetries)) return [3 /*break*/, 4];
                        return [5 /*yield**/, _loop_1(i)];
                    case 2:
                        state_1 = _a.sent();
                        if (typeof state_1 === "object")
                            return [2 /*return*/, state_1.value];
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4: throw lastError;
                }
            });
        });
    },
    /**
     * @description search Korean string by chosung (초성)
     * @param str target string to search in
     * @param search chosung search string
     * @returns true if chosung matches
     */
    chosungSearch: function (str, search) {
        var chosungList = [
            'ㄱ',
            'ㄲ',
            'ㄴ',
            'ㄷ',
            'ㄸ',
            'ㄹ',
            'ㅁ',
            'ㅂ',
            'ㅃ',
            'ㅅ',
            'ㅆ',
            'ㅇ',
            'ㅈ',
            'ㅉ',
            'ㅊ',
            'ㅋ',
            'ㅌ',
            'ㅍ',
            'ㅎ'
        ];
        var getChosung = function (char) {
            var code = char.charCodeAt(0);
            if (code >= 44032 && code <= 55203) {
                var index = Math.floor((code - 44032) / 588);
                return chosungList[index];
            }
            return char;
        };
        var strChosung = str.split('').map(getChosung).join('');
        return strChosung.includes(search);
    },
    /**
     * @description sort array of objects by key
     * @param array array to sort
     * @param key key to sort by
     * @param order sort order ('asc' or 'desc')
     * @returns sorted array
     */
    sortBy: function (array, key, order) {
        if (order === void 0) { order = 'asc'; }
        return __spreadArray([], array, true).sort(function (a, b) {
            var aVal = a[key];
            var bVal = b[key];
            if (aVal < bVal)
                return order === 'asc' ? -1 : 1;
            if (aVal > bVal)
                return order === 'asc' ? 1 : -1;
            return 0;
        });
    },
    /**
     * @description convert object to URL query string
     * @param obj object to convert
     * @returns query string (e.g., 'key1=value1&key2=value2')
     */
    objectToQueryString: function (obj) {
        return Object.entries(obj)
            .filter(function (_a) {
            var value = _a[1];
            return value !== undefined && value !== null;
        })
            .map(function (_a) {
            var key = _a[0], value = _a[1];
            return "".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(String(value)));
        })
            .join('&');
    },
    /**
     * @description mask sensitive string (e.g., credit card, phone)
     * @param str string to mask
     * @param visibleStart number of visible characters at start
     * @param visibleEnd number of visible characters at end
     * @param maskChar character to use for masking
     * @returns masked string
     */
    maskString: function (str, visibleStart, visibleEnd, maskChar) {
        if (visibleStart === void 0) { visibleStart = 3; }
        if (visibleEnd === void 0) { visibleEnd = 3; }
        if (maskChar === void 0) { maskChar = '*'; }
        if (str.length <= visibleStart + visibleEnd)
            return str;
        var start = str.substring(0, visibleStart);
        var end = str.substring(str.length - visibleEnd);
        var masked = maskChar.repeat(str.length - visibleStart - visibleEnd);
        return start + masked + end;
    }
};
exports.default = util;
