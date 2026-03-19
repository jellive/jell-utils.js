/**
 * Async utility functions
 * @module async
 */
// @ts-nocheck


/**
 * Options for the retry function
 */function stryNS_9fa48() {
  var g = typeof globalThis === 'object' && globalThis && globalThis.Math === Math && globalThis || new Function("return this")();
  var ns = g.__stryker__ || (g.__stryker__ = {});
  if (ns.activeMutant === undefined && g.process && g.process.env && g.process.env.__STRYKER_ACTIVE_MUTANT__) {
    ns.activeMutant = g.process.env.__STRYKER_ACTIVE_MUTANT__;
  }
  function retrieveNS() {
    return ns;
  }
  stryNS_9fa48 = retrieveNS;
  return retrieveNS();
}
stryNS_9fa48();
function stryCov_9fa48() {
  var ns = stryNS_9fa48();
  var cov = ns.mutantCoverage || (ns.mutantCoverage = {
    static: {},
    perTest: {}
  });
  function cover() {
    var c = cov.static;
    if (ns.currentTestId) {
      c = cov.perTest[ns.currentTestId] = cov.perTest[ns.currentTestId] || {};
    }
    var a = arguments;
    for (var i = 0; i < a.length; i++) {
      c[a[i]] = (c[a[i]] || 0) + 1;
    }
  }
  stryCov_9fa48 = cover;
  cover.apply(null, arguments);
}
function stryMutAct_9fa48(id) {
  var ns = stryNS_9fa48();
  function isActive(id) {
    if (ns.activeMutant === id) {
      if (ns.hitCount !== void 0 && ++ns.hitCount > ns.hitLimit) {
        throw new Error('Stryker: Hit count limit reached (' + ns.hitCount + ')');
      }
      return true;
    }
    return false;
  }
  stryMutAct_9fa48 = isActive;
  return isActive(id);
}
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
export async function retry<T>(fn: () => Promise<T>, maxRetries: number | RetryOptions = 3, delay = 1000): Promise<T> {
  if (stryMutAct_9fa48("124")) {
    {}
  } else {
    stryCov_9fa48("124");
    let opts: Required<RetryOptions>;
    if (stryMutAct_9fa48("127") ? typeof maxRetries !== 'object' : stryMutAct_9fa48("126") ? false : stryMutAct_9fa48("125") ? true : (stryCov_9fa48("125", "126", "127"), typeof maxRetries === (stryMutAct_9fa48("128") ? "" : (stryCov_9fa48("128"), 'object')))) {
      if (stryMutAct_9fa48("129")) {
        {}
      } else {
        stryCov_9fa48("129");
        opts = stryMutAct_9fa48("130") ? {} : (stryCov_9fa48("130"), {
          maxRetries: stryMutAct_9fa48("131") ? maxRetries.maxRetries && 3 : (stryCov_9fa48("131"), maxRetries.maxRetries ?? 3),
          delay: stryMutAct_9fa48("132") ? maxRetries.delay && 1000 : (stryCov_9fa48("132"), maxRetries.delay ?? 1000),
          maxDelay: stryMutAct_9fa48("133") ? maxRetries.maxDelay && 30000 : (stryCov_9fa48("133"), maxRetries.maxDelay ?? 30000),
          backoff: stryMutAct_9fa48("134") ? maxRetries.backoff && 2 : (stryCov_9fa48("134"), maxRetries.backoff ?? 2)
        });
      }
    } else {
      if (stryMutAct_9fa48("135")) {
        {}
      } else {
        stryCov_9fa48("135");
        opts = stryMutAct_9fa48("136") ? {} : (stryCov_9fa48("136"), {
          maxRetries,
          delay,
          maxDelay: 30000,
          backoff: 2
        });
      }
    }
    let lastError: Error;
    for (let i = 0; stryMutAct_9fa48("139") ? i >= opts.maxRetries : stryMutAct_9fa48("138") ? i <= opts.maxRetries : stryMutAct_9fa48("137") ? false : (stryCov_9fa48("137", "138", "139"), i < opts.maxRetries); stryMutAct_9fa48("140") ? i-- : (stryCov_9fa48("140"), i++)) {
      if (stryMutAct_9fa48("141")) {
        {}
      } else {
        stryCov_9fa48("141");
        try {
          if (stryMutAct_9fa48("142")) {
            {}
          } else {
            stryCov_9fa48("142");
            return await fn();
          }
        } catch (error) {
          if (stryMutAct_9fa48("143")) {
            {}
          } else {
            stryCov_9fa48("143");
            lastError = error as Error;
            if (stryMutAct_9fa48("147") ? i >= opts.maxRetries - 1 : stryMutAct_9fa48("146") ? i <= opts.maxRetries - 1 : stryMutAct_9fa48("145") ? false : stryMutAct_9fa48("144") ? true : (stryCov_9fa48("144", "145", "146", "147"), i < (stryMutAct_9fa48("148") ? opts.maxRetries + 1 : (stryCov_9fa48("148"), opts.maxRetries - 1)))) {
              if (stryMutAct_9fa48("149")) {
                {}
              } else {
                stryCov_9fa48("149");
                const waitMs = stryMutAct_9fa48("150") ? Math.max(opts.delay * Math.pow(opts.backoff, i), opts.maxDelay) : (stryCov_9fa48("150"), Math.min(stryMutAct_9fa48("151") ? opts.delay / Math.pow(opts.backoff, i) : (stryCov_9fa48("151"), opts.delay * Math.pow(opts.backoff, i)), opts.maxDelay));
                await new Promise(stryMutAct_9fa48("152") ? () => undefined : (stryCov_9fa48("152"), resolve => setTimeout(resolve, waitMs)));
              }
            }
          }
        }
      }
    }
    throw lastError!;
  }
}

