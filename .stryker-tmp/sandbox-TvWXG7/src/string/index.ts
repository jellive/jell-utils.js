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
  if (stryMutAct_9fa48("911")) {
    {}
  } else {
    stryCov_9fa48("911");
    return txt.replace(/&lt;/gi, stryMutAct_9fa48("912") ? "" : (stryCov_9fa48("912"), '<')).replace(/&gt;/gi, stryMutAct_9fa48("913") ? "" : (stryCov_9fa48("913"), '>'));
  }
}

/**
 * Convert string to camelCase format
 * @param txt - Input string to convert (supports snake_case and space-separated)
 * @returns camelCase formatted string
 */
export function toCamelCase(txt: string): string {
  if (stryMutAct_9fa48("914")) {
    {}
  } else {
    stryCov_9fa48("914");
    txt = (stryMutAct_9fa48("917") ? typeof txt === 'string' : stryMutAct_9fa48("916") ? false : stryMutAct_9fa48("915") ? true : (stryCov_9fa48("915", "916", "917"), typeof txt !== (stryMutAct_9fa48("918") ? "" : (stryCov_9fa48("918"), 'string')))) ? stryMutAct_9fa48("919") ? "Stryker was here!" : (stryCov_9fa48("919"), '') : txt;
    const txtArr = txt.split(/_| /g).map((word, index) => {
      if (stryMutAct_9fa48("920")) {
        {}
      } else {
        stryCov_9fa48("920");
        let firstvarter;
        if (stryMutAct_9fa48("923") ? index != 0 : stryMutAct_9fa48("922") ? false : stryMutAct_9fa48("921") ? true : (stryCov_9fa48("921", "922", "923"), index == 0)) {
          if (stryMutAct_9fa48("924")) {
            {}
          } else {
            stryCov_9fa48("924");
            firstvarter = stryMutAct_9fa48("926") ? word.toLowerCase() : stryMutAct_9fa48("925") ? word.charAt(0).toUpperCase() : (stryCov_9fa48("925", "926"), word.charAt(0).toLowerCase());
          }
        } else {
          if (stryMutAct_9fa48("927")) {
            {}
          } else {
            stryCov_9fa48("927");
            firstvarter = stryMutAct_9fa48("929") ? word.toUpperCase() : stryMutAct_9fa48("928") ? word.charAt(0).toLowerCase() : (stryCov_9fa48("928", "929"), word.charAt(0).toUpperCase());
          }
        }
        word = firstvarter.concat(stryMutAct_9fa48("930") ? word : (stryCov_9fa48("930"), word.substr(1)));
        return word;
      }
    });
    return txtArr.join(stryMutAct_9fa48("931") ? "Stryker was here!" : (stryCov_9fa48("931"), ''));
  }
}

/**
 * Convert string to snake_case format
 * @param txt - Input string to convert
 * @returns snake_case formatted string
 */
export function toSnakeCase(txt: string): string {
  if (stryMutAct_9fa48("932")) {
    {}
  } else {
    stryCov_9fa48("932");
    txt = (stryMutAct_9fa48("935") ? typeof txt === 'string' : stryMutAct_9fa48("934") ? false : stryMutAct_9fa48("933") ? true : (stryCov_9fa48("933", "934", "935"), typeof txt !== (stryMutAct_9fa48("936") ? "" : (stryCov_9fa48("936"), 'string')))) ? stryMutAct_9fa48("937") ? "Stryker was here!" : (stryCov_9fa48("937"), '') : txt;
    txt = stryMutAct_9fa48("938") ? txt.toUpperCase().replace(/ /g, '_') : (stryCov_9fa48("938"), txt.toLowerCase().replace(/ /g, stryMutAct_9fa48("939") ? "" : (stryCov_9fa48("939"), '_')));
    return txt;
  }
}

/**
 * Make title case string (first character capital and word space)
 * @param txt - Input string to convert
 * @returns Title case string with proper spacing
 */
