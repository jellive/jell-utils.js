"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isKorean = void 0;
/**
 * @description return message is korean
 * @param message target string.
 * @returns boolean
 */
var isKorean = function (message) {
    var regex = /[ㄱ-ㅎㅏ-ㅣ가-힣]/gi;
    return regex.test(message);
};
exports.isKorean = isKorean;
