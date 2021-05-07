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
     * @description return deep copied object by original object.
     * @todo need change Record<string, unknown> to Object(Typescript warning)
     * @param obj Record<string, unknown>
     * @returns Record<string, unknown>
     */
    clone: function (obj) {
        // if (obj === null || typeof obj !== 'object') {
        //   return obj
        // }
        var copy = obj.constructor();
        for (var attr in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, attr)) {
                // from: https://ourcodeworld.com/articles/read/1425/how-to-fix-eslint-error-do-not-access-objectprototype-method-hasownproperty-from-target-object-no-prototype-builtins
                copy[attr] = obj[attr];
            }
        }
        return copy;
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
     * @description parseNumber with defaultvalue
     * @param target original string
     * @param defaultValue return default value
     * @returns parsed number value.
     */
    parseNumber: function (target, defaultValue, isFloat) {
        if (isFloat === void 0) { isFloat = false; }
        if (!target || typeof parseInt(target) !== 'number') {
            return defaultValue;
        }
        return isFloat ? parseFloat(target) : parseInt(target);
    },
    /**
     *
     * @param target required format such as '00:11:22' / '11:22'
     * @param defaultValue
     * @returns
     */
    parseTime: function (target, defaultValue) {
        if (!target.includes(':'))
            return defaultValue ? defaultValue : parseInt(target);
        var matched = target.match(/:/gi);
        if (target && matched) {
            var isMilliSecond = matched.length == 2;
            var timeValues = target.split(':').map(function (value) { return parseInt(value, 0); });
            var minute = 0;
            var second = 0;
            var milliSecond = 0;
            if (isMilliSecond) {
                minute = timeValues[0] || 0;
                second = timeValues[1] || 0;
                milliSecond = timeValues[2] || 0;
            }
            else {
                minute = timeValues[0] || 0;
                second = timeValues[1] || 0;
            }
            var milliSeconds = minute * 60 * 1000 + second * 1000 + milliSecond;
            return milliSeconds;
        }
        else {
            return 0;
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
     * @returns string korean date format
     */
    getKoreanDate: function (dateString, isYear) {
        if (dateString === void 0) { dateString = new Date(); }
        if (isYear === void 0) { isYear = false; }
        var targetDate = new Date(dateString);
        var year = targetDate.getFullYear();
        var month = ("0" + (targetDate.getMonth() + 1)).substr(-2);
        var date = ("0" + targetDate.getDate()).substr(-2);
        if (isYear)
            return year + "\uB144 " + month + "\uC6D4 " + date + "\uC77C";
        return month + "\uC6D4 " + date + "\uC77C";
    },
    /**
     * @description convert date to yyyy-mm-dd format string.
     * @param date date formatted string.
     * @returns yyyy-mm-dd formatted string.
     */
    formatDate: function (date) {
        if (date === void 0) { date = new Date(); }
        var d = new Date(date);
        var month = "" + (d.getMonth() + 1);
        var day = "" + d.getDate();
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
        var newStr = "" + str.substring(0, startIndex) + txt + str.substring(endIndex);
        return newStr;
    },
    /**
     * @description make camel cased word.
     * @param txt
     * @returns
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
     * @description make snake cased word.
     * @param txt
     * @returns
     */
    toSnakeCase: function (txt) {
        txt = typeof txt !== 'string' ? '' : txt;
        txt = txt.toLowerCase().replace(/ /g, '_');
        return txt;
    },
    /**
     * @description make title case string(first character capital and word space)
     * @param txt
     * @returns
     */
    toTitleCase: function (txt) {
        txt = typeof txt !== 'string' ? '' : txt;
        // snake case
        txt = txt.replace(/_/g, ' ');
        txt = txt
            .split(' ')
            .map(function (word) { return word.charAt(0).toUpperCase().concat(word.substr(1)); })
            .join(' ');
        // input space when camel case
        var upperCases = txt.match(/[A-Z]/g) || [];
        upperCases.forEach(function (varter) {
            var regEx = new RegExp(varter, 'g');
            txt = txt.replace(regEx, ' ' + varter);
        });
        while (/{2}/g.exec(txt) != null) {
            txt = txt.replace(/{2}/g, ' ');
        }
        txt = txt.trim();
        return txt;
    },
    /**
     * @description br tag to line break.
     * @param txt
     * @returns
     */
    toText: function (txt) {
        return txt.replace(/<br>/gi, '\n');
    },
    /**
     * @description line break to br tag.
     * @param txt
     * @returns
     */
    toHtml: function (txt) {
        return txt.replace(/\n/gi, '<br>');
    },
    /**
     * @description remove tag brace text.
     * @param txt string
     * @param isError (beta) check 'suggestCheck' tag.
     * @returns
     */
    clearTag: function (txt, isError) {
        if (isError === void 0) { isError = false; }
        var txtWrap = document.createElement('div');
        txtWrap.innerHTML = txt;
        var tags = ['div', 'font', 'span'];
        tags.forEach(function (tag) {
            var elements = txtWrap.querySelectorAll(tag);
            var errorWraps = txtWrap.querySelectorAll(tag + ".suggestCheck");
            var isContinue = isError
                ? elements.length - errorWraps.length > 0
                : elements.length > 0;
            while (isContinue) {
                elements.forEach(function (element) {
                    var isErrorWrap = element.className.includes('suggestCheck');
                    if (!isError || !isErrorWrap) {
                        element.outerHTML = element.innerHTML;
                    }
                });
                elements = txtWrap.querySelectorAll(tag);
                errorWraps = txtWrap.querySelectorAll(tag + ".suggestCheck");
                isContinue = isError
                    ? elements.length - errorWraps.length > 0
                    : elements.length > 0;
            }
        });
        var clearedTxt = txtWrap.innerHTML.replace(/<br>/gi, '\n');
        return clearedTxt;
    },
    /**
     * @description check same between two array.
     * @param a array
     * @param b array
     * @returns
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
     * @returns client is iOS?
     */
    isiOS: function () {
        var isiOS = /iPhone|iPad|iPod/i.exec(navigator.userAgent) || false;
        if (isiOS && isiOS)
            return isiOS !== null;
        return isiOS;
    }
};
exports.default = util;