export function toTitleCase(txt: string): string {
  if (stryMutAct_9fa48("940")) {
    {}
  } else {
    stryCov_9fa48("940");
    if (stryMutAct_9fa48("943") ? typeof txt === 'string' : stryMutAct_9fa48("942") ? false : stryMutAct_9fa48("941") ? true : (stryCov_9fa48("941", "942", "943"), typeof txt !== (stryMutAct_9fa48("944") ? "" : (stryCov_9fa48("944"), 'string')))) return stryMutAct_9fa48("945") ? "Stryker was here!" : (stryCov_9fa48("945"), '');
    const result = stryMutAct_9fa48("946") ? txt.replace(/_/g, ' ').replace(/([a-z])([A-Z])/g, '$1 $2').split(/\s+/).map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ') : (stryCov_9fa48("946"), txt.replace(/_/g, stryMutAct_9fa48("947") ? "" : (stryCov_9fa48("947"), ' ')).replace(stryMutAct_9fa48("949") ? /([a-z])([^A-Z])/g : stryMutAct_9fa48("948") ? /([^a-z])([A-Z])/g : (stryCov_9fa48("948", "949"), /([a-z])([A-Z])/g), stryMutAct_9fa48("950") ? "" : (stryCov_9fa48("950"), '$1 $2')).split(stryMutAct_9fa48("952") ? /\S+/ : stryMutAct_9fa48("951") ? /\s/ : (stryCov_9fa48("951", "952"), /\s+/)).filter(stryMutAct_9fa48("953") ? () => undefined : (stryCov_9fa48("953"), word => stryMutAct_9fa48("957") ? word.length <= 0 : stryMutAct_9fa48("956") ? word.length >= 0 : stryMutAct_9fa48("955") ? false : stryMutAct_9fa48("954") ? true : (stryCov_9fa48("954", "955", "956", "957"), word.length > 0))).map(stryMutAct_9fa48("958") ? () => undefined : (stryCov_9fa48("958"), word => stryMutAct_9fa48("959") ? word.charAt(0).toUpperCase() - word.slice(1).toLowerCase() : (stryCov_9fa48("959"), (stryMutAct_9fa48("961") ? word.toUpperCase() : stryMutAct_9fa48("960") ? word.charAt(0).toLowerCase() : (stryCov_9fa48("960", "961"), word.charAt(0).toUpperCase())) + (stryMutAct_9fa48("963") ? word.toLowerCase() : stryMutAct_9fa48("962") ? word.slice(1).toUpperCase() : (stryCov_9fa48("962", "963"), word.slice(1).toLowerCase()))))).join(stryMutAct_9fa48("964") ? "" : (stryCov_9fa48("964"), ' ')));
    return result;
  }
}

/**
 * Convert HTML br tags to line breaks
 * @param txt - Input string with br tags
 * @returns String with br tags converted to newlines
 */
export function toText(txt: string): string {
  if (stryMutAct_9fa48("965")) {
    {}
  } else {
    stryCov_9fa48("965");
    return txt.replace(/<br>/gi, stryMutAct_9fa48("966") ? "" : (stryCov_9fa48("966"), '\n'));
  }
}

/**
 * Convert line breaks to HTML br tags
 * @param txt - Input string with newlines
 * @returns String with newlines converted to br tags
 */
export function toHtml(txt: string): string {
  if (stryMutAct_9fa48("967")) {
    {}
  } else {
    stryCov_9fa48("967");
    return txt.replace(/\n/gi, stryMutAct_9fa48("968") ? "" : (stryCov_9fa48("968"), '<br>'));
  }
}

/**
 * Safely remove HTML tags from text, preventing XSS attacks.
 * Uses DOM parsing with textContent assignment to avoid XSS.
 * @param txt - Input string with HTML tags
 * @param preserveErrorTags - Whether to preserve elements with 'suggestCheck' class
 * @returns Sanitized text with specified tags removed
 */
