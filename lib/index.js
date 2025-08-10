"use strict";
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
                return obj.map(function (item) { return typeof item === 'object' && item !== null ? util.clone(item) : item; });
            }
            var copy = {};
            for (var key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key)) {
                    var value = obj[key];
                    copy[key] = typeof value === 'object' && value !== null ? util.clone(value) : value;
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
        return txt.replace(/&lt;/gi, "<").replace(/&gt;/gi, ">");
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
        if (!target || typeof target !== "string" || target.trim() === "") {
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
        if (!target || typeof target !== "string" || target.trim() === "") {
            return defaultValue;
        }
        if (target.indexOf(":") === -1) {
            var parsed = parseInt(target, 10);
            return isNaN(parsed) ? defaultValue : parsed;
        }
        var timeValues = target.split(":").map(function (value) {
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
        dateString = dateString.replace("T", " ").split(".")[0];
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
            month = "0" + month;
        if (day.length < 2)
            day = "0" + day;
        return [year, month, day].join("-");
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
        txt = typeof txt !== "string" ? "" : txt;
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
        return txtArr.join("");
    },
    /**
     * @description convert string to snake_case format
     * @param txt input string to convert
     * @returns snake_case formatted string
     */
    toSnakeCase: function (txt) {
        txt = typeof txt !== "string" ? "" : txt;
        txt = txt.toLowerCase().replace(/ /g, "_");
        return txt;
    },
    /**
     * @description make title case string (first character capital and word space)
     * @param txt input string to convert
     * @returns title case string with proper spacing
     */
    toTitleCase: function (txt) {
        if (typeof txt !== "string")
            return "";
        // Convert snake_case to spaces and handle camelCase
        var result = txt
            .replace(/_/g, " ") // Replace underscores with spaces
            .replace(/([a-z])([A-Z])/g, "$1 $2") // Add space before capital letters in camelCase
            .split(/\s+/) // Split by any whitespace
            .filter(function (word) { return word.length > 0; }) // Remove empty strings
            .map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); })
            .join(" ");
        return result;
    },
    /**
     * @description convert HTML br tags to line breaks
     * @param txt input string with br tags
     * @returns string with br tags converted to newlines
     */
    toText: function (txt) {
        return txt.replace(/<br>/gi, "\n");
    },
    /**
     * @description convert line breaks to HTML br tags
     * @param txt input string with newlines
     * @returns string with newlines converted to br tags
     */
    toHtml: function (txt) {
        return txt.replace(/\n/gi, "<br>");
    },
    /**
     * @description safely remove HTML tags from text, preventing XSS attacks
     * @param txt input string with HTML tags
     * @param preserveErrorTags whether to preserve elements with 'suggestCheck' class
     * @returns sanitized text with specified tags removed
     */
    clearTag: function (txt, preserveErrorTags) {
        if (preserveErrorTags === void 0) { preserveErrorTags = false; }
        if (typeof txt !== "string")
            return "";
        // Create a temporary DOM element for safe parsing
        var tempDiv = document.createElement("div");
        // Set textContent first to avoid XSS, then replace with innerHTML for parsing
        tempDiv.textContent = "";
        try {
            tempDiv.innerHTML = txt;
        }
        catch (_a) {
            // If innerHTML parsing fails, return original text stripped of all tags
            return txt.replace(/<[^>]*>/g, "");
        }
        var tagsToRemove = ["div", "font", "span"];
        // Remove specified tags while preserving content
        tagsToRemove.forEach(function (tagName) {
            var elements = tempDiv.querySelectorAll(tagName);
            for (var i = 0; i < elements.length; i++) {
                var element = elements[i];
                var hasErrorClass = element.className.indexOf("suggestCheck") !== -1;
                // Skip if we want to preserve error tags and this element has the error class
                if (preserveErrorTags && hasErrorClass) {
                    continue;
                }
                // Replace element with its content
                var parent_1 = element.parentNode;
                if (parent_1) {
                    // Create text node from inner content to prevent XSS
                    var textContent = element.textContent || "";
                    var textNode = document.createTextNode(textContent);
                    parent_1.replaceChild(textNode, element);
                }
            }
        });
        // Convert <br> tags to newlines and get text content
        var result = tempDiv.innerHTML.replace(/<br\s*\/?>/gi, "\n");
        // Final sanitization: remove any remaining script tags and dangerous content
        return result.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "");
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
};
exports.default = util;
