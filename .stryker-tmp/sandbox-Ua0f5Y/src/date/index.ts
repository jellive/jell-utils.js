/**
 * Date utility functions
 * @module date
 */
// @ts-nocheck


/**
 * Generate string from now time with datetime format
 * @returns String now datetime format (YYYY-MM-DD HH:MM:SS)
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
export function getNowDate(): string {
  if (stryMutAct_9fa48("0")) {
    {}
  } else {
    stryCov_9fa48("0");
    const date = new Date();
    let dateString = new Date(stryMutAct_9fa48("1") ? date.getTime() + date.getTimezoneOffset() * 60000 : (stryCov_9fa48("1"), date.getTime() - (stryMutAct_9fa48("2") ? date.getTimezoneOffset() / 60000 : (stryCov_9fa48("2"), date.getTimezoneOffset() * 60000)))).toISOString();
    dateString = dateString.replace(stryMutAct_9fa48("3") ? "" : (stryCov_9fa48("3"), 'T'), stryMutAct_9fa48("4") ? "" : (stryCov_9fa48("4"), ' ')).split(stryMutAct_9fa48("5") ? "" : (stryCov_9fa48("5"), '.'))[0];
    return dateString;
  }
}

/**
 * Generate string from inputted time with Korean date format
 * @param dateString - Date input (Date object or string)
 * @param isYear - Whether to include year in output
 * @returns Korean date format string
 */
export function getKoreanDate(dateString: Date | string = new Date(), isYear = stryMutAct_9fa48("6") ? true : (stryCov_9fa48("6"), false)): string {
  if (stryMutAct_9fa48("7")) {
    {}
  } else {
    stryCov_9fa48("7");
    if (stryMutAct_9fa48("10") ? dateString == null && dateString === '' : stryMutAct_9fa48("9") ? false : stryMutAct_9fa48("8") ? true : (stryCov_9fa48("8", "9", "10"), (stryMutAct_9fa48("12") ? dateString != null : stryMutAct_9fa48("11") ? false : (stryCov_9fa48("11", "12"), dateString == null)) || (stryMutAct_9fa48("14") ? dateString !== '' : stryMutAct_9fa48("13") ? false : (stryCov_9fa48("13", "14"), dateString === (stryMutAct_9fa48("15") ? "Stryker was here!" : (stryCov_9fa48("15"), '')))))) return stryMutAct_9fa48("16") ? "Stryker was here!" : (stryCov_9fa48("16"), '');
    const targetDate = new Date(dateString as string);
    if (stryMutAct_9fa48("18") ? false : stryMutAct_9fa48("17") ? true : (stryCov_9fa48("17", "18"), isNaN(targetDate.getTime()))) return stryMutAct_9fa48("19") ? "Stryker was here!" : (stryCov_9fa48("19"), '');
    const year = targetDate.getFullYear();
    const month = stryMutAct_9fa48("20") ? `0${targetDate.getMonth() + 1}` : (stryCov_9fa48("20"), (stryMutAct_9fa48("21") ? `` : (stryCov_9fa48("21"), `0${stryMutAct_9fa48("22") ? targetDate.getMonth() - 1 : (stryCov_9fa48("22"), targetDate.getMonth() + 1)}`)).slice(stryMutAct_9fa48("23") ? +2 : (stryCov_9fa48("23"), -2)));
    const date = stryMutAct_9fa48("24") ? `0${targetDate.getDate()}` : (stryCov_9fa48("24"), (stryMutAct_9fa48("25") ? `` : (stryCov_9fa48("25"), `0${targetDate.getDate()}`)).slice(stryMutAct_9fa48("26") ? +2 : (stryCov_9fa48("26"), -2)));
    if (stryMutAct_9fa48("28") ? false : stryMutAct_9fa48("27") ? true : (stryCov_9fa48("27", "28"), isYear)) return stryMutAct_9fa48("29") ? `` : (stryCov_9fa48("29"), `${year}년 ${month}월 ${date}일`);
    return stryMutAct_9fa48("30") ? `` : (stryCov_9fa48("30"), `${month}월 ${date}일`);
  }
}

/**
 * Convert date to yyyy-mm-dd format string
 * @param date - Date formatted string or Date object
 * @returns yyyy-mm-dd formatted string
 */
