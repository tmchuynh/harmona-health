import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
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
 * Dynamically imports and returns a specific tool resource from a toolkit.
 * 
 * @param toolKit - The name of the toolkit containing the desired tool resource
 * @param toolKitID - The identifier of the specific tool resource to load
 * @returns A Promise that resolves to the requested tool resource, or null if loading fails
 * 
 * @example
 * // Load a specific meditation exercise from the meditation toolkit
 * const meditationExercise = await getToolResource('meditation', 'deepBreathing');
 * 
 * @throws Will not throw errors directly, but logs errors to the console
 */
export async function getToolResource(toolKit: string, tool: string, toolKitID: string) {
  try {
    const toolModule = await import(`@/lib/resources/toolkits/tools/${toolKit}/${tool}`);
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