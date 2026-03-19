/**
 * Validation utility functions
 * @module validation
 */
// @ts-nocheck


/**
 * Validate email address
 * @param email - Email address to validate
 * @returns true if valid email, false otherwise
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
export function isEmail(email: string): boolean {
  if (stryMutAct_9fa48("1166")) {
    {}
  } else {
    stryCov_9fa48("1166");
    if (stryMutAct_9fa48("1169") ? email != null : stryMutAct_9fa48("1168") ? false : stryMutAct_9fa48("1167") ? true : (stryCov_9fa48("1167", "1168", "1169"), email == null)) return stryMutAct_9fa48("1170") ? true : (stryCov_9fa48("1170"), false);
    const emailRegex = stryMutAct_9fa48("1185") ? /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[^a-zA-Z0-9])?)*$/ : stryMutAct_9fa48("1184") ? /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[^a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/ : stryMutAct_9fa48("1183") ? /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-][a-zA-Z0-9])?)*$/ : stryMutAct_9fa48("1182") ? /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9]))*$/ : stryMutAct_9fa48("1181") ? /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[^a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/ : stryMutAct_9fa48("1180") ? /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)$/ : stryMutAct_9fa48("1179") ? /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[^a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/ : stryMutAct_9fa48("1178") ? /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[^a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/ : stryMutAct_9fa48("1177") ? /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-][a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/ : stryMutAct_9fa48("1176") ? /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/ : stryMutAct_9fa48("1175") ? /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[^a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/ : stryMutAct_9fa48("1174") ? /^[^a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/ : stryMutAct_9fa48("1173") ? /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/ : stryMutAct_9fa48("1172") ? /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*/ : stryMutAct_9fa48("1171") ? /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/ : (stryCov_9fa48("1171", "1172", "1173", "1174", "1175", "1176", "1177", "1178", "1179", "1180", "1181", "1182", "1183", "1184", "1185"), /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/);
    return emailRegex.test(email);
  }
}

/**
 * Validate Korean phone number
 * @param phone - Phone number to validate
 * @returns true if valid Korean phone number, false otherwise
 */
export function isPhone(phone: string): boolean {
  if (stryMutAct_9fa48("1186")) {
    {}
  } else {
    stryCov_9fa48("1186");
    if (stryMutAct_9fa48("1189") ? phone != null : stryMutAct_9fa48("1188") ? false : stryMutAct_9fa48("1187") ? true : (stryCov_9fa48("1187", "1188", "1189"), phone == null)) return stryMutAct_9fa48("1190") ? true : (stryCov_9fa48("1190"), false);
    const mobileRegex = stryMutAct_9fa48("1199") ? /^01[016789]-?\d{3,4}-?\D{4}$/ : stryMutAct_9fa48("1198") ? /^01[016789]-?\d{3,4}-?\d$/ : stryMutAct_9fa48("1197") ? /^01[016789]-?\d{3,4}-\d{4}$/ : stryMutAct_9fa48("1196") ? /^01[016789]-?\D{3,4}-?\d{4}$/ : stryMutAct_9fa48("1195") ? /^01[016789]-?\d-?\d{4}$/ : stryMutAct_9fa48("1194") ? /^01[016789]-\d{3,4}-?\d{4}$/ : stryMutAct_9fa48("1193") ? /^01[^016789]-?\d{3,4}-?\d{4}$/ : stryMutAct_9fa48("1192") ? /^01[016789]-?\d{3,4}-?\d{4}/ : stryMutAct_9fa48("1191") ? /01[016789]-?\d{3,4}-?\d{4}$/ : (stryCov_9fa48("1191", "1192", "1193", "1194", "1195", "1196", "1197", "1198", "1199"), /^01[016789]-?\d{3,4}-?\d{4}$/);
    const landlineRegex = stryMutAct_9fa48("1210") ? /^0[2-6][1-5]?-?\d{3,4}-?\D{4}$/ : stryMutAct_9fa48("1209") ? /^0[2-6][1-5]?-?\d{3,4}-?\d$/ : stryMutAct_9fa48("1208") ? /^0[2-6][1-5]?-?\d{3,4}-\d{4}$/ : stryMutAct_9fa48("1207") ? /^0[2-6][1-5]?-?\D{3,4}-?\d{4}$/ : stryMutAct_9fa48("1206") ? /^0[2-6][1-5]?-?\d-?\d{4}$/ : stryMutAct_9fa48("1205") ? /^0[2-6][1-5]?-\d{3,4}-?\d{4}$/ : stryMutAct_9fa48("1204") ? /^0[2-6][^1-5]?-?\d{3,4}-?\d{4}$/ : stryMutAct_9fa48("1203") ? /^0[2-6][1-5]-?\d{3,4}-?\d{4}$/ : stryMutAct_9fa48("1202") ? /^0[^2-6][1-5]?-?\d{3,4}-?\d{4}$/ : stryMutAct_9fa48("1201") ? /^0[2-6][1-5]?-?\d{3,4}-?\d{4}/ : stryMutAct_9fa48("1200") ? /0[2-6][1-5]?-?\d{3,4}-?\d{4}$/ : (stryCov_9fa48("1200", "1201", "1202", "1203", "1204", "1205", "1206", "1207", "1208", "1209", "1210"), /^0[2-6][1-5]?-?\d{3,4}-?\d{4}$/);
    return stryMutAct_9fa48("1213") ? mobileRegex.test(phone) && landlineRegex.test(phone) : stryMutAct_9fa48("1212") ? false : stryMutAct_9fa48("1211") ? true : (stryCov_9fa48("1211", "1212", "1213"), mobileRegex.test(phone) || landlineRegex.test(phone));
  }
}