export function formatDate(date: Date | string = new Date()): string {
  if (stryMutAct_9fa48("31")) {
    {}
  } else {
    stryCov_9fa48("31");
    const d = new Date(date as string);
    let month = stryMutAct_9fa48("32") ? `` : (stryCov_9fa48("32"), `${stryMutAct_9fa48("33") ? d.getMonth() - 1 : (stryCov_9fa48("33"), d.getMonth() + 1)}`);
    let day = stryMutAct_9fa48("34") ? `` : (stryCov_9fa48("34"), `${d.getDate()}`);
    const year = d.getFullYear();
    if (stryMutAct_9fa48("38") ? month.length >= 2 : stryMutAct_9fa48("37") ? month.length <= 2 : stryMutAct_9fa48("36") ? false : stryMutAct_9fa48("35") ? true : (stryCov_9fa48("35", "36", "37", "38"), month.length < 2)) month = (stryMutAct_9fa48("39") ? "" : (stryCov_9fa48("39"), '0')) + month;
    if (stryMutAct_9fa48("43") ? day.length >= 2 : stryMutAct_9fa48("42") ? day.length <= 2 : stryMutAct_9fa48("41") ? false : stryMutAct_9fa48("40") ? true : (stryCov_9fa48("40", "41", "42", "43"), day.length < 2)) day = (stryMutAct_9fa48("44") ? "" : (stryCov_9fa48("44"), '0')) + day;
    return (stryMutAct_9fa48("45") ? [] : (stryCov_9fa48("45"), [year, month, day])).join(stryMutAct_9fa48("46") ? "" : (stryCov_9fa48("46"), '-'));
  }
}

/**
 * Calculate d-day with target date
 * @param date - Target date
 * @returns d-day number (positive = future, negative = past)
 */
export function calDDay(date: Date | string = new Date()): number {
  if (stryMutAct_9fa48("47")) {
    {}
  } else {
    stryCov_9fa48("47");
    const countDownDate = new Date(date as string);
    const now = new Date().getTime();
    const distance = stryMutAct_9fa48("48") ? countDownDate.getTime() + now : (stryCov_9fa48("48"), countDownDate.getTime() - now);
    return Math.floor(stryMutAct_9fa48("49") ? distance * (1000 * 60 * 60 * 24) : (stryCov_9fa48("49"), distance / (stryMutAct_9fa48("50") ? 1000 * 60 * 60 / 24 : (stryCov_9fa48("50"), (stryMutAct_9fa48("51") ? 1000 * 60 / 60 : (stryCov_9fa48("51"), (stryMutAct_9fa48("52") ? 1000 / 60 : (stryCov_9fa48("52"), 1000 * 60)) * 60)) * 24))));
  }
}

/**
 * Calculate difference between two dates
 * @param date1 - First date
 * @param date2 - Second date (defaults to now)
 * @returns Object with days, hours, minutes, seconds difference
 */
export function dateDiff(date1: Date | string, date2: Date | string = new Date()): {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
} {
  if (stryMutAct_9fa48("53")) {
    {}
  } else {
    stryCov_9fa48("53");
    const d1 = new Date(date1).getTime();
    const d2 = new Date(date2).getTime();
    const diff = Math.abs(stryMutAct_9fa48("54") ? d2 + d1 : (stryCov_9fa48("54"), d2 - d1));
    const days = Math.floor(stryMutAct_9fa48("55") ? diff * (1000 * 60 * 60 * 24) : (stryCov_9fa48("55"), diff / (stryMutAct_9fa48("56") ? 1000 * 60 * 60 / 24 : (stryCov_9fa48("56"), (stryMutAct_9fa48("57") ? 1000 * 60 / 60 : (stryCov_9fa48("57"), (stryMutAct_9fa48("58") ? 1000 / 60 : (stryCov_9fa48("58"), 1000 * 60)) * 60)) * 24))));
    const hours = Math.floor(stryMutAct_9fa48("59") ? diff % (1000 * 60 * 60 * 24) * (1000 * 60 * 60) : (stryCov_9fa48("59"), (stryMutAct_9fa48("60") ? diff * (1000 * 60 * 60 * 24) : (stryCov_9fa48("60"), diff % (stryMutAct_9fa48("61") ? 1000 * 60 * 60 / 24 : (stryCov_9fa48("61"), (stryMutAct_9fa48("62") ? 1000 * 60 / 60 : (stryCov_9fa48("62"), (stryMutAct_9fa48("63") ? 1000 / 60 : (stryCov_9fa48("63"), 1000 * 60)) * 60)) * 24)))) / (stryMutAct_9fa48("64") ? 1000 * 60 / 60 : (stryCov_9fa48("64"), (stryMutAct_9fa48("65") ? 1000 / 60 : (stryCov_9fa48("65"), 1000 * 60)) * 60))));
    const minutes = Math.floor(stryMutAct_9fa48("66") ? diff % (1000 * 60 * 60) * (1000 * 60) : (stryCov_9fa48("66"), (stryMutAct_9fa48("67") ? diff * (1000 * 60 * 60) : (stryCov_9fa48("67"), diff % (stryMutAct_9fa48("68") ? 1000 * 60 / 60 : (stryCov_9fa48("68"), (stryMutAct_9fa48("69") ? 1000 / 60 : (stryCov_9fa48("69"), 1000 * 60)) * 60)))) / (stryMutAct_9fa48("70") ? 1000 / 60 : (stryCov_9fa48("70"), 1000 * 60))));
    const seconds = Math.floor(stryMutAct_9fa48("71") ? diff % (1000 * 60) * 1000 : (stryCov_9fa48("71"), (stryMutAct_9fa48("72") ? diff * (1000 * 60) : (stryCov_9fa48("72"), diff % (stryMutAct_9fa48("73") ? 1000 / 60 : (stryCov_9fa48("73"), 1000 * 60)))) / 1000));
    return stryMutAct_9fa48("74") ? {} : (stryCov_9fa48("74"), {
      days,
      hours,
      minutes,
      seconds
    });
  }
}

