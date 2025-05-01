/**
 * Clips a string to a specified maximum length.
 *
 * @param {string} text - The string to be clipped
 * @param {number} maxLength - The maximum length allowed for the string
 * @returns {string} The original string if its length is less than or equal to maxLength,
 *                   otherwise the string truncated to maxLength characters
 */
export function clipString(text: string, maxLength: number): string {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength);
}

/**
 * Compares the word count of a string against a maximum threshold.
 *
 * @param text - The string to check word count for
 * @param maxWords - The maximum number of words allowed
 * @returns `true` if the text contains fewer or equal words than the maximum, `false` otherwise
 * @throws {Error} When maxWords is negative
 *
 * @example
 * ```typescript
 * 
 * compareStringWordCount("This is a simple example", 5);
 *
 * 
 * compareStringWordCount("This is a simple example", 4);
 * ```
 */
export function compareStringWordCount(
  text: string,
  maxWords: number
): boolean {
  if (maxWords < 0) {
    throw new Error("Maximum words must be a non-negative number.");
  }

  const words = text.trim().split(/\s+/);
  return words.length <= maxWords;
}

/**
 * Converts a verb to its "-ing" form following English spelling rules.
 *
 * @param verb - The base verb to convert
 * @returns The verb with "-ing" suffix correctly applied
 * 
 * Rules handled:
 * - Words ending in "ie": change to "y" + "ing" (lie → lying)
 * - Words ending in "e": typically drop "e" + add "ing" (write → writing)
 *   - Exception: Words ending in "ee", "ye", or "oe" keep the "e" (see → seeing)
 * - Words ending in single consonant after short vowel: double final consonant (run → running)
 * - Words ending in "c": add "k" before "ing" in some cases (panic → panicking)
 * - All other cases: simply add "ing"
 * 
 * @example
 * convertToIngForm("write");   // returns "writing"
 * convertToIngForm("run");     // returns "running"
 * convertToIngForm("lie");     // returns "lying"
 * convertToIngForm("see");     // returns "seeing"
 * convertToIngForm("panic");   // returns "panicking"
 * convertToIngForm("play");    // returns "playing"
 */
export function convertToIngForm(verb: string): string {
  if (!verb || typeof verb !== 'string') {
    return '';
  }

  verb = verb.trim().toLowerCase();
  
  // Rule: Words ending in "ie" change to "y" + "ing"
  if (verb.endsWith('ie')) {
    return verb.slice(0, -2) + 'ying';
  }
  
  // Rule: Words ending in "e"
  if (verb.endsWith('e')) {
    // Exception: Words ending in "ee", "ye", "oe" keep the "e"
    if (verb.endsWith('ee') || verb.endsWith('ye') || verb.endsWith('oe')) {
      return verb + 'ing';
    }
    // Standard case: Drop the "e" and add "ing"
    return verb.slice(0, -1) + 'ing';
  }
  
  // Rule: Words ending in "c" in some cases add "k"
  if (verb.endsWith('c')) {
    return verb + 'king';
  }
  
  // Rule: Words ending with a single consonant after a short vowel
  const length = verb.length;
  if (length >= 2) {
    const lastChar = verb[length - 1];
    const secondLastChar = verb[length - 2];
    
    // Check if the last character is a consonant (not a, e, i, o, u, y, w)
    const isLastCharConsonant = !/[aeiouyfw]/i.test(lastChar);
    
    // Check if the second-last character is a vowel
    const isSecondLastVowel = /[aeiou]/i.test(secondLastChar);
    
    // Do not double final consonants w, x, or y
    if (isLastCharConsonant && isSecondLastVowel && !/[wxy]/i.test(lastChar)) {
      // Simple way to detect short words or words with stress on final syllable
      // This is an approximation as determining stress programmatically is complex
      if (length <= 3 || (length === 4 && !isSecondLastVowel)) {
        return verb + lastChar + 'ing';
      }
    }
  }
  
  // Default case: just add "ing"
  return verb + 'ing';
}

/**
 * Removes the specified number of words from the end of the input string.
 * 
 * @param str - The input string from which to remove words
 * @param wordCount - The number of words to remove from the end (defaults to 1)
 * @returns The input string with the specified number of words removed, 
 *          or an empty string if there are not enough words in the input
 * 
 * @example
 * ```ts
 * sliceOffLastWord("Hello world"); // returns "Hello"
 * sliceOffLastWord("Hello beautiful world", 2); // returns "Hello"
 * sliceOffLastWord("Hello world", 3); // returns "" (not enough words)
 * sliceOffLastWord("SingleWord"); // returns ""
 * ```
 */
