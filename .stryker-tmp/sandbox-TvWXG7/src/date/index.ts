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
  if (stryMutAct_9fa48("180")) {
    {}
  } else {
    stryCov_9fa48("180");
    const date = new Date();
    let dateString = new Date(stryMutAct_9fa48("181") ? date.getTime() + date.getTimezoneOffset() * 60000 : (stryCov_9fa48("181"), date.getTime() - (stryMutAct_9fa48("182") ? date.getTimezoneOffset() / 60000 : (stryCov_9fa48("182"), date.getTimezoneOffset() * 60000)))).toISOString();
    dateString = dateString.replace(stryMutAct_9fa48("183") ? "" : (stryCov_9fa48("183"), 'T'), stryMutAct_9fa48("184") ? "" : (stryCov_9fa48("184"), ' ')).split(stryMutAct_9fa48("185") ? "" : (stryCov_9fa48("185"), '.'))[0];
    return dateString;
  }
}

/**
 * Generate string from inputted time with Korean date format
 * @param dateString - Date input (Date object or string)
 * @param isYear - Whether to include year in output
 * @returns Korean date format string
 */
export function getKoreanDate(dateString: Date | string = new Date(), isYear = stryMutAct_9fa48("186") ? true : (stryCov_9fa48("186"), false)): string {
  if (stryMutAct_9fa48("187")) {
    {}
  } else {
    stryCov_9fa48("187");
    if (stryMutAct_9fa48("190") ? dateString == null && dateString === '' : stryMutAct_9fa48("189") ? false : stryMutAct_9fa48("188") ? true : (stryCov_9fa48("188", "189", "190"), (stryMutAct_9fa48("192") ? dateString != null : stryMutAct_9fa48("191") ? false : (stryCov_9fa48("191", "192"), dateString == null)) || (stryMutAct_9fa48("194") ? dateString !== '' : stryMutAct_9fa48("193") ? false : (stryCov_9fa48("193", "194"), dateString === (stryMutAct_9fa48("195") ? "Stryker was here!" : (stryCov_9fa48("195"), '')))))) return stryMutAct_9fa48("196") ? "Stryker was here!" : (stryCov_9fa48("196"), '');
    const targetDate = new Date(dateString as string);
    if (stryMutAct_9fa48("198") ? false : stryMutAct_9fa48("197") ? true : (stryCov_9fa48("197", "198"), isNaN(targetDate.getTime()))) return stryMutAct_9fa48("199") ? "Stryker was here!" : (stryCov_9fa48("199"), '');
    const year = targetDate.getFullYear();
    const month = stryMutAct_9fa48("200") ? `0${targetDate.getMonth() + 1}` : (stryCov_9fa48("200"), (stryMutAct_9fa48("201") ? `` : (stryCov_9fa48("201"), `0${stryMutAct_9fa48("202") ? targetDate.getMonth() - 1 : (stryCov_9fa48("202"), targetDate.getMonth() + 1)}`)).slice(stryMutAct_9fa48("203") ? +2 : (stryCov_9fa48("203"), -2)));
    const date = stryMutAct_9fa48("204") ? `0${targetDate.getDate()}` : (stryCov_9fa48("204"), (stryMutAct_9fa48("205") ? `` : (stryCov_9fa48("205"), `0${targetDate.getDate()}`)).slice(stryMutAct_9fa48("206") ? +2 : (stryCov_9fa48("206"), -2)));
    if (stryMutAct_9fa48("208") ? false : stryMutAct_9fa48("207") ? true : (stryCov_9fa48("207", "208"), isYear)) return stryMutAct_9fa48("209") ? `` : (stryCov_9fa48("209"), `${year}년 ${month}월 ${date}일`);
    return stryMutAct_9fa48("210") ? `` : (stryCov_9fa48("210"), `${month}월 ${date}일`);
  }
}

/**
 * Convert date to yyyy-mm-dd format string
 * @param date - Date formatted string or Date object
 * @returns yyyy-mm-dd formatted string
 */