/**
 * Format date with custom format tokens
 * @param date - Date object or date string
 * @param format - Format string with tokens (YYYY, MM, DD, HH, mm, ss, ddd, dddd)
 * @returns Formatted date string
 */
export function formatDateAdvanced(date: Date | string, format: string): string {
  if (stryMutAct_9fa48("75")) {
    {}
  } else {
    stryCov_9fa48("75");
    const d = new Date(date as string);
    const weekdays = stryMutAct_9fa48("76") ? [] : (stryCov_9fa48("76"), [stryMutAct_9fa48("77") ? "" : (stryCov_9fa48("77"), '일요일'), stryMutAct_9fa48("78") ? "" : (stryCov_9fa48("78"), '월요일'), stryMutAct_9fa48("79") ? "" : (stryCov_9fa48("79"), '화요일'), stryMutAct_9fa48("80") ? "" : (stryCov_9fa48("80"), '수요일'), stryMutAct_9fa48("81") ? "" : (stryCov_9fa48("81"), '목요일'), stryMutAct_9fa48("82") ? "" : (stryCov_9fa48("82"), '금요일'), stryMutAct_9fa48("83") ? "" : (stryCov_9fa48("83"), '토요일')]);
    const replacements: Record<string, string> = stryMutAct_9fa48("84") ? {} : (stryCov_9fa48("84"), {
      YYYY: d.getFullYear().toString(),
      MM: (stryMutAct_9fa48("85") ? d.getMonth() - 1 : (stryCov_9fa48("85"), d.getMonth() + 1)).toString().padStart(2, stryMutAct_9fa48("86") ? "" : (stryCov_9fa48("86"), '0')),
      DD: d.getDate().toString().padStart(2, stryMutAct_9fa48("87") ? "" : (stryCov_9fa48("87"), '0')),
      HH: d.getHours().toString().padStart(2, stryMutAct_9fa48("88") ? "" : (stryCov_9fa48("88"), '0')),
      mm: d.getMinutes().toString().padStart(2, stryMutAct_9fa48("89") ? "" : (stryCov_9fa48("89"), '0')),
      ss: d.getSeconds().toString().padStart(2, stryMutAct_9fa48("90") ? "" : (stryCov_9fa48("90"), '0')),
      dddd: weekdays[d.getDay()],
      ddd: stryMutAct_9fa48("91") ? weekdays[d.getDay()] : (stryCov_9fa48("91"), weekdays[d.getDay()].charAt(0))
    });
    let result = format;
    const tokens = stryMutAct_9fa48("92") ? [] : (stryCov_9fa48("92"), [stryMutAct_9fa48("93") ? "" : (stryCov_9fa48("93"), 'YYYY'), stryMutAct_9fa48("94") ? "" : (stryCov_9fa48("94"), 'dddd'), stryMutAct_9fa48("95") ? "" : (stryCov_9fa48("95"), 'ddd'), stryMutAct_9fa48("96") ? "" : (stryCov_9fa48("96"), 'MM'), stryMutAct_9fa48("97") ? "" : (stryCov_9fa48("97"), 'DD'), stryMutAct_9fa48("98") ? "" : (stryCov_9fa48("98"), 'HH'), stryMutAct_9fa48("99") ? "" : (stryCov_9fa48("99"), 'mm'), stryMutAct_9fa48("100") ? "" : (stryCov_9fa48("100"), 'ss')]);
    for (const token of tokens) {
      if (stryMutAct_9fa48("101")) {
        {}
      } else {
        stryCov_9fa48("101");
        result = result.replace(new RegExp(token, stryMutAct_9fa48("102") ? "" : (stryCov_9fa48("102"), 'g')), replacements[token]);
      }
    }
    return result;
  }
}

