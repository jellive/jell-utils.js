/**
 * Validation utility functions
 * @module validation
 */
/**
 * Validate email address
 * @param email - Email address to validate
 * @returns true if valid email, false otherwise
 */
export declare function isEmail(email: string): boolean;
/**
 * Validate Korean phone number
 * @param phone - Phone number to validate
 * @returns true if valid Korean phone number, false otherwise
 */
export declare function isPhone(phone: string): boolean;
/**
 * Validate Korean phone number (alias for isPhone)
 * @param phone - Phone number to validate
 * @returns true if valid Korean phone number, false otherwise
 */
export declare function isPhoneNumber(phone: string): boolean;
/**
 * Validate URL
 * @param url - URL to validate
 * @returns true if valid URL, false otherwise
 */
export declare function isUrl(url: string): boolean;
/**
 * Validate UUID (v1-v5)
 * @param uuid - UUID string to validate
 * @returns true if valid UUID, false otherwise
 */
export declare function isUUID(uuid: string): boolean;
/**
 * Validate Korean business registration number (사업자등록번호)
 * @param businessNumber - Business registration number string (10 digits)
 * @returns true if valid, false otherwise
 */
export declare function isBusinessNumber(businessNumber: string): boolean;
/**
 * Format Korean phone number with hyphens
 * @param phone - Phone number to format
 * @returns Formatted phone number
 */
export declare function formatPhoneNumber(phone: string): string;
/**
 * Format Korean business registration number
 * @param brn - Business registration number
 * @returns Formatted business number (XXX-XX-XXXXX)
 */
export declare function formatBusinessNumber(brn: string): string;