/**
 * Wrap a promise with a timeout — rejects if not resolved within ms
 * @param promise - Promise to wrap
 * @param ms - Timeout in milliseconds
 * @param message - Optional rejection message
 * @returns Promise that rejects on timeout
 */
export function timeout<T>(promise: Promise<T>, ms: number, message = stryMutAct_9fa48("153") ? `` : (stryCov_9fa48("153"), `Operation timed out after ${ms}ms`)): Promise<T> {
  if (stryMutAct_9fa48("154")) {
    {}
  } else {
    stryCov_9fa48("154");
    return new Promise<T>((resolve, reject) => {
      if (stryMutAct_9fa48("155")) {
        {}
      } else {
        stryCov_9fa48("155");
        const timer = setTimeout(stryMutAct_9fa48("156") ? () => undefined : (stryCov_9fa48("156"), () => reject(new Error(message))), ms);
        promise.then(value => {
          if (stryMutAct_9fa48("157")) {
            {}
          } else {
            stryCov_9fa48("157");
            clearTimeout(timer);
            resolve(value);
          }
        }, error => {
          if (stryMutAct_9fa48("158")) {
            {}
          } else {
            stryCov_9fa48("158");
            clearTimeout(timer);
            reject(error);
          }
        });
      }
    });
  }
}

/**
 * Run async functions in parallel with optional concurrency limit
 * @param fns - Array of async functions to run
 * @param concurrency - Max concurrent executions (default: all at once)
 * @returns Array of results in input order
 */
export async function parallel<T>(fns: Array<() => Promise<T>>, concurrency?: number): Promise<T[]> {
  if (stryMutAct_9fa48("159")) {
    {}
  } else {
    stryCov_9fa48("159");
    if (stryMutAct_9fa48("162") ? !concurrency && concurrency >= fns.length : stryMutAct_9fa48("161") ? false : stryMutAct_9fa48("160") ? true : (stryCov_9fa48("160", "161", "162"), (stryMutAct_9fa48("163") ? concurrency : (stryCov_9fa48("163"), !concurrency)) || (stryMutAct_9fa48("166") ? concurrency < fns.length : stryMutAct_9fa48("165") ? concurrency > fns.length : stryMutAct_9fa48("164") ? false : (stryCov_9fa48("164", "165", "166"), concurrency >= fns.length)))) {
      if (stryMutAct_9fa48("167")) {
        {}
      } else {
        stryCov_9fa48("167");
        return Promise.all(fns.map(stryMutAct_9fa48("168") ? () => undefined : (stryCov_9fa48("168"), fn => fn())));
      }
    }
    const results: T[] = stryMutAct_9fa48("169") ? new Array() : (stryCov_9fa48("169"), new Array(fns.length));
    let index = 0;
    const runNext = async (): Promise<void> => {
      if (stryMutAct_9fa48("170")) {
        {}
      } else {
        stryCov_9fa48("170");
        while (stryMutAct_9fa48("173") ? index >= fns.length : stryMutAct_9fa48("172") ? index <= fns.length : stryMutAct_9fa48("171") ? false : (stryCov_9fa48("171", "172", "173"), index < fns.length)) {
          if (stryMutAct_9fa48("174")) {
            {}
          } else {
            stryCov_9fa48("174");
            const current = stryMutAct_9fa48("175") ? index-- : (stryCov_9fa48("175"), index++);
            results[current] = await fns[current]();
          }
        }
      }
    };
    const workers = Array.from(stryMutAct_9fa48("176") ? {} : (stryCov_9fa48("176"), {
      length: concurrency
    }), runNext);
    await Promise.all(workers);
    return results;
  }
}

/**
 * Run async functions serially (one after another)
 * @param fns - Array of async functions to run in sequence
 * @returns Array of results in input order
 */
export async function serial<T>(fns: Array<() => Promise<T>>): Promise<T[]> {
  if (stryMutAct_9fa48("177")) {
    {}
  } else {
    stryCov_9fa48("177");
    const results: T[] = stryMutAct_9fa48("178") ? ["Stryker was here"] : (stryCov_9fa48("178"), []);
    for (const fn of fns) {
      if (stryMutAct_9fa48("179")) {
        {}
      } else {
        stryCov_9fa48("179");
        results.push(await fn());
      }
    }
    return results;
  }
}