/**
 * Get relative time string in Korean
 * @param date - Date object or date string
 * @returns Korean relative time string (e.g., '방금 전', '5분 전', '어제')
 */
export function timeAgo(date: Date | string): string {
  if (stryMutAct_9fa48("103")) {
    {}
  } else {
    stryCov_9fa48("103");
    const now = Date.now();
    const past = new Date(date as string).getTime();
    const diff = stryMutAct_9fa48("104") ? now + past : (stryCov_9fa48("104"), now - past);
    const minute = stryMutAct_9fa48("105") ? 60 / 1000 : (stryCov_9fa48("105"), 60 * 1000);
    const hour = stryMutAct_9fa48("106") ? 60 / minute : (stryCov_9fa48("106"), 60 * minute);
    const day = stryMutAct_9fa48("107") ? 24 / hour : (stryCov_9fa48("107"), 24 * hour);
    const week = stryMutAct_9fa48("108") ? 7 / day : (stryCov_9fa48("108"), 7 * day);
    const month = stryMutAct_9fa48("109") ? 30 / day : (stryCov_9fa48("109"), 30 * day);
    const year = stryMutAct_9fa48("110") ? 365 / day : (stryCov_9fa48("110"), 365 * day);
    if (stryMutAct_9fa48("114") ? diff >= minute : stryMutAct_9fa48("113") ? diff <= minute : stryMutAct_9fa48("112") ? false : stryMutAct_9fa48("111") ? true : (stryCov_9fa48("111", "112", "113", "114"), diff < minute)) return stryMutAct_9fa48("115") ? "" : (stryCov_9fa48("115"), '방금 전');
    if (stryMutAct_9fa48("119") ? diff >= hour : stryMutAct_9fa48("118") ? diff <= hour : stryMutAct_9fa48("117") ? false : stryMutAct_9fa48("116") ? true : (stryCov_9fa48("116", "117", "118", "119"), diff < hour)) return stryMutAct_9fa48("120") ? `` : (stryCov_9fa48("120"), `${Math.floor(stryMutAct_9fa48("121") ? diff * minute : (stryCov_9fa48("121"), diff / minute))}분 전`);
    if (stryMutAct_9fa48("125") ? diff >= day : stryMutAct_9fa48("124") ? diff <= day : stryMutAct_9fa48("123") ? false : stryMutAct_9fa48("122") ? true : (stryCov_9fa48("122", "123", "124", "125"), diff < day)) return stryMutAct_9fa48("126") ? `` : (stryCov_9fa48("126"), `${Math.floor(stryMutAct_9fa48("127") ? diff * hour : (stryCov_9fa48("127"), diff / hour))}시간 전`);
    if (stryMutAct_9fa48("131") ? diff >= 2 * day : stryMutAct_9fa48("130") ? diff <= 2 * day : stryMutAct_9fa48("129") ? false : stryMutAct_9fa48("128") ? true : (stryCov_9fa48("128", "129", "130", "131"), diff < (stryMutAct_9fa48("132") ? 2 / day : (stryCov_9fa48("132"), 2 * day)))) return stryMutAct_9fa48("133") ? "" : (stryCov_9fa48("133"), '어제');
    if (stryMutAct_9fa48("137") ? diff >= week : stryMutAct_9fa48("136") ? diff <= week : stryMutAct_9fa48("135") ? false : stryMutAct_9fa48("134") ? true : (stryCov_9fa48("134", "135", "136", "137"), diff < week)) return stryMutAct_9fa48("138") ? `` : (stryCov_9fa48("138"), `${Math.floor(stryMutAct_9fa48("139") ? diff * day : (stryCov_9fa48("139"), diff / day))}일 전`);
    if (stryMutAct_9fa48("143") ? diff >= month : stryMutAct_9fa48("142") ? diff <= month : stryMutAct_9fa48("141") ? false : stryMutAct_9fa48("140") ? true : (stryCov_9fa48("140", "141", "142", "143"), diff < month)) return stryMutAct_9fa48("144") ? `` : (stryCov_9fa48("144"), `${Math.floor(stryMutAct_9fa48("145") ? diff * week : (stryCov_9fa48("145"), diff / week))}주 전`);
    if (stryMutAct_9fa48("149") ? diff >= year : stryMutAct_9fa48("148") ? diff <= year : stryMutAct_9fa48("147") ? false : stryMutAct_9fa48("146") ? true : (stryCov_9fa48("146", "147", "148", "149"), diff < year)) return stryMutAct_9fa48("150") ? `` : (stryCov_9fa48("150"), `${Math.floor(stryMutAct_9fa48("151") ? diff * month : (stryCov_9fa48("151"), diff / month))}개월 전`);
    return stryMutAct_9fa48("152") ? `` : (stryCov_9fa48("152"), `${Math.floor(stryMutAct_9fa48("153") ? diff * year : (stryCov_9fa48("153"), diff / year))}년 전`);
  }
}

