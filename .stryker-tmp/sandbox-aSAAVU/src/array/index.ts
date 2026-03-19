/**
 * Array utility functions
 * @module array
 */
// @ts-nocheck


/**
 * Check if two arrays are equal (shallow comparison)
 * @param a - First array to compare
 * @param b - Second array to compare
 * @returns true if arrays are equal, false otherwise
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
export function equalArrays(a: unknown[], b: unknown[]): boolean {
  if (stryMutAct_9fa48("0")) {
    {}
  } else {
    stryCov_9fa48("0");
    if (stryMutAct_9fa48("3") ? !a && !b : stryMutAct_9fa48("2") ? false : stryMutAct_9fa48("1") ? true : (stryCov_9fa48("1", "2", "3"), (stryMutAct_9fa48("4") ? a : (stryCov_9fa48("4"), !a)) || (stryMutAct_9fa48("5") ? b : (stryCov_9fa48("5"), !b)))) return stryMutAct_9fa48("6") ? true : (stryCov_9fa48("6"), false);
    if (stryMutAct_9fa48("9") ? !Array.isArray(a) && !Array.isArray(b) : stryMutAct_9fa48("8") ? false : stryMutAct_9fa48("7") ? true : (stryCov_9fa48("7", "8", "9"), (stryMutAct_9fa48("10") ? Array.isArray(a) : (stryCov_9fa48("10"), !Array.isArray(a))) || (stryMutAct_9fa48("11") ? Array.isArray(b) : (stryCov_9fa48("11"), !Array.isArray(b))))) return stryMutAct_9fa48("12") ? true : (stryCov_9fa48("12"), false);
    if (stryMutAct_9fa48("15") ? a !== b : stryMutAct_9fa48("14") ? false : stryMutAct_9fa48("13") ? true : (stryCov_9fa48("13", "14", "15"), a === b)) return stryMutAct_9fa48("16") ? false : (stryCov_9fa48("16"), true);
    if (stryMutAct_9fa48("19") ? a.length == b.length : stryMutAct_9fa48("18") ? false : stryMutAct_9fa48("17") ? true : (stryCov_9fa48("17", "18", "19"), a.length != b.length)) return stryMutAct_9fa48("20") ? true : (stryCov_9fa48("20"), false);
    for (let i = 0; stryMutAct_9fa48("23") ? i >= a.length : stryMutAct_9fa48("22") ? i <= a.length : stryMutAct_9fa48("21") ? false : (stryCov_9fa48("21", "22", "23"), i < a.length); stryMutAct_9fa48("24") ? i-- : (stryCov_9fa48("24"), i++)) {
      if (stryMutAct_9fa48("25")) {
        {}
      } else {
        stryCov_9fa48("25");
        if (stryMutAct_9fa48("28") ? a[i] === b[i] : stryMutAct_9fa48("27") ? false : stryMutAct_9fa48("26") ? true : (stryCov_9fa48("26", "27", "28"), a[i] !== b[i])) return stryMutAct_9fa48("29") ? true : (stryCov_9fa48("29"), false);
      }
    }
    return stryMutAct_9fa48("30") ? false : (stryCov_9fa48("30"), true);
  }
}

/**
 * Group array of objects by key
 * @param array - Array to group
 * @param key - Key to group by
 * @returns Grouped object
 */
export function groupBy<T extends Record<string, unknown>>(array: T[], key: keyof T): Record<string, T[]> {
  if (stryMutAct_9fa48("31")) {
    {}
  } else {
    stryCov_9fa48("31");
    if (stryMutAct_9fa48("34") ? !array && !Array.isArray(array) : stryMutAct_9fa48("33") ? false : stryMutAct_9fa48("32") ? true : (stryCov_9fa48("32", "33", "34"), (stryMutAct_9fa48("35") ? array : (stryCov_9fa48("35"), !array)) || (stryMutAct_9fa48("36") ? Array.isArray(array) : (stryCov_9fa48("36"), !Array.isArray(array))))) return {};
    return array.reduce((result, item) => {
      if (stryMutAct_9fa48("37")) {
        {}
      } else {
        stryCov_9fa48("37");
        const groupKey = String(item[key]);
        if (stryMutAct_9fa48("40") ? false : stryMutAct_9fa48("39") ? true : stryMutAct_9fa48("38") ? result[groupKey] : (stryCov_9fa48("38", "39", "40"), !result[groupKey])) {
          if (stryMutAct_9fa48("41")) {
            {}
          } else {
            stryCov_9fa48("41");
            result[groupKey] = stryMutAct_9fa48("42") ? ["Stryker was here"] : (stryCov_9fa48("42"), []);
          }
        }
        result[groupKey].push(item);
        return result;
      }
    }, {} as Record<string, T[]>);
  }
}

