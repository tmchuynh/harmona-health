import { Resource, ResourceInformation } from "../interfaces&types/resources";
import { mentalHealthResources } from "../resources/resource";
import { resourceInformation } from "../resources/resourceInformation";

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
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

/**
 * Shuffles the elements of an array using the Fisher-Yates (Knuth) shuffle algorithm.
 * This function creates a copy of the original array, so the input array is not modified.
 *
 * @template T - The type of elements in the array
 * @param {T[]} array - The array to shuffle
 * @returns {T[]} A new array with the same elements in a random order
 *
 * @example
 * // Returns a shuffled copy of the array
 * const shuffled = shuffleArray([1, 2, 3, 4, 5]);
 */
export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]; // Create a copy of the array to avoid mutating the original
  for (let i = shuffled.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[i]]; // Swap elements
  }
  return shuffled;
}

/**
 * Shuffles the elements of an array in a simple random manner.
 *
 * @remarks
 * This function uses a simple but not statistically perfect shuffling algorithm
 * by using `Math.random() - 0.5` as a comparison function for sort.
 * For cryptographically secure shuffling, consider using a more robust algorithm.
 *
 * @param array - The array to shuffle
 * @returns A new array with the elements randomly shuffled
 * @typeParam T - The type of elements in the array
 *
 * @example
 * ```typescript
 * const numbers = [1, 2, 3, 4, 5];
 * const shuffled = simpleShuffleArray(numbers);
 * ```
 */
export function simpleShuffleArray<T>(array: T[]): T[] {
  return array.sort(() => Math.random() - 0.5);
}

/**
 * Retrieves resource information based on the provided resource ID.
 *
 * @param resourceId - The unique identifier of the resource to retrieve information for
 * @returns The resource information object corresponding to the ID, or null if not found
 */
export function getResourceInformationById(
  resourceId: string
): ResourceInformation {
  return resourceInformation[resourceId];
}

/**
 * Get resources by category ID.
 * @param categoryId - The ID of the category to filter by.
 * @returns An array of resources that belong to the specified category.
 */
export function getResourcesByCategoryId(categoryId: string): Resource[] {
  return mentalHealthResources.filter(
    (resource) => resource.category === categoryId
  );
}
