/**
 * Async utility functions
 * @module async
 */
/**
 * Options for the retry function
 */
export interface RetryOptions {
    /** Maximum number of retries (default: 3) */
    maxRetries?: number;
    /** Initial delay in milliseconds (default: 1000) */
    delay?: number;
    /** Maximum delay in milliseconds for backoff (default: 30000) */
    maxDelay?: number;
    /** Backoff multiplier (default: 2) */
    backoff?: number;
}
/**
 * Retry an async function with exponential backoff
 * @param fn - Async function to retry
 * @param maxRetries - Maximum number of retries (or RetryOptions object)
 * @param delay - Initial delay in milliseconds
 * @returns Promise with function result
 */
export declare function retry<T>(fn: () => Promise<T>, maxRetries?: number | RetryOptions, delay?: number): Promise<T>;
/**
 * Wrap a promise with a timeout — rejects if not resolved within ms
 * @param promise - Promise to wrap
 * @param ms - Timeout in milliseconds
 * @param message - Optional rejection message
 * @returns Promise that rejects on timeout
 */
export declare function timeout<T>(promise: Promise<T>, ms: number, message?: string): Promise<T>;
/**
 * Run async functions in parallel with optional concurrency limit
 * @param fns - Array of async functions to run
 * @param concurrency - Max concurrent executions (default: all at once)
 * @returns Array of results in input order
 */
export declare function parallel<T>(fns: Array<() => Promise<T>>, concurrency?: number): Promise<T[]>;
/**
 * Run async functions serially (one after another)
 * @param fns - Array of async functions to run in sequence
 * @returns Array of results in input order
 */
export declare function serial<T>(fns: Array<() => Promise<T>>): Promise<T[]>;
