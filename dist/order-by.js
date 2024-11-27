"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderBy = orderBy;
/**
 * Extension method to sort an array by a given key or a custom selector function.
 * @param array The array to sort.
 * @param selector The key or selector function to sort by.
 * @param ascending Whether to sort in ascending order. Default is true.
 * @returns A new array sorted by the given key/selector.
 */
function orderBy(array, selector, ascending = true) {
    return [...array].sort((a, b) => {
        const aValue = typeof selector === 'function' ? selector(a) : a[selector];
        const bValue = typeof selector === 'function' ? selector(b) : b[selector];
        if (aValue < bValue)
            return ascending ? -1 : 1;
        if (aValue > bValue)
            return ascending ? 1 : -1;
        return 0;
    });
}
