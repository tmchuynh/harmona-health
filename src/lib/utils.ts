import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

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
 * console.log(randomIndex); // e.g., 2
 */
export function getRandomIndex<T>(array: T[]): number {
  if (array.length === 0) {
    throw new Error("Array cannot be empty");
  }
  return Math.floor(Math.random() * array.length);
}