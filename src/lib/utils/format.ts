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
 * // Returns true as the string has 5 words
 * compareStringWordCount("This is a simple example", 5);
 *
 * // Returns false as the string has 5 words
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
 * Formats a given date string into the format 'YYYY-MM-DD'.
 *
 * @param dateString - The date string to format.
 * @returns The formatted date string in 'YYYY-MM-DD' format.
 * @throws Will throw an error if the provided date string is invalid.
 */
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  if (isNaN(date.getTime())) {
    throw new Error(`Invalid date string: ${dateString}`);
  }
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");

  return `${year}-${month}-${day}`;
};

/**
 * Converts a given title string into a URL-friendly slug.
 *
 * The function performs the following transformations:
 * - Converts the string to lowercase.
 * - Removes all non-alphanumeric characters except spaces and hyphens.
 * - Replaces spaces and consecutive hyphens with a single hyphen.
 *
 * @param title - The title string to be converted into a slug.
 * @returns The URL-friendly slug.
 */
export function setSlug(title: string): string {
  const slug = title
    .toLowerCase()
    .replace(/[^a-zA-Z0-9\s-]/g, "")
    .replace(/[\s-]+/g, "-");
  return slug;
}
