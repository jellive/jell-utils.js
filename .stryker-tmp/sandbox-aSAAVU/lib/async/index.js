// @ts-nocheck
"use strict";
/**
 * Async utility functions
 * @module async
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.retry = retry;
exports.timeout = timeout;
exports.parallel = parallel;
exports.serial = serial;
/**
 * Retry an async function with exponential backoff
 * @param fn - Async function to retry
 * @param maxRetries - Maximum number of retries (or RetryOptions object)
 * @param delay - Initial delay in milliseconds
 * @returns Promise with function result
 */
function retry(fn_1) {
    return __awaiter(this, arguments, void 0, function* (fn, maxRetries = 3, delay = 1000) {
        var _a, _b, _c, _d;
        let opts;
        if (typeof maxRetries === 'object') {
            opts = {
                maxRetries: (_a = maxRetries.maxRetries) !== null && _a !== void 0 ? _a : 3,
                delay: (_b = maxRetries.delay) !== null && _b !== void 0 ? _b : 1000,
                maxDelay: (_c = maxRetries.maxDelay) !== null && _c !== void 0 ? _c : 30000,
                backoff: (_d = maxRetries.backoff) !== null && _d !== void 0 ? _d : 2
            };
        }
        else {
            opts = { maxRetries, delay, maxDelay: 30000, backoff: 2 };
        }
        let lastError;
        for (let i = 0; i < opts.maxRetries; i++) {
            try {
                return yield fn();
            }
            catch (error) {
                lastError = error;
                if (i < opts.maxRetries - 1) {
                    const waitMs = Math.min(opts.delay * Math.pow(opts.backoff, i), opts.maxDelay);
                    yield new Promise(resolve => setTimeout(resolve, waitMs));
                }
            }
        }
        throw lastError;
    });
}
/**
 * Wrap a promise with a timeout — rejects if not resolved within ms
 * @param promise - Promise to wrap
 * @param ms - Timeout in milliseconds
 * @param message - Optional rejection message
 * @returns Promise that rejects on timeout
 */
function timeout(promise, ms, message = `Operation timed out after ${ms}ms`) {
    return new Promise((resolve, reject) => {
        const timer = setTimeout(() => reject(new Error(message)), ms);
        promise.then(value => {
            clearTimeout(timer);
            resolve(value);
        }, error => {
            clearTimeout(timer);
            reject(error);
        });
    });
}
/**
 * Run async functions in parallel with optional concurrency limit
 * @param fns - Array of async functions to run
 * @param concurrency - Max concurrent executions (default: all at once)
 * @returns Array of results in input order
 */
function parallel(fns, concurrency) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!concurrency || concurrency >= fns.length) {
            return Promise.all(fns.map(fn => fn()));
        }
        const results = new Array(fns.length);
        let index = 0;
        const runNext = () => __awaiter(this, void 0, void 0, function* () {
            while (index < fns.length) {
                const current = index++;
                results[current] = yield fns[current]();
            }
        });
        const workers = Array.from({ length: concurrency }, runNext);
        yield Promise.all(workers);
        return results;
    });
}
/**
 * Run async functions serially (one after another)
 * @param fns - Array of async functions to run in sequence
 * @returns Array of results in input order
 */
function serial(fns) {
    return __awaiter(this, void 0, void 0, function* () {
        const results = [];
        for (const fn of fns) {
            results.push(yield fn());
        }
        return results;
    });
}
