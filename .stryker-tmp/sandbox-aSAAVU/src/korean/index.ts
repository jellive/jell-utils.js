/**
 * Korean language utility functions
 * @module korean
 */
// @ts-nocheck
function stryNS_9fa48() {
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
const CHOSUNG_LIST = stryMutAct_9fa48("448") ? [] : (stryCov_9fa48("448"), [stryMutAct_9fa48("449") ? "" : (stryCov_9fa48("449"), 'ㄱ'), stryMutAct_9fa48("450") ? "" : (stryCov_9fa48("450"), 'ㄲ'), stryMutAct_9fa48("451") ? "" : (stryCov_9fa48("451"), 'ㄴ'), stryMutAct_9fa48("452") ? "" : (stryCov_9fa48("452"), 'ㄷ'), stryMutAct_9fa48("453") ? "" : (stryCov_9fa48("453"), 'ㄸ'), stryMutAct_9fa48("454") ? "" : (stryCov_9fa48("454"), 'ㄹ'), stryMutAct_9fa48("455") ? "" : (stryCov_9fa48("455"), 'ㅁ'), stryMutAct_9fa48("456") ? "" : (stryCov_9fa48("456"), 'ㅂ'), stryMutAct_9fa48("457") ? "" : (stryCov_9fa48("457"), 'ㅃ'), stryMutAct_9fa48("458") ? "" : (stryCov_9fa48("458"), 'ㅅ'), stryMutAct_9fa48("459") ? "" : (stryCov_9fa48("459"), 'ㅆ'), stryMutAct_9fa48("460") ? "" : (stryCov_9fa48("460"), 'ㅇ'), stryMutAct_9fa48("461") ? "" : (stryCov_9fa48("461"), 'ㅈ'), stryMutAct_9fa48("462") ? "" : (stryCov_9fa48("462"), 'ㅉ'), stryMutAct_9fa48("463") ? "" : (stryCov_9fa48("463"), 'ㅊ'), stryMutAct_9fa48("464") ? "" : (stryCov_9fa48("464"), 'ㅋ'), stryMutAct_9fa48("465") ? "" : (stryCov_9fa48("465"), 'ㅌ'), stryMutAct_9fa48("466") ? "" : (stryCov_9fa48("466"), 'ㅍ'), stryMutAct_9fa48("467") ? "" : (stryCov_9fa48("467"), 'ㅎ')]);

/**
 * Check if message contains Korean characters
 * @param message - Target string
 * @returns true if string contains Korean characters
 */
export function isKorean(message: string): boolean {
  if (stryMutAct_9fa48("468")) {
    {}
  } else {
    stryCov_9fa48("468");
    const regex = stryMutAct_9fa48("469") ? /[^ㄱ-ㅎㅏ-ㅣ가-힣]/gi : (stryCov_9fa48("469"), /[ㄱ-ㅎㅏ-ㅣ가-힣]/gi);
    return regex.test(message);
  }
}

/**
 * Get the chosung (초성, leading consonant) of a Korean character
 * @param char - A single Korean character
 * @returns Chosung character, or the original char if not Korean
 */
export function getChosung(char: string): string {
  if (stryMutAct_9fa48("470")) {
    {}
  } else {
    stryCov_9fa48("470");
    const code = char.charCodeAt(0);
    if (stryMutAct_9fa48("473") ? code >= 44032 || code <= 55203 : stryMutAct_9fa48("472") ? false : stryMutAct_9fa48("471") ? true : (stryCov_9fa48("471", "472", "473"), (stryMutAct_9fa48("476") ? code < 44032 : stryMutAct_9fa48("475") ? code > 44032 : stryMutAct_9fa48("474") ? true : (stryCov_9fa48("474", "475", "476"), code >= 44032)) && (stryMutAct_9fa48("479") ? code > 55203 : stryMutAct_9fa48("478") ? code < 55203 : stryMutAct_9fa48("477") ? true : (stryCov_9fa48("477", "478", "479"), code <= 55203)))) {
      if (stryMutAct_9fa48("480")) {
        {}
      } else {
        stryCov_9fa48("480");
        const index = Math.floor(stryMutAct_9fa48("481") ? (code - 44032) * 588 : (stryCov_9fa48("481"), (stryMutAct_9fa48("482") ? code + 44032 : (stryCov_9fa48("482"), code - 44032)) / 588));
        return CHOSUNG_LIST[index];
      }
    }
    return char;
  }
}

/**
 * Search Korean string by chosung (초성)
 * @param str - Target string to search in
 * @param search - Chosung search string
 * @returns true if chosung matches
 */
export function chosungSearch(str: string, search: string): boolean {
  if (stryMutAct_9fa48("483")) {
    {}
  } else {
    stryCov_9fa48("483");
    const strChosung = str.split(stryMutAct_9fa48("484") ? "Stryker was here!" : (stryCov_9fa48("484"), '')).map(getChosung).join(stryMutAct_9fa48("485") ? "Stryker was here!" : (stryCov_9fa48("485"), ''));
    return strChosung.includes(search);
  }
}

/**
 * Validate Korean business registration number (사업자등록번호)
 * @param businessNumber - Business registration number string (10 digits)
 * @returns true if valid, false otherwise
 */
export function isBusinessNumber(businessNumber: string): boolean {
  if (stryMutAct_9fa48("486")) {
    {}
  } else {
    stryCov_9fa48("486");
    const cleaned = businessNumber.replace(stryMutAct_9fa48("487") ? /[0-9]/g : (stryCov_9fa48("487"), /[^0-9]/g), stryMutAct_9fa48("488") ? "Stryker was here!" : (stryCov_9fa48("488"), ''));
    if (stryMutAct_9fa48("491") ? cleaned.length === 10 : stryMutAct_9fa48("490") ? false : stryMutAct_9fa48("489") ? true : (stryCov_9fa48("489", "490", "491"), cleaned.length !== 10)) return stryMutAct_9fa48("492") ? true : (stryCov_9fa48("492"), false);
    const digits = cleaned.split(stryMutAct_9fa48("493") ? "Stryker was here!" : (stryCov_9fa48("493"), '')).map(Number);
    const checksum = stryMutAct_9fa48("494") ? [] : (stryCov_9fa48("494"), [1, 3, 7, 1, 3, 7, 1, 3, 5]);
    let sum = 0;
    for (let i = 0; stryMutAct_9fa48("497") ? i >= 9 : stryMutAct_9fa48("496") ? i <= 9 : stryMutAct_9fa48("495") ? false : (stryCov_9fa48("495", "496", "497"), i < 9); stryMutAct_9fa48("498") ? i-- : (stryCov_9fa48("498"), i++)) {
      if (stryMutAct_9fa48("499")) {
        {}
      } else {
        stryCov_9fa48("499");
        stryMutAct_9fa48("500") ? sum -= digits[i] * checksum[i] : (stryCov_9fa48("500"), sum += stryMutAct_9fa48("501") ? digits[i] / checksum[i] : (stryCov_9fa48("501"), digits[i] * checksum[i]));
      }
    }
    stryMutAct_9fa48("502") ? sum -= Math.floor(digits[8] * 5 / 10) : (stryCov_9fa48("502"), sum += Math.floor(stryMutAct_9fa48("503") ? digits[8] * 5 * 10 : (stryCov_9fa48("503"), (stryMutAct_9fa48("504") ? digits[8] / 5 : (stryCov_9fa48("504"), digits[8] * 5)) / 10)));
    const result = stryMutAct_9fa48("505") ? (10 - sum % 10) * 10 : (stryCov_9fa48("505"), (stryMutAct_9fa48("506") ? 10 + sum % 10 : (stryCov_9fa48("506"), 10 - (stryMutAct_9fa48("507") ? sum * 10 : (stryCov_9fa48("507"), sum % 10)))) % 10);
    return stryMutAct_9fa48("510") ? result !== digits[9] : stryMutAct_9fa48("509") ? false : stryMutAct_9fa48("508") ? true : (stryCov_9fa48("508", "509", "510"), result === digits[9]);
  }
}

/**
 * Append the correct Korean subject particle (은/는) based on last character
 * @param word - Korean word
 * @returns Word with correct 은 or 는 appended
 */
export function withEunNeun(word: string): string {
  if (stryMutAct_9fa48("511")) {
    {}
  } else {
    stryCov_9fa48("511");
    if (stryMutAct_9fa48("514") ? false : stryMutAct_9fa48("513") ? true : stryMutAct_9fa48("512") ? word : (stryCov_9fa48("512", "513", "514"), !word)) return word;
    const lastChar = word[stryMutAct_9fa48("515") ? word.length + 1 : (stryCov_9fa48("515"), word.length - 1)];
    const code = lastChar.charCodeAt(0);
    if (stryMutAct_9fa48("518") ? code < 44032 && code > 55203 : stryMutAct_9fa48("517") ? false : stryMutAct_9fa48("516") ? true : (stryCov_9fa48("516", "517", "518"), (stryMutAct_9fa48("521") ? code >= 44032 : stryMutAct_9fa48("520") ? code <= 44032 : stryMutAct_9fa48("519") ? false : (stryCov_9fa48("519", "520", "521"), code < 44032)) || (stryMutAct_9fa48("524") ? code <= 55203 : stryMutAct_9fa48("523") ? code >= 55203 : stryMutAct_9fa48("522") ? false : (stryCov_9fa48("522", "523", "524"), code > 55203)))) return word + (stryMutAct_9fa48("525") ? "" : (stryCov_9fa48("525"), '는'));
    const hasFinalConsonant = stryMutAct_9fa48("528") ? (code - 44032) % 28 === 0 : stryMutAct_9fa48("527") ? false : stryMutAct_9fa48("526") ? true : (stryCov_9fa48("526", "527", "528"), (stryMutAct_9fa48("529") ? (code - 44032) * 28 : (stryCov_9fa48("529"), (stryMutAct_9fa48("530") ? code + 44032 : (stryCov_9fa48("530"), code - 44032)) % 28)) !== 0);
    return stryMutAct_9fa48("531") ? word - (hasFinalConsonant ? '은' : '는') : (stryCov_9fa48("531"), word + (hasFinalConsonant ? stryMutAct_9fa48("532") ? "" : (stryCov_9fa48("532"), '은') : stryMutAct_9fa48("533") ? "" : (stryCov_9fa48("533"), '는')));
  }
}

/**
 * Append the correct Korean subject particle (이/가) based on last character
 * @param word - Korean word
 * @returns Word with correct 이 or 가 appended
 */
export function withIGa(word: string): string {
  if (stryMutAct_9fa48("534")) {
    {}
  } else {
    stryCov_9fa48("534");
    if (stryMutAct_9fa48("537") ? false : stryMutAct_9fa48("536") ? true : stryMutAct_9fa48("535") ? word : (stryCov_9fa48("535", "536", "537"), !word)) return word;
    const lastChar = word[stryMutAct_9fa48("538") ? word.length + 1 : (stryCov_9fa48("538"), word.length - 1)];
    const code = lastChar.charCodeAt(0);
    if (stryMutAct_9fa48("541") ? code < 44032 && code > 55203 : stryMutAct_9fa48("540") ? false : stryMutAct_9fa48("539") ? true : (stryCov_9fa48("539", "540", "541"), (stryMutAct_9fa48("544") ? code >= 44032 : stryMutAct_9fa48("543") ? code <= 44032 : stryMutAct_9fa48("542") ? false : (stryCov_9fa48("542", "543", "544"), code < 44032)) || (stryMutAct_9fa48("547") ? code <= 55203 : stryMutAct_9fa48("546") ? code >= 55203 : stryMutAct_9fa48("545") ? false : (stryCov_9fa48("545", "546", "547"), code > 55203)))) return word + (stryMutAct_9fa48("548") ? "" : (stryCov_9fa48("548"), '가'));
    const hasFinalConsonant = stryMutAct_9fa48("551") ? (code - 44032) % 28 === 0 : stryMutAct_9fa48("550") ? false : stryMutAct_9fa48("549") ? true : (stryCov_9fa48("549", "550", "551"), (stryMutAct_9fa48("552") ? (code - 44032) * 28 : (stryCov_9fa48("552"), (stryMutAct_9fa48("553") ? code + 44032 : (stryCov_9fa48("553"), code - 44032)) % 28)) !== 0);
    return stryMutAct_9fa48("554") ? word - (hasFinalConsonant ? '이' : '가') : (stryCov_9fa48("554"), word + (hasFinalConsonant ? stryMutAct_9fa48("555") ? "" : (stryCov_9fa48("555"), '이') : stryMutAct_9fa48("556") ? "" : (stryCov_9fa48("556"), '가')));
  }
}

/**
 * Append the correct Korean object particle (을/를) based on last character
 * @param word - Korean word
 * @returns Word with correct 을 or 를 appended
 */
export function withEulReul(word: string): string {
  if (stryMutAct_9fa48("557")) {
    {}
  } else {
    stryCov_9fa48("557");
    if (stryMutAct_9fa48("560") ? false : stryMutAct_9fa48("559") ? true : stryMutAct_9fa48("558") ? word : (stryCov_9fa48("558", "559", "560"), !word)) return word;
    const lastChar = word[stryMutAct_9fa48("561") ? word.length + 1 : (stryCov_9fa48("561"), word.length - 1)];
    const code = lastChar.charCodeAt(0);
    if (stryMutAct_9fa48("564") ? code < 44032 && code > 55203 : stryMutAct_9fa48("563") ? false : stryMutAct_9fa48("562") ? true : (stryCov_9fa48("562", "563", "564"), (stryMutAct_9fa48("567") ? code >= 44032 : stryMutAct_9fa48("566") ? code <= 44032 : stryMutAct_9fa48("565") ? false : (stryCov_9fa48("565", "566", "567"), code < 44032)) || (stryMutAct_9fa48("570") ? code <= 55203 : stryMutAct_9fa48("569") ? code >= 55203 : stryMutAct_9fa48("568") ? false : (stryCov_9fa48("568", "569", "570"), code > 55203)))) return word + (stryMutAct_9fa48("571") ? "" : (stryCov_9fa48("571"), '를'));
    const hasFinalConsonant = stryMutAct_9fa48("574") ? (code - 44032) % 28 === 0 : stryMutAct_9fa48("573") ? false : stryMutAct_9fa48("572") ? true : (stryCov_9fa48("572", "573", "574"), (stryMutAct_9fa48("575") ? (code - 44032) * 28 : (stryCov_9fa48("575"), (stryMutAct_9fa48("576") ? code + 44032 : (stryCov_9fa48("576"), code - 44032)) % 28)) !== 0);
    return stryMutAct_9fa48("577") ? word - (hasFinalConsonant ? '을' : '를') : (stryCov_9fa48("577"), word + (hasFinalConsonant ? stryMutAct_9fa48("578") ? "" : (stryCov_9fa48("578"), '을') : stryMutAct_9fa48("579") ? "" : (stryCov_9fa48("579"), '를')));
  }
}