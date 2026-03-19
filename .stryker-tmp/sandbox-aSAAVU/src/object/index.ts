/**
 * Object utility functions
 * @module object
 */
// @ts-nocheck


/**
 * Return deep copied object by original object using structuredClone or JSON fallback
 * @param obj - Object to deep clone
 * @returns Deep cloned object
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
export function clone<T>(obj: T): T {
  if (stryMutAct_9fa48("780")) {
    {}
  } else {
    stryCov_9fa48("780");
    if (stryMutAct_9fa48("783") ? obj === null && typeof obj !== 'object' : stryMutAct_9fa48("782") ? false : stryMutAct_9fa48("781") ? true : (stryCov_9fa48("781", "782", "783"), (stryMutAct_9fa48("785") ? obj !== null : stryMutAct_9fa48("784") ? false : (stryCov_9fa48("784", "785"), obj === null)) || (stryMutAct_9fa48("787") ? typeof obj === 'object' : stryMutAct_9fa48("786") ? false : (stryCov_9fa48("786", "787"), typeof obj !== (stryMutAct_9fa48("788") ? "" : (stryCov_9fa48("788"), 'object')))))) {
      if (stryMutAct_9fa48("789")) {
        {}
      } else {
        stryCov_9fa48("789");
        return obj;
      }
    }
    if (stryMutAct_9fa48("792") ? typeof structuredClone === 'undefined' : stryMutAct_9fa48("791") ? false : stryMutAct_9fa48("790") ? true : (stryCov_9fa48("790", "791", "792"), typeof structuredClone !== (stryMutAct_9fa48("793") ? "" : (stryCov_9fa48("793"), 'undefined')))) {
      if (stryMutAct_9fa48("794")) {
        {}
      } else {
        stryCov_9fa48("794");
        return structuredClone(obj);
      }
    }
    try {
      if (stryMutAct_9fa48("795")) {
        {}
      } else {
        stryCov_9fa48("795");
        return JSON.parse(JSON.stringify(obj)) as T;
      }
    } catch {
      if (stryMutAct_9fa48("796")) {
        {}
      } else {
        stryCov_9fa48("796");
        if (stryMutAct_9fa48("798") ? false : stryMutAct_9fa48("797") ? true : (stryCov_9fa48("797", "798"), Array.isArray(obj))) {
          if (stryMutAct_9fa48("799")) {
            {}
          } else {
            stryCov_9fa48("799");
            return obj.map((item: unknown) => typeof item === 'object' && item !== null ? clone(item) : item) as T;
          }
        }
        const copy = {} as T;
        for (const key in obj) {
          if (stryMutAct_9fa48("800")) {
            {}
          } else {
            stryCov_9fa48("800");
            if (stryMutAct_9fa48("802") ? false : stryMutAct_9fa48("801") ? true : (stryCov_9fa48("801", "802"), Object.prototype.hasOwnProperty.call(obj, key))) {
              if (stryMutAct_9fa48("803")) {
                {}
              } else {
                stryCov_9fa48("803");
                const value = obj[key];
                copy[key] = (stryMutAct_9fa48("806") ? typeof value === 'object' || value !== null : stryMutAct_9fa48("805") ? false : stryMutAct_9fa48("804") ? true : (stryCov_9fa48("804", "805", "806"), (stryMutAct_9fa48("808") ? typeof value !== 'object' : stryMutAct_9fa48("807") ? true : (stryCov_9fa48("807", "808"), typeof value === (stryMutAct_9fa48("809") ? "" : (stryCov_9fa48("809"), 'object')))) && (stryMutAct_9fa48("811") ? value === null : stryMutAct_9fa48("810") ? true : (stryCov_9fa48("810", "811"), value !== null)))) ? clone(value) : value;
              }
            }
          }
        }
        return copy;
      }
    }
  }
}

/**
 * Get nested object value by path string
 * @param obj - Target object
 * @param path - Path string (e.g., 'user.profile.name')
 * @param defaultValue - Default value if path not found
 * @returns Value at path or default value
 */