/**
 * Validate Korean phone number (alias for isPhone)
 * @param phone - Phone number to validate
 * @returns true if valid Korean phone number, false otherwise
 */
export function isPhoneNumber(phone: string): boolean {
  if (stryMutAct_9fa48("1214")) {
    {}
  } else {
    stryCov_9fa48("1214");
    return isPhone(phone);
  }
}

/**
 * Validate URL
 * @param url - URL to validate
 * @returns true if valid URL, false otherwise
 */
export function isUrl(url: string): boolean {
  if (stryMutAct_9fa48("1215")) {
    {}
  } else {
    stryCov_9fa48("1215");
    if (stryMutAct_9fa48("1218") ? url != null : stryMutAct_9fa48("1217") ? false : stryMutAct_9fa48("1216") ? true : (stryCov_9fa48("1216", "1217", "1218"), url == null)) return stryMutAct_9fa48("1219") ? true : (stryCov_9fa48("1219"), false);
    try {
      if (stryMutAct_9fa48("1220")) {
        {}
      } else {
        stryCov_9fa48("1220");
        const parsed = new URL(url);
        return (stryMutAct_9fa48("1221") ? [] : (stryCov_9fa48("1221"), [stryMutAct_9fa48("1222") ? "" : (stryCov_9fa48("1222"), 'http:'), stryMutAct_9fa48("1223") ? "" : (stryCov_9fa48("1223"), 'https:'), stryMutAct_9fa48("1224") ? "" : (stryCov_9fa48("1224"), 'ftp:')])).includes(parsed.protocol);
      }
    } catch {
      if (stryMutAct_9fa48("1225")) {
        {}
      } else {
        stryCov_9fa48("1225");
        return stryMutAct_9fa48("1226") ? true : (stryCov_9fa48("1226"), false);
      }
    }
  }
}

/**
 * Validate UUID (v1-v5)
 * @param uuid - UUID string to validate
 * @returns true if valid UUID, false otherwise
 */
