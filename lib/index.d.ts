declare const util: {
    /**
     * @description return message is korean
     * @param message target string.
     * @returns boolean
     */
    isKorean: (message: string) => boolean;
    /**
     * @description return deep copied object by original object using structuredClone or JSON fallback.
     * @param obj object to deep clone
     * @returns deep cloned object
     */
    clone: <T>(obj: T) => T;
    /**
     * @description encode uri parsing (like &lt; => <, &gt; => >)
     * @param txt Original string
     * @returns tag parsed string
     */
    parseTag: (txt: string) => string;
    /**
     * @description parseNumber with defaultvalue and proper validation
     * @param target original string to parse
     * @param defaultValue return default value if parsing fails
     * @param isFloat whether to parse as float or integer
     * @returns parsed number value or default value
     */
    parseNumber: (target: string, defaultValue: number, isFloat?: boolean) => number;
    /**
     * @description parse time string to milliseconds
     * @param target required format such as '00:11:22' (HH:MM:SS) or '11:22' (MM:SS)
     * @param defaultValue default value if parsing fails
     * @returns parsed milliseconds or default value
     */
    parseTime: (target: string, defaultValue: number) => number;
    /**
     * @description generate string from now time with datetime format.
     * @returns string now datetime format
     */
    getNowDate: () => string;
    /**
     * @description generate string from inputed time with korean date format.
     * @param dateString date input (Date object or string)
     * @param isYear whether to include year in output
     * @returns string korean date format
     */
    getKoreanDate: (dateString?: Date | string, isYear?: boolean) => string;
    /**
     * @description convert date to yyyy-mm-dd format string.
     * @param date date formatted string.
     * @returns yyyy-mm-dd formatted string.
     */
    formatDate: (date?: Date | string) => string;
    /**
     * @description calculate d-day with target date.
     * @param date target date
     * @returns d-day
     */
    calDDay: (date?: Date | string) => number;
    /**
     * @description replace word in str with index.
     * @param str original string
     * @param txt replace word
     * @param startIndex slice first index
     * @param endIndex slice last index
     * @returns
     */
    replaceBetween: (str: string, txt: string, startIndex: number, endIndex: number) => string;
    /**
     * @description convert string to camelCase format
     * @param txt input string to convert (supports snake_case and space-separated)
     * @returns camelCase formatted string
     */
    toCamelCase: (txt: string) => string;
    /**
     * @description convert string to snake_case format
     * @param txt input string to convert
     * @returns snake_case formatted string
     */
    toSnakeCase: (txt: string) => string;
    /**
     * @description make title case string (first character capital and word space)
     * @param txt input string to convert
     * @returns title case string with proper spacing
     */
    toTitleCase: (txt: string) => string;
    /**
     * @description convert HTML br tags to line breaks
     * @param txt input string with br tags
     * @returns string with br tags converted to newlines
     */
    toText: (txt: string) => string;
    /**
     * @description convert line breaks to HTML br tags
     * @param txt input string with newlines
     * @returns string with newlines converted to br tags
     */
    toHtml: (txt: string) => string;
    /**
     * @description safely remove HTML tags from text, preventing XSS attacks
     * @param txt input string with HTML tags
     * @param preserveErrorTags whether to preserve elements with 'suggestCheck' class
     * @returns sanitized text with specified tags removed
     */
    clearTag: (txt: string, preserveErrorTags?: boolean) => string;
    /**
     * @description check if two arrays are equal (shallow comparison)
     * @param a first array to compare
     * @param b second array to compare
     * @returns true if arrays are equal, false otherwise
     */
    equalArrays: (a: unknown[], b: unknown[]) => boolean;
    /**
     * @description check iOS device client with user agent.
     * @returns true if client is iOS device, false otherwise
     */
    isiOS: () => boolean;
    /**
     * @description validate Korean business registration number (사업자등록번호)
     * @param businessNumber business registration number string (10 digits)
     * @returns true if valid, false otherwise
     */
    isBusinessNumber: (businessNumber: string) => boolean;
    /**
     * @description get nested object value by path string
     * @param obj target object
     * @param path path string (e.g., 'user.profile.name')
     * @param defaultValue default value if path not found
     * @returns value at path or default value
     */
    getByPath: <T = any>(obj: any, path: string, defaultValue?: T) => T;
    /**
     * @description set nested object value by path string
     * @param obj target object
     * @param path path string (e.g., 'user.profile.name')
     * @param value value to set
     */
    setByPath: (obj: any, path: string, value: any) => void;
    /**
     * @description group array of objects by key
     * @param array array to group
     * @param key key to group by
     * @returns grouped object
     */
    groupBy: <T extends Record<string, any>>(array: T[], key: keyof T) => Record<string, T[]>;
    /**
     * @description extract only numbers from string
     * @param str input string
     * @returns string containing only numbers
     */
    extractNumbers: (str: string) => string;
    /**
     * @description get file extension from filename or path
     * @param filename filename or path
     * @returns file extension without dot (e.g., 'jpg', 'pdf')
     */
    getFileExtension: (filename: string) => string;
    /**
     * @description calculate difference between two dates
     * @param date1 first date
     * @param date2 second date
     * @returns object with days, hours, minutes, seconds difference
     */
    dateDiff: (date1: Date | string, date2?: Date | string) => {
        days: number;
        hours: number;
        minutes: number;
        seconds: number;
    };
    /**
     * @description deep merge two objects
     * @param target target object
     * @param source source object
     * @returns merged object
     */
    deepMerge: <T extends Record<string, any>>(target: T, source: Partial<T>) => T;
    /**
     * @description retry async function with exponential backoff
     * @param fn async function to retry
     * @param maxRetries maximum number of retries
     * @param delay initial delay in milliseconds
     * @returns promise with function result
     */
    retry: <T>(fn: () => Promise<T>, maxRetries?: number, delay?: number) => Promise<T>;
    /**
     * @description search Korean string by chosung (초성)
     * @param str target string to search in
     * @param search chosung search string
     * @returns true if chosung matches
     */
    chosungSearch: (str: string, search: string) => boolean;
    /**
     * @description sort array of objects by key
     * @param array array to sort
     * @param key key to sort by
     * @param order sort order ('asc' or 'desc')
     * @returns sorted array
     */
    sortBy: <T extends Record<string, any>>(array: T[], key: keyof T, order?: "asc" | "desc") => T[];
    /**
     * @description convert object to URL query string
     * @param obj object to convert
     * @returns query string (e.g., 'key1=value1&key2=value2')
     */
    objectToQueryString: (obj: Record<string, any>) => string;
    /**
     * @description mask sensitive string (e.g., credit card, phone)
     * @param str string to mask
     * @param visibleStart number of visible characters at start
     * @param visibleEnd number of visible characters at end
     * @param maskChar character to use for masking
     * @returns masked string
     */
    maskString: (str: string, visibleStart?: number, visibleEnd?: number, maskChar?: string) => string;
};
export default util;
