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