export function getByPath<T = unknown>(obj: Record<string, unknown>, path: string, defaultValue?: T): T {
  if (stryMutAct_9fa48("812")) {
    {}
  } else {
    stryCov_9fa48("812");
    const keys = path.split(stryMutAct_9fa48("813") ? "" : (stryCov_9fa48("813"), '.'));
    let result: unknown = obj;
    for (const key of keys) {
      if (stryMutAct_9fa48("814")) {
        {}
      } else {
        stryCov_9fa48("814");
        if (stryMutAct_9fa48("817") ? result === null && result === undefined : stryMutAct_9fa48("816") ? false : stryMutAct_9fa48("815") ? true : (stryCov_9fa48("815", "816", "817"), (stryMutAct_9fa48("819") ? result !== null : stryMutAct_9fa48("818") ? false : (stryCov_9fa48("818", "819"), result === null)) || (stryMutAct_9fa48("821") ? result !== undefined : stryMutAct_9fa48("820") ? false : (stryCov_9fa48("820", "821"), result === undefined)))) {
          if (stryMutAct_9fa48("822")) {
            {}
          } else {
            stryCov_9fa48("822");
            return defaultValue as T;
          }
        }
        result = (result as Record<string, unknown>)[key];
      }
    }
    return (stryMutAct_9fa48("825") ? result !== undefined : stryMutAct_9fa48("824") ? false : stryMutAct_9fa48("823") ? true : (stryCov_9fa48("823", "824", "825"), result === undefined)) ? defaultValue as T : result as T;
  }
}

/**
 * Set nested object value by path string
 * @param obj - Target object
 * @param path - Path string (e.g., 'user.profile.name')
 * @param value - Value to set
 */
export function setByPath(obj: Record<string, unknown>, path: string, value: unknown): void {
  if (stryMutAct_9fa48("826")) {
    {}
  } else {
    stryCov_9fa48("826");
    const keys = path.split(stryMutAct_9fa48("827") ? "" : (stryCov_9fa48("827"), '.'));
    const lastKey = keys.pop();
    if (stryMutAct_9fa48("830") ? false : stryMutAct_9fa48("829") ? true : stryMutAct_9fa48("828") ? lastKey : (stryCov_9fa48("828", "829", "830"), !lastKey)) return;
    let current: Record<string, unknown> = obj;
    for (const key of keys) {
      if (stryMutAct_9fa48("831")) {
        {}
      } else {
        stryCov_9fa48("831");
        if (stryMutAct_9fa48("834") ? !(key in current) && typeof current[key] !== 'object' : stryMutAct_9fa48("833") ? false : stryMutAct_9fa48("832") ? true : (stryCov_9fa48("832", "833", "834"), (stryMutAct_9fa48("835") ? key in current : (stryCov_9fa48("835"), !(key in current))) || (stryMutAct_9fa48("837") ? typeof current[key] === 'object' : stryMutAct_9fa48("836") ? false : (stryCov_9fa48("836", "837"), typeof current[key] !== (stryMutAct_9fa48("838") ? "" : (stryCov_9fa48("838"), 'object')))))) {
          if (stryMutAct_9fa48("839")) {
            {}
          } else {
            stryCov_9fa48("839");
            current[key] = {};
          }
        }
        current = current[key] as Record<string, unknown>;
      }
    }
    current[lastKey] = value;
  }
}

/**
 * Deep merge two objects
 * @param target - Target object
 * @param source - Source object
 * @returns Merged object (new object, originals unchanged)
 */
