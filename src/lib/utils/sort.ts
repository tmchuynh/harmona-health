/**
 * Filters an array to return only items where the 'featured' property is truthy.
 *
 * Note: This function uses `array.filter`, which creates a new array.
 * For very large input arrays, this could have performance implications.
 * Ensure the input array size is reasonable to avoid potential performance issues.
 *
 * @param array - The array to filter
 * @returns A new array containing only the items where the 'featured' property is truthy
 */
export function featuredArray(array: any[]) {
  return array.filter((item) => item?.featured === true);
}


/**
 * Generates a random string of specified length.
 * 
 * @param length - The length of the random string to generate.
 * @returns A random string consisting of alphanumeric characters.
 * 
 * @example
 * // Generate a random string of 10 characters
 * const randomStr = generateRandomString(10);
 * // Output example: "a7bZ9pQ3xY"
 */
export function generateRandomString(length: number): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}