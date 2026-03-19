/**
 * String utility functions
 * @module string
 */
// @ts-nocheck


/**
 * Encode uri parsing (like &lt; => <, &gt; => >)
 * @param txt - Original string
 * @returns Tag parsed string
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
export function parseTag(txt: string): string {
  if (stryMutAct_9fa48("416")) {
    {}
  } else {
    stryCov_9fa48("416");
    return txt.replace(/&lt;/gi, stryMutAct_9fa48("417") ? "" : (stryCov_9fa48("417"), '<')).replace(/&gt;/gi, stryMutAct_9fa48("418") ? "" : (stryCov_9fa48("418"), '>'));
  }
}

/**
 * Convert string to camelCase format
 * @param txt - Input string to convert (supports snake_case and space-separated)
 * @returns camelCase formatted string
 */
export function toCamelCase(txt: string): string {
  if (stryMutAct_9fa48("419")) {
    {}
  } else {
    stryCov_9fa48("419");
    txt = (stryMutAct_9fa48("422") ? typeof txt === 'string' : stryMutAct_9fa48("421") ? false : stryMutAct_9fa48("420") ? true : (stryCov_9fa48("420", "421", "422"), typeof txt !== (stryMutAct_9fa48("423") ? "" : (stryCov_9fa48("423"), 'string')))) ? stryMutAct_9fa48("424") ? "Stryker was here!" : (stryCov_9fa48("424"), '') : txt;
    const txtArr = txt.split(/_| /g).map((word, index) => {
      if (stryMutAct_9fa48("425")) {
        {}
      } else {
        stryCov_9fa48("425");
        let firstvarter;
        if (stryMutAct_9fa48("428") ? index != 0 : stryMutAct_9fa48("427") ? false : stryMutAct_9fa48("426") ? true : (stryCov_9fa48("426", "427", "428"), index == 0)) {
          if (stryMutAct_9fa48("429")) {
            {}
          } else {
            stryCov_9fa48("429");
            firstvarter = stryMutAct_9fa48("431") ? word.toLowerCase() : stryMutAct_9fa48("430") ? word.charAt(0).toUpperCase() : (stryCov_9fa48("430", "431"), word.charAt(0).toLowerCase());
          }
        } else {
          if (stryMutAct_9fa48("432")) {
            {}
          } else {
            stryCov_9fa48("432");
            firstvarter = stryMutAct_9fa48("434") ? word.toUpperCase() : stryMutAct_9fa48("433") ? word.charAt(0).toLowerCase() : (stryCov_9fa48("433", "434"), word.charAt(0).toUpperCase());
          }
        }
        word = firstvarter.concat(stryMutAct_9fa48("435") ? word : (stryCov_9fa48("435"), word.substr(1)));
        return word;
      }
    });
    return txtArr.join(stryMutAct_9fa48("436") ? "Stryker was here!" : (stryCov_9fa48("436"), ''));
  }
}

/**
 * Convert string to snake_case format
 * @param txt - Input string to convert
 * @returns snake_case formatted string
 */
export function toSnakeCase(txt: string): string {
  if (stryMutAct_9fa48("437")) {
    {}
  } else {
    stryCov_9fa48("437");
    txt = (stryMutAct_9fa48("440") ? typeof txt === 'string' : stryMutAct_9fa48("439") ? false : stryMutAct_9fa48("438") ? true : (stryCov_9fa48("438", "439", "440"), typeof txt !== (stryMutAct_9fa48("441") ? "" : (stryCov_9fa48("441"), 'string')))) ? stryMutAct_9fa48("442") ? "Stryker was here!" : (stryCov_9fa48("442"), '') : txt;
    txt = stryMutAct_9fa48("443") ? txt.toUpperCase().replace(/ /g, '_') : (stryCov_9fa48("443"), txt.toLowerCase().replace(/ /g, stryMutAct_9fa48("444") ? "" : (stryCov_9fa48("444"), '_')));
    return txt;
  }
}