export function isUUID(uuid: string): boolean {
  if (stryMutAct_9fa48("1227")) {
    {}
  } else {
    stryCov_9fa48("1227");
    if (stryMutAct_9fa48("1230") ? uuid != null : stryMutAct_9fa48("1229") ? false : stryMutAct_9fa48("1228") ? true : (stryCov_9fa48("1228", "1229", "1230"), uuid == null)) return stryMutAct_9fa48("1231") ? true : (stryCov_9fa48("1231"), false);
    const uuidRegex = stryMutAct_9fa48("1245") ? /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[^0-9a-f]{12}$/i : stryMutAct_9fa48("1244") ? /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]$/i : stryMutAct_9fa48("1243") ? /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][^0-9a-f]{3}-[0-9a-f]{12}$/i : stryMutAct_9fa48("1242") ? /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]-[0-9a-f]{12}$/i : stryMutAct_9fa48("1241") ? /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[^89ab][0-9a-f]{3}-[0-9a-f]{12}$/i : stryMutAct_9fa48("1240") ? /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][^0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i : stryMutAct_9fa48("1239") ? /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i : stryMutAct_9fa48("1238") ? /^[0-9a-f]{8}-[0-9a-f]{4}-[^1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i : stryMutAct_9fa48("1237") ? /^[0-9a-f]{8}-[^0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i : stryMutAct_9fa48("1236") ? /^[0-9a-f]{8}-[0-9a-f]-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i : stryMutAct_9fa48("1235") ? /^[^0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i : stryMutAct_9fa48("1234") ? /^[0-9a-f]-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i : stryMutAct_9fa48("1233") ? /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}/i : stryMutAct_9fa48("1232") ? /[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i : (stryCov_9fa48("1232", "1233", "1234", "1235", "1236", "1237", "1238", "1239", "1240", "1241", "1242", "1243", "1244", "1245"), /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i);
    return uuidRegex.test(uuid);
  }
}

/**
 * Validate Korean business registration number (사업자등록번호)
 * @param businessNumber - Business registration number string (10 digits)
 * @returns true if valid, false otherwise
 */
export function isBusinessNumber(businessNumber: string): boolean {
  if (stryMutAct_9fa48("1246")) {
    {}
  } else {
    stryCov_9fa48("1246");
    const cleaned = businessNumber.replace(stryMutAct_9fa48("1247") ? /[0-9]/g : (stryCov_9fa48("1247"), /[^0-9]/g), stryMutAct_9fa48("1248") ? "Stryker was here!" : (stryCov_9fa48("1248"), ''));
    if (stryMutAct_9fa48("1251") ? cleaned.length === 10 : stryMutAct_9fa48("1250") ? false : stryMutAct_9fa48("1249") ? true : (stryCov_9fa48("1249", "1250", "1251"), cleaned.length !== 10)) return stryMutAct_9fa48("1252") ? true : (stryCov_9fa48("1252"), false);
    const digits = cleaned.split(stryMutAct_9fa48("1253") ? "Stryker was here!" : (stryCov_9fa48("1253"), '')).map(Number);
    const checksum = stryMutAct_9fa48("1254") ? [] : (stryCov_9fa48("1254"), [1, 3, 7, 1, 3, 7, 1, 3, 5]);
    let sum = 0;
    for (let i = 0; stryMutAct_9fa48("1257") ? i >= 9 : stryMutAct_9fa48("1256") ? i <= 9 : stryMutAct_9fa48("1255") ? false : (stryCov_9fa48("1255", "1256", "1257"), i < 9); stryMutAct_9fa48("1258") ? i-- : (stryCov_9fa48("1258"), i++)) {
      if (stryMutAct_9fa48("1259")) {
        {}
      } else {
        stryCov_9fa48("1259");
        stryMutAct_9fa48("1260") ? sum -= digits[i] * checksum[i] : (stryCov_9fa48("1260"), sum += stryMutAct_9fa48("1261") ? digits[i] / checksum[i] : (stryCov_9fa48("1261"), digits[i] * checksum[i]));
      }
    }
    stryMutAct_9fa48("1262") ? sum -= Math.floor(digits[8] * 5 / 10) : (stryCov_9fa48("1262"), sum += Math.floor(stryMutAct_9fa48("1263") ? digits[8] * 5 * 10 : (stryCov_9fa48("1263"), (stryMutAct_9fa48("1264") ? digits[8] / 5 : (stryCov_9fa48("1264"), digits[8] * 5)) / 10)));
    const result = stryMutAct_9fa48("1265") ? (10 - sum % 10) * 10 : (stryCov_9fa48("1265"), (stryMutAct_9fa48("1266") ? 10 + sum % 10 : (stryCov_9fa48("1266"), 10 - (stryMutAct_9fa48("1267") ? sum * 10 : (stryCov_9fa48("1267"), sum % 10)))) % 10);
    return stryMutAct_9fa48("1270") ? result !== digits[9] : stryMutAct_9fa48("1269") ? false : stryMutAct_9fa48("1268") ? true : (stryCov_9fa48("1268", "1269", "1270"), result === digits[9]);
  }
}

/**
 * Format Korean phone number with hyphens
 * @param phone - Phone number to format
 * @returns Formatted phone number
 */
export function formatPhoneNumber(phone: string): string {
  if (stryMutAct_9fa48("1271")) {
    {}
  } else {
    stryCov_9fa48("1271");
    const digits = phone.replace(stryMutAct_9fa48("1272") ? /[0-9]/g : (stryCov_9fa48("1272"), /[^0-9]/g), stryMutAct_9fa48("1273") ? "Stryker was here!" : (stryCov_9fa48("1273"), ''));
    if (stryMutAct_9fa48("1276") ? digits.endsWith('02') : stryMutAct_9fa48("1275") ? false : stryMutAct_9fa48("1274") ? true : (stryCov_9fa48("1274", "1275", "1276"), digits.startsWith(stryMutAct_9fa48("1277") ? "" : (stryCov_9fa48("1277"), '02')))) {
      if (stryMutAct_9fa48("1278")) {
        {}
      } else {
        stryCov_9fa48("1278");
        if (stryMutAct_9fa48("1281") ? digits.length !== 10 : stryMutAct_9fa48("1280") ? false : stryMutAct_9fa48("1279") ? true : (stryCov_9fa48("1279", "1280", "1281"), digits.length === 10)) {
          if (stryMutAct_9fa48("1282")) {
            {}
          } else {
            stryCov_9fa48("1282");
            return stryMutAct_9fa48("1283") ? `` : (stryCov_9fa48("1283"), `${stryMutAct_9fa48("1284") ? digits : (stryCov_9fa48("1284"), digits.slice(0, 2))}-${stryMutAct_9fa48("1285") ? digits : (stryCov_9fa48("1285"), digits.slice(2, 6))}-${stryMutAct_9fa48("1286") ? digits : (stryCov_9fa48("1286"), digits.slice(6))}`);
          }
        } else if (stryMutAct_9fa48("1289") ? digits.length !== 9 : stryMutAct_9fa48("1288") ? false : stryMutAct_9fa48("1287") ? true : (stryCov_9fa48("1287", "1288", "1289"), digits.length === 9)) {
          if (stryMutAct_9fa48("1290")) {
            {}
          } else {
            stryCov_9fa48("1290");
            return stryMutAct_9fa48("1291") ? `` : (stryCov_9fa48("1291"), `${stryMutAct_9fa48("1292") ? digits : (stryCov_9fa48("1292"), digits.slice(0, 2))}-${stryMutAct_9fa48("1293") ? digits : (stryCov_9fa48("1293"), digits.slice(2, 5))}-${stryMutAct_9fa48("1294") ? digits : (stryCov_9fa48("1294"), digits.slice(5))}`);
          }
        }
      }
    } else if (stryMutAct_9fa48("1297") ? digits.endsWith('01') : stryMutAct_9fa48("1296") ? false : stryMutAct_9fa48("1295") ? true : (stryCov_9fa48("1295", "1296", "1297"), digits.startsWith(stryMutAct_9fa48("1298") ? "" : (stryCov_9fa48("1298"), '01')))) {
      if (stryMutAct_9fa48("1299")) {
        {}
      } else {
        stryCov_9fa48("1299");
        if (stryMutAct_9fa48("1302") ? digits.length !== 11 : stryMutAct_9fa48("1301") ? false : stryMutAct_9fa48("1300") ? true : (stryCov_9fa48("1300", "1301", "1302"), digits.length === 11)) {
          if (stryMutAct_9fa48("1303")) {
            {}
          } else {
            stryCov_9fa48("1303");
            return stryMutAct_9fa48("1304") ? `` : (stryCov_9fa48("1304"), `${stryMutAct_9fa48("1305") ? digits : (stryCov_9fa48("1305"), digits.slice(0, 3))}-${stryMutAct_9fa48("1306") ? digits : (stryCov_9fa48("1306"), digits.slice(3, 7))}-${stryMutAct_9fa48("1307") ? digits : (stryCov_9fa48("1307"), digits.slice(7))}`);
          }
        } else if (stryMutAct_9fa48("1310") ? digits.length !== 10 : stryMutAct_9fa48("1309") ? false : stryMutAct_9fa48("1308") ? true : (stryCov_9fa48("1308", "1309", "1310"), digits.length === 10)) {
          if (stryMutAct_9fa48("1311")) {
            {}
          } else {
            stryCov_9fa48("1311");
            return stryMutAct_9fa48("1312") ? `` : (stryCov_9fa48("1312"), `${stryMutAct_9fa48("1313") ? digits : (stryCov_9fa48("1313"), digits.slice(0, 3))}-${stryMutAct_9fa48("1314") ? digits : (stryCov_9fa48("1314"), digits.slice(3, 6))}-${stryMutAct_9fa48("1315") ? digits : (stryCov_9fa48("1315"), digits.slice(6))}`);
          }
        }
      }
    } else if (stryMutAct_9fa48("1317") ? false : stryMutAct_9fa48("1316") ? true : (stryCov_9fa48("1316", "1317"), (stryMutAct_9fa48("1319") ? /^0[^3-6]/ : stryMutAct_9fa48("1318") ? /0[3-6]/ : (stryCov_9fa48("1318", "1319"), /^0[3-6]/)).test(digits))) {
      if (stryMutAct_9fa48("1320")) {
        {}
      } else {
        stryCov_9fa48("1320");
        if (stryMutAct_9fa48("1323") ? digits.length !== 11 : stryMutAct_9fa48("1322") ? false : stryMutAct_9fa48("1321") ? true : (stryCov_9fa48("1321", "1322", "1323"), digits.length === 11)) {
          if (stryMutAct_9fa48("1324")) {
            {}
          } else {
            stryCov_9fa48("1324");
            return stryMutAct_9fa48("1325") ? `` : (stryCov_9fa48("1325"), `${stryMutAct_9fa48("1326") ? digits : (stryCov_9fa48("1326"), digits.slice(0, 3))}-${stryMutAct_9fa48("1327") ? digits : (stryCov_9fa48("1327"), digits.slice(3, 7))}-${stryMutAct_9fa48("1328") ? digits : (stryCov_9fa48("1328"), digits.slice(7))}`);
          }
        } else if (stryMutAct_9fa48("1331") ? digits.length !== 10 : stryMutAct_9fa48("1330") ? false : stryMutAct_9fa48("1329") ? true : (stryCov_9fa48("1329", "1330", "1331"), digits.length === 10)) {
          if (stryMutAct_9fa48("1332")) {
            {}
          } else {
            stryCov_9fa48("1332");
            return stryMutAct_9fa48("1333") ? `` : (stryCov_9fa48("1333"), `${stryMutAct_9fa48("1334") ? digits : (stryCov_9fa48("1334"), digits.slice(0, 3))}-${stryMutAct_9fa48("1335") ? digits : (stryCov_9fa48("1335"), digits.slice(3, 6))}-${stryMutAct_9fa48("1336") ? digits : (stryCov_9fa48("1336"), digits.slice(6))}`);
          }
        }
      }
    }
    return phone;
  }
}

/**
 * Format Korean business registration number
 * @param brn - Business registration number
 * @returns Formatted business number (XXX-XX-XXXXX)
 */
export function formatBusinessNumber(brn: string): string {
  if (stryMutAct_9fa48("1337")) {
    {}
  } else {
    stryCov_9fa48("1337");
    const digits = brn.replace(stryMutAct_9fa48("1338") ? /[0-9]/g : (stryCov_9fa48("1338"), /[^0-9]/g), stryMutAct_9fa48("1339") ? "Stryker was here!" : (stryCov_9fa48("1339"), ''));
    if (stryMutAct_9fa48("1342") ? digits.length === 10 : stryMutAct_9fa48("1341") ? false : stryMutAct_9fa48("1340") ? true : (stryCov_9fa48("1340", "1341", "1342"), digits.length !== 10)) {
      if (stryMutAct_9fa48("1343")) {
        {}
      } else {
        stryCov_9fa48("1343");
        return brn;
      }
    }
    return stryMutAct_9fa48("1344") ? `` : (stryCov_9fa48("1344"), `${stryMutAct_9fa48("1345") ? digits : (stryCov_9fa48("1345"), digits.slice(0, 3))}-${stryMutAct_9fa48("1346") ? digits : (stryCov_9fa48("1346"), digits.slice(3, 5))}-${stryMutAct_9fa48("1347") ? digits : (stryCov_9fa48("1347"), digits.slice(5))}`);
  }
}