declare const util: {
    /**
     * @description return message is korean
     * @param message target string.
     * @returns boolean
     */
    isKorean: (message: string) => boolean;
    /**
     * @description return deep copied object by original object.
     * @todo need change Record<string, unknown> to Object(Typescript warning)
     * @param obj Record<string, unknown>
     * @returns Record<string, unknown>
     */
    clone: (obj: Record<string, unknown>) => Record<string, unknown>;
    /**
     * @description encode uri parsing (like &lt; => <, &gt; => >)
     * @param txt Original string
     * @returns tag parsed string
     */
    parseTag: (txt: string) => string;
    /**
     * @description parseNumber with defaultvalue
     * @param target original string
     * @param defaultValue return default value
     * @returns parsed number value.
     */
    parseNumber: (target: string, defaultValue: number, isFloat?: boolean) => number;
    /**
     *
     * @param target required format such as '00:11:22' / '11:22'
     * @param defaultValue
     * @returns
     */
    parseTime: (target: string, defaultValue: number) => number;
    /**
     * @description generate string from now time with datetime format.
     * @returns string now datetime format
     */
    getNowDate: () => string;
    /**
     * @description generate string from inputed time with korean date format.
     * @returns string korean date format
     */
    getKoreanDate: (dateString?: Date, isYear?: boolean) => string;
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
     * @description make camel cased word.
     * @param txt
     * @returns
     */
    toCamelCase: (txt: string) => string;
    /**
     * @description make snake cased word.
     * @param txt
     * @returns
     */
    toSnakeCase: (txt: string) => string;
    /**
     * @description make title case string(first character capital and word space)
     * @param txt
     * @returns
     */
    toTitleCase: (txt: string) => string;
    /**
     * @description br tag to line break.
     * @param txt
     * @returns
     */
    toText: (txt: string) => string;
    /**
     * @description line break to br tag.
     * @param txt
     * @returns
     */
    toHtml: (txt: string) => string;
    /**
     * @description remove tag brace text.
     * @param txt string
     * @param isError (beta) check 'suggestCheck' tag.
     * @returns
     */
    clearTag: (txt: string, isError?: boolean) => string;
    /**
     * @description check same between two array.
     * @param a array
     * @param b array
     * @returns
     */
    equalArrays: (a: unknown[], b: unknown[]) => boolean;
};
export default util;