/**
 * Make title case string (first character capital and word space)
 * @param txt - Input string to convert
 * @returns Title case string with proper spacing
 */
export function toTitleCase(txt: string): string {
  if (stryMutAct_9fa48("445")) {
    {}
  } else {
    stryCov_9fa48("445");
    if (stryMutAct_9fa48("448") ? typeof txt === 'string' : stryMutAct_9fa48("447") ? false : stryMutAct_9fa48("446") ? true : (stryCov_9fa48("446", "447", "448"), typeof txt !== (stryMutAct_9fa48("449") ? "" : (stryCov_9fa48("449"), 'string')))) return stryMutAct_9fa48("450") ? "Stryker was here!" : (stryCov_9fa48("450"), '');
    const result = stryMutAct_9fa48("451") ? txt.replace(/_/g, ' ').replace(/([a-z])([A-Z])/g, '$1 $2').split(/\s+/).map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ') : (stryCov_9fa48("451"), txt.replace(/_/g, stryMutAct_9fa48("452") ? "" : (stryCov_9fa48("452"), ' ')).replace(stryMutAct_9fa48("454") ? /([a-z])([^A-Z])/g : stryMutAct_9fa48("453") ? /([^a-z])([A-Z])/g : (stryCov_9fa48("453", "454"), /([a-z])([A-Z])/g), stryMutAct_9fa48("455") ? "" : (stryCov_9fa48("455"), '$1 $2')).split(stryMutAct_9fa48("457") ? /\S+/ : stryMutAct_9fa48("456") ? /\s/ : (stryCov_9fa48("456", "457"), /\s+/)).filter(stryMutAct_9fa48("458") ? () => undefined : (stryCov_9fa48("458"), word => stryMutAct_9fa48("462") ? word.length <= 0 : stryMutAct_9fa48("461") ? word.length >= 0 : stryMutAct_9fa48("460") ? false : stryMutAct_9fa48("459") ? true : (stryCov_9fa48("459", "460", "461", "462"), word.length > 0))).map(stryMutAct_9fa48("463") ? () => undefined : (stryCov_9fa48("463"), word => stryMutAct_9fa48("464") ? word.charAt(0).toUpperCase() - word.slice(1).toLowerCase() : (stryCov_9fa48("464"), (stryMutAct_9fa48("466") ? word.toUpperCase() : stryMutAct_9fa48("465") ? word.charAt(0).toLowerCase() : (stryCov_9fa48("465", "466"), word.charAt(0).toUpperCase())) + (stryMutAct_9fa48("468") ? word.toLowerCase() : stryMutAct_9fa48("467") ? word.slice(1).toUpperCase() : (stryCov_9fa48("467", "468"), word.slice(1).toLowerCase()))))).join(stryMutAct_9fa48("469") ? "" : (stryCov_9fa48("469"), ' ')));
    return result;
  }
}

/**
 * Convert HTML br tags to line breaks
 * @param txt - Input string with br tags
 * @returns String with br tags converted to newlines
 */
export function toText(txt: string): string {
  if (stryMutAct_9fa48("470")) {
    {}
  } else {
    stryCov_9fa48("470");
    return txt.replace(/<br>/gi, stryMutAct_9fa48("471") ? "" : (stryCov_9fa48("471"), '\n'));
  }
}

/**
 * Convert line breaks to HTML br tags
 * @param txt - Input string with newlines
 * @returns String with newlines converted to br tags
 */
export function toHtml(txt: string): string {
  if (stryMutAct_9fa48("472")) {
    {}
  } else {
    stryCov_9fa48("472");
    return txt.replace(/\n/gi, stryMutAct_9fa48("473") ? "" : (stryCov_9fa48("473"), '<br>'));
  }
}

/**
 * Safely remove HTML tags from text, preventing XSS attacks.
 * Uses DOM parsing with textContent assignment to avoid XSS.
 * @param txt - Input string with HTML tags
 * @param preserveErrorTags - Whether to preserve elements with 'suggestCheck' class
 * @returns Sanitized text with specified tags removed
 */