export function clearTag(txt: string, preserveErrorTags = stryMutAct_9fa48("969") ? true : (stryCov_9fa48("969"), false)): string {
  if (stryMutAct_9fa48("970")) {
    {}
  } else {
    stryCov_9fa48("970");
    if (stryMutAct_9fa48("973") ? typeof txt === 'string' : stryMutAct_9fa48("972") ? false : stryMutAct_9fa48("971") ? true : (stryCov_9fa48("971", "972", "973"), typeof txt !== (stryMutAct_9fa48("974") ? "" : (stryCov_9fa48("974"), 'string')))) return stryMutAct_9fa48("975") ? "Stryker was here!" : (stryCov_9fa48("975"), '');
    const tempDiv = document.createElement(stryMutAct_9fa48("976") ? "" : (stryCov_9fa48("976"), 'div'));
    tempDiv.textContent = stryMutAct_9fa48("977") ? "Stryker was here!" : (stryCov_9fa48("977"), '');
    try {
      if (stryMutAct_9fa48("978")) {
        {}
      } else {
        stryCov_9fa48("978");
        tempDiv.innerHTML = txt;
      }
    } catch {
      if (stryMutAct_9fa48("979")) {
        {}
      } else {
        stryCov_9fa48("979");
        return txt.replace(stryMutAct_9fa48("981") ? /<[>]*>/g : stryMutAct_9fa48("980") ? /<[^>]>/g : (stryCov_9fa48("980", "981"), /<[^>]*>/g), stryMutAct_9fa48("982") ? "Stryker was here!" : (stryCov_9fa48("982"), ''));
      }
    }
    const tagsToRemove = stryMutAct_9fa48("983") ? [] : (stryCov_9fa48("983"), [stryMutAct_9fa48("984") ? "" : (stryCov_9fa48("984"), 'div'), stryMutAct_9fa48("985") ? "" : (stryCov_9fa48("985"), 'font'), stryMutAct_9fa48("986") ? "" : (stryCov_9fa48("986"), 'span')]);
    tagsToRemove.forEach(tagName => {
      if (stryMutAct_9fa48("987")) {
        {}
      } else {
        stryCov_9fa48("987");
        const elements = tempDiv.querySelectorAll(tagName);
        for (let i = 0; stryMutAct_9fa48("990") ? i >= elements.length : stryMutAct_9fa48("989") ? i <= elements.length : stryMutAct_9fa48("988") ? false : (stryCov_9fa48("988", "989", "990"), i < elements.length); stryMutAct_9fa48("991") ? i-- : (stryCov_9fa48("991"), i++)) {
          if (stryMutAct_9fa48("992")) {
            {}
          } else {
            stryCov_9fa48("992");
            const element = elements[i];
            const hasErrorClass = stryMutAct_9fa48("995") ? element.className.indexOf('suggestCheck') === -1 : stryMutAct_9fa48("994") ? false : stryMutAct_9fa48("993") ? true : (stryCov_9fa48("993", "994", "995"), element.className.indexOf(stryMutAct_9fa48("996") ? "" : (stryCov_9fa48("996"), 'suggestCheck')) !== (stryMutAct_9fa48("997") ? +1 : (stryCov_9fa48("997"), -1)));
            if (stryMutAct_9fa48("1000") ? preserveErrorTags || hasErrorClass : stryMutAct_9fa48("999") ? false : stryMutAct_9fa48("998") ? true : (stryCov_9fa48("998", "999", "1000"), preserveErrorTags && hasErrorClass)) continue;
            const parent = element.parentNode;
            if (stryMutAct_9fa48("1002") ? false : stryMutAct_9fa48("1001") ? true : (stryCov_9fa48("1001", "1002"), parent)) {
              if (stryMutAct_9fa48("1003")) {
                {}
              } else {
                stryCov_9fa48("1003");
                const textContent = stryMutAct_9fa48("1006") ? element.textContent && '' : stryMutAct_9fa48("1005") ? false : stryMutAct_9fa48("1004") ? true : (stryCov_9fa48("1004", "1005", "1006"), element.textContent || (stryMutAct_9fa48("1007") ? "Stryker was here!" : (stryCov_9fa48("1007"), '')));
                const textNode = document.createTextNode(textContent);
                parent.replaceChild(textNode, element);
              }
            }
          }
        }
      }
    });
    const result = tempDiv.innerHTML.replace(stryMutAct_9fa48("1010") ? /<br\s*\/>/gi : stryMutAct_9fa48("1009") ? /<br\S*\/?>/gi : stryMutAct_9fa48("1008") ? /<br\s\/?>/gi : (stryCov_9fa48("1008", "1009", "1010"), /<br\s*\/?>/gi), stryMutAct_9fa48("1011") ? "" : (stryCov_9fa48("1011"), '\n'));
    return result.replace(stryMutAct_9fa48("1017") ? /<script\b[^<]*(?:(?!<\/script>)<[<]*)*<\/script>/gi : stryMutAct_9fa48("1016") ? /<script\b[^<]*(?:(?!<\/script>)<[^<])*<\/script>/gi : stryMutAct_9fa48("1015") ? /<script\b[^<]*(?:(?=<\/script>)<[^<]*)*<\/script>/gi : stryMutAct_9fa48("1014") ? /<script\b[^<]*(?:(?!<\/script>)<[^<]*)<\/script>/gi : stryMutAct_9fa48("1013") ? /<script\b[<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi : stryMutAct_9fa48("1012") ? /<script\b[^<](?:(?!<\/script>)<[^<]*)*<\/script>/gi : (stryCov_9fa48("1012", "1013", "1014", "1015", "1016", "1017"), /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi), stryMutAct_9fa48("1018") ? "Stryker was here!" : (stryCov_9fa48("1018"), ''));
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
  if (stryMutAct_9fa48("1019")) {
    {}
  } else {
    stryCov_9fa48("1019");
    return stryMutAct_9fa48("1020") ? `` : (stryCov_9fa48("1020"), `${stryMutAct_9fa48("1021") ? str : (stryCov_9fa48("1021"), str.substring(0, startIndex))}${txt}${stryMutAct_9fa48("1022") ? str : (stryCov_9fa48("1022"), str.substring(endIndex))}`);
  }
}

/**
 * Extract only numbers from string
 * @param str - Input string
 * @returns String containing only numbers
 */
export function extractNumbers(str: string): string {
  if (stryMutAct_9fa48("1023")) {
    {}
  } else {
    stryCov_9fa48("1023");
    return str.replace(stryMutAct_9fa48("1024") ? /[0-9]/g : (stryCov_9fa48("1024"), /[^0-9]/g), stryMutAct_9fa48("1025") ? "Stryker was here!" : (stryCov_9fa48("1025"), ''));
  }
}

/**
 * Get file extension from filename or path
 * @param filename - Filename or path
 * @returns File extension without dot (e.g., 'jpg', 'pdf')
 */
export function getFileExtension(filename: string): string {
  if (stryMutAct_9fa48("1026")) {
    {}
  } else {
    stryCov_9fa48("1026");
    const parts = filename.split(stryMutAct_9fa48("1027") ? "" : (stryCov_9fa48("1027"), '.'));
    return (stryMutAct_9fa48("1031") ? parts.length <= 1 : stryMutAct_9fa48("1030") ? parts.length >= 1 : stryMutAct_9fa48("1029") ? false : stryMutAct_9fa48("1028") ? true : (stryCov_9fa48("1028", "1029", "1030", "1031"), parts.length > 1)) ? stryMutAct_9fa48("1032") ? parts[parts.length - 1].toUpperCase() : (stryCov_9fa48("1032"), parts[stryMutAct_9fa48("1033") ? parts.length + 1 : (stryCov_9fa48("1033"), parts.length - 1)].toLowerCase()) : stryMutAct_9fa48("1034") ? "Stryker was here!" : (stryCov_9fa48("1034"), '');
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
export function maskString(str: string, visibleStart = 3, visibleEnd = 3, maskChar = stryMutAct_9fa48("1035") ? "" : (stryCov_9fa48("1035"), '*')): string {
  if (stryMutAct_9fa48("1036")) {
    {}
  } else {
    stryCov_9fa48("1036");
    if (stryMutAct_9fa48("1040") ? str.length > visibleStart + visibleEnd : stryMutAct_9fa48("1039") ? str.length < visibleStart + visibleEnd : stryMutAct_9fa48("1038") ? false : stryMutAct_9fa48("1037") ? true : (stryCov_9fa48("1037", "1038", "1039", "1040"), str.length <= (stryMutAct_9fa48("1041") ? visibleStart - visibleEnd : (stryCov_9fa48("1041"), visibleStart + visibleEnd)))) return str;
    const start = stryMutAct_9fa48("1042") ? str : (stryCov_9fa48("1042"), str.substring(0, visibleStart));
    const end = stryMutAct_9fa48("1043") ? str : (stryCov_9fa48("1043"), str.substring(stryMutAct_9fa48("1044") ? str.length + visibleEnd : (stryCov_9fa48("1044"), str.length - visibleEnd)));
    const masked = maskChar.repeat(stryMutAct_9fa48("1045") ? str.length - visibleStart + visibleEnd : (stryCov_9fa48("1045"), (stryMutAct_9fa48("1046") ? str.length + visibleStart : (stryCov_9fa48("1046"), str.length - visibleStart)) - visibleEnd));
    return stryMutAct_9fa48("1047") ? start + masked - end : (stryCov_9fa48("1047"), (stryMutAct_9fa48("1048") ? start - masked : (stryCov_9fa48("1048"), start + masked)) + end);
  }
}

/**
 * Convert object to URL query string
 * @param obj - Object to convert
 * @returns Query string (e.g., 'key1=value1&key2=value2')
 */
export function objectToQueryString(obj: Record<string, unknown>): string {
  if (stryMutAct_9fa48("1049")) {
    {}
  } else {
    stryCov_9fa48("1049");
    return stryMutAct_9fa48("1050") ? Object.entries(obj).map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`).join('&') : (stryCov_9fa48("1050"), Object.entries(obj).filter(stryMutAct_9fa48("1051") ? () => undefined : (stryCov_9fa48("1051"), ([, value]) => stryMutAct_9fa48("1054") ? value !== undefined || value !== null : stryMutAct_9fa48("1053") ? false : stryMutAct_9fa48("1052") ? true : (stryCov_9fa48("1052", "1053", "1054"), (stryMutAct_9fa48("1056") ? value === undefined : stryMutAct_9fa48("1055") ? true : (stryCov_9fa48("1055", "1056"), value !== undefined)) && (stryMutAct_9fa48("1058") ? value === null : stryMutAct_9fa48("1057") ? true : (stryCov_9fa48("1057", "1058"), value !== null))))).map(stryMutAct_9fa48("1059") ? () => undefined : (stryCov_9fa48("1059"), ([key, value]) => stryMutAct_9fa48("1060") ? `` : (stryCov_9fa48("1060"), `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`))).join(stryMutAct_9fa48("1061") ? "" : (stryCov_9fa48("1061"), '&')));
  }
}

/**
 * Truncate a string to a maximum length, appending a suffix if truncated
 * @param str - Input string
 * @param maxLength - Maximum length before truncation
 * @param suffix - Suffix to append when truncated (default: '...')
 * @returns Truncated string
 */
export function truncate(str: string, maxLength: number, suffix = stryMutAct_9fa48("1062") ? "" : (stryCov_9fa48("1062"), '...')): string {
  if (stryMutAct_9fa48("1063")) {
    {}
  } else {
    stryCov_9fa48("1063");
    if (stryMutAct_9fa48("1066") ? typeof str === 'string' : stryMutAct_9fa48("1065") ? false : stryMutAct_9fa48("1064") ? true : (stryCov_9fa48("1064", "1065", "1066"), typeof str !== (stryMutAct_9fa48("1067") ? "" : (stryCov_9fa48("1067"), 'string')))) return stryMutAct_9fa48("1068") ? "Stryker was here!" : (stryCov_9fa48("1068"), '');
    if (stryMutAct_9fa48("1072") ? str.length > maxLength : stryMutAct_9fa48("1071") ? str.length < maxLength : stryMutAct_9fa48("1070") ? false : stryMutAct_9fa48("1069") ? true : (stryCov_9fa48("1069", "1070", "1071", "1072"), str.length <= maxLength)) return str;
    return stryMutAct_9fa48("1073") ? str.slice(0, maxLength - suffix.length) - suffix : (stryCov_9fa48("1073"), (stryMutAct_9fa48("1074") ? str : (stryCov_9fa48("1074"), str.slice(0, stryMutAct_9fa48("1075") ? maxLength + suffix.length : (stryCov_9fa48("1075"), maxLength - suffix.length)))) + suffix);
  }
}

/**
 * Convert a string to a URL-friendly slug
 * @param str - Input string
 * @returns Slugified string (lowercase, hyphens instead of spaces/special chars)
 */
export function slugify(str: string): string {
  if (stryMutAct_9fa48("1076")) {
    {}
  } else {
    stryCov_9fa48("1076");
    if (stryMutAct_9fa48("1079") ? typeof str === 'string' : stryMutAct_9fa48("1078") ? false : stryMutAct_9fa48("1077") ? true : (stryCov_9fa48("1077", "1078", "1079"), typeof str !== (stryMutAct_9fa48("1080") ? "" : (stryCov_9fa48("1080"), 'string')))) return stryMutAct_9fa48("1081") ? "Stryker was here!" : (stryCov_9fa48("1081"), '');
    return stryMutAct_9fa48("1083") ? str.toUpperCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_]+/g, '-').replace(/^-+|-+$/g, '') : stryMutAct_9fa48("1082") ? str.toLowerCase().replace(/[^\w\s-]/g, '').replace(/[\s_]+/g, '-').replace(/^-+|-+$/g, '') : (stryCov_9fa48("1082", "1083"), str.toLowerCase().trim().replace(stryMutAct_9fa48("1086") ? /[^\w\S-]/g : stryMutAct_9fa48("1085") ? /[^\W\s-]/g : stryMutAct_9fa48("1084") ? /[\w\s-]/g : (stryCov_9fa48("1084", "1085", "1086"), /[^\w\s-]/g), stryMutAct_9fa48("1087") ? "Stryker was here!" : (stryCov_9fa48("1087"), '')).replace(stryMutAct_9fa48("1090") ? /[\S_]+/g : stryMutAct_9fa48("1089") ? /[^\s_]+/g : stryMutAct_9fa48("1088") ? /[\s_]/g : (stryCov_9fa48("1088", "1089", "1090"), /[\s_]+/g), stryMutAct_9fa48("1091") ? "" : (stryCov_9fa48("1091"), '-')).replace(stryMutAct_9fa48("1095") ? /^-+|-$/g : stryMutAct_9fa48("1094") ? /^-+|-+/g : stryMutAct_9fa48("1093") ? /^-|-+$/g : stryMutAct_9fa48("1092") ? /-+|-+$/g : (stryCov_9fa48("1092", "1093", "1094", "1095"), /^-+|-+$/g), stryMutAct_9fa48("1096") ? "Stryker was here!" : (stryCov_9fa48("1096"), '')));
  }
}

/**
 * Convert camelCase string to kebab-case
 * @param str - camelCase input string
 * @returns kebab-case string
 */
export function camelToKebab(str: string): string {
  if (stryMutAct_9fa48("1097")) {
    {}
  } else {
    stryCov_9fa48("1097");
    if (stryMutAct_9fa48("1100") ? typeof str === 'string' : stryMutAct_9fa48("1099") ? false : stryMutAct_9fa48("1098") ? true : (stryCov_9fa48("1098", "1099", "1100"), typeof str !== (stryMutAct_9fa48("1101") ? "" : (stryCov_9fa48("1101"), 'string')))) return stryMutAct_9fa48("1102") ? "Stryker was here!" : (stryCov_9fa48("1102"), '');
    return stryMutAct_9fa48("1103") ? str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toUpperCase() : (stryCov_9fa48("1103"), str.replace(stryMutAct_9fa48("1105") ? /([a-z0-9])([^A-Z])/g : stryMutAct_9fa48("1104") ? /([^a-z0-9])([A-Z])/g : (stryCov_9fa48("1104", "1105"), /([a-z0-9])([A-Z])/g), stryMutAct_9fa48("1106") ? "" : (stryCov_9fa48("1106"), '$1-$2')).toLowerCase());
  }
}

/**
 * Convert kebab-case string to camelCase
 * @param str - kebab-case input string
 * @returns camelCase string
 */
export function kebabToCamel(str: string): string {
  if (stryMutAct_9fa48("1107")) {
    {}
  } else {
    stryCov_9fa48("1107");
    if (stryMutAct_9fa48("1110") ? typeof str === 'string' : stryMutAct_9fa48("1109") ? false : stryMutAct_9fa48("1108") ? true : (stryCov_9fa48("1108", "1109", "1110"), typeof str !== (stryMutAct_9fa48("1111") ? "" : (stryCov_9fa48("1111"), 'string')))) return stryMutAct_9fa48("1112") ? "Stryker was here!" : (stryCov_9fa48("1112"), '');
    return str.replace(stryMutAct_9fa48("1113") ? /-([^a-z])/g : (stryCov_9fa48("1113"), /-([a-z])/g), stryMutAct_9fa48("1114") ? () => undefined : (stryCov_9fa48("1114"), (_, char) => stryMutAct_9fa48("1115") ? char.toLowerCase() : (stryCov_9fa48("1115"), char.toUpperCase())));
  }
}

/**
 * Mask an email address for display (e.g., te***@example.com)
 * @param email - Email address to mask
 * @returns Masked email string
 */
export function maskEmail(email: string): string {
  if (stryMutAct_9fa48("1116")) {
    {}
  } else {
    stryCov_9fa48("1116");
    if (stryMutAct_9fa48("1119") ? typeof email === 'string' : stryMutAct_9fa48("1118") ? false : stryMutAct_9fa48("1117") ? true : (stryCov_9fa48("1117", "1118", "1119"), typeof email !== (stryMutAct_9fa48("1120") ? "" : (stryCov_9fa48("1120"), 'string')))) return stryMutAct_9fa48("1121") ? "Stryker was here!" : (stryCov_9fa48("1121"), '');
    const atIndex = email.indexOf(stryMutAct_9fa48("1122") ? "" : (stryCov_9fa48("1122"), '@'));
    if (stryMutAct_9fa48("1126") ? atIndex >= 0 : stryMutAct_9fa48("1125") ? atIndex <= 0 : stryMutAct_9fa48("1124") ? false : stryMutAct_9fa48("1123") ? true : (stryCov_9fa48("1123", "1124", "1125", "1126"), atIndex < 0)) return email;
    const local = stryMutAct_9fa48("1127") ? email : (stryCov_9fa48("1127"), email.slice(0, atIndex));
    const domain = stryMutAct_9fa48("1128") ? email : (stryCov_9fa48("1128"), email.slice(atIndex));
    if (stryMutAct_9fa48("1132") ? local.length > 2 : stryMutAct_9fa48("1131") ? local.length < 2 : stryMutAct_9fa48("1130") ? false : stryMutAct_9fa48("1129") ? true : (stryCov_9fa48("1129", "1130", "1131", "1132"), local.length <= 2)) return stryMutAct_9fa48("1133") ? local[0] + '*'.repeat(local.length - 1) - domain : (stryCov_9fa48("1133"), (stryMutAct_9fa48("1134") ? local[0] - '*'.repeat(local.length - 1) : (stryCov_9fa48("1134"), local[0] + (stryMutAct_9fa48("1135") ? "" : (stryCov_9fa48("1135"), '*')).repeat(stryMutAct_9fa48("1136") ? local.length + 1 : (stryCov_9fa48("1136"), local.length - 1)))) + domain);
    const visible = stryMutAct_9fa48("1137") ? Math.min(2, Math.ceil(local.length / 3)) : (stryCov_9fa48("1137"), Math.max(2, Math.ceil(stryMutAct_9fa48("1138") ? local.length * 3 : (stryCov_9fa48("1138"), local.length / 3))));
    return stryMutAct_9fa48("1139") ? local.slice(0, visible) + '*'.repeat(local.length - visible) - domain : (stryCov_9fa48("1139"), (stryMutAct_9fa48("1140") ? local.slice(0, visible) - '*'.repeat(local.length - visible) : (stryCov_9fa48("1140"), (stryMutAct_9fa48("1141") ? local : (stryCov_9fa48("1141"), local.slice(0, visible))) + (stryMutAct_9fa48("1142") ? "" : (stryCov_9fa48("1142"), '*')).repeat(stryMutAct_9fa48("1143") ? local.length + visible : (stryCov_9fa48("1143"), local.length - visible)))) + domain);
  }
}

/**
 * Mask a phone number for display (e.g., 010-****-5678)
 * @param phone - Phone number string (digits and hyphens)
 * @returns Masked phone string
 */
export function maskPhone(phone: string): string {
  if (stryMutAct_9fa48("1144")) {
    {}
  } else {
    stryCov_9fa48("1144");
    if (stryMutAct_9fa48("1147") ? typeof phone === 'string' : stryMutAct_9fa48("1146") ? false : stryMutAct_9fa48("1145") ? true : (stryCov_9fa48("1145", "1146", "1147"), typeof phone !== (stryMutAct_9fa48("1148") ? "" : (stryCov_9fa48("1148"), 'string')))) return stryMutAct_9fa48("1149") ? "Stryker was here!" : (stryCov_9fa48("1149"), '');
    const digits = phone.replace(stryMutAct_9fa48("1150") ? /[0-9]/g : (stryCov_9fa48("1150"), /[^0-9]/g), stryMutAct_9fa48("1151") ? "Stryker was here!" : (stryCov_9fa48("1151"), ''));
    if (stryMutAct_9fa48("1154") ? digits.length !== 11 : stryMutAct_9fa48("1153") ? false : stryMutAct_9fa48("1152") ? true : (stryCov_9fa48("1152", "1153", "1154"), digits.length === 11)) {
      if (stryMutAct_9fa48("1155")) {
        {}
      } else {
        stryCov_9fa48("1155");
        return stryMutAct_9fa48("1156") ? `` : (stryCov_9fa48("1156"), `${stryMutAct_9fa48("1157") ? digits : (stryCov_9fa48("1157"), digits.slice(0, 3))}-****-${stryMutAct_9fa48("1158") ? digits : (stryCov_9fa48("1158"), digits.slice(7))}`);
      }
    }
    if (stryMutAct_9fa48("1161") ? digits.length !== 10 : stryMutAct_9fa48("1160") ? false : stryMutAct_9fa48("1159") ? true : (stryCov_9fa48("1159", "1160", "1161"), digits.length === 10)) {
      if (stryMutAct_9fa48("1162")) {
        {}
      } else {
        stryCov_9fa48("1162");
        return stryMutAct_9fa48("1163") ? `` : (stryCov_9fa48("1163"), `${stryMutAct_9fa48("1164") ? digits : (stryCov_9fa48("1164"), digits.slice(0, 3))}-***-${stryMutAct_9fa48("1165") ? digits : (stryCov_9fa48("1165"), digits.slice(7))}`);
      }
    }
    return phone;
  }
}