/**
 * Number utility functions
 * @module number
 */
// @ts-nocheck


/**
 * Parse number with default value and proper validation
 * @param target - Original string to parse
 * @param defaultValue - Return default value if parsing fails
 * @param isFloat - Whether to parse as float or integer
 * @returns Parsed number value or default value
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
export function parseNumber(target: string, defaultValue: number, isFloat = stryMutAct_9fa48("580") ? true : (stryCov_9fa48("580"), false)): number {
  if (stryMutAct_9fa48("581")) {
    {}
  } else {
    stryCov_9fa48("581");
    if (stryMutAct_9fa48("584") ? (!target || typeof target !== 'string') && target.trim() === '' : stryMutAct_9fa48("583") ? false : stryMutAct_9fa48("582") ? true : (stryCov_9fa48("582", "583", "584"), (stryMutAct_9fa48("586") ? !target && typeof target !== 'string' : stryMutAct_9fa48("585") ? false : (stryCov_9fa48("585", "586"), (stryMutAct_9fa48("587") ? target : (stryCov_9fa48("587"), !target)) || (stryMutAct_9fa48("589") ? typeof target === 'string' : stryMutAct_9fa48("588") ? false : (stryCov_9fa48("588", "589"), typeof target !== (stryMutAct_9fa48("590") ? "" : (stryCov_9fa48("590"), 'string')))))) || (stryMutAct_9fa48("592") ? target.trim() !== '' : stryMutAct_9fa48("591") ? false : (stryCov_9fa48("591", "592"), (stryMutAct_9fa48("593") ? target : (stryCov_9fa48("593"), target.trim())) === (stryMutAct_9fa48("594") ? "Stryker was here!" : (stryCov_9fa48("594"), '')))))) {
      if (stryMutAct_9fa48("595")) {
        {}
      } else {
        stryCov_9fa48("595");
        return defaultValue;
      }
    }
    const parsed = isFloat ? parseFloat(target) : parseInt(target, 10);
    return isNaN(parsed) ? defaultValue : parsed;
  }
}

/**
 * Parse time string to milliseconds
 * @param target - Required format such as '00:11:22' (HH:MM:SS) or '11:22' (MM:SS)
 * @param defaultValue - Default value if parsing fails
 * @returns Parsed milliseconds or default value
 */
