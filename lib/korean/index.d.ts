/**
 * Korean language utility functions
 * @module korean
 */
/**
 * Check if message contains Korean characters
 * @param message - Target string
 * @returns true if string contains Korean characters
 */
export declare function isKorean(message: string): boolean;
/**
 * Get the chosung (초성, leading consonant) of a Korean character
 * @param char - A single Korean character
 * @returns Chosung character, or the original char if not Korean
 */
export declare function getChosung(char: string): string;
/**
 * Search Korean string by chosung (초성)
 * @param str - Target string to search in
 * @param search - Chosung search string
 * @returns true if chosung matches
 */
export declare function chosungSearch(str: string, search: string): boolean;
/**
 * Validate Korean business registration number (사업자등록번호)
 * @param businessNumber - Business registration number string (10 digits)
 * @returns true if valid, false otherwise
 */
export declare function isBusinessNumber(businessNumber: string): boolean;
/**
 * Append the correct Korean subject particle (은/는) based on last character
 * @param word - Korean word
 * @returns Word with correct 은 or 는 appended
 */
export declare function withEunNeun(word: string): string;
/**
 * Append the correct Korean subject particle (이/가) based on last character
 * @param word - Korean word
 * @returns Word with correct 이 or 가 appended
 */
export declare function withIGa(word: string): string;
/**
 * Append the correct Korean object particle (을/를) based on last character
 * @param word - Korean word
 * @returns Word with correct 을 or 를 appended
 */
export declare function withEulReul(word: string): string;
