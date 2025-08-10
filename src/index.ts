const util = {
  /**
   * @description return message is korean
   * @param message target string.
   * @returns boolean
   */
  isKorean: (message: string): boolean => {
    const regex = /[ㄱ-ㅎㅏ-ㅣ가-힣]/gi;
    return regex.test(message);
  },

  /**
   * @description return deep copied object by original object using structuredClone or JSON fallback.
   * @param obj object to deep clone
   * @returns deep cloned object
   */
  clone: <T>(obj: T): T => {
    if (obj === null || typeof obj !== "object") {
      return obj;
    }

    // Use structuredClone if available (modern browsers/Node.js 17+)
    if (typeof structuredClone !== "undefined") {
      return structuredClone(obj);
    }

    // Fallback to JSON method (handles most common cases)
    try {
      return JSON.parse(JSON.stringify(obj)) as T;
    } catch {
      // Final fallback for non-serializable objects
      if (Array.isArray(obj)) {
        return obj.map((item: unknown) =>
          typeof item === "object" && item !== null ? util.clone(item) : item,
        ) as T;
      }

      const copy = {} as T;
      for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          const value = obj[key];
          copy[key] =
            typeof value === "object" && value !== null
              ? util.clone(value)
              : value;
        }
      }
      return copy;
    }
  },
  /**
   * @description encode uri parsing (like &lt; => <, &gt; => >)
   * @param txt Original string
   * @returns tag parsed string
   */
  parseTag: (txt: string): string => {
    return txt.replace(/&lt;/gi, "<").replace(/&gt;/gi, ">");
  },
  /**
   * @description parseNumber with defaultvalue and proper validation
   * @param target original string to parse
   * @param defaultValue return default value if parsing fails
   * @param isFloat whether to parse as float or integer
   * @returns parsed number value or default value
   */
  parseNumber: (
    target: string,
    defaultValue: number,
    isFloat = false,
  ): number => {
    if (!target || typeof target !== "string" || target.trim() === "") {
      return defaultValue;
    }

    const parsed = isFloat ? parseFloat(target) : parseInt(target, 10);
    return isNaN(parsed) ? defaultValue : parsed;
  },
  /**
   * @description parse time string to milliseconds
   * @param target required format such as '00:11:22' (HH:MM:SS) or '11:22' (MM:SS)
   * @param defaultValue default value if parsing fails
   * @returns parsed milliseconds or default value
   */
  parseTime: (target: string, defaultValue: number): number => {
    if (!target || typeof target !== "string" || target.trim() === "") {
      return defaultValue;
    }

    if (target.indexOf(":") === -1) {
      const parsed = parseInt(target, 10);
      return isNaN(parsed) ? defaultValue : parsed;
    }

    const timeValues = target.split(":").map((value) => {
      const parsed = parseInt(value.trim(), 10);
      return isNaN(parsed) ? 0 : parsed;
    });

    if (timeValues.length < 2 || timeValues.length > 3) {
      return defaultValue;
    }

    const [first, second, third = 0] = timeValues;

    if (timeValues.length === 3) {
      // HH:MM:SS format - treat third value as milliseconds
      return first * 60 * 1000 + second * 1000 + third;
    } else {
      // MM:SS format
      return first * 60 * 1000 + second * 1000;
    }
  },
  /**
   * @description generate string from now time with datetime format.
   * @returns string now datetime format
   */
  getNowDate: (): string => {
    const date = new Date();
    let dateString = new Date(
      date.getTime() - date.getTimezoneOffset() * 60000,
    ).toISOString();
    dateString = dateString.replace("T", " ").split(".")[0];

    return dateString;
  },
  /**
   * @description generate string from inputed time with korean date format.
   * @param dateString date input (Date object or string)
   * @param isYear whether to include year in output
   * @returns string korean date format
   */
  getKoreanDate: (
    dateString: Date | string = new Date(),
    isYear = false,
  ): string => {
    const targetDate = new Date(dateString as string);
    const year = targetDate.getFullYear();
    const month = `0${targetDate.getMonth() + 1}`.slice(-2);
    const date = `0${targetDate.getDate()}`.slice(-2);

    if (isYear) return `${year}년 ${month}월 ${date}일`;
    return `${month}월 ${date}일`;
  },
  /**
   * @description convert date to yyyy-mm-dd format string.
   * @param date date formatted string.
   * @returns yyyy-mm-dd formatted string.
   */
  formatDate: (date: Date | string = new Date()): string => {
    const d = new Date(date as string);
    let month = `${d.getMonth() + 1}`;
    let day = `${d.getDate()}`;
    const year = d.getFullYear();
    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  },
  /**
   * @description calculate d-day with target date.
   * @param date target date
   * @returns d-day
   */
  calDDay: (date: Date | string = new Date()): number => {
    const countDownDate = new Date(date as string);
    const now = new Date().getTime();
    const distance = countDownDate.getTime() - now;

    const countDown = Math.floor(distance / (1000 * 60 * 60 * 24));
    return countDown;
  },
  /**
   * @description replace word in str with index.
   * @param str original string
   * @param txt replace word
   * @param startIndex slice first index
   * @param endIndex slice last index
   * @returns
   */
  replaceBetween: (
    str: string,
    txt: string,
    startIndex: number,
    endIndex: number,
  ): string => {
    const newStr = `${str.substring(0, startIndex)}${txt}${str.substring(
      endIndex,
    )}`;
    return newStr;
  },
  /**
   * @description convert string to camelCase format
   * @param txt input string to convert (supports snake_case and space-separated)
   * @returns camelCase formatted string
   */
  toCamelCase: (txt: string): string => {
    txt = typeof txt !== "string" ? "" : txt;
    const txtArr = txt.split(/_| /g).map((word, index) => {
      let firstvarter;
      if (index == 0) {
        firstvarter = word.charAt(0).toLowerCase();
      } else {
        firstvarter = word.charAt(0).toUpperCase();
      }

      word = firstvarter.concat(word.substr(1));
      return word;
    });
    return txtArr.join("");
  },
  /**
   * @description convert string to snake_case format
   * @param txt input string to convert
   * @returns snake_case formatted string
   */
  toSnakeCase: (txt: string): string => {
    txt = typeof txt !== "string" ? "" : txt;
    txt = txt.toLowerCase().replace(/ /g, "_");
    return txt;
  },
  /**
   * @description make title case string (first character capital and word space)
   * @param txt input string to convert
   * @returns title case string with proper spacing
   */
  toTitleCase: (txt: string): string => {
    if (typeof txt !== "string") return "";

    // Convert snake_case to spaces and handle camelCase
    const result = txt
      .replace(/_/g, " ") // Replace underscores with spaces
      .replace(/([a-z])([A-Z])/g, "$1 $2") // Add space before capital letters in camelCase
      .split(/\s+/) // Split by any whitespace
      .filter((word) => word.length > 0) // Remove empty strings
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");

    return result;
  },
  /**
   * @description convert HTML br tags to line breaks
   * @param txt input string with br tags
   * @returns string with br tags converted to newlines
   */
  toText: (txt: string): string => {
    return txt.replace(/<br>/gi, "\n");
  },
  /**
   * @description convert line breaks to HTML br tags
   * @param txt input string with newlines
   * @returns string with newlines converted to br tags
   */
  toHtml: (txt: string): string => {
    return txt.replace(/\n/gi, "<br>");
  },
  /**
   * @description safely remove HTML tags from text, preventing XSS attacks
   * @param txt input string with HTML tags
   * @param preserveErrorTags whether to preserve elements with 'suggestCheck' class
   * @returns sanitized text with specified tags removed
   */
  clearTag: (txt: string, preserveErrorTags = false): string => {
    if (typeof txt !== "string") return "";

    // Create a temporary DOM element for safe parsing
    const tempDiv = document.createElement("div");

    // Set textContent first to avoid XSS, then replace with innerHTML for parsing
    tempDiv.textContent = "";
    try {
      tempDiv.innerHTML = txt;
    } catch {
      // If innerHTML parsing fails, return original text stripped of all tags
      return txt.replace(/<[^>]*>/g, "");
    }

    const tagsToRemove = ["div", "font", "span"];

    // Remove specified tags while preserving content
    tagsToRemove.forEach((tagName) => {
      const elements = tempDiv.querySelectorAll(tagName);

      for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        const hasErrorClass = element.className.indexOf("suggestCheck") !== -1;

        // Skip if we want to preserve error tags and this element has the error class
        if (preserveErrorTags && hasErrorClass) {
          continue;
        }

        // Replace element with its content
        const parent = element.parentNode;
        if (parent) {
          // Create text node from inner content to prevent XSS
          const textContent = element.textContent || "";
          const textNode = document.createTextNode(textContent);
          parent.replaceChild(textNode, element);
        }
      }
    });

    // Convert <br> tags to newlines and get text content
    const result = tempDiv.innerHTML.replace(/<br\s*\/?>/gi, "\n");

    // Final sanitization: remove any remaining script tags and dangerous content
    return result.replace(
      /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
      "",
    );
  },
  /**
   * @description check if two arrays are equal (shallow comparison)
   * @param a first array to compare
   * @param b second array to compare
   * @returns true if arrays are equal, false otherwise
   */
  equalArrays: (a: unknown[], b: unknown[]): boolean => {
    if (a === b) return true;
    if (!a || !b) return false;
    if (a.length != b.length) return false;

    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  },

  /**
   * @description check iOS device client with user agent.
   * @returns true if client is iOS device, false otherwise
   */
  isiOS: (): boolean => {
    return /iPhone|iPad|iPod/i.test(navigator.userAgent);
  },
};
export default util;