export function parseTime(target: string, defaultValue: number): number {
  if (stryMutAct_9fa48("596")) {
    {}
  } else {
    stryCov_9fa48("596");
    if (stryMutAct_9fa48("599") ? (!target || typeof target !== 'string') && target.trim() === '' : stryMutAct_9fa48("598") ? false : stryMutAct_9fa48("597") ? true : (stryCov_9fa48("597", "598", "599"), (stryMutAct_9fa48("601") ? !target && typeof target !== 'string' : stryMutAct_9fa48("600") ? false : (stryCov_9fa48("600", "601"), (stryMutAct_9fa48("602") ? target : (stryCov_9fa48("602"), !target)) || (stryMutAct_9fa48("604") ? typeof target === 'string' : stryMutAct_9fa48("603") ? false : (stryCov_9fa48("603", "604"), typeof target !== (stryMutAct_9fa48("605") ? "" : (stryCov_9fa48("605"), 'string')))))) || (stryMutAct_9fa48("607") ? target.trim() !== '' : stryMutAct_9fa48("606") ? false : (stryCov_9fa48("606", "607"), (stryMutAct_9fa48("608") ? target : (stryCov_9fa48("608"), target.trim())) === (stryMutAct_9fa48("609") ? "Stryker was here!" : (stryCov_9fa48("609"), '')))))) {
      if (stryMutAct_9fa48("610")) {
        {}
      } else {
        stryCov_9fa48("610");
        return defaultValue;
      }
    }
    if (stryMutAct_9fa48("613") ? target.indexOf(':') !== -1 : stryMutAct_9fa48("612") ? false : stryMutAct_9fa48("611") ? true : (stryCov_9fa48("611", "612", "613"), target.indexOf(stryMutAct_9fa48("614") ? "" : (stryCov_9fa48("614"), ':')) === (stryMutAct_9fa48("615") ? +1 : (stryCov_9fa48("615"), -1)))) {
      if (stryMutAct_9fa48("616")) {
        {}
      } else {
        stryCov_9fa48("616");
        const parsed = parseInt(target, 10);
        return isNaN(parsed) ? defaultValue : parsed;
      }
    }
    const timeValues = target.split(stryMutAct_9fa48("617") ? "" : (stryCov_9fa48("617"), ':')).map(value => {
      if (stryMutAct_9fa48("618")) {
        {}
      } else {
        stryCov_9fa48("618");
        const parsed = parseInt(stryMutAct_9fa48("619") ? value : (stryCov_9fa48("619"), value.trim()), 10);
        return isNaN(parsed) ? 0 : parsed;
      }
    });
    if (stryMutAct_9fa48("622") ? timeValues.length < 2 && timeValues.length > 3 : stryMutAct_9fa48("621") ? false : stryMutAct_9fa48("620") ? true : (stryCov_9fa48("620", "621", "622"), (stryMutAct_9fa48("625") ? timeValues.length >= 2 : stryMutAct_9fa48("624") ? timeValues.length <= 2 : stryMutAct_9fa48("623") ? false : (stryCov_9fa48("623", "624", "625"), timeValues.length < 2)) || (stryMutAct_9fa48("628") ? timeValues.length <= 3 : stryMutAct_9fa48("627") ? timeValues.length >= 3 : stryMutAct_9fa48("626") ? false : (stryCov_9fa48("626", "627", "628"), timeValues.length > 3)))) {
      if (stryMutAct_9fa48("629")) {
        {}
      } else {
        stryCov_9fa48("629");
        return defaultValue;
      }
    }
    const [first, second, third = 0] = timeValues;
    if (stryMutAct_9fa48("632") ? timeValues.length !== 3 : stryMutAct_9fa48("631") ? false : stryMutAct_9fa48("630") ? true : (stryCov_9fa48("630", "631", "632"), timeValues.length === 3)) {
      if (stryMutAct_9fa48("633")) {
        {}
      } else {
        stryCov_9fa48("633");
        return stryMutAct_9fa48("634") ? first * 60 * 1000 + second * 1000 - third : (stryCov_9fa48("634"), (stryMutAct_9fa48("635") ? first * 60 * 1000 - second * 1000 : (stryCov_9fa48("635"), (stryMutAct_9fa48("636") ? first * 60 / 1000 : (stryCov_9fa48("636"), (stryMutAct_9fa48("637") ? first / 60 : (stryCov_9fa48("637"), first * 60)) * 1000)) + (stryMutAct_9fa48("638") ? second / 1000 : (stryCov_9fa48("638"), second * 1000)))) + third);
      }
    } else {
      if (stryMutAct_9fa48("639")) {
        {}
      } else {
        stryCov_9fa48("639");
        return stryMutAct_9fa48("640") ? first * 60 * 1000 - second * 1000 : (stryCov_9fa48("640"), (stryMutAct_9fa48("641") ? first * 60 / 1000 : (stryCov_9fa48("641"), (stryMutAct_9fa48("642") ? first / 60 : (stryCov_9fa48("642"), first * 60)) * 1000)) + (stryMutAct_9fa48("643") ? second / 1000 : (stryCov_9fa48("643"), second * 1000)));
      }
    }
  }
}

/**
 * Format number with thousand separators
 * @param num - Number to format
 * @returns Formatted string with commas
 */
export function formatNumber(num: number): string {
  if (stryMutAct_9fa48("644")) {
    {}
  } else {
    stryCov_9fa48("644");
    return num.toLocaleString(stryMutAct_9fa48("645") ? "" : (stryCov_9fa48("645"), 'en-US'));
  }
}

/**
 * Format number as currency
 * @param amount - Amount to format
 * @param currency - Currency code (KRW, USD, EUR, JPY, CNY)
 * @returns Formatted currency string
 */