/**
 * Get the number of days in a month
 * @param year - Year (e.g., 2025)
 * @param month - Month (1-12)
 * @returns Number of days in the month
 */
export function getDaysInMonth(year: number, month: number): number {
  if (stryMutAct_9fa48("154")) {
    {}
  } else {
    stryCov_9fa48("154");
    return new Date(year, month, 0).getDate();
  }
}

/**
 * Check if a year is a leap year
 * @param year - Year to check
 * @returns true if leap year, false otherwise
 */
export function isLeapYear(year: number): boolean {
  if (stryMutAct_9fa48("155")) {
    {}
  } else {
    stryCov_9fa48("155");
    return stryMutAct_9fa48("158") ? year % 4 === 0 && year % 100 !== 0 && year % 400 === 0 : stryMutAct_9fa48("157") ? false : stryMutAct_9fa48("156") ? true : (stryCov_9fa48("156", "157", "158"), (stryMutAct_9fa48("160") ? year % 4 === 0 || year % 100 !== 0 : stryMutAct_9fa48("159") ? false : (stryCov_9fa48("159", "160"), (stryMutAct_9fa48("162") ? year % 4 !== 0 : stryMutAct_9fa48("161") ? true : (stryCov_9fa48("161", "162"), (stryMutAct_9fa48("163") ? year * 4 : (stryCov_9fa48("163"), year % 4)) === 0)) && (stryMutAct_9fa48("165") ? year % 100 === 0 : stryMutAct_9fa48("164") ? true : (stryCov_9fa48("164", "165"), (stryMutAct_9fa48("166") ? year * 100 : (stryCov_9fa48("166"), year % 100)) !== 0)))) || (stryMutAct_9fa48("168") ? year % 400 !== 0 : stryMutAct_9fa48("167") ? false : (stryCov_9fa48("167", "168"), (stryMutAct_9fa48("169") ? year * 400 : (stryCov_9fa48("169"), year % 400)) === 0)));
  }
}

/**
 * Get a human-readable relative time string (alias for timeAgo, supports future dates)
 * @param date - Date object or date string
 * @returns Korean relative time string
 */
export function relative(date: Date | string): string {
  if (stryMutAct_9fa48("170")) {
    {}
  } else {
    stryCov_9fa48("170");
    return timeAgo(date);
  }
}

/**
 * Check if a date falls on a weekend (Saturday or Sunday)
 * @param date - Date to check (defaults to now)
 * @returns true if weekend, false otherwise
 */
