/**
 * Async utility functions
 * @module async
 */

/**
 * Options for the retry function
 */
export interface RetryOptions {
  /** Maximum number of retries (default: 3) */
  maxRetries?: number
  /** Initial delay in milliseconds (default: 1000) */
  delay?: number
  /** Maximum delay in milliseconds for backoff (default: 30000) */
  maxDelay?: number
  /** Backoff multiplier (default: 2) */
  backoff?: number
}

/**
 * Retry an async function with exponential backoff
 * @param fn - Async function to retry
 * @param maxRetries - Maximum number of retries (or RetryOptions object)
 * @param delay - Initial delay in milliseconds
 * @returns Promise with function result
 */
export async function retry<T>(
  fn: () => Promise<T>,
  maxRetries: number | RetryOptions = 3,
  delay = 1000
): Promise<T> {
  let opts: Required<RetryOptions>
  if (typeof maxRetries === 'object') {
    opts = {
      maxRetries: maxRetries.maxRetries ?? 3,
      delay: maxRetries.delay ?? 1000,
      maxDelay: maxRetries.maxDelay ?? 30000,
      backoff: maxRetries.backoff ?? 2
    }
  } else {
    opts = { maxRetries, delay, maxDelay: 30000, backoff: 2 }
  }

  let lastError: Error

  for (let i = 0; i < opts.maxRetries; i++) {
    try {
      return await fn()
    } catch (error) {
      lastError = error as Error
      if (i < opts.maxRetries - 1) {
        const waitMs = Math.min(
          opts.delay * Math.pow(opts.backoff, i),
          opts.maxDelay
        )
        await new Promise(resolve => setTimeout(resolve, waitMs))
      }
    }
  }

  throw lastError!
}

/**
 * Wrap a promise with a timeout — rejects if not resolved within ms
 * @param promise - Promise to wrap
 * @param ms - Timeout in milliseconds
 * @param message - Optional rejection message
 * @returns Promise that rejects on timeout
 */
export function timeout<T>(
  promise: Promise<T>,
  ms: number,
  message = `Operation timed out after ${ms}ms`
): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error(message)), ms)
    promise.then(
      value => {
        clearTimeout(timer)
        resolve(value)
      },
      error => {
        clearTimeout(timer)
        reject(error)
      }
    )
  })
}

/**
 * Run async functions in parallel with optional concurrency limit
 * @param fns - Array of async functions to run
 * @param concurrency - Max concurrent executions (default: all at once)
 * @returns Array of results in input order
 */
export async function parallel<T>(
  fns: Array<() => Promise<T>>,
  concurrency?: number
): Promise<T[]> {
  if (!concurrency || concurrency >= fns.length) {
    return Promise.all(fns.map(fn => fn()))
  }

  const results: T[] = new Array(fns.length)
  let index = 0

  const runNext = async (): Promise<void> => {
    while (index < fns.length) {
      const current = index++
      results[current] = await fns[current]()
    }
  }

  const workers = Array.from({ length: concurrency }, runNext)
  await Promise.all(workers)
  return results
}

/**
 * Run async functions serially (one after another)
 * @param fns - Array of async functions to run in sequence
 * @returns Array of results in input order
 */
export async function serial<T>(fns: Array<() => Promise<T>>): Promise<T[]> {
  const results: T[] = []
  for (const fn of fns) {
    results.push(await fn())
  }
  return results
}
