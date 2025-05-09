import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Returns a random index from the given array.
 *
 * @template T - The type of elements in the array
 * @param {T[]} array - The array to get a random index from
 * @returns {number} A random index within the bounds of the array
 *
 * @example
 * const numbers = [10, 20, 30, 40];
 * const randomIndex = getRandomIndex(numbers);
 */
export function getRandomIndex<T>(array: T[]): number {
  if (array.length === 0) {
    throw new Error("Array cannot be empty");
  }
  return Math.floor(Math.random() * array.length);
}

/**
 * Asynchronously loads and retrieves a specific resource from a toolkit module.
 *
 * @param {string} toolKit - The name of the toolkit directory to search in.
 * @param {string} tool - The name of the tool file within the toolkit directory.
 * @param {string} toolKitID - The specific named export to retrieve from the module.
 * @returns {Promise<any>} The requested resource if found, or an empty array if the resource cannot be loaded.
 *
 * @example
 * // Returns the 'anxietyTools' export from the specified module
 * const resource = await getToolResource('mental', 'anxiety', 'anxietyTools');
 *
 * @throws {Error} Logs an error if the module cannot be imported or if the specified export doesn't exist.
 */
export async function getToolResource(
  toolKit: string,
  tool: string,
  toolKitID: string
): Promise<any> {
  try {
    const toolModule = await import(
      `@/lib/resources/toolkits/tools/${toolKit}/${tool}`
    );
    // Return the specific named export that matches toolKitID
    if (toolModule[toolKitID]) {
      return toolModule[toolKitID];
    } else {
      console.error(`Export named ${toolKitID} not found in module`);
      return [];
    }
  } catch (error) {
    console.error(`Error loading resource: ${error}`);
    return [];
  }
}


export async function getArticleInformation(
  article: string,
  articleID: string
): Promise<any> {
  try {
    const articleModule = await import(`@/lib/resources/articles/${article}`);
    // Return the specific named export that matches articleID
    if (articleModule[articleID]) {
      return articleModule[articleID];
    } else {
      console.error(`Export named ${articleID} not found in module`);
      return [];
    }
  } catch (error) {
    console.error(`Error loading resource: ${error}`);
    return [];
  }
}