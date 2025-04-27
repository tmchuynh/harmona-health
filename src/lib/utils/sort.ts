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


/**
 * Sorts an array of strings alphabetically in ascending order.
 *
 * @param array - The array of strings to sort
 * @returns A new array sorted alphabetically
 *
 * @example
 * const names = ["Charlie", "Alice", "Bob"];
 * const sortedNames = sortAlphabetically(names);
 * // Output: ["Alice", "Bob", "Charlie"]
 */
export function sortAlphabetically(array: string[]): string[] {
  return [...array].sort((a, b) => a.localeCompare(b));
}

/**
 * Sorts an array of strings by the length of the strings in ascending order.
 *
 * @param array - The array of strings to sort
 * @returns A new array sorted by string length
 *
 * @example
 * const words = ["apple", "cat", "banana"];
 * const sortedWords = sortByLength(words);
 * // Output: ["cat", "apple", "banana"]
 */
export function sortByLength(array: string[]): string[] {
  return [...array].sort((a, b) => a.length - b.length);
}

/**
 * Sorts an array of objects by a specified property.
 *
 * @template T - The type of objects in the array
 * @param array - The array of objects to sort
 * @param property - The property to sort by
 * @param ascending - Whether to sort in ascending order (default: true)
 * @returns A new array sorted by the specified property
 *
 * @example
 * const users = [
 *   { name: "Alice", age: 25 },
 *   { name: "Bob", age: 30 },
 *   { name: "Charlie", age: 20 }
 * ];
 * const sortedByAge = sortByProperty(users, "age");
 * // Output: [{ name: "Charlie", age: 20 }, { name: "Alice", age: 25 }, { name: "Bob", age: 30 }]
 */
export function sortByProperty<T>(
  array: T[],
  property: keyof T,
  ascending: boolean = true
): T[] {
  return [...array].sort((a, b) => {
    if (a[property] < b[property]) {
      return ascending ? -1 : 1;
    }
    if (a[property] > b[property]) {
      return ascending ? 1 : -1;
    }
    return 0;
  });
}


/**
 * Groups an array of objects by a specified property and optionally sorts each group.
 *
 * @template T - The type of elements in the array
 * @param {T[]} array - The array to group and sort
 * @param {keyof T} groupByProperty - The property to group the array by
 * @param {keyof T} [sortByPropertyKey] - Optional property to sort each group by
 * @param {boolean} [ascending=true] - Whether to sort in ascending order (true) or descending order (false)
 * @param {boolean} [sortByLength=false] - Whether to sort by the length of the property value instead of the value itself
 * @param {boolean} [groupByLength=false] - Whether to group by the length of the property value instead of the value itself
 * @returns {T[]} A new array with elements grouped and sorted according to the specified parameters
 * 
 * @example
 * // Group users by department and sort by name
 * const sortedUsers = groupAndSortByProperties(users, 'department', 'name');
 *
 * @example
 * // Group posts by category and sort by date (most recent first)
 * const sortedPosts = groupAndSortByProperties(posts, 'category', 'date', false);
 * 
 * // Example 1: Group by "program" and sort by "name"
 * const groupedAndSortedByName = groupAndSortByProperties(
 *   successStories,
 *   "program",
 *   "name",
 *   true
 * );
 *
 * // Example 2: Group by "program" and sort by the length of "story"
 * const groupedAndSortedByStoryLength = groupAndSortByProperties(
 *   successStories,
 *   "program",
 *   "story",
 *   true,
 *   true // Enable sorting by length
 * );
 *
 * // Example 3: Group by the length of "program" and do not sort within groups
 * const groupedByProgramLength = groupAndSortByProperties(
 *   successStories,
 *   "program",
 *   undefined, // No sortByPropertyKey
 *   true,
 *   false, // Do not sort by length
 *   true // Enable grouping by length
 * );
 *
 *
 * @example
 * // Group messages by sender and sort by message length
 * const sortedMessages = groupAndSortByProperties(messages, 'sender', 'content', true, true);
 */
