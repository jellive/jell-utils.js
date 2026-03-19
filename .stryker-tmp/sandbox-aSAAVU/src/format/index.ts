/**
 * Format utility functions
 * @module format
 */
// @ts-nocheck


/**
 * Format bytes to human-readable file size string
 * @param bytes - Number of bytes
 * @param precision - Decimal places (default: auto — 0 for B, 2 for larger)
 * @returns Formatted file size string (e.g., '1.50 KB', '2 MB')
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
export function formatBytes(bytes: number, precision?: number): string {
  if (stryMutAct_9fa48("396")) {
    {}
  } else {
    stryCov_9fa48("396");
    const units = stryMutAct_9fa48("397") ? [] : (stryCov_9fa48("397"), [stryMutAct_9fa48("398") ? "" : (stryCov_9fa48("398"), 'B'), stryMutAct_9fa48("399") ? "" : (stryCov_9fa48("399"), 'KB'), stryMutAct_9fa48("400") ? "" : (stryCov_9fa48("400"), 'MB'), stryMutAct_9fa48("401") ? "" : (stryCov_9fa48("401"), 'GB'), stryMutAct_9fa48("402") ? "" : (stryCov_9fa48("402"), 'TB')]);
    let size = bytes;
    let unitIndex = 0;
    while (stryMutAct_9fa48("404") ? size >= 1024 || unitIndex < units.length - 1 : stryMutAct_9fa48("403") ? false : (stryCov_9fa48("403", "404"), (stryMutAct_9fa48("407") ? size < 1024 : stryMutAct_9fa48("406") ? size > 1024 : stryMutAct_9fa48("405") ? true : (stryCov_9fa48("405", "406", "407"), size >= 1024)) && (stryMutAct_9fa48("410") ? unitIndex >= units.length - 1 : stryMutAct_9fa48("409") ? unitIndex <= units.length - 1 : stryMutAct_9fa48("408") ? true : (stryCov_9fa48("408", "409", "410"), unitIndex < (stryMutAct_9fa48("411") ? units.length + 1 : (stryCov_9fa48("411"), units.length - 1)))))) {
      if (stryMutAct_9fa48("412")) {
        {}
      } else {
        stryCov_9fa48("412");
        stryMutAct_9fa48("413") ? size *= 1024 : (stryCov_9fa48("413"), size /= 1024);
        stryMutAct_9fa48("414") ? unitIndex-- : (stryCov_9fa48("414"), unitIndex++);
      }
    }
    const decimals = (stryMutAct_9fa48("417") ? precision === undefined : stryMutAct_9fa48("416") ? false : stryMutAct_9fa48("415") ? true : (stryCov_9fa48("415", "416", "417"), precision !== undefined)) ? precision : (stryMutAct_9fa48("420") ? unitIndex !== 0 : stryMutAct_9fa48("419") ? false : stryMutAct_9fa48("418") ? true : (stryCov_9fa48("418", "419", "420"), unitIndex === 0)) ? 0 : 2;
    return stryMutAct_9fa48("421") ? `` : (stryCov_9fa48("421"), `${size.toFixed(decimals)} ${units[unitIndex]}`);
  }
}

/**
 * Format number with thousand separators
 * @param num - Number to format
 * @param locale - Locale string (default: 'en-US')
 * @returns Formatted string with separators
 */
export function formatNumber(num: number, locale = stryMutAct_9fa48("422") ? "" : (stryCov_9fa48("422"), 'en-US')): string {
  if (stryMutAct_9fa48("423")) {
    {}
  } else {
    stryCov_9fa48("423");
    return num.toLocaleString(locale);
  }
}

/**
 * Format number as currency
 * @param amount - Amount to format
 * @param currency - Currency code (KRW, USD, EUR, JPY, CNY)
 * @returns Formatted currency string
 */
export function formatCurrency(amount: number, currency: 'KRW' | 'USD' | 'EUR' | 'JPY' | 'CNY' = stryMutAct_9fa48("424") ? "" : (stryCov_9fa48("424"), 'KRW')): string {
  if (stryMutAct_9fa48("425")) {
    {}
  } else {
    stryCov_9fa48("425");
    const formatted = formatNumber(amount);
    const symbols: Record<string, {
      symbol: string;
      prefix: boolean;
    }> = stryMutAct_9fa48("426") ? {} : (stryCov_9fa48("426"), {
      KRW: stryMutAct_9fa48("427") ? {} : (stryCov_9fa48("427"), {
        symbol: stryMutAct_9fa48("428") ? "" : (stryCov_9fa48("428"), '원'),
        prefix: stryMutAct_9fa48("429") ? true : (stryCov_9fa48("429"), false)
      }),
      USD: stryMutAct_9fa48("430") ? {} : (stryCov_9fa48("430"), {
        symbol: stryMutAct_9fa48("431") ? "" : (stryCov_9fa48("431"), '$'),
        prefix: stryMutAct_9fa48("432") ? false : (stryCov_9fa48("432"), true)
      }),
      EUR: stryMutAct_9fa48("433") ? {} : (stryCov_9fa48("433"), {
        symbol: stryMutAct_9fa48("434") ? "" : (stryCov_9fa48("434"), '€'),
        prefix: stryMutAct_9fa48("435") ? false : (stryCov_9fa48("435"), true)
      }),
      JPY: stryMutAct_9fa48("436") ? {} : (stryCov_9fa48("436"), {
        symbol: stryMutAct_9fa48("437") ? "" : (stryCov_9fa48("437"), '¥'),
        prefix: stryMutAct_9fa48("438") ? false : (stryCov_9fa48("438"), true)
      }),
      CNY: stryMutAct_9fa48("439") ? {} : (stryCov_9fa48("439"), {
        symbol: stryMutAct_9fa48("440") ? "" : (stryCov_9fa48("440"), '¥'),
        prefix: stryMutAct_9fa48("441") ? false : (stryCov_9fa48("441"), true)
      })
    });
    const {
      symbol,
      prefix
    } = symbols[currency];
    return prefix ? stryMutAct_9fa48("442") ? `` : (stryCov_9fa48("442"), `${symbol}${formatted}`) : stryMutAct_9fa48("443") ? `` : (stryCov_9fa48("443"), `${formatted}${symbol}`);
  }
}

/**
 * Format a number as a percentage string
 * @param value - Number to format as percent (e.g., 0.42 or 42)
 * @param decimals - Decimal places (default: 1)
 * @param isDecimal - If true, value is treated as a decimal fraction (0.42 -> 42%)
 * @returns Formatted percent string (e.g., '42.0%')
 */
export function formatPercent(value: number, decimals = 1, isDecimal = stryMutAct_9fa48("444") ? true : (stryCov_9fa48("444"), false)): string {
  if (stryMutAct_9fa48("445")) {
    {}
  } else {
    stryCov_9fa48("445");
    const pct = isDecimal ? stryMutAct_9fa48("446") ? value / 100 : (stryCov_9fa48("446"), value * 100) : value;
    return stryMutAct_9fa48("447") ? `` : (stryCov_9fa48("447"), `${pct.toFixed(decimals)}%`);
  }
}