/**
 * Sort array of objects by key
 * @param array - Array to sort
 * @param key - Key to sort by
 * @param order - Sort order ('asc' or 'desc')
 * @returns Sorted array (new array, original unchanged)
 */
export function sortBy<T extends Record<string, unknown>>(array: T[], key: keyof T, order: 'asc' | 'desc' = stryMutAct_9fa48("43") ? "" : (stryCov_9fa48("43"), 'asc')): T[] {
  if (stryMutAct_9fa48("44")) {
    {}
  } else {
    stryCov_9fa48("44");
    if (stryMutAct_9fa48("47") ? !array && !Array.isArray(array) : stryMutAct_9fa48("46") ? false : stryMutAct_9fa48("45") ? true : (stryCov_9fa48("45", "46", "47"), (stryMutAct_9fa48("48") ? array : (stryCov_9fa48("48"), !array)) || (stryMutAct_9fa48("49") ? Array.isArray(array) : (stryCov_9fa48("49"), !Array.isArray(array))))) return stryMutAct_9fa48("50") ? ["Stryker was here"] : (stryCov_9fa48("50"), []);
    return stryMutAct_9fa48("51") ? [...array] : (stryCov_9fa48("51"), (stryMutAct_9fa48("52") ? [] : (stryCov_9fa48("52"), [...array])).sort((a, b) => {
      if (stryMutAct_9fa48("53")) {
        {}
      } else {
        stryCov_9fa48("53");
        const aVal = a[key];
        const bVal = b[key];
        if (stryMutAct_9fa48("57") ? aVal >= bVal : stryMutAct_9fa48("56") ? aVal <= bVal : stryMutAct_9fa48("55") ? false : stryMutAct_9fa48("54") ? true : (stryCov_9fa48("54", "55", "56", "57"), aVal < bVal)) return (stryMutAct_9fa48("60") ? order !== 'asc' : stryMutAct_9fa48("59") ? false : stryMutAct_9fa48("58") ? true : (stryCov_9fa48("58", "59", "60"), order === (stryMutAct_9fa48("61") ? "" : (stryCov_9fa48("61"), 'asc')))) ? stryMutAct_9fa48("62") ? +1 : (stryCov_9fa48("62"), -1) : 1;
        if (stryMutAct_9fa48("66") ? aVal <= bVal : stryMutAct_9fa48("65") ? aVal >= bVal : stryMutAct_9fa48("64") ? false : stryMutAct_9fa48("63") ? true : (stryCov_9fa48("63", "64", "65", "66"), aVal > bVal)) return (stryMutAct_9fa48("69") ? order !== 'asc' : stryMutAct_9fa48("68") ? false : stryMutAct_9fa48("67") ? true : (stryCov_9fa48("67", "68", "69"), order === (stryMutAct_9fa48("70") ? "" : (stryCov_9fa48("70"), 'asc')))) ? 1 : stryMutAct_9fa48("71") ? +1 : (stryCov_9fa48("71"), -1);
        return 0;
      }
    }));
  }
}

/**
 * Split array into chunks of a specified size
 * @param array - Array to chunk
 * @param size - Chunk size
 * @returns Array of chunks
 */
export function chunk<T>(array: T[], size: number): T[][] {
  if (stryMutAct_9fa48("72")) {
    {}
  } else {
    stryCov_9fa48("72");
    if (stryMutAct_9fa48("75") ? !array && !Array.isArray(array) : stryMutAct_9fa48("74") ? false : stryMutAct_9fa48("73") ? true : (stryCov_9fa48("73", "74", "75"), (stryMutAct_9fa48("76") ? array : (stryCov_9fa48("76"), !array)) || (stryMutAct_9fa48("77") ? Array.isArray(array) : (stryCov_9fa48("77"), !Array.isArray(array))))) return stryMutAct_9fa48("78") ? ["Stryker was here"] : (stryCov_9fa48("78"), []);
    if (stryMutAct_9fa48("82") ? size > 0 : stryMutAct_9fa48("81") ? size < 0 : stryMutAct_9fa48("80") ? false : stryMutAct_9fa48("79") ? true : (stryCov_9fa48("79", "80", "81", "82"), size <= 0)) return stryMutAct_9fa48("83") ? ["Stryker was here"] : (stryCov_9fa48("83"), []);
    const result: T[][] = stryMutAct_9fa48("84") ? ["Stryker was here"] : (stryCov_9fa48("84"), []);
    for (let i = 0; stryMutAct_9fa48("87") ? i >= array.length : stryMutAct_9fa48("86") ? i <= array.length : stryMutAct_9fa48("85") ? false : (stryCov_9fa48("85", "86", "87"), i < array.length); stryMutAct_9fa48("88") ? i -= size : (stryCov_9fa48("88"), i += size)) {
      if (stryMutAct_9fa48("89")) {
        {}
      } else {
        stryCov_9fa48("89");
        result.push(stryMutAct_9fa48("90") ? array : (stryCov_9fa48("90"), array.slice(i, stryMutAct_9fa48("91") ? i - size : (stryCov_9fa48("91"), i + size))));
      }
    }
    return result;
  }
}

