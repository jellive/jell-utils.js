/**
 * Object utility functions
 * @module object
 */
/**
 * Return deep copied object by original object using structuredClone or JSON fallback
 * @param obj - Object to deep clone
 * @returns Deep cloned object
 */
export declare function clone<T>(obj: T): T;
/**
 * Get nested object value by path string
 * @param obj - Target object
 * @param path - Path string (e.g., 'user.profile.name')
 * @param defaultValue - Default value if path not found
 * @returns Value at path or default value
 */
export declare function getByPath<T = unknown>(obj: Record<string, unknown>, path: string, defaultValue?: T): T;
/**
 * Set nested object value by path string
 * @param obj - Target object
 * @param path - Path string (e.g., 'user.profile.name')
 * @param value - Value to set
 */
export declare function setByPath(obj: Record<string, unknown>, path: string, value: unknown): void;
/**
 * Deep merge two objects
 * @param target - Target object
 * @param source - Source object
 * @returns Merged object (new object, originals unchanged)
 */
export declare function deepMerge<T extends Record<string, unknown>>(target: T, source: Partial<T>): T;
/**
 * Pick specified keys from an object
 * @param obj - Source object
 * @param keys - Keys to pick
 * @returns New object with only the picked keys
 */
export declare function pick<T extends Record<string, unknown>, K extends keyof T>(obj: T, keys: K[]): Pick<T, K>;
/**
 * Omit specified keys from an object
 * @param obj - Source object
 * @param keys - Keys to omit
 * @returns New object without the omitted keys
 */
export declare function omit<T extends Record<string, unknown>, K extends keyof T>(obj: T, keys: K[]): Omit<T, K>;
/**
 * Get the diff between two objects (keys that differ, with new values)
 * @param base - Base object
 * @param compare - Object to compare against base
 * @returns Object containing keys that differ, with values from compare
 */
export declare function diff<T extends Record<string, unknown>>(base: T, compare: T): Partial<T>;
/**
 * Check if an object (or array/string/null) is empty
 * @param value - Value to check
 * @returns true if empty, false otherwise
 */
export declare function isEmpty(value: unknown): boolean;