export function deepMerge<T extends Record<string, unknown>>(target: T, source: Partial<T>): T {
  if (stryMutAct_9fa48("840")) {
    {}
  } else {
    stryCov_9fa48("840");
    const result = stryMutAct_9fa48("841") ? {} : (stryCov_9fa48("841"), {
      ...target
    });
    for (const key in source) {
      if (stryMutAct_9fa48("842")) {
        {}
      } else {
        stryCov_9fa48("842");
        if (stryMutAct_9fa48("844") ? false : stryMutAct_9fa48("843") ? true : (stryCov_9fa48("843", "844"), Object.prototype.hasOwnProperty.call(source, key))) {
          if (stryMutAct_9fa48("845")) {
            {}
          } else {
            stryCov_9fa48("845");
            const sourceValue = source[key];
            const targetValue = result[key];
            if (stryMutAct_9fa48("848") ? sourceValue && typeof sourceValue === 'object' && !Array.isArray(sourceValue) && targetValue && typeof targetValue === 'object' || !Array.isArray(targetValue) : stryMutAct_9fa48("847") ? false : stryMutAct_9fa48("846") ? true : (stryCov_9fa48("846", "847", "848"), (stryMutAct_9fa48("850") ? sourceValue && typeof sourceValue === 'object' && !Array.isArray(sourceValue) && targetValue || typeof targetValue === 'object' : stryMutAct_9fa48("849") ? true : (stryCov_9fa48("849", "850"), (stryMutAct_9fa48("852") ? sourceValue && typeof sourceValue === 'object' && !Array.isArray(sourceValue) || targetValue : stryMutAct_9fa48("851") ? true : (stryCov_9fa48("851", "852"), (stryMutAct_9fa48("854") ? sourceValue && typeof sourceValue === 'object' || !Array.isArray(sourceValue) : stryMutAct_9fa48("853") ? true : (stryCov_9fa48("853", "854"), (stryMutAct_9fa48("856") ? sourceValue || typeof sourceValue === 'object' : stryMutAct_9fa48("855") ? true : (stryCov_9fa48("855", "856"), sourceValue && (stryMutAct_9fa48("858") ? typeof sourceValue !== 'object' : stryMutAct_9fa48("857") ? true : (stryCov_9fa48("857", "858"), typeof sourceValue === (stryMutAct_9fa48("859") ? "" : (stryCov_9fa48("859"), 'object')))))) && (stryMutAct_9fa48("860") ? Array.isArray(sourceValue) : (stryCov_9fa48("860"), !Array.isArray(sourceValue))))) && targetValue)) && (stryMutAct_9fa48("862") ? typeof targetValue !== 'object' : stryMutAct_9fa48("861") ? true : (stryCov_9fa48("861", "862"), typeof targetValue === (stryMutAct_9fa48("863") ? "" : (stryCov_9fa48("863"), 'object')))))) && (stryMutAct_9fa48("864") ? Array.isArray(targetValue) : (stryCov_9fa48("864"), !Array.isArray(targetValue))))) {
              if (stryMutAct_9fa48("865")) {
                {}
              } else {
                stryCov_9fa48("865");
                result[key] = deepMerge(targetValue as Record<string, unknown>, sourceValue as Partial<Record<string, unknown>>) as T[Extract<keyof T, string>];
              }
            } else {
              if (stryMutAct_9fa48("866")) {
                {}
              } else {
                stryCov_9fa48("866");
                result[key] = sourceValue as T[Extract<keyof T, string>];
              }
            }
          }
        }
      }
    }
    return result;
  }
}

/**
 * Pick specified keys from an object
 * @param obj - Source object
 * @param keys - Keys to pick
 * @returns New object with only the picked keys
 */
export function pick<T extends Record<string, unknown>, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  if (stryMutAct_9fa48("867")) {
    {}
  } else {
    stryCov_9fa48("867");
    const result = {} as Pick<T, K>;
    for (const key of keys) {
      if (stryMutAct_9fa48("868")) {
        {}
      } else {
        stryCov_9fa48("868");
        if (stryMutAct_9fa48("870") ? false : stryMutAct_9fa48("869") ? true : (stryCov_9fa48("869", "870"), Object.prototype.hasOwnProperty.call(obj, key))) {
          if (stryMutAct_9fa48("871")) {
            {}
          } else {
            stryCov_9fa48("871");
            result[key] = obj[key];
          }
        }
      }
    }
    return result;
  }
}

/**
 * Omit specified keys from an object
 * @param obj - Source object
 * @param keys - Keys to omit
 * @returns New object without the omitted keys
 */
export function omit<T extends Record<string, unknown>, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> {
  if (stryMutAct_9fa48("872")) {
    {}
  } else {
    stryCov_9fa48("872");
    const result = stryMutAct_9fa48("873") ? {} : (stryCov_9fa48("873"), {
      ...obj
    });
    for (const key of keys) {
      if (stryMutAct_9fa48("874")) {
        {}
      } else {
        stryCov_9fa48("874");
        delete result[key];
      }
    }
    return result as Omit<T, K>;
  }
}

