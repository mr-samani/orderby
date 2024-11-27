/**
 * Extension method to sort an array by a given key or a custom selector function.
 * @param array The array to sort.
 * @param selector The key or selector function to sort by.
 * @param ascending Whether to sort in ascending order. Default is true.
 * @returns A new array sorted by the given key/selector.
 */
export declare function orderBy<T>(
  array: T[],
  selector: keyof T | ((item: T) => any),
  ascending?: boolean
): T[];