export function formatCurrency(amount: number, currency: 'KRW' | 'USD' | 'EUR' | 'JPY' | 'CNY' = stryMutAct_9fa48("646") ? "" : (stryCov_9fa48("646"), 'KRW')): string {
  if (stryMutAct_9fa48("647")) {
    {}
  } else {
    stryCov_9fa48("647");
    const formatted = formatNumber(amount);
    const symbols: Record<string, {
      symbol: string;
      prefix: boolean;
    }> = stryMutAct_9fa48("648") ? {} : (stryCov_9fa48("648"), {
      KRW: stryMutAct_9fa48("649") ? {} : (stryCov_9fa48("649"), {
        symbol: stryMutAct_9fa48("650") ? "" : (stryCov_9fa48("650"), '원'),
        prefix: stryMutAct_9fa48("651") ? true : (stryCov_9fa48("651"), false)
      }),
      USD: stryMutAct_9fa48("652") ? {} : (stryCov_9fa48("652"), {
        symbol: stryMutAct_9fa48("653") ? "" : (stryCov_9fa48("653"), '$'),
        prefix: stryMutAct_9fa48("654") ? false : (stryCov_9fa48("654"), true)
      }),
      EUR: stryMutAct_9fa48("655") ? {} : (stryCov_9fa48("655"), {
        symbol: stryMutAct_9fa48("656") ? "" : (stryCov_9fa48("656"), '€'),
        prefix: stryMutAct_9fa48("657") ? false : (stryCov_9fa48("657"), true)
      }),
      JPY: stryMutAct_9fa48("658") ? {} : (stryCov_9fa48("658"), {
        symbol: stryMutAct_9fa48("659") ? "" : (stryCov_9fa48("659"), '¥'),
        prefix: stryMutAct_9fa48("660") ? false : (stryCov_9fa48("660"), true)
      }),
      CNY: stryMutAct_9fa48("661") ? {} : (stryCov_9fa48("661"), {
        symbol: stryMutAct_9fa48("662") ? "" : (stryCov_9fa48("662"), '¥'),
        prefix: stryMutAct_9fa48("663") ? false : (stryCov_9fa48("663"), true)
      })
    });
    const {
      symbol,
      prefix
    } = symbols[currency];
    return prefix ? stryMutAct_9fa48("664") ? `` : (stryCov_9fa48("664"), `${symbol}${formatted}`) : stryMutAct_9fa48("665") ? `` : (stryCov_9fa48("665"), `${formatted}${symbol}`);
  }
}

/**
 * Format bytes to human-readable file size
 * @param bytes - Number of bytes
 * @param precision - Decimal precision (default: 0)
 * @returns Formatted file size string
 */
export function formatFileSize(bytes: number, precision?: number): string {
  if (stryMutAct_9fa48("666")) {
    {}
  } else {
    stryCov_9fa48("666");
    const units = stryMutAct_9fa48("667") ? [] : (stryCov_9fa48("667"), [stryMutAct_9fa48("668") ? "" : (stryCov_9fa48("668"), 'B'), stryMutAct_9fa48("669") ? "" : (stryCov_9fa48("669"), 'KB'), stryMutAct_9fa48("670") ? "" : (stryCov_9fa48("670"), 'MB'), stryMutAct_9fa48("671") ? "" : (stryCov_9fa48("671"), 'GB'), stryMutAct_9fa48("672") ? "" : (stryCov_9fa48("672"), 'TB')]);
    let size = bytes;
    let unitIndex = 0;
    while (stryMutAct_9fa48("674") ? size >= 1024 || unitIndex < units.length - 1 : stryMutAct_9fa48("673") ? false : (stryCov_9fa48("673", "674"), (stryMutAct_9fa48("677") ? size < 1024 : stryMutAct_9fa48("676") ? size > 1024 : stryMutAct_9fa48("675") ? true : (stryCov_9fa48("675", "676", "677"), size >= 1024)) && (stryMutAct_9fa48("680") ? unitIndex >= units.length - 1 : stryMutAct_9fa48("679") ? unitIndex <= units.length - 1 : stryMutAct_9fa48("678") ? true : (stryCov_9fa48("678", "679", "680"), unitIndex < (stryMutAct_9fa48("681") ? units.length + 1 : (stryCov_9fa48("681"), units.length - 1)))))) {
      if (stryMutAct_9fa48("682")) {
        {}
      } else {
        stryCov_9fa48("682");
        stryMutAct_9fa48("683") ? size *= 1024 : (stryCov_9fa48("683"), size /= 1024);
        stryMutAct_9fa48("684") ? unitIndex-- : (stryCov_9fa48("684"), unitIndex++);
      }
    }
    const decimals = (stryMutAct_9fa48("687") ? precision === undefined : stryMutAct_9fa48("686") ? false : stryMutAct_9fa48("685") ? true : (stryCov_9fa48("685", "686", "687"), precision !== undefined)) ? precision : (stryMutAct_9fa48("690") ? unitIndex !== 0 : stryMutAct_9fa48("689") ? false : stryMutAct_9fa48("688") ? true : (stryCov_9fa48("688", "689", "690"), unitIndex === 0)) ? 0 : 0;
    return stryMutAct_9fa48("691") ? `` : (stryCov_9fa48("691"), `${size.toFixed(decimals)} ${units[unitIndex]}`);
  }
}

/**
 * Convert number to Korean words
 * @param num - Number to convert
 * @returns Korean number string (e.g., '천이백삼십사')
 */
