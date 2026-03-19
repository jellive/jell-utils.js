"use strict";
/**
 * Object utility functions
 * @module object
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.clone = clone;
exports.getByPath = getByPath;
exports.setByPath = setByPath;
exports.deepMerge = deepMerge;
exports.pick = pick;
exports.omit = omit;
exports.diff = diff;
exports.isEmpty = isEmpty;
/**
 * Return deep copied object by original object using structuredClone or JSON fallback
 * @param obj - Object to deep clone
 * @returns Deep cloned object
 */
function clone(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    if (typeof structuredClone !== 'undefined') {
        return structuredClone(obj);
    }
    try {
        return JSON.parse(JSON.stringify(obj));
    }
    catch (_a) {
        if (Array.isArray(obj)) {
            return obj.map((item) => typeof item === 'object' && item !== null ? clone(item) : item);
        }
        const copy = {};
        for (const key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                const value = obj[key];
                copy[key] =
                    typeof value === 'object' && value !== null
                        ? clone(value)
                        : value;
            }
        }
        return copy;
    }
}
/**
 * Get nested object value by path string
 * @param obj - Target object
 * @param path - Path string (e.g., 'user.profile.name')
 * @param defaultValue - Default value if path not found
 * @returns Value at path or default value
 */
function getByPath(obj, path, defaultValue) {
    const keys = path.split('.');
    let result = obj;
    for (const key of keys) {
        if (result === null || result === undefined) {
            return defaultValue;
        }
        result = result[key];
    }
    return result === undefined ? defaultValue : result;
}
/**
 * Set nested object value by path string
 * @param obj - Target object
 * @param path - Path string (e.g., 'user.profile.name')
 * @param value - Value to set
 */
function setByPath(obj, path, value) {
    const keys = path.split('.');
    const lastKey = keys.pop();
    if (!lastKey)
        return;
    let current = obj;
    for (const key of keys) {
        if (!(key in current) || typeof current[key] !== 'object') {
            current[key] = {};
        }
        current = current[key];
    }
    current[lastKey] = value;
}
/**
 * Deep merge two objects
 * @param target - Target object
 * @param source - Source object
 * @returns Merged object (new object, originals unchanged)
 */
function deepMerge(target, source) {
    const result = Object.assign({}, target);
    for (const key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
            const sourceValue = source[key];
            const targetValue = result[key];
            if (sourceValue &&
                typeof sourceValue === 'object' &&
                !Array.isArray(sourceValue) &&
                targetValue &&
                typeof targetValue === 'object' &&
                !Array.isArray(targetValue)) {
                result[key] = deepMerge(targetValue, sourceValue);
            }
            else {
                result[key] = sourceValue;
            }
        }
    }
    return result;
}
/**
 * Pick specified keys from an object
 * @param obj - Source object
 * @param keys - Keys to pick
 * @returns New object with only the picked keys
 */
function pick(obj, keys) {
    const result = {};
    for (const key of keys) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            result[key] = obj[key];
        }
    }
    return result;
}
/**
 * Omit specified keys from an object
 * @param obj - Source object
 * @param keys - Keys to omit
 * @returns New object without the omitted keys
 */
function omit(obj, keys) {
    const result = Object.assign({}, obj);
    for (const key of keys) {
        delete result[key];
    }
    return result;
}
/**
 * Get the diff between two objects (keys that differ, with new values)
 * @param base - Base object
 * @param compare - Object to compare against base
 * @returns Object containing keys that differ, with values from compare
 */
function diff(base, compare) {
    const result = {};
    const allKeys = new Set([...Object.keys(base), ...Object.keys(compare)]);
    for (const key of allKeys) {
        const baseVal = base[key];
        const compareVal = compare[key];
        if (JSON.stringify(baseVal) !== JSON.stringify(compareVal)) {
            result[key] = compareVal;
        }
    }
    return result;
}
/**
 * Check if an object (or array/string/null) is empty
 * @param value - Value to check
 * @returns true if empty, false otherwise
 */
function isEmpty(value) {
    if (value === null || value === undefined)
        return true;
    if (typeof value === 'string')
        return value.length === 0;
    if (Array.isArray(value))
        return value.length === 0;
    if (typeof value === 'object')
        return Object.keys(value).length === 0;
    return false;
}