export function clearTag(txt: string, preserveErrorTags = stryMutAct_9fa48("474") ? true : (stryCov_9fa48("474"), false)): string {
  if (stryMutAct_9fa48("475")) {
    {}
  } else {
    stryCov_9fa48("475");
    if (stryMutAct_9fa48("478") ? typeof txt === 'string' : stryMutAct_9fa48("477") ? false : stryMutAct_9fa48("476") ? true : (stryCov_9fa48("476", "477", "478"), typeof txt !== (stryMutAct_9fa48("479") ? "" : (stryCov_9fa48("479"), 'string')))) return stryMutAct_9fa48("480") ? "Stryker was here!" : (stryCov_9fa48("480"), '');
    const tempDiv = document.createElement(stryMutAct_9fa48("481") ? "" : (stryCov_9fa48("481"), 'div'));
    tempDiv.textContent = stryMutAct_9fa48("482") ? "Stryker was here!" : (stryCov_9fa48("482"), '');
    try {
      if (stryMutAct_9fa48("483")) {
        {}
      } else {
        stryCov_9fa48("483");
        tempDiv.innerHTML = txt;
      }
    } catch {
      if (stryMutAct_9fa48("484")) {
        {}
      } else {
        stryCov_9fa48("484");
        return txt.replace(stryMutAct_9fa48("486") ? /<[>]*>/g : stryMutAct_9fa48("485") ? /<[^>]>/g : (stryCov_9fa48("485", "486"), /<[^>]*>/g), stryMutAct_9fa48("487") ? "Stryker was here!" : (stryCov_9fa48("487"), ''));
      }
    }
    const tagsToRemove = stryMutAct_9fa48("488") ? [] : (stryCov_9fa48("488"), [stryMutAct_9fa48("489") ? "" : (stryCov_9fa48("489"), 'div'), stryMutAct_9fa48("490") ? "" : (stryCov_9fa48("490"), 'font'), stryMutAct_9fa48("491") ? "" : (stryCov_9fa48("491"), 'span')]);
    tagsToRemove.forEach(tagName => {
      if (stryMutAct_9fa48("492")) {
        {}
      } else {
        stryCov_9fa48("492");
        const elements = tempDiv.querySelectorAll(tagName);
        for (let i = 0; stryMutAct_9fa48("495") ? i >= elements.length : stryMutAct_9fa48("494") ? i <= elements.length : stryMutAct_9fa48("493") ? false : (stryCov_9fa48("493", "494", "495"), i < elements.length); stryMutAct_9fa48("496") ? i-- : (stryCov_9fa48("496"), i++)) {
          if (stryMutAct_9fa48("497")) {
            {}
          } else {
            stryCov_9fa48("497");
            const element = elements[i];
            const hasErrorClass = stryMutAct_9fa48("500") ? element.className.indexOf('suggestCheck') === -1 : stryMutAct_9fa48("499") ? false : stryMutAct_9fa48("498") ? true : (stryCov_9fa48("498", "499", "500"), element.className.indexOf(stryMutAct_9fa48("501") ? "" : (stryCov_9fa48("501"), 'suggestCheck')) !== (stryMutAct_9fa48("502") ? +1 : (stryCov_9fa48("502"), -1)));
            if (stryMutAct_9fa48("505") ? preserveErrorTags || hasErrorClass : stryMutAct_9fa48("504") ? false : stryMutAct_9fa48("503") ? true : (stryCov_9fa48("503", "504", "505"), preserveErrorTags && hasErrorClass)) continue;
            const parent = element.parentNode;
            if (stryMutAct_9fa48("507") ? false : stryMutAct_9fa48("506") ? true : (stryCov_9fa48("506", "507"), parent)) {
              if (stryMutAct_9fa48("508")) {
                {}
              } else {
                stryCov_9fa48("508");
                const textContent = stryMutAct_9fa48("511") ? element.textContent && '' : stryMutAct_9fa48("510") ? false : stryMutAct_9fa48("509") ? true : (stryCov_9fa48("509", "510", "511"), element.textContent || (stryMutAct_9fa48("512") ? "Stryker was here!" : (stryCov_9fa48("512"), '')));
                const textNode = document.createTextNode(textContent);
                parent.replaceChild(textNode, element);
              }
            }
          }
        }
      }
    });
    const result = tempDiv.innerHTML.replace(stryMutAct_9fa48("515") ? /<br\s*\/>/gi : stryMutAct_9fa48("514") ? /<br\S*\/?>/gi : stryMutAct_9fa48("513") ? /<br\s\/?>/gi : (stryCov_9fa48("513", "514", "515"), /<br\s*\/?>/gi), stryMutAct_9fa48("516") ? "" : (stryCov_9fa48("516"), '\n'));
    return result.replace(stryMutAct_9fa48("522") ? /<script\b[^<]*(?:(?!<\/script>)<[<]*)*<\/script>/gi : stryMutAct_9fa48("521") ? /<script\b[^<]*(?:(?!<\/script>)<[^<])*<\/script>/gi : stryMutAct_9fa48("520") ? /<script\b[^<]*(?:(?=<\/script>)<[^<]*)*<\/script>/gi : stryMutAct_9fa48("519") ? /<script\b[^<]*(?:(?!<\/script>)<[^<]*)<\/script>/gi : stryMutAct_9fa48("518") ? /<script\b[<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi : stryMutAct_9fa48("517") ? /<script\b[^<](?:(?!<\/script>)<[^<]*)*<\/script>/gi : (stryCov_9fa48("517", "518", "519", "520", "521", "522"), /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi), stryMutAct_9fa48("523") ? "Stryker was here!" : (stryCov_9fa48("523"), ''));
  }
}

/**
 * Replace word in str with index
 * @param str - Original string
 * @param txt - Replace word
 * @param startIndex - Slice first index
 * @param endIndex - Slice last index
 * @returns Modified string
 */
export function replaceBetween(str: string, txt: string, startIndex: number, endIndex: number): string {
  if (stryMutAct_9fa48("524")) {
    {}
  } else {
    stryCov_9fa48("524");
    return stryMutAct_9fa48("525") ? `` : (stryCov_9fa48("525"), `${stryMutAct_9fa48("526") ? str : (stryCov_9fa48("526"), str.substring(0, startIndex))}${txt}${stryMutAct_9fa48("527") ? str : (stryCov_9fa48("527"), str.substring(endIndex))}`);
  }
}

/**
 * Extract only numbers from string
 * @param str - Input string
 * @returns String containing only numbers
 */
export function extractNumbers(str: string): string {
  if (stryMutAct_9fa48("528")) {
    {}
  } else {
    stryCov_9fa48("528");
    return str.replace(stryMutAct_9fa48("529") ? /[0-9]/g : (stryCov_9fa48("529"), /[^0-9]/g), stryMutAct_9fa48("530") ? "Stryker was here!" : (stryCov_9fa48("530"), ''));
  }
}

/**
 * Get file extension from filename or path
 * @param filename - Filename or path
 * @returns File extension without dot (e.g., 'jpg', 'pdf')
 */
export function getFileExtension(filename: string): string {
  if (stryMutAct_9fa48("531")) {
    {}
  } else {
    stryCov_9fa48("531");
    const parts = filename.split(stryMutAct_9fa48("532") ? "" : (stryCov_9fa48("532"), '.'));
    return (stryMutAct_9fa48("536") ? parts.length <= 1 : stryMutAct_9fa48("535") ? parts.length >= 1 : stryMutAct_9fa48("534") ? false : stryMutAct_9fa48("533") ? true : (stryCov_9fa48("533", "534", "535", "536"), parts.length > 1)) ? stryMutAct_9fa48("537") ? parts[parts.length - 1].toUpperCase() : (stryCov_9fa48("537"), parts[stryMutAct_9fa48("538") ? parts.length + 1 : (stryCov_9fa48("538"), parts.length - 1)].toLowerCase()) : stryMutAct_9fa48("539") ? "Stryker was here!" : (stryCov_9fa48("539"), '');
  }
}

/**
 * Mask sensitive string (e.g., credit card, phone)
 * @param str - String to mask
 * @param visibleStart - Number of visible characters at start
 * @param visibleEnd - Number of visible characters at end
 * @param maskChar - Character to use for masking
 * @returns Masked string
 */
export function maskString(str: string, visibleStart = 3, visibleEnd = 3, maskChar = stryMutAct_9fa48("540") ? "" : (stryCov_9fa48("540"), '*')): string {
  if (stryMutAct_9fa48("541")) {
    {}
  } else {
    stryCov_9fa48("541");
    if (stryMutAct_9fa48("545") ? str.length > visibleStart + visibleEnd : stryMutAct_9fa48("544") ? str.length < visibleStart + visibleEnd : stryMutAct_9fa48("543") ? false : stryMutAct_9fa48("542") ? true : (stryCov_9fa48("542", "543", "544", "545"), str.length <= (stryMutAct_9fa48("546") ? visibleStart - visibleEnd : (stryCov_9fa48("546"), visibleStart + visibleEnd)))) return str;
    const start = stryMutAct_9fa48("547") ? str : (stryCov_9fa48("547"), str.substring(0, visibleStart));
    const end = stryMutAct_9fa48("548") ? str : (stryCov_9fa48("548"), str.substring(stryMutAct_9fa48("549") ? str.length + visibleEnd : (stryCov_9fa48("549"), str.length - visibleEnd)));
    const masked = maskChar.repeat(stryMutAct_9fa48("550") ? str.length - visibleStart + visibleEnd : (stryCov_9fa48("550"), (stryMutAct_9fa48("551") ? str.length + visibleStart : (stryCov_9fa48("551"), str.length - visibleStart)) - visibleEnd));
    return stryMutAct_9fa48("552") ? start + masked - end : (stryCov_9fa48("552"), (stryMutAct_9fa48("553") ? start - masked : (stryCov_9fa48("553"), start + masked)) + end);
  }
}

/**
 * Convert object to URL query string
 * @param obj - Object to convert
 * @returns Query string (e.g., 'key1=value1&key2=value2')
 */
export function objectToQueryString(obj: Record<string, unknown>): string {
  if (stryMutAct_9fa48("554")) {
    {}
  } else {
    stryCov_9fa48("554");
    return stryMutAct_9fa48("555") ? Object.entries(obj).map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`).join('&') : (stryCov_9fa48("555"), Object.entries(obj).filter(stryMutAct_9fa48("556") ? () => undefined : (stryCov_9fa48("556"), ([, value]) => stryMutAct_9fa48("559") ? value !== undefined || value !== null : stryMutAct_9fa48("558") ? false : stryMutAct_9fa48("557") ? true : (stryCov_9fa48("557", "558", "559"), (stryMutAct_9fa48("561") ? value === undefined : stryMutAct_9fa48("560") ? true : (stryCov_9fa48("560", "561"), value !== undefined)) && (stryMutAct_9fa48("563") ? value === null : stryMutAct_9fa48("562") ? true : (stryCov_9fa48("562", "563"), value !== null))))).map(stryMutAct_9fa48("564") ? () => undefined : (stryCov_9fa48("564"), ([key, value]) => stryMutAct_9fa48("565") ? `` : (stryCov_9fa48("565"), `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`))).join(stryMutAct_9fa48("566") ? "" : (stryCov_9fa48("566"), '&')));
  }
}

/**
 * Truncate a string to a maximum length, appending a suffix if truncated
 * @param str - Input string
 * @param maxLength - Maximum length before truncation
 * @param suffix - Suffix to append when truncated (default: '...')
 * @returns Truncated string
 */
export function truncate(str: string, maxLength: number, suffix = stryMutAct_9fa48("567") ? "" : (stryCov_9fa48("567"), '...')): string {
  if (stryMutAct_9fa48("568")) {
    {}
  } else {
    stryCov_9fa48("568");
    if (stryMutAct_9fa48("571") ? typeof str === 'string' : stryMutAct_9fa48("570") ? false : stryMutAct_9fa48("569") ? true : (stryCov_9fa48("569", "570", "571"), typeof str !== (stryMutAct_9fa48("572") ? "" : (stryCov_9fa48("572"), 'string')))) return stryMutAct_9fa48("573") ? "Stryker was here!" : (stryCov_9fa48("573"), '');
    if (stryMutAct_9fa48("577") ? str.length > maxLength : stryMutAct_9fa48("576") ? str.length < maxLength : stryMutAct_9fa48("575") ? false : stryMutAct_9fa48("574") ? true : (stryCov_9fa48("574", "575", "576", "577"), str.length <= maxLength)) return str;
    return stryMutAct_9fa48("578") ? str.slice(0, maxLength - suffix.length) - suffix : (stryCov_9fa48("578"), (stryMutAct_9fa48("579") ? str : (stryCov_9fa48("579"), str.slice(0, stryMutAct_9fa48("580") ? maxLength + suffix.length : (stryCov_9fa48("580"), maxLength - suffix.length)))) + suffix);
  }
}

/**
 * Convert a string to a URL-friendly slug
 * @param str - Input string
 * @returns Slugified string (lowercase, hyphens instead of spaces/special chars)
 */
export function slugify(str: string): string {
  if (stryMutAct_9fa48("581")) {
    {}
  } else {
    stryCov_9fa48("581");
    if (stryMutAct_9fa48("584") ? typeof str === 'string' : stryMutAct_9fa48("583") ? false : stryMutAct_9fa48("582") ? true : (stryCov_9fa48("582", "583", "584"), typeof str !== (stryMutAct_9fa48("585") ? "" : (stryCov_9fa48("585"), 'string')))) return stryMutAct_9fa48("586") ? "Stryker was here!" : (stryCov_9fa48("586"), '');
    return stryMutAct_9fa48("588") ? str.toUpperCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_]+/g, '-').replace(/^-+|-+$/g, '') : stryMutAct_9fa48("587") ? str.toLowerCase().replace(/[^\w\s-]/g, '').replace(/[\s_]+/g, '-').replace(/^-+|-+$/g, '') : (stryCov_9fa48("587", "588"), str.toLowerCase().trim().replace(stryMutAct_9fa48("591") ? /[^\w\S-]/g : stryMutAct_9fa48("590") ? /[^\W\s-]/g : stryMutAct_9fa48("589") ? /[\w\s-]/g : (stryCov_9fa48("589", "590", "591"), /[^\w\s-]/g), stryMutAct_9fa48("592") ? "Stryker was here!" : (stryCov_9fa48("592"), '')).replace(stryMutAct_9fa48("595") ? /[\S_]+/g : stryMutAct_9fa48("594") ? /[^\s_]+/g : stryMutAct_9fa48("593") ? /[\s_]/g : (stryCov_9fa48("593", "594", "595"), /[\s_]+/g), stryMutAct_9fa48("596") ? "" : (stryCov_9fa48("596"), '-')).replace(stryMutAct_9fa48("600") ? /^-+|-$/g : stryMutAct_9fa48("599") ? /^-+|-+/g : stryMutAct_9fa48("598") ? /^-|-+$/g : stryMutAct_9fa48("597") ? /-+|-+$/g : (stryCov_9fa48("597", "598", "599", "600"), /^-+|-+$/g), stryMutAct_9fa48("601") ? "Stryker was here!" : (stryCov_9fa48("601"), '')));
  }
}

/**
 * Convert camelCase string to kebab-case
 * @param str - camelCase input string
 * @returns kebab-case string
 */
export function camelToKebab(str: string): string {
  if (stryMutAct_9fa48("602")) {
    {}
  } else {
    stryCov_9fa48("602");
    if (stryMutAct_9fa48("605") ? typeof str === 'string' : stryMutAct_9fa48("604") ? false : stryMutAct_9fa48("603") ? true : (stryCov_9fa48("603", "604", "605"), typeof str !== (stryMutAct_9fa48("606") ? "" : (stryCov_9fa48("606"), 'string')))) return stryMutAct_9fa48("607") ? "Stryker was here!" : (stryCov_9fa48("607"), '');
    return stryMutAct_9fa48("608") ? str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toUpperCase() : (stryCov_9fa48("608"), str.replace(stryMutAct_9fa48("610") ? /([a-z0-9])([^A-Z])/g : stryMutAct_9fa48("609") ? /([^a-z0-9])([A-Z])/g : (stryCov_9fa48("609", "610"), /([a-z0-9])([A-Z])/g), stryMutAct_9fa48("611") ? "" : (stryCov_9fa48("611"), '$1-$2')).toLowerCase());
  }
}

/**
 * Convert kebab-case string to camelCase
 * @param str - kebab-case input string
 * @returns camelCase string
 */
export function kebabToCamel(str: string): string {
  if (stryMutAct_9fa48("612")) {
    {}
  } else {
    stryCov_9fa48("612");
    if (stryMutAct_9fa48("615") ? typeof str === 'string' : stryMutAct_9fa48("614") ? false : stryMutAct_9fa48("613") ? true : (stryCov_9fa48("613", "614", "615"), typeof str !== (stryMutAct_9fa48("616") ? "" : (stryCov_9fa48("616"), 'string')))) return stryMutAct_9fa48("617") ? "Stryker was here!" : (stryCov_9fa48("617"), '');
    return str.replace(stryMutAct_9fa48("618") ? /-([^a-z])/g : (stryCov_9fa48("618"), /-([a-z])/g), stryMutAct_9fa48("619") ? () => undefined : (stryCov_9fa48("619"), (_, char) => stryMutAct_9fa48("620") ? char.toLowerCase() : (stryCov_9fa48("620"), char.toUpperCase())));
  }
}

/**
 * Mask an email address for display (e.g., te***@example.com)
 * @param email - Email address to mask
 * @returns Masked email string
 */
export function maskEmail(email: string): string {
  if (stryMutAct_9fa48("621")) {
    {}
  } else {
    stryCov_9fa48("621");
    if (stryMutAct_9fa48("624") ? typeof email === 'string' : stryMutAct_9fa48("623") ? false : stryMutAct_9fa48("622") ? true : (stryCov_9fa48("622", "623", "624"), typeof email !== (stryMutAct_9fa48("625") ? "" : (stryCov_9fa48("625"), 'string')))) return stryMutAct_9fa48("626") ? "Stryker was here!" : (stryCov_9fa48("626"), '');
    const atIndex = email.indexOf(stryMutAct_9fa48("627") ? "" : (stryCov_9fa48("627"), '@'));
    if (stryMutAct_9fa48("631") ? atIndex >= 0 : stryMutAct_9fa48("630") ? atIndex <= 0 : stryMutAct_9fa48("629") ? false : stryMutAct_9fa48("628") ? true : (stryCov_9fa48("628", "629", "630", "631"), atIndex < 0)) return email;
    const local = stryMutAct_9fa48("632") ? email : (stryCov_9fa48("632"), email.slice(0, atIndex));
    const domain = stryMutAct_9fa48("633") ? email : (stryCov_9fa48("633"), email.slice(atIndex));
    if (stryMutAct_9fa48("637") ? local.length > 2 : stryMutAct_9fa48("636") ? local.length < 2 : stryMutAct_9fa48("635") ? false : stryMutAct_9fa48("634") ? true : (stryCov_9fa48("634", "635", "636", "637"), local.length <= 2)) return stryMutAct_9fa48("638") ? local[0] + '*'.repeat(local.length - 1) - domain : (stryCov_9fa48("638"), (stryMutAct_9fa48("639") ? local[0] - '*'.repeat(local.length - 1) : (stryCov_9fa48("639"), local[0] + (stryMutAct_9fa48("640") ? "" : (stryCov_9fa48("640"), '*')).repeat(stryMutAct_9fa48("641") ? local.length + 1 : (stryCov_9fa48("641"), local.length - 1)))) + domain);
    const visible = stryMutAct_9fa48("642") ? Math.min(2, Math.ceil(local.length / 3)) : (stryCov_9fa48("642"), Math.max(2, Math.ceil(stryMutAct_9fa48("643") ? local.length * 3 : (stryCov_9fa48("643"), local.length / 3))));
    return stryMutAct_9fa48("644") ? local.slice(0, visible) + '*'.repeat(local.length - visible) - domain : (stryCov_9fa48("644"), (stryMutAct_9fa48("645") ? local.slice(0, visible) - '*'.repeat(local.length - visible) : (stryCov_9fa48("645"), (stryMutAct_9fa48("646") ? local : (stryCov_9fa48("646"), local.slice(0, visible))) + (stryMutAct_9fa48("647") ? "" : (stryCov_9fa48("647"), '*')).repeat(stryMutAct_9fa48("648") ? local.length + visible : (stryCov_9fa48("648"), local.length - visible)))) + domain);
  }
}

/**
 * Mask a phone number for display (e.g., 010-****-5678)
 * @param phone - Phone number string (digits and hyphens)
 * @returns Masked phone string
 */
export function maskPhone(phone: string): string {
  if (stryMutAct_9fa48("649")) {
    {}
  } else {
    stryCov_9fa48("649");
    if (stryMutAct_9fa48("652") ? typeof phone === 'string' : stryMutAct_9fa48("651") ? false : stryMutAct_9fa48("650") ? true : (stryCov_9fa48("650", "651", "652"), typeof phone !== (stryMutAct_9fa48("653") ? "" : (stryCov_9fa48("653"), 'string')))) return stryMutAct_9fa48("654") ? "Stryker was here!" : (stryCov_9fa48("654"), '');
    const digits = phone.replace(stryMutAct_9fa48("655") ? /[0-9]/g : (stryCov_9fa48("655"), /[^0-9]/g), stryMutAct_9fa48("656") ? "Stryker was here!" : (stryCov_9fa48("656"), ''));
    if (stryMutAct_9fa48("659") ? digits.length !== 11 : stryMutAct_9fa48("658") ? false : stryMutAct_9fa48("657") ? true : (stryCov_9fa48("657", "658", "659"), digits.length === 11)) {
      if (stryMutAct_9fa48("660")) {
        {}
      } else {
        stryCov_9fa48("660");
        return stryMutAct_9fa48("661") ? `` : (stryCov_9fa48("661"), `${stryMutAct_9fa48("662") ? digits : (stryCov_9fa48("662"), digits.slice(0, 3))}-****-${stryMutAct_9fa48("663") ? digits : (stryCov_9fa48("663"), digits.slice(7))}`);
      }
    }
    if (stryMutAct_9fa48("666") ? digits.length !== 10 : stryMutAct_9fa48("665") ? false : stryMutAct_9fa48("664") ? true : (stryCov_9fa48("664", "665", "666"), digits.length === 10)) {
      if (stryMutAct_9fa48("667")) {
        {}
      } else {
        stryCov_9fa48("667");
        return stryMutAct_9fa48("668") ? `` : (stryCov_9fa48("668"), `${stryMutAct_9fa48("669") ? digits : (stryCov_9fa48("669"), digits.slice(0, 3))}-***-${stryMutAct_9fa48("670") ? digits : (stryCov_9fa48("670"), digits.slice(7))}`);
      }
    }
    return phone;
  }
}