export function groupAndSortByProperties<T>(
  array: T[],
  groupByProperty: keyof T,
  sortByPropertyKey?: keyof T,
  ascending: boolean = true,
  sortByLength: boolean = false,
  groupByLength: boolean = false
): T[] {
  // Group the array by the specified property or by the length of the property
  const grouped = array.reduce((acc, item) => {
    const key = groupByLength
      ? (item[groupByProperty] as unknown as string)?.length || 0
      : item[groupByProperty] as string | number;

    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(item);
    return acc;
  }, {} as Record<string | number, T[]>);

  // Sort the group keys to ensure the groups are processed in the correct order
  const sortedKeys = Object.keys(grouped).sort((a, b) => {
    const numA = parseInt(a, 10);
    const numB = parseInt(b, 10);
    return groupByLength ? (ascending ? numA - numB : numB - numA) : a.localeCompare(b);
  });

  // Sort each group by the specified property or by the length of the property
  const sortedGroups = sortedKeys.map((key) => {
    if (sortByLength) {
      return [...grouped[key]].sort((a, b) => {
        const lengthA = (a[sortByPropertyKey!] as unknown as string)?.length || 0;
        const lengthB = (b[sortByPropertyKey!] as unknown as string)?.length || 0;
        return ascending ? lengthA - lengthB : lengthB - lengthA;
      });
    } else if (sortByPropertyKey) {
      return [...grouped[key]].sort((a, b) => {
        const valueA = a[sortByPropertyKey];
        const valueB = b[sortByPropertyKey];

        // Check if the property is a date in the format YYYY-MM-DD
        if (
          typeof valueA === "string" &&
          typeof valueB === "string" &&
          /^\d{4}-\d{2}-\d{2}$/.test(valueA) &&
          /^\d{4}-\d{2}-\d{2}$/.test(valueB)
        ) {
          const dateA = new Date(valueA);
          const dateB = new Date(valueB);
          return ascending
            ? dateA.getTime() - dateB.getTime()
            : dateB.getTime() - dateA.getTime();
        }

        // Default sorting for non-date properties
        if (valueA < valueB) {
          return ascending ? -1 : 1;
        }
        if (valueA > valueB) {
          return ascending ? 1 : -1;
        }
        return 0;
      });
    } else {
      return grouped[key]; // If no sortByPropertyKey is provided, return the group as is
    }
  });

  // Flatten the sorted groups back into a single array
  return sortedGroups.flat();
}



/**
 * Sorts an array of objects by the length of a specified property.
 *
 * @template T - The type of objects in the array
 * @param array - The array of objects to sort
 * @param property - The property whose length will be used for sorting
 * @param ascending - Whether to sort in ascending order (default: true)
 * @returns A new array sorted by the length of the specified property
 *
 * @example
 * const items = [
 *   { name: "Alice", description: "Short" },
 *   { name: "Bob", description: "A bit longer" },
 *   { name: "Charlie", description: "The longest description here" }
 * ];
 * const sortedByDescriptionLength = sortByPropertyLength(items, "description");
 * // Output: [
 * //   { name: "Alice", description: "Short" },
 * //   { name: "Bob", description: "A bit longer" },
 * //   { name: "Charlie", description: "The longest description here" }
 * // ]
 */
export function sortByPropertyLength<T>(
  array: T[],
  property: keyof T,
  ascending: boolean = true
): T[] {
  return [...array].sort((a, b) => {
    const lengthA = (a[property] as unknown as string)?.length || 0;
    const lengthB = (b[property] as unknown as string)?.length || 0;

    if (lengthA < lengthB) {
      return ascending ? -1 : 1;
    }
    if (lengthA > lengthB) {
      return ascending ? 1 : -1;
    }
    return 0;
  });
}

/**
 * Filters an array of objects based on a specified property and its value.
 *
 * @template T - The type of objects in the array
 * @param array - The array of objects to filter
 * @param property - The property to filter by
 * @param value - The value to match for the specified property
 * @returns A new array containing only the objects where the property matches the value
 *
 * @example
 * const items = [
 *   { name: "Alice", age: 25 },
 *   { name: "Bob", age: 30 },
 *   { name: "Charlie", age: 25 }
 * ];
 * const filtered = filterByProperty(items, "age", 25);
 * // Output: [{ name: "Alice", age: 25 }, { name: "Charlie", age: 25 }]
 */
export function filterByProperty<T>(
  array: T[],
  property: keyof T,
  value: T[keyof T]
): T[] {
  return array.filter((item) => item[property] === value);
}

/**
 * Filters an array of objects based on a specified property being less than or greater than a value.
 *
 * @template T - The type of objects in the array
 * @param array - The array of objects to filter
 * @param property - The property to filter by
 * @param value - The value to compare against
 * @param comparison - The comparison type: "lessThan" or "greaterThan"
 * @returns A new array containing only the objects that satisfy the comparison
 *
 * @example
 * const items = [
 *   { name: "Alice", age: 25 },
 *   { name: "Bob", age: 30 },
 *   { name: "Charlie", age: 20 }
 * ];
 * const filtered = filterByPropertyComparison(items, "age", 25, "greaterThan");
 * // Output: [{ name: "Bob", age: 30 }]
 */
export function filterByPropertyComparison<T>(
  array: T[],
  property: keyof T,
  value: number,
  comparison: "lessThan" | "greaterThan"
): T[] {
  return array.filter((item) => {
    const propertyValue = item[property] as unknown as number;
    if (comparison === "lessThan") {
      return propertyValue < value;
    } else if (comparison === "greaterThan") {
      return propertyValue > value;
    }
    return false;
  });
}