export function numberToKorean(num: number): string {
  if (stryMutAct_9fa48("692")) {
    {}
  } else {
    stryCov_9fa48("692");
    if (stryMutAct_9fa48("695") ? num !== 0 : stryMutAct_9fa48("694") ? false : stryMutAct_9fa48("693") ? true : (stryCov_9fa48("693", "694", "695"), num === 0)) return stryMutAct_9fa48("696") ? "" : (stryCov_9fa48("696"), '영');
    const digits = stryMutAct_9fa48("697") ? [] : (stryCov_9fa48("697"), [stryMutAct_9fa48("698") ? "Stryker was here!" : (stryCov_9fa48("698"), ''), stryMutAct_9fa48("699") ? "" : (stryCov_9fa48("699"), '일'), stryMutAct_9fa48("700") ? "" : (stryCov_9fa48("700"), '이'), stryMutAct_9fa48("701") ? "" : (stryCov_9fa48("701"), '삼'), stryMutAct_9fa48("702") ? "" : (stryCov_9fa48("702"), '사'), stryMutAct_9fa48("703") ? "" : (stryCov_9fa48("703"), '오'), stryMutAct_9fa48("704") ? "" : (stryCov_9fa48("704"), '육'), stryMutAct_9fa48("705") ? "" : (stryCov_9fa48("705"), '칠'), stryMutAct_9fa48("706") ? "" : (stryCov_9fa48("706"), '팔'), stryMutAct_9fa48("707") ? "" : (stryCov_9fa48("707"), '구')]);
    const units = stryMutAct_9fa48("708") ? [] : (stryCov_9fa48("708"), [stryMutAct_9fa48("709") ? "Stryker was here!" : (stryCov_9fa48("709"), ''), stryMutAct_9fa48("710") ? "" : (stryCov_9fa48("710"), '십'), stryMutAct_9fa48("711") ? "" : (stryCov_9fa48("711"), '백'), stryMutAct_9fa48("712") ? "" : (stryCov_9fa48("712"), '천')]);
    const bigUnits = stryMutAct_9fa48("713") ? [] : (stryCov_9fa48("713"), [stryMutAct_9fa48("714") ? "Stryker was here!" : (stryCov_9fa48("714"), ''), stryMutAct_9fa48("715") ? "" : (stryCov_9fa48("715"), '만'), stryMutAct_9fa48("716") ? "" : (stryCov_9fa48("716"), '억'), stryMutAct_9fa48("717") ? "" : (stryCov_9fa48("717"), '조')]);
    const processGroup = (n: number): string => {
      if (stryMutAct_9fa48("718")) {
        {}
      } else {
        stryCov_9fa48("718");
        let result = stryMutAct_9fa48("719") ? "Stryker was here!" : (stryCov_9fa48("719"), '');
        let temp = n;
        for (let i = 3; stryMutAct_9fa48("722") ? i < 0 : stryMutAct_9fa48("721") ? i > 0 : stryMutAct_9fa48("720") ? false : (stryCov_9fa48("720", "721", "722"), i >= 0); stryMutAct_9fa48("723") ? i++ : (stryCov_9fa48("723"), i--)) {
          if (stryMutAct_9fa48("724")) {
            {}
          } else {
            stryCov_9fa48("724");
            const digit = Math.floor(stryMutAct_9fa48("725") ? temp * Math.pow(10, i) : (stryCov_9fa48("725"), temp / Math.pow(10, i)));
            stryMutAct_9fa48("726") ? temp *= Math.pow(10, i) : (stryCov_9fa48("726"), temp %= Math.pow(10, i));
            if (stryMutAct_9fa48("730") ? digit <= 0 : stryMutAct_9fa48("729") ? digit >= 0 : stryMutAct_9fa48("728") ? false : stryMutAct_9fa48("727") ? true : (stryCov_9fa48("727", "728", "729", "730"), digit > 0)) {
              if (stryMutAct_9fa48("731")) {
                {}
              } else {
                stryCov_9fa48("731");
                if (stryMutAct_9fa48("734") ? digit > 1 && i === 0 : stryMutAct_9fa48("733") ? false : stryMutAct_9fa48("732") ? true : (stryCov_9fa48("732", "733", "734"), (stryMutAct_9fa48("737") ? digit <= 1 : stryMutAct_9fa48("736") ? digit >= 1 : stryMutAct_9fa48("735") ? false : (stryCov_9fa48("735", "736", "737"), digit > 1)) || (stryMutAct_9fa48("739") ? i !== 0 : stryMutAct_9fa48("738") ? false : (stryCov_9fa48("738", "739"), i === 0)))) {
                  if (stryMutAct_9fa48("740")) {
                    {}
                  } else {
                    stryCov_9fa48("740");
                    stryMutAct_9fa48("741") ? result -= digits[digit] : (stryCov_9fa48("741"), result += digits[digit]);
                  }
                }
                stryMutAct_9fa48("742") ? result -= units[i] : (stryCov_9fa48("742"), result += units[i]);
              }
            }
          }
        }
        return result;
      }
    };
    let result = stryMutAct_9fa48("743") ? "Stryker was here!" : (stryCov_9fa48("743"), '');
    let groupIndex = 0;
    let remaining = num;
    while (stryMutAct_9fa48("746") ? remaining <= 0 : stryMutAct_9fa48("745") ? remaining >= 0 : stryMutAct_9fa48("744") ? false : (stryCov_9fa48("744", "745", "746"), remaining > 0)) {
      if (stryMutAct_9fa48("747")) {
        {}
      } else {
        stryCov_9fa48("747");
        const group = stryMutAct_9fa48("748") ? remaining * 10000 : (stryCov_9fa48("748"), remaining % 10000);
        if (stryMutAct_9fa48("752") ? group <= 0 : stryMutAct_9fa48("751") ? group >= 0 : stryMutAct_9fa48("750") ? false : stryMutAct_9fa48("749") ? true : (stryCov_9fa48("749", "750", "751", "752"), group > 0)) {
          if (stryMutAct_9fa48("753")) {
            {}
          } else {
            stryCov_9fa48("753");
            const groupStr = processGroup(group);
            if (stryMutAct_9fa48("756") ? group === 1 || groupIndex >= 1 : stryMutAct_9fa48("755") ? false : stryMutAct_9fa48("754") ? true : (stryCov_9fa48("754", "755", "756"), (stryMutAct_9fa48("758") ? group !== 1 : stryMutAct_9fa48("757") ? true : (stryCov_9fa48("757", "758"), group === 1)) && (stryMutAct_9fa48("761") ? groupIndex < 1 : stryMutAct_9fa48("760") ? groupIndex > 1 : stryMutAct_9fa48("759") ? true : (stryCov_9fa48("759", "760", "761"), groupIndex >= 1)))) {
              if (stryMutAct_9fa48("762")) {
                {}
              } else {
                stryCov_9fa48("762");
                if (stryMutAct_9fa48("766") ? groupIndex < 2 : stryMutAct_9fa48("765") ? groupIndex > 2 : stryMutAct_9fa48("764") ? false : stryMutAct_9fa48("763") ? true : (stryCov_9fa48("763", "764", "765", "766"), groupIndex >= 2)) {
                  if (stryMutAct_9fa48("767")) {
                    {}
                  } else {
                    stryCov_9fa48("767");
                    result = stryMutAct_9fa48("768") ? '일' + bigUnits[groupIndex] - result : (stryCov_9fa48("768"), (stryMutAct_9fa48("769") ? "" : (stryCov_9fa48("769"), '일')) + bigUnits[groupIndex] + result);
                  }
                } else {
                  if (stryMutAct_9fa48("770")) {
                    {}
                  } else {
                    stryCov_9fa48("770");
                    result = stryMutAct_9fa48("771") ? bigUnits[groupIndex] - result : (stryCov_9fa48("771"), bigUnits[groupIndex] + result);
                  }
                }
              }
            } else {
              if (stryMutAct_9fa48("772")) {
                {}
              } else {
                stryCov_9fa48("772");
                result = stryMutAct_9fa48("773") ? groupStr + bigUnits[groupIndex] - result : (stryCov_9fa48("773"), (stryMutAct_9fa48("774") ? groupStr - bigUnits[groupIndex] : (stryCov_9fa48("774"), groupStr + bigUnits[groupIndex])) + result);
              }
            }
          }
        }
        remaining = Math.floor(stryMutAct_9fa48("775") ? remaining * 10000 : (stryCov_9fa48("775"), remaining / 10000));
        stryMutAct_9fa48("776") ? groupIndex-- : (stryCov_9fa48("776"), groupIndex++);
      }
    }
    return result;
  }
}

/**
 * Parse number from formatted string
 * @param str - String containing number (with commas, currency symbols, etc.)
 * @returns Parsed number
 */
export function parseNumberFromString(str: string): number {
  if (stryMutAct_9fa48("777")) {
    {}
  } else {
    stryCov_9fa48("777");
    const cleaned = str.replace(stryMutAct_9fa48("778") ? /[0-9.-]/g : (stryCov_9fa48("778"), /[^0-9.-]/g), stryMutAct_9fa48("779") ? "Stryker was here!" : (stryCov_9fa48("779"), ''));
    return parseFloat(cleaned);
  }
}