/**
 * Get the diff between two objects (keys that differ, with new values)
 * @param base - Base object
 * @param compare - Object to compare against base
 * @returns Object containing keys that differ, with values from compare
 */
export function diff<T extends Record<string, unknown>>(base: T, compare: T): Partial<T> {
  if (stryMutAct_9fa48("875")) {
    {}
  } else {
    stryCov_9fa48("875");
    const result: Partial<T> = {};
    const allKeys = new Set(stryMutAct_9fa48("876") ? [] : (stryCov_9fa48("876"), [...Object.keys(base), ...Object.keys(compare)]));
    for (const key of allKeys) {
      if (stryMutAct_9fa48("877")) {
        {}
      } else {
        stryCov_9fa48("877");
        const baseVal = base[key];
        const compareVal = compare[key];
        if (stryMutAct_9fa48("880") ? JSON.stringify(baseVal) === JSON.stringify(compareVal) : stryMutAct_9fa48("879") ? false : stryMutAct_9fa48("878") ? true : (stryCov_9fa48("878", "879", "880"), JSON.stringify(baseVal) !== JSON.stringify(compareVal))) {
          if (stryMutAct_9fa48("881")) {
            {}
          } else {
            stryCov_9fa48("881");
            result[key as keyof T] = compareVal as T[keyof T];
          }
        }
      }
    }
    return result;
  }
}

/**
 * Check if an object (or array/string/null) is empty
 * @param value - Value to check
 * @returns true if empty, false otherwise
 */
export function isEmpty(value: unknown): boolean {
  if (stryMutAct_9fa48("882")) {
    {}
  } else {
    stryCov_9fa48("882");
    if (stryMutAct_9fa48("885") ? value === null && value === undefined : stryMutAct_9fa48("884") ? false : stryMutAct_9fa48("883") ? true : (stryCov_9fa48("883", "884", "885"), (stryMutAct_9fa48("887") ? value !== null : stryMutAct_9fa48("886") ? false : (stryCov_9fa48("886", "887"), value === null)) || (stryMutAct_9fa48("889") ? value !== undefined : stryMutAct_9fa48("888") ? false : (stryCov_9fa48("888", "889"), value === undefined)))) return stryMutAct_9fa48("890") ? false : (stryCov_9fa48("890"), true);
    if (stryMutAct_9fa48("893") ? typeof value !== 'string' : stryMutAct_9fa48("892") ? false : stryMutAct_9fa48("891") ? true : (stryCov_9fa48("891", "892", "893"), typeof value === (stryMutAct_9fa48("894") ? "" : (stryCov_9fa48("894"), 'string')))) return stryMutAct_9fa48("897") ? value.length !== 0 : stryMutAct_9fa48("896") ? false : stryMutAct_9fa48("895") ? true : (stryCov_9fa48("895", "896", "897"), value.length === 0);
    if (stryMutAct_9fa48("899") ? false : stryMutAct_9fa48("898") ? true : (stryCov_9fa48("898", "899"), Array.isArray(value))) return stryMutAct_9fa48("902") ? value.length !== 0 : stryMutAct_9fa48("901") ? false : stryMutAct_9fa48("900") ? true : (stryCov_9fa48("900", "901", "902"), value.length === 0);
    if (stryMutAct_9fa48("905") ? typeof value !== 'object' : stryMutAct_9fa48("904") ? false : stryMutAct_9fa48("903") ? true : (stryCov_9fa48("903", "904", "905"), typeof value === (stryMutAct_9fa48("906") ? "" : (stryCov_9fa48("906"), 'object')))) return stryMutAct_9fa48("909") ? Object.keys(value as object).length !== 0 : stryMutAct_9fa48("908") ? false : stryMutAct_9fa48("907") ? true : (stryCov_9fa48("907", "908", "909"), Object.keys(value as object).length === 0);
    return stryMutAct_9fa48("910") ? true : (stryCov_9fa48("910"), false);
  }
}