export function isWeekend(date: Date | string = new Date()): boolean {
  if (stryMutAct_9fa48("171")) {
    {}
  } else {
    stryCov_9fa48("171");
    if (stryMutAct_9fa48("174") ? date != null : stryMutAct_9fa48("173") ? false : stryMutAct_9fa48("172") ? true : (stryCov_9fa48("172", "173", "174"), date == null)) return stryMutAct_9fa48("175") ? true : (stryCov_9fa48("175"), false);
    const d = new Date(date as string);
    if (stryMutAct_9fa48("177") ? false : stryMutAct_9fa48("176") ? true : (stryCov_9fa48("176", "177"), isNaN(d.getTime()))) return stryMutAct_9fa48("178") ? true : (stryCov_9fa48("178"), false);
    const day = d.getDay();
    return stryMutAct_9fa48("181") ? day === 0 && day === 6 : stryMutAct_9fa48("180") ? false : stryMutAct_9fa48("179") ? true : (stryCov_9fa48("179", "180", "181"), (stryMutAct_9fa48("183") ? day !== 0 : stryMutAct_9fa48("182") ? false : (stryCov_9fa48("182", "183"), day === 0)) || (stryMutAct_9fa48("185") ? day !== 6 : stryMutAct_9fa48("184") ? false : (stryCov_9fa48("184", "185"), day === 6)));
  }
}

/**
 * Add a number of days to a date
 * @param date - Base date
 * @param days - Number of days to add (negative to subtract)
 * @returns New date with days added
 */
export function addDays(date: Date | string, days: number): Date {
  if (stryMutAct_9fa48("186")) {
    {}
  } else {
    stryCov_9fa48("186");
    if (stryMutAct_9fa48("189") ? date == null && date === '' : stryMutAct_9fa48("188") ? false : stryMutAct_9fa48("187") ? true : (stryCov_9fa48("187", "188", "189"), (stryMutAct_9fa48("191") ? date != null : stryMutAct_9fa48("190") ? false : (stryCov_9fa48("190", "191"), date == null)) || (stryMutAct_9fa48("193") ? date !== '' : stryMutAct_9fa48("192") ? false : (stryCov_9fa48("192", "193"), date === (stryMutAct_9fa48("194") ? "Stryker was here!" : (stryCov_9fa48("194"), '')))))) return new Date(NaN);
    const d = new Date(date as string);
    if (stryMutAct_9fa48("196") ? false : stryMutAct_9fa48("195") ? true : (stryCov_9fa48("195", "196"), isNaN(d.getTime()))) return new Date(NaN);
    stryMutAct_9fa48("197") ? d.setTime(d.getDate() + days) : (stryCov_9fa48("197"), d.setDate(stryMutAct_9fa48("198") ? d.getDate() - days : (stryCov_9fa48("198"), d.getDate() + days)));
    return d;
  }
}

/**
 * Get the difference in whole days between two dates
 * @param date1 - First date
 * @param date2 - Second date (defaults to now)
 * @returns Number of whole days between the dates (absolute value)
 */
export function diffDays(date1: Date | string, date2: Date | string = new Date()): number {
  if (stryMutAct_9fa48("199")) {
    {}
  } else {
    stryCov_9fa48("199");
    if (stryMutAct_9fa48("202") ? date1 == null && date1 === '' : stryMutAct_9fa48("201") ? false : stryMutAct_9fa48("200") ? true : (stryCov_9fa48("200", "201", "202"), (stryMutAct_9fa48("204") ? date1 != null : stryMutAct_9fa48("203") ? false : (stryCov_9fa48("203", "204"), date1 == null)) || (stryMutAct_9fa48("206") ? date1 !== '' : stryMutAct_9fa48("205") ? false : (stryCov_9fa48("205", "206"), date1 === (stryMutAct_9fa48("207") ? "Stryker was here!" : (stryCov_9fa48("207"), '')))))) return NaN;
    const d1 = new Date(date1 as string);
    const d2 = new Date(date2 as string);
    if (stryMutAct_9fa48("210") ? isNaN(d1.getTime()) && isNaN(d2.getTime()) : stryMutAct_9fa48("209") ? false : stryMutAct_9fa48("208") ? true : (stryCov_9fa48("208", "209", "210"), isNaN(d1.getTime()) || isNaN(d2.getTime()))) return NaN;
    const msPerDay = stryMutAct_9fa48("211") ? 1000 * 60 * 60 / 24 : (stryCov_9fa48("211"), (stryMutAct_9fa48("212") ? 1000 * 60 / 60 : (stryCov_9fa48("212"), (stryMutAct_9fa48("213") ? 1000 / 60 : (stryCov_9fa48("213"), 1000 * 60)) * 60)) * 24);
    return Math.abs(Math.floor(stryMutAct_9fa48("214") ? (d2.getTime() - d1.getTime()) * msPerDay : (stryCov_9fa48("214"), (stryMutAct_9fa48("215") ? d2.getTime() + d1.getTime() : (stryCov_9fa48("215"), d2.getTime() - d1.getTime())) / msPerDay)));
  }
}