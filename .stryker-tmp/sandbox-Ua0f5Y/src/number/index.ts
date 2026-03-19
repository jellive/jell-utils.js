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
export function parseNumber(target: string, defaultValue: number, isFloat = stryMutAct_9fa48("216") ? true : (stryCov_9fa48("216"), false)): number {
  if (stryMutAct_9fa48("217")) {
    {}
  } else {
    stryCov_9fa48("217");
    if (stryMutAct_9fa48("220") ? (!target || typeof target !== 'string') && target.trim() === '' : stryMutAct_9fa48("219") ? false : stryMutAct_9fa48("218") ? true : (stryCov_9fa48("218", "219", "220"), (stryMutAct_9fa48("222") ? !target && typeof target !== 'string' : stryMutAct_9fa48("221") ? false : (stryCov_9fa48("221", "222"), (stryMutAct_9fa48("223") ? target : (stryCov_9fa48("223"), !target)) || (stryMutAct_9fa48("225") ? typeof target === 'string' : stryMutAct_9fa48("224") ? false : (stryCov_9fa48("224", "225"), typeof target !== (stryMutAct_9fa48("226") ? "" : (stryCov_9fa48("226"), 'string')))))) || (stryMutAct_9fa48("228") ? target.trim() !== '' : stryMutAct_9fa48("227") ? false : (stryCov_9fa48("227", "228"), (stryMutAct_9fa48("229") ? target : (stryCov_9fa48("229"), target.trim())) === (stryMutAct_9fa48("230") ? "Stryker was here!" : (stryCov_9fa48("230"), '')))))) {
      if (stryMutAct_9fa48("231")) {
        {}
      } else {
        stryCov_9fa48("231");
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
  if (stryMutAct_9fa48("232")) {
    {}
  } else {
    stryCov_9fa48("232");
    if (stryMutAct_9fa48("235") ? (!target || typeof target !== 'string') && target.trim() === '' : stryMutAct_9fa48("234") ? false : stryMutAct_9fa48("233") ? true : (stryCov_9fa48("233", "234", "235"), (stryMutAct_9fa48("237") ? !target && typeof target !== 'string' : stryMutAct_9fa48("236") ? false : (stryCov_9fa48("236", "237"), (stryMutAct_9fa48("238") ? target : (stryCov_9fa48("238"), !target)) || (stryMutAct_9fa48("240") ? typeof target === 'string' : stryMutAct_9fa48("239") ? false : (stryCov_9fa48("239", "240"), typeof target !== (stryMutAct_9fa48("241") ? "" : (stryCov_9fa48("241"), 'string')))))) || (stryMutAct_9fa48("243") ? target.trim() !== '' : stryMutAct_9fa48("242") ? false : (stryCov_9fa48("242", "243"), (stryMutAct_9fa48("244") ? target : (stryCov_9fa48("244"), target.trim())) === (stryMutAct_9fa48("245") ? "Stryker was here!" : (stryCov_9fa48("245"), '')))))) {
      if (stryMutAct_9fa48("246")) {
        {}
      } else {
        stryCov_9fa48("246");
        return defaultValue;
      }
    }
    if (stryMutAct_9fa48("249") ? target.indexOf(':') !== -1 : stryMutAct_9fa48("248") ? false : stryMutAct_9fa48("247") ? true : (stryCov_9fa48("247", "248", "249"), target.indexOf(stryMutAct_9fa48("250") ? "" : (stryCov_9fa48("250"), ':')) === (stryMutAct_9fa48("251") ? +1 : (stryCov_9fa48("251"), -1)))) {
      if (stryMutAct_9fa48("252")) {
        {}
      } else {
        stryCov_9fa48("252");
        const parsed = parseInt(target, 10);
        return isNaN(parsed) ? defaultValue : parsed;
      }
    }
    const timeValues = target.split(stryMutAct_9fa48("253") ? "" : (stryCov_9fa48("253"), ':')).map(value => {
      if (stryMutAct_9fa48("254")) {
        {}
      } else {
        stryCov_9fa48("254");
        const parsed = parseInt(stryMutAct_9fa48("255") ? value : (stryCov_9fa48("255"), value.trim()), 10);
        return isNaN(parsed) ? 0 : parsed;
      }
    });
    if (stryMutAct_9fa48("258") ? timeValues.length < 2 && timeValues.length > 3 : stryMutAct_9fa48("257") ? false : stryMutAct_9fa48("256") ? true : (stryCov_9fa48("256", "257", "258"), (stryMutAct_9fa48("261") ? timeValues.length >= 2 : stryMutAct_9fa48("260") ? timeValues.length <= 2 : stryMutAct_9fa48("259") ? false : (stryCov_9fa48("259", "260", "261"), timeValues.length < 2)) || (stryMutAct_9fa48("264") ? timeValues.length <= 3 : stryMutAct_9fa48("263") ? timeValues.length >= 3 : stryMutAct_9fa48("262") ? false : (stryCov_9fa48("262", "263", "264"), timeValues.length > 3)))) {
      if (stryMutAct_9fa48("265")) {
        {}
      } else {
        stryCov_9fa48("265");
        return defaultValue;
      }
    }
    const [first, second, third = 0] = timeValues;
    if (stryMutAct_9fa48("268") ? timeValues.length !== 3 : stryMutAct_9fa48("267") ? false : stryMutAct_9fa48("266") ? true : (stryCov_9fa48("266", "267", "268"), timeValues.length === 3)) {
      if (stryMutAct_9fa48("269")) {
        {}
      } else {
        stryCov_9fa48("269");
        return stryMutAct_9fa48("270") ? first * 60 * 1000 + second * 1000 - third : (stryCov_9fa48("270"), (stryMutAct_9fa48("271") ? first * 60 * 1000 - second * 1000 : (stryCov_9fa48("271"), (stryMutAct_9fa48("272") ? first * 60 / 1000 : (stryCov_9fa48("272"), (stryMutAct_9fa48("273") ? first / 60 : (stryCov_9fa48("273"), first * 60)) * 1000)) + (stryMutAct_9fa48("274") ? second / 1000 : (stryCov_9fa48("274"), second * 1000)))) + third);
      }
    } else {
      if (stryMutAct_9fa48("275")) {
        {}
      } else {
        stryCov_9fa48("275");
        return stryMutAct_9fa48("276") ? first * 60 * 1000 - second * 1000 : (stryCov_9fa48("276"), (stryMutAct_9fa48("277") ? first * 60 / 1000 : (stryCov_9fa48("277"), (stryMutAct_9fa48("278") ? first / 60 : (stryCov_9fa48("278"), first * 60)) * 1000)) + (stryMutAct_9fa48("279") ? second / 1000 : (stryCov_9fa48("279"), second * 1000)));
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
  if (stryMutAct_9fa48("280")) {
    {}
  } else {
    stryCov_9fa48("280");
    return num.toLocaleString(stryMutAct_9fa48("281") ? "" : (stryCov_9fa48("281"), 'en-US'));
  }
}

/**
 * Format number as currency
 * @param amount - Amount to format
 * @param currency - Currency code (KRW, USD, EUR, JPY, CNY)
 * @returns Formatted currency string
 */
export function formatCurrency(amount: number, currency: 'KRW' | 'USD' | 'EUR' | 'JPY' | 'CNY' = stryMutAct_9fa48("282") ? "" : (stryCov_9fa48("282"), 'KRW')): string {
  if (stryMutAct_9fa48("283")) {
    {}
  } else {
    stryCov_9fa48("283");
    const formatted = formatNumber(amount);
    const symbols: Record<string, {
      symbol: string;
      prefix: boolean;
    }> = stryMutAct_9fa48("284") ? {} : (stryCov_9fa48("284"), {
      KRW: stryMutAct_9fa48("285") ? {} : (stryCov_9fa48("285"), {
        symbol: stryMutAct_9fa48("286") ? "" : (stryCov_9fa48("286"), '원'),
        prefix: stryMutAct_9fa48("287") ? true : (stryCov_9fa48("287"), false)
      }),
      USD: stryMutAct_9fa48("288") ? {} : (stryCov_9fa48("288"), {
        symbol: stryMutAct_9fa48("289") ? "" : (stryCov_9fa48("289"), '$'),
        prefix: stryMutAct_9fa48("290") ? false : (stryCov_9fa48("290"), true)
      }),
      EUR: stryMutAct_9fa48("291") ? {} : (stryCov_9fa48("291"), {
        symbol: stryMutAct_9fa48("292") ? "" : (stryCov_9fa48("292"), '€'),
        prefix: stryMutAct_9fa48("293") ? false : (stryCov_9fa48("293"), true)
      }),
      JPY: stryMutAct_9fa48("294") ? {} : (stryCov_9fa48("294"), {
        symbol: stryMutAct_9fa48("295") ? "" : (stryCov_9fa48("295"), '¥'),
        prefix: stryMutAct_9fa48("296") ? false : (stryCov_9fa48("296"), true)
      }),
      CNY: stryMutAct_9fa48("297") ? {} : (stryCov_9fa48("297"), {
        symbol: stryMutAct_9fa48("298") ? "" : (stryCov_9fa48("298"), '¥'),
        prefix: stryMutAct_9fa48("299") ? false : (stryCov_9fa48("299"), true)
      })
    });
    const {
      symbol,
      prefix
    } = symbols[currency];
    return prefix ? stryMutAct_9fa48("300") ? `` : (stryCov_9fa48("300"), `${symbol}${formatted}`) : stryMutAct_9fa48("301") ? `` : (stryCov_9fa48("301"), `${formatted}${symbol}`);
  }
}

/**
 * Format bytes to human-readable file size
 * @param bytes - Number of bytes
 * @param precision - Decimal precision (default: 0)
 * @returns Formatted file size string
 */
export function formatFileSize(bytes: number, precision?: number): string {
  if (stryMutAct_9fa48("302")) {
    {}
  } else {
    stryCov_9fa48("302");
    const units = stryMutAct_9fa48("303") ? [] : (stryCov_9fa48("303"), [stryMutAct_9fa48("304") ? "" : (stryCov_9fa48("304"), 'B'), stryMutAct_9fa48("305") ? "" : (stryCov_9fa48("305"), 'KB'), stryMutAct_9fa48("306") ? "" : (stryCov_9fa48("306"), 'MB'), stryMutAct_9fa48("307") ? "" : (stryCov_9fa48("307"), 'GB'), stryMutAct_9fa48("308") ? "" : (stryCov_9fa48("308"), 'TB')]);
    let size = bytes;
    let unitIndex = 0;
    while (stryMutAct_9fa48("310") ? size >= 1024 || unitIndex < units.length - 1 : stryMutAct_9fa48("309") ? false : (stryCov_9fa48("309", "310"), (stryMutAct_9fa48("313") ? size < 1024 : stryMutAct_9fa48("312") ? size > 1024 : stryMutAct_9fa48("311") ? true : (stryCov_9fa48("311", "312", "313"), size >= 1024)) && (stryMutAct_9fa48("316") ? unitIndex >= units.length - 1 : stryMutAct_9fa48("315") ? unitIndex <= units.length - 1 : stryMutAct_9fa48("314") ? true : (stryCov_9fa48("314", "315", "316"), unitIndex < (stryMutAct_9fa48("317") ? units.length + 1 : (stryCov_9fa48("317"), units.length - 1)))))) {
      if (stryMutAct_9fa48("318")) {
        {}
      } else {
        stryCov_9fa48("318");
        stryMutAct_9fa48("319") ? size *= 1024 : (stryCov_9fa48("319"), size /= 1024);
        stryMutAct_9fa48("320") ? unitIndex-- : (stryCov_9fa48("320"), unitIndex++);
      }
    }
    const decimals = (stryMutAct_9fa48("323") ? precision === undefined : stryMutAct_9fa48("322") ? false : stryMutAct_9fa48("321") ? true : (stryCov_9fa48("321", "322", "323"), precision !== undefined)) ? precision : (stryMutAct_9fa48("326") ? unitIndex !== 0 : stryMutAct_9fa48("325") ? false : stryMutAct_9fa48("324") ? true : (stryCov_9fa48("324", "325", "326"), unitIndex === 0)) ? 0 : 0;
    return stryMutAct_9fa48("327") ? `` : (stryCov_9fa48("327"), `${size.toFixed(decimals)} ${units[unitIndex]}`);
  }
}

/**
 * Convert number to Korean words
 * @param num - Number to convert
 * @returns Korean number string (e.g., '천이백삼십사')
 */
export function numberToKorean(num: number): string {
  if (stryMutAct_9fa48("328")) {
    {}
  } else {
    stryCov_9fa48("328");
    if (stryMutAct_9fa48("331") ? num !== 0 : stryMutAct_9fa48("330") ? false : stryMutAct_9fa48("329") ? true : (stryCov_9fa48("329", "330", "331"), num === 0)) return stryMutAct_9fa48("332") ? "" : (stryCov_9fa48("332"), '영');
    const digits = stryMutAct_9fa48("333") ? [] : (stryCov_9fa48("333"), [stryMutAct_9fa48("334") ? "Stryker was here!" : (stryCov_9fa48("334"), ''), stryMutAct_9fa48("335") ? "" : (stryCov_9fa48("335"), '일'), stryMutAct_9fa48("336") ? "" : (stryCov_9fa48("336"), '이'), stryMutAct_9fa48("337") ? "" : (stryCov_9fa48("337"), '삼'), stryMutAct_9fa48("338") ? "" : (stryCov_9fa48("338"), '사'), stryMutAct_9fa48("339") ? "" : (stryCov_9fa48("339"), '오'), stryMutAct_9fa48("340") ? "" : (stryCov_9fa48("340"), '육'), stryMutAct_9fa48("341") ? "" : (stryCov_9fa48("341"), '칠'), stryMutAct_9fa48("342") ? "" : (stryCov_9fa48("342"), '팔'), stryMutAct_9fa48("343") ? "" : (stryCov_9fa48("343"), '구')]);
    const units = stryMutAct_9fa48("344") ? [] : (stryCov_9fa48("344"), [stryMutAct_9fa48("345") ? "Stryker was here!" : (stryCov_9fa48("345"), ''), stryMutAct_9fa48("346") ? "" : (stryCov_9fa48("346"), '십'), stryMutAct_9fa48("347") ? "" : (stryCov_9fa48("347"), '백'), stryMutAct_9fa48("348") ? "" : (stryCov_9fa48("348"), '천')]);
    const bigUnits = stryMutAct_9fa48("349") ? [] : (stryCov_9fa48("349"), [stryMutAct_9fa48("350") ? "Stryker was here!" : (stryCov_9fa48("350"), ''), stryMutAct_9fa48("351") ? "" : (stryCov_9fa48("351"), '만'), stryMutAct_9fa48("352") ? "" : (stryCov_9fa48("352"), '억'), stryMutAct_9fa48("353") ? "" : (stryCov_9fa48("353"), '조')]);
    const processGroup = (n: number): string => {
      if (stryMutAct_9fa48("354")) {
        {}
      } else {
        stryCov_9fa48("354");
        let result = stryMutAct_9fa48("355") ? "Stryker was here!" : (stryCov_9fa48("355"), '');
        let temp = n;
        for (let i = 3; stryMutAct_9fa48("358") ? i < 0 : stryMutAct_9fa48("357") ? i > 0 : stryMutAct_9fa48("356") ? false : (stryCov_9fa48("356", "357", "358"), i >= 0); stryMutAct_9fa48("359") ? i++ : (stryCov_9fa48("359"), i--)) {
          if (stryMutAct_9fa48("360")) {
            {}
          } else {
            stryCov_9fa48("360");
            const digit = Math.floor(stryMutAct_9fa48("361") ? temp * Math.pow(10, i) : (stryCov_9fa48("361"), temp / Math.pow(10, i)));
            stryMutAct_9fa48("362") ? temp *= Math.pow(10, i) : (stryCov_9fa48("362"), temp %= Math.pow(10, i));
            if (stryMutAct_9fa48("366") ? digit <= 0 : stryMutAct_9fa48("365") ? digit >= 0 : stryMutAct_9fa48("364") ? false : stryMutAct_9fa48("363") ? true : (stryCov_9fa48("363", "364", "365", "366"), digit > 0)) {
              if (stryMutAct_9fa48("367")) {
                {}
              } else {
                stryCov_9fa48("367");
                if (stryMutAct_9fa48("370") ? digit > 1 && i === 0 : stryMutAct_9fa48("369") ? false : stryMutAct_9fa48("368") ? true : (stryCov_9fa48("368", "369", "370"), (stryMutAct_9fa48("373") ? digit <= 1 : stryMutAct_9fa48("372") ? digit >= 1 : stryMutAct_9fa48("371") ? false : (stryCov_9fa48("371", "372", "373"), digit > 1)) || (stryMutAct_9fa48("375") ? i !== 0 : stryMutAct_9fa48("374") ? false : (stryCov_9fa48("374", "375"), i === 0)))) {
                  if (stryMutAct_9fa48("376")) {
                    {}
                  } else {
                    stryCov_9fa48("376");
                    stryMutAct_9fa48("377") ? result -= digits[digit] : (stryCov_9fa48("377"), result += digits[digit]);
                  }
                }
                stryMutAct_9fa48("378") ? result -= units[i] : (stryCov_9fa48("378"), result += units[i]);
              }
            }
          }
        }
        return result;
      }
    };
    let result = stryMutAct_9fa48("379") ? "Stryker was here!" : (stryCov_9fa48("379"), '');
    let groupIndex = 0;
    let remaining = num;
    while (stryMutAct_9fa48("382") ? remaining <= 0 : stryMutAct_9fa48("381") ? remaining >= 0 : stryMutAct_9fa48("380") ? false : (stryCov_9fa48("380", "381", "382"), remaining > 0)) {
      if (stryMutAct_9fa48("383")) {
        {}
      } else {
        stryCov_9fa48("383");
        const group = stryMutAct_9fa48("384") ? remaining * 10000 : (stryCov_9fa48("384"), remaining % 10000);
        if (stryMutAct_9fa48("388") ? group <= 0 : stryMutAct_9fa48("387") ? group >= 0 : stryMutAct_9fa48("386") ? false : stryMutAct_9fa48("385") ? true : (stryCov_9fa48("385", "386", "387", "388"), group > 0)) {
          if (stryMutAct_9fa48("389")) {
            {}
          } else {
            stryCov_9fa48("389");
            const groupStr = processGroup(group);
            if (stryMutAct_9fa48("392") ? group === 1 || groupIndex >= 1 : stryMutAct_9fa48("391") ? false : stryMutAct_9fa48("390") ? true : (stryCov_9fa48("390", "391", "392"), (stryMutAct_9fa48("394") ? group !== 1 : stryMutAct_9fa48("393") ? true : (stryCov_9fa48("393", "394"), group === 1)) && (stryMutAct_9fa48("397") ? groupIndex < 1 : stryMutAct_9fa48("396") ? groupIndex > 1 : stryMutAct_9fa48("395") ? true : (stryCov_9fa48("395", "396", "397"), groupIndex >= 1)))) {
              if (stryMutAct_9fa48("398")) {
                {}
              } else {
                stryCov_9fa48("398");
                if (stryMutAct_9fa48("402") ? groupIndex < 2 : stryMutAct_9fa48("401") ? groupIndex > 2 : stryMutAct_9fa48("400") ? false : stryMutAct_9fa48("399") ? true : (stryCov_9fa48("399", "400", "401", "402"), groupIndex >= 2)) {
                  if (stryMutAct_9fa48("403")) {
                    {}
                  } else {
                    stryCov_9fa48("403");
                    result = stryMutAct_9fa48("404") ? '일' + bigUnits[groupIndex] - result : (stryCov_9fa48("404"), (stryMutAct_9fa48("405") ? "" : (stryCov_9fa48("405"), '일')) + bigUnits[groupIndex] + result);
                  }
                } else {
                  if (stryMutAct_9fa48("406")) {
                    {}
                  } else {
                    stryCov_9fa48("406");
                    result = stryMutAct_9fa48("407") ? bigUnits[groupIndex] - result : (stryCov_9fa48("407"), bigUnits[groupIndex] + result);
                  }
                }
              }
            } else {
              if (stryMutAct_9fa48("408")) {
                {}
              } else {
                stryCov_9fa48("408");
                result = stryMutAct_9fa48("409") ? groupStr + bigUnits[groupIndex] - result : (stryCov_9fa48("409"), (stryMutAct_9fa48("410") ? groupStr - bigUnits[groupIndex] : (stryCov_9fa48("410"), groupStr + bigUnits[groupIndex])) + result);
              }
            }
          }
        }
        remaining = Math.floor(stryMutAct_9fa48("411") ? remaining * 10000 : (stryCov_9fa48("411"), remaining / 10000));
        stryMutAct_9fa48("412") ? groupIndex-- : (stryCov_9fa48("412"), groupIndex++);
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
  if (stryMutAct_9fa48("413")) {
    {}
  } else {
    stryCov_9fa48("413");
    const cleaned = str.replace(stryMutAct_9fa48("414") ? /[0-9.-]/g : (stryCov_9fa48("414"), /[^0-9.-]/g), stryMutAct_9fa48("415") ? "Stryker was here!" : (stryCov_9fa48("415"), ''));
    return parseFloat(cleaned);
  }
}