export function formatDate(date: Date | string = new Date()): string {
  if (stryMutAct_9fa48("211")) {
    {}
  } else {
    stryCov_9fa48("211");
    const d = new Date(date as string);
    let month = stryMutAct_9fa48("212") ? `` : (stryCov_9fa48("212"), `${stryMutAct_9fa48("213") ? d.getMonth() - 1 : (stryCov_9fa48("213"), d.getMonth() + 1)}`);
    let day = stryMutAct_9fa48("214") ? `` : (stryCov_9fa48("214"), `${d.getDate()}`);
    const year = d.getFullYear();
    if (stryMutAct_9fa48("218") ? month.length >= 2 : stryMutAct_9fa48("217") ? month.length <= 2 : stryMutAct_9fa48("216") ? false : stryMutAct_9fa48("215") ? true : (stryCov_9fa48("215", "216", "217", "218"), month.length < 2)) month = (stryMutAct_9fa48("219") ? "" : (stryCov_9fa48("219"), '0')) + month;
    if (stryMutAct_9fa48("223") ? day.length >= 2 : stryMutAct_9fa48("222") ? day.length <= 2 : stryMutAct_9fa48("221") ? false : stryMutAct_9fa48("220") ? true : (stryCov_9fa48("220", "221", "222", "223"), day.length < 2)) day = (stryMutAct_9fa48("224") ? "" : (stryCov_9fa48("224"), '0')) + day;
    return (stryMutAct_9fa48("225") ? [] : (stryCov_9fa48("225"), [year, month, day])).join(stryMutAct_9fa48("226") ? "" : (stryCov_9fa48("226"), '-'));
  }
}

/**
 * Calculate d-day with target date
 * @param date - Target date
 * @returns d-day number (positive = future, negative = past)
 */
