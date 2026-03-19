/**
 * String utility functions
 * @module string
 */
/**
 * Encode uri parsing (like &lt; => <, &gt; => >)
 * @param txt - Original string
 * @returns Tag parsed string
 */
export declare function parseTag(txt: string): string;
/**
 * Convert string to camelCase format
 * @param txt - Input string to convert (supports snake_case and space-separated)
 * @returns camelCase formatted string
 */
export declare function toCamelCase(txt: string): string;
/**
 * Convert string to snake_case format
 * @param txt - Input string to convert
 * @returns snake_case formatted string
 */
export declare function toSnakeCase(txt: string): string;
/**
 * Make title case string (first character capital and word space)
 * @param txt - Input string to convert
 * @returns Title case string with proper spacing
 */
export declare function toTitleCase(txt: string): string;
/**
 * Convert HTML br tags to line breaks
 * @param txt - Input string with br tags
 * @returns String with br tags converted to newlines
 */
export declare function toText(txt: string): string;
/**
 * Convert line breaks to HTML br tags
 * @param txt - Input string with newlines
 * @returns String with newlines converted to br tags
 */
export declare function toHtml(txt: string): string;
/**
 * Safely remove HTML tags from text, preventing XSS attacks.
 * Uses DOM parsing with textContent assignment to avoid XSS.
 * @param txt - Input string with HTML tags
 * @param preserveErrorTags - Whether to preserve elements with 'suggestCheck' class
 * @returns Sanitized text with specified tags removed
 */
export declare function clearTag(txt: string, preserveErrorTags?: boolean): string;
/**
 * Replace word in str with index
 * @param str - Original string
 * @param txt - Replace word
 * @param startIndex - Slice first index
 * @param endIndex - Slice last index
 * @returns Modified string
 */
export declare function replaceBetween(str: string, txt: string, startIndex: number, endIndex: number): string;
/**
 * Extract only numbers from string
 * @param str - Input string
 * @returns String containing only numbers
 */
export declare function extractNumbers(str: string): string;
/**
 * Get file extension from filename or path
 * @param filename - Filename or path
 * @returns File extension without dot (e.g., 'jpg', 'pdf')
 */
export declare function getFileExtension(filename: string): string;
/**
 * Mask sensitive string (e.g., credit card, phone)
 * @param str - String to mask
 * @param visibleStart - Number of visible characters at start
 * @param visibleEnd - Number of visible characters at end
 * @param maskChar - Character to use for masking
 * @returns Masked string
 */
export declare function maskString(str: string, visibleStart?: number, visibleEnd?: number, maskChar?: string): string;
/**
 * Convert object to URL query string
 * @param obj - Object to convert
 * @returns Query string (e.g., 'key1=value1&key2=value2')
 */
export declare function objectToQueryString(obj: Record<string, unknown>): string;
/**
 * Truncate a string to a maximum length, appending a suffix if truncated
 * @param str - Input string
 * @param maxLength - Maximum length before truncation
 * @param suffix - Suffix to append when truncated (default: '...')
 * @returns Truncated string
 */
export declare function truncate(str: string, maxLength: number, suffix?: string): string;
/**
 * Convert a string to a URL-friendly slug
 * @param str - Input string
 * @returns Slugified string (lowercase, hyphens instead of spaces/special chars)
 */
export declare function slugify(str: string): string;
/**
 * Convert camelCase string to kebab-case
 * @param str - camelCase input string
 * @returns kebab-case string
 */
export declare function camelToKebab(str: string): string;
/**
 * Convert kebab-case string to camelCase
 * @param str - kebab-case input string
 * @returns camelCase string
 */
export declare function kebabToCamel(str: string): string;
/**
 * Mask an email address for display (e.g., te***@example.com)
 * @param email - Email address to mask
 * @returns Masked email string
 */
export declare function maskEmail(email: string): string;
/**
 * Mask a phone number for display (e.g., 010-****-5678)
 * @param phone - Phone number string (digits and hyphens)
 * @returns Masked phone string
 */
export declare function maskPhone(phone: string): string;
