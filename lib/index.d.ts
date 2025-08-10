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
};
export default util;
