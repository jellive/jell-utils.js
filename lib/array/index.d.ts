/**
 * Array utility functions
 * @module array
 */
/**
 * Check if two arrays are equal (shallow comparison)
 * @param a - First array to compare
 * @param b - Second array to compare
 * @returns true if arrays are equal, false otherwise
 */
export declare function equalArrays(a: unknown[], b: unknown[]): boolean;
/**
 * Group array of objects by key
 * @param array - Array to group
 * @param key - Key to group by
 * @returns Grouped object
 */
export declare function groupBy<T extends Record<string, unknown>>(array: T[], key: keyof T): Record<string, T[]>;
/**
 * Sort array of objects by key
 * @param array - Array to sort
 * @param key - Key to sort by
 * @param order - Sort order ('asc' or 'desc')
 * @returns Sorted array (new array, original unchanged)
 */
export declare function sortBy<T extends Record<string, unknown>>(array: T[], key: keyof T, order?: 'asc' | 'desc'): T[];
/**
 * Split array into chunks of a specified size
 * @param array - Array to chunk
 * @param size - Chunk size
 * @returns Array of chunks
 */
export declare function chunk<T>(array: T[], size: number): T[][];
/**
 * Remove duplicate values from an array
 * @param array - Input array
 * @returns Array with duplicates removed (preserves first occurrence)
 */
export declare function unique<T>(array: T[]): T[];
/**
 * Randomly shuffle an array (Fisher-Yates algorithm)
 * @param array - Array to shuffle
 * @returns New shuffled array (original unchanged)
 */
export declare function shuffle<T>(array: T[]): T[];
/**
 * Flatten a nested array by one level (or deeply with depth param)
 * @param array - Array to flatten
 * @param depth - Depth to flatten (default: 1)
 * @returns Flattened array
 */
export declare function flatten<T>(array: T[], depth?: number): T[];