/**
 * Remove duplicate values from an array
 * @param array - Input array
 * @returns Array with duplicates removed (preserves first occurrence)
 */
export function unique<T>(array: T[]): T[] {
  if (stryMutAct_9fa48("92")) {
    {}
  } else {
    stryCov_9fa48("92");
    if (stryMutAct_9fa48("95") ? !array && !Array.isArray(array) : stryMutAct_9fa48("94") ? false : stryMutAct_9fa48("93") ? true : (stryCov_9fa48("93", "94", "95"), (stryMutAct_9fa48("96") ? array : (stryCov_9fa48("96"), !array)) || (stryMutAct_9fa48("97") ? Array.isArray(array) : (stryCov_9fa48("97"), !Array.isArray(array))))) return stryMutAct_9fa48("98") ? ["Stryker was here"] : (stryCov_9fa48("98"), []);
    return stryMutAct_9fa48("99") ? [] : (stryCov_9fa48("99"), [...new Set(array)]);
  }
}

/**
 * Randomly shuffle an array (Fisher-Yates algorithm)
 * @param array - Array to shuffle
 * @returns New shuffled array (original unchanged)
 */
export function shuffle<T>(array: T[]): T[] {
  if (stryMutAct_9fa48("100")) {
    {}
  } else {
    stryCov_9fa48("100");
    if (stryMutAct_9fa48("103") ? !array && !Array.isArray(array) : stryMutAct_9fa48("102") ? false : stryMutAct_9fa48("101") ? true : (stryCov_9fa48("101", "102", "103"), (stryMutAct_9fa48("104") ? array : (stryCov_9fa48("104"), !array)) || (stryMutAct_9fa48("105") ? Array.isArray(array) : (stryCov_9fa48("105"), !Array.isArray(array))))) return stryMutAct_9fa48("106") ? ["Stryker was here"] : (stryCov_9fa48("106"), []);
    const result = stryMutAct_9fa48("107") ? [] : (stryCov_9fa48("107"), [...array]);
    for (let i = stryMutAct_9fa48("108") ? result.length + 1 : (stryCov_9fa48("108"), result.length - 1); stryMutAct_9fa48("111") ? i <= 0 : stryMutAct_9fa48("110") ? i >= 0 : stryMutAct_9fa48("109") ? false : (stryCov_9fa48("109", "110", "111"), i > 0); stryMutAct_9fa48("112") ? i++ : (stryCov_9fa48("112"), i--)) {
      if (stryMutAct_9fa48("113")) {
        {}
      } else {
        stryCov_9fa48("113");
        const j = Math.floor(stryMutAct_9fa48("114") ? Math.random() / (i + 1) : (stryCov_9fa48("114"), Math.random() * (stryMutAct_9fa48("115") ? i - 1 : (stryCov_9fa48("115"), i + 1))));
        [result[i], result[j]] = stryMutAct_9fa48("116") ? [] : (stryCov_9fa48("116"), [result[j], result[i]]);
      }
    }
    return result;
  }
}

/**
 * Flatten a nested array by one level (or deeply with depth param)
 * @param array - Array to flatten
 * @param depth - Depth to flatten (default: 1)
 * @returns Flattened array
 */
export function flatten<T>(array: T[], depth = 1): T[] {
  if (stryMutAct_9fa48("117")) {
    {}
  } else {
    stryCov_9fa48("117");
    if (stryMutAct_9fa48("120") ? !array && !Array.isArray(array) : stryMutAct_9fa48("119") ? false : stryMutAct_9fa48("118") ? true : (stryCov_9fa48("118", "119", "120"), (stryMutAct_9fa48("121") ? array : (stryCov_9fa48("121"), !array)) || (stryMutAct_9fa48("122") ? Array.isArray(array) : (stryCov_9fa48("122"), !Array.isArray(array))))) return stryMutAct_9fa48("123") ? ["Stryker was here"] : (stryCov_9fa48("123"), []);
    return (array as unknown[]).flat(depth) as T[];
  }
}