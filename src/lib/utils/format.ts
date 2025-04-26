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