export function calDDay(date: Date | string = new Date()): number {
  if (stryMutAct_9fa48("227")) {
    {}
  } else {
    stryCov_9fa48("227");
    const countDownDate = new Date(date as string);
    const now = new Date().getTime();
    const distance = stryMutAct_9fa48("228") ? countDownDate.getTime() + now : (stryCov_9fa48("228"), countDownDate.getTime() - now);
    return Math.floor(stryMutAct_9fa48("229") ? distance * (1000 * 60 * 60 * 24) : (stryCov_9fa48("229"), distance / (stryMutAct_9fa48("230") ? 1000 * 60 * 60 / 24 : (stryCov_9fa48("230"), (stryMutAct_9fa48("231") ? 1000 * 60 / 60 : (stryCov_9fa48("231"), (stryMutAct_9fa48("232") ? 1000 / 60 : (stryCov_9fa48("232"), 1000 * 60)) * 60)) * 24))));
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
  if (stryMutAct_9fa48("233")) {
    {}
  } else {
    stryCov_9fa48("233");
    const d1 = new Date(date1).getTime();
    const d2 = new Date(date2).getTime();
    const diff = Math.abs(stryMutAct_9fa48("234") ? d2 + d1 : (stryCov_9fa48("234"), d2 - d1));
    const days = Math.floor(stryMutAct_9fa48("235") ? diff * (1000 * 60 * 60 * 24) : (stryCov_9fa48("235"), diff / (stryMutAct_9fa48("236") ? 1000 * 60 * 60 / 24 : (stryCov_9fa48("236"), (stryMutAct_9fa48("237") ? 1000 * 60 / 60 : (stryCov_9fa48("237"), (stryMutAct_9fa48("238") ? 1000 / 60 : (stryCov_9fa48("238"), 1000 * 60)) * 60)) * 24))));
    const hours = Math.floor(stryMutAct_9fa48("239") ? diff % (1000 * 60 * 60 * 24) * (1000 * 60 * 60) : (stryCov_9fa48("239"), (stryMutAct_9fa48("240") ? diff * (1000 * 60 * 60 * 24) : (stryCov_9fa48("240"), diff % (stryMutAct_9fa48("241") ? 1000 * 60 * 60 / 24 : (stryCov_9fa48("241"), (stryMutAct_9fa48("242") ? 1000 * 60 / 60 : (stryCov_9fa48("242"), (stryMutAct_9fa48("243") ? 1000 / 60 : (stryCov_9fa48("243"), 1000 * 60)) * 60)) * 24)))) / (stryMutAct_9fa48("244") ? 1000 * 60 / 60 : (stryCov_9fa48("244"), (stryMutAct_9fa48("245") ? 1000 / 60 : (stryCov_9fa48("245"), 1000 * 60)) * 60))));
    const minutes = Math.floor(stryMutAct_9fa48("246") ? diff % (1000 * 60 * 60) * (1000 * 60) : (stryCov_9fa48("246"), (stryMutAct_9fa48("247") ? diff * (1000 * 60 * 60) : (stryCov_9fa48("247"), diff % (stryMutAct_9fa48("248") ? 1000 * 60 / 60 : (stryCov_9fa48("248"), (stryMutAct_9fa48("249") ? 1000 / 60 : (stryCov_9fa48("249"), 1000 * 60)) * 60)))) / (stryMutAct_9fa48("250") ? 1000 / 60 : (stryCov_9fa48("250"), 1000 * 60))));
    const seconds = Math.floor(stryMutAct_9fa48("251") ? diff % (1000 * 60) * 1000 : (stryCov_9fa48("251"), (stryMutAct_9fa48("252") ? diff * (1000 * 60) : (stryCov_9fa48("252"), diff % (stryMutAct_9fa48("253") ? 1000 / 60 : (stryCov_9fa48("253"), 1000 * 60)))) / 1000));
    return stryMutAct_9fa48("254") ? {} : (stryCov_9fa48("254"), {
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
  if (stryMutAct_9fa48("255")) {
    {}
  } else {
    stryCov_9fa48("255");
    const d = new Date(date as string);
    const weekdays = stryMutAct_9fa48("256") ? [] : (stryCov_9fa48("256"), [stryMutAct_9fa48("257") ? "" : (stryCov_9fa48("257"), '일요일'), stryMutAct_9fa48("258") ? "" : (stryCov_9fa48("258"), '월요일'), stryMutAct_9fa48("259") ? "" : (stryCov_9fa48("259"), '화요일'), stryMutAct_9fa48("260") ? "" : (stryCov_9fa48("260"), '수요일'), stryMutAct_9fa48("261") ? "" : (stryCov_9fa48("261"), '목요일'), stryMutAct_9fa48("262") ? "" : (stryCov_9fa48("262"), '금요일'), stryMutAct_9fa48("263") ? "" : (stryCov_9fa48("263"), '토요일')]);
    const replacements: Record<string, string> = stryMutAct_9fa48("264") ? {} : (stryCov_9fa48("264"), {
      YYYY: d.getFullYear().toString(),
      MM: (stryMutAct_9fa48("265") ? d.getMonth() - 1 : (stryCov_9fa48("265"), d.getMonth() + 1)).toString().padStart(2, stryMutAct_9fa48("266") ? "" : (stryCov_9fa48("266"), '0')),
      DD: d.getDate().toString().padStart(2, stryMutAct_9fa48("267") ? "" : (stryCov_9fa48("267"), '0')),
      HH: d.getHours().toString().padStart(2, stryMutAct_9fa48("268") ? "" : (stryCov_9fa48("268"), '0')),
      mm: d.getMinutes().toString().padStart(2, stryMutAct_9fa48("269") ? "" : (stryCov_9fa48("269"), '0')),
      ss: d.getSeconds().toString().padStart(2, stryMutAct_9fa48("270") ? "" : (stryCov_9fa48("270"), '0')),
      dddd: weekdays[d.getDay()],
      ddd: stryMutAct_9fa48("271") ? weekdays[d.getDay()] : (stryCov_9fa48("271"), weekdays[d.getDay()].charAt(0))
    });
    let result = format;
    const tokens = stryMutAct_9fa48("272") ? [] : (stryCov_9fa48("272"), [stryMutAct_9fa48("273") ? "" : (stryCov_9fa48("273"), 'YYYY'), stryMutAct_9fa48("274") ? "" : (stryCov_9fa48("274"), 'dddd'), stryMutAct_9fa48("275") ? "" : (stryCov_9fa48("275"), 'ddd'), stryMutAct_9fa48("276") ? "" : (stryCov_9fa48("276"), 'MM'), stryMutAct_9fa48("277") ? "" : (stryCov_9fa48("277"), 'DD'), stryMutAct_9fa48("278") ? "" : (stryCov_9fa48("278"), 'HH'), stryMutAct_9fa48("279") ? "" : (stryCov_9fa48("279"), 'mm'), stryMutAct_9fa48("280") ? "" : (stryCov_9fa48("280"), 'ss')]);
    for (const token of tokens) {
      if (stryMutAct_9fa48("281")) {
        {}
      } else {
        stryCov_9fa48("281");
        result = result.replace(new RegExp(token, stryMutAct_9fa48("282") ? "" : (stryCov_9fa48("282"), 'g')), replacements[token]);
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
  if (stryMutAct_9fa48("283")) {
    {}
  } else {
    stryCov_9fa48("283");
    const now = Date.now();
    const past = new Date(date as string).getTime();
    const diff = stryMutAct_9fa48("284") ? now + past : (stryCov_9fa48("284"), now - past);
    const minute = stryMutAct_9fa48("285") ? 60 / 1000 : (stryCov_9fa48("285"), 60 * 1000);
    const hour = stryMutAct_9fa48("286") ? 60 / minute : (stryCov_9fa48("286"), 60 * minute);
    const day = stryMutAct_9fa48("287") ? 24 / hour : (stryCov_9fa48("287"), 24 * hour);
    const week = stryMutAct_9fa48("288") ? 7 / day : (stryCov_9fa48("288"), 7 * day);
    const month = stryMutAct_9fa48("289") ? 30 / day : (stryCov_9fa48("289"), 30 * day);
    const year = stryMutAct_9fa48("290") ? 365 / day : (stryCov_9fa48("290"), 365 * day);
    if (stryMutAct_9fa48("294") ? diff >= minute : stryMutAct_9fa48("293") ? diff <= minute : stryMutAct_9fa48("292") ? false : stryMutAct_9fa48("291") ? true : (stryCov_9fa48("291", "292", "293", "294"), diff < minute)) return stryMutAct_9fa48("295") ? "" : (stryCov_9fa48("295"), '방금 전');
    if (stryMutAct_9fa48("299") ? diff >= hour : stryMutAct_9fa48("298") ? diff <= hour : stryMutAct_9fa48("297") ? false : stryMutAct_9fa48("296") ? true : (stryCov_9fa48("296", "297", "298", "299"), diff < hour)) return stryMutAct_9fa48("300") ? `` : (stryCov_9fa48("300"), `${Math.floor(stryMutAct_9fa48("301") ? diff * minute : (stryCov_9fa48("301"), diff / minute))}분 전`);
    if (stryMutAct_9fa48("305") ? diff >= day : stryMutAct_9fa48("304") ? diff <= day : stryMutAct_9fa48("303") ? false : stryMutAct_9fa48("302") ? true : (stryCov_9fa48("302", "303", "304", "305"), diff < day)) return stryMutAct_9fa48("306") ? `` : (stryCov_9fa48("306"), `${Math.floor(stryMutAct_9fa48("307") ? diff * hour : (stryCov_9fa48("307"), diff / hour))}시간 전`);
    if (stryMutAct_9fa48("311") ? diff >= 2 * day : stryMutAct_9fa48("310") ? diff <= 2 * day : stryMutAct_9fa48("309") ? false : stryMutAct_9fa48("308") ? true : (stryCov_9fa48("308", "309", "310", "311"), diff < (stryMutAct_9fa48("312") ? 2 / day : (stryCov_9fa48("312"), 2 * day)))) return stryMutAct_9fa48("313") ? "" : (stryCov_9fa48("313"), '어제');
    if (stryMutAct_9fa48("317") ? diff >= week : stryMutAct_9fa48("316") ? diff <= week : stryMutAct_9fa48("315") ? false : stryMutAct_9fa48("314") ? true : (stryCov_9fa48("314", "315", "316", "317"), diff < week)) return stryMutAct_9fa48("318") ? `` : (stryCov_9fa48("318"), `${Math.floor(stryMutAct_9fa48("319") ? diff * day : (stryCov_9fa48("319"), diff / day))}일 전`);
    if (stryMutAct_9fa48("323") ? diff >= month : stryMutAct_9fa48("322") ? diff <= month : stryMutAct_9fa48("321") ? false : stryMutAct_9fa48("320") ? true : (stryCov_9fa48("320", "321", "322", "323"), diff < month)) return stryMutAct_9fa48("324") ? `` : (stryCov_9fa48("324"), `${Math.floor(stryMutAct_9fa48("325") ? diff * week : (stryCov_9fa48("325"), diff / week))}주 전`);
    if (stryMutAct_9fa48("329") ? diff >= year : stryMutAct_9fa48("328") ? diff <= year : stryMutAct_9fa48("327") ? false : stryMutAct_9fa48("326") ? true : (stryCov_9fa48("326", "327", "328", "329"), diff < year)) return stryMutAct_9fa48("330") ? `` : (stryCov_9fa48("330"), `${Math.floor(stryMutAct_9fa48("331") ? diff * month : (stryCov_9fa48("331"), diff / month))}개월 전`);
    return stryMutAct_9fa48("332") ? `` : (stryCov_9fa48("332"), `${Math.floor(stryMutAct_9fa48("333") ? diff * year : (stryCov_9fa48("333"), diff / year))}년 전`);
  }
}

/**
 * Get the number of days in a month
 * @param year - Year (e.g., 2025)
 * @param month - Month (1-12)
 * @returns Number of days in the month
 */
export function getDaysInMonth(year: number, month: number): number {
  if (stryMutAct_9fa48("334")) {
    {}
  } else {
    stryCov_9fa48("334");
    return new Date(year, month, 0).getDate();
  }
}

/**
 * Check if a year is a leap year
 * @param year - Year to check
 * @returns true if leap year, false otherwise
 */
export function isLeapYear(year: number): boolean {
  if (stryMutAct_9fa48("335")) {
    {}
  } else {
    stryCov_9fa48("335");
    return stryMutAct_9fa48("338") ? year % 4 === 0 && year % 100 !== 0 && year % 400 === 0 : stryMutAct_9fa48("337") ? false : stryMutAct_9fa48("336") ? true : (stryCov_9fa48("336", "337", "338"), (stryMutAct_9fa48("340") ? year % 4 === 0 || year % 100 !== 0 : stryMutAct_9fa48("339") ? false : (stryCov_9fa48("339", "340"), (stryMutAct_9fa48("342") ? year % 4 !== 0 : stryMutAct_9fa48("341") ? true : (stryCov_9fa48("341", "342"), (stryMutAct_9fa48("343") ? year * 4 : (stryCov_9fa48("343"), year % 4)) === 0)) && (stryMutAct_9fa48("345") ? year % 100 === 0 : stryMutAct_9fa48("344") ? true : (stryCov_9fa48("344", "345"), (stryMutAct_9fa48("346") ? year * 100 : (stryCov_9fa48("346"), year % 100)) !== 0)))) || (stryMutAct_9fa48("348") ? year % 400 !== 0 : stryMutAct_9fa48("347") ? false : (stryCov_9fa48("347", "348"), (stryMutAct_9fa48("349") ? year * 400 : (stryCov_9fa48("349"), year % 400)) === 0)));
  }
}

/**
 * Get a human-readable relative time string (alias for timeAgo, supports future dates)
 * @param date - Date object or date string
 * @returns Korean relative time string
 */
export function relative(date: Date | string): string {
  if (stryMutAct_9fa48("350")) {
    {}
  } else {
    stryCov_9fa48("350");
    return timeAgo(date);
  }
}

/**
 * Check if a date falls on a weekend (Saturday or Sunday)
 * @param date - Date to check (defaults to now)
 * @returns true if weekend, false otherwise
 */
export function isWeekend(date: Date | string = new Date()): boolean {
  if (stryMutAct_9fa48("351")) {
    {}
  } else {
    stryCov_9fa48("351");
    if (stryMutAct_9fa48("354") ? date != null : stryMutAct_9fa48("353") ? false : stryMutAct_9fa48("352") ? true : (stryCov_9fa48("352", "353", "354"), date == null)) return stryMutAct_9fa48("355") ? true : (stryCov_9fa48("355"), false);
    const d = new Date(date as string);
    if (stryMutAct_9fa48("357") ? false : stryMutAct_9fa48("356") ? true : (stryCov_9fa48("356", "357"), isNaN(d.getTime()))) return stryMutAct_9fa48("358") ? true : (stryCov_9fa48("358"), false);
    const day = d.getDay();
    return stryMutAct_9fa48("361") ? day === 0 && day === 6 : stryMutAct_9fa48("360") ? false : stryMutAct_9fa48("359") ? true : (stryCov_9fa48("359", "360", "361"), (stryMutAct_9fa48("363") ? day !== 0 : stryMutAct_9fa48("362") ? false : (stryCov_9fa48("362", "363"), day === 0)) || (stryMutAct_9fa48("365") ? day !== 6 : stryMutAct_9fa48("364") ? false : (stryCov_9fa48("364", "365"), day === 6)));
  }
}

/**
 * Add a number of days to a date
 * @param date - Base date
 * @param days - Number of days to add (negative to subtract)
 * @returns New date with days added
 */
export function addDays(date: Date | string, days: number): Date {
  if (stryMutAct_9fa48("366")) {
    {}
  } else {
    stryCov_9fa48("366");
    if (stryMutAct_9fa48("369") ? date == null && date === '' : stryMutAct_9fa48("368") ? false : stryMutAct_9fa48("367") ? true : (stryCov_9fa48("367", "368", "369"), (stryMutAct_9fa48("371") ? date != null : stryMutAct_9fa48("370") ? false : (stryCov_9fa48("370", "371"), date == null)) || (stryMutAct_9fa48("373") ? date !== '' : stryMutAct_9fa48("372") ? false : (stryCov_9fa48("372", "373"), date === (stryMutAct_9fa48("374") ? "Stryker was here!" : (stryCov_9fa48("374"), '')))))) return new Date(NaN);
    const d = new Date(date as string);
    if (stryMutAct_9fa48("376") ? false : stryMutAct_9fa48("375") ? true : (stryCov_9fa48("375", "376"), isNaN(d.getTime()))) return new Date(NaN);
    stryMutAct_9fa48("377") ? d.setTime(d.getDate() + days) : (stryCov_9fa48("377"), d.setDate(stryMutAct_9fa48("378") ? d.getDate() - days : (stryCov_9fa48("378"), d.getDate() + days)));
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
  if (stryMutAct_9fa48("379")) {
    {}
  } else {
    stryCov_9fa48("379");
    if (stryMutAct_9fa48("382") ? date1 == null && date1 === '' : stryMutAct_9fa48("381") ? false : stryMutAct_9fa48("380") ? true : (stryCov_9fa48("380", "381", "382"), (stryMutAct_9fa48("384") ? date1 != null : stryMutAct_9fa48("383") ? false : (stryCov_9fa48("383", "384"), date1 == null)) || (stryMutAct_9fa48("386") ? date1 !== '' : stryMutAct_9fa48("385") ? false : (stryCov_9fa48("385", "386"), date1 === (stryMutAct_9fa48("387") ? "Stryker was here!" : (stryCov_9fa48("387"), '')))))) return NaN;
    const d1 = new Date(date1 as string);
    const d2 = new Date(date2 as string);
    if (stryMutAct_9fa48("390") ? isNaN(d1.getTime()) && isNaN(d2.getTime()) : stryMutAct_9fa48("389") ? false : stryMutAct_9fa48("388") ? true : (stryCov_9fa48("388", "389", "390"), isNaN(d1.getTime()) || isNaN(d2.getTime()))) return NaN;
    const msPerDay = stryMutAct_9fa48("391") ? 1000 * 60 * 60 / 24 : (stryCov_9fa48("391"), (stryMutAct_9fa48("392") ? 1000 * 60 / 60 : (stryCov_9fa48("392"), (stryMutAct_9fa48("393") ? 1000 / 60 : (stryCov_9fa48("393"), 1000 * 60)) * 60)) * 24);
    return Math.abs(Math.floor(stryMutAct_9fa48("394") ? (d2.getTime() - d1.getTime()) * msPerDay : (stryCov_9fa48("394"), (stryMutAct_9fa48("395") ? d2.getTime() + d1.getTime() : (stryCov_9fa48("395"), d2.getTime() - d1.getTime())) / msPerDay)));
  }
}