export function sliceOffLastWord(str: string, wordCount: number = 1): string {
  if (!str || wordCount <= 0) {
    return str;
  }

  const words = str.trim().split(/\s+/);

  // If trying to remove more words than exist, return empty string
  if (wordCount >= words.length) {
    return "";
  }

  // Return all words except the last 'wordCount' words
  return words.slice(0, words.length - wordCount).join(" ");
}
}

/**
 * Formats a number as a currency string.
 *
 * @param value - The numeric value to format.
 * @returns A string representing the formatted currency value.
 *          If the input is not a number, it returns "$0.00".
 */
export const formatCurrency = (value: number) => {
  if (isNaN(value)) return "$0.00";

  return "$" + value.toLocaleString(undefined);
};

export const capitalize = (str: string) => {
  return str.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
};

/**
 * Cleans a text string by removing specific formatting.
 * 
 * @param input - The string to be cleaned
 * @returns The cleaned string with all {} markup removed and whitespace collapsed
 * 
 * @example
 * // Returns "Hello World"
 * cleanText("Hello {bold}World{/bold}  ");
 */
export function cleanText(input: string): string {
  return input
    .replace(/\{.*?\}/g, "") // remove all {} markup
    .replace(/\s+/g, " ") // collapse whitespace
    .trim();
}

/**
 * Formats a date string into the format YYYY-MM-DD.
 *
 * @param date - The date to format, either as a Date object or a string.
 * @returns The formatted date string in the format YYYY-MM-DD.
 *
 * @example
 * const formattedDate = formatDate("Sun Apr 27 2025 14:52:59 GMT-0700 (Pacific Daylight Time)");
 * // Output: "2025-04-27"
 */
export function formatDate(date: string | Date): string {
  const parsedDate = new Date(date);
  const year = parsedDate.getFullYear();
  const month = String(parsedDate.getMonth() + 1).padStart(2, "0"); // Months are 0-based
  const day = String(parsedDate.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export const formatItemName = (itemName: string) => {
  
  const exceptions = [
    "and",
    "or",
    "a",
    "an",
    "as",
    "at",
    "but",
    "by",
    "for",
    "in",
    "nor",
    "of",
    "on",
    "the",
    "up",
  ];

  return itemName
    .split("_")
    .map((word, index) => {
      if (index === 0 || !exceptions.includes(word.toLowerCase())) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }

      return word.toLowerCase();
    })
    .join(" "); 
};

/**
 * Transforms a URL or URL-like string into a camelCase identifier.
 * 
 * The function performs the following transformations:
 * 1. Replaces all hyphens with spaces
 * 2. Capitalizes the first letter of each word (title case)
 * 3. Converts to camelCase by:
 *    - Making the first character lowercase
 *    - Removing all spaces
 *
 * @param {string} url - The URL or hyphenated string to transform
 * @returns {string} A camelCase identifier derived from the input URL
 * 
 * @example
 * // Returns "userProfile"
 * formatUrlToID("user-profile")
 * 
 * @example
 * // Returns "contactUsForm"
 * formatUrlToID("contact-us-form")
 */
export const formatUrlToID = (url: string): string => {
  const string = url
    .replaceAll(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
  return string.charAt(0).toLowerCase() + string.slice(1).replace(/\s+/g, "");
};

/**
 * Formats a given text into a URL-friendly string.
 *
 * The function performs the following transformations:
 * - Converts the text to lowercase
 * - Replaces spaces with hyphens
 * - Removes all non-word characters (anything not a letter, number, underscore, or hyphen)
 * - Replaces multiple consecutive hyphens with a single hyphen
 * - Removes hyphens from the beginning and end of the string
 *
 * @param {string} text - The input text to be formatted
 * @returns {string} A URL-friendly version of the input text
 * 
 * @example
 * // returns "hello-world"
 * formatToURL("Hello World!");
 * 
 * @example
 * // returns "my-page-title"
 * formatToURL("  My Page Title!  ");
 */
export const formatToURL = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/[^\w-]+/g, "") // Remove all non-word chars
    .replace(/--+/g, "-") // Replace multiple hyphens with a single one
    .replace(/^-+|-+$/g, ""); // Trim hyphens from start and end
};

/**
 * Converts a camelCase string into a kebab-case string.
 *
 * @param input - The camelCase string to convert
 * @returns The converted kebab-case string
 *
 * @example
 * const result = toKebabCase("checklistsAndPlannersTools");
 * // Output: "checklists-and-planners-tools"
 */
export function toKebabCase(input: string): string {
  return input
    .replace(/([a-z])([A-Z])/g, "$1-$2") // Insert a hyphen between lowercase and uppercase letters
    .toLowerCase(); // Convert the entire string to lowercase
}