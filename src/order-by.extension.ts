/* eslint-disable  @typescript-eslint/no-explicit-any */
export {}; //for convert file to module ESM

declare global {
  interface Array<T> {
    orderBy(
      selector: (item: T) => any | ((item: T) => any)[],
      order?: 'ASC' | 'DESC'
    ): T[];
  }
}

Array.prototype.orderBy = function <T>(
  selector: ((item: T) => any) | ((item: T) => any)[],
  order: 'ASC' | 'DESC' = 'ASC'
) {
  //should not mutate the original array
  const copiedArray = [...this];
  const compare = (
    a: T,
    b: T,
    selector: (item: T) => any,
    order: 'ASC' | 'DESC'
  ) => {
    const aValue = selector(a);
    const bValue = selector(b);

    if (aValue > bValue) {
      return order === 'ASC' ? 1 : -1;
    } else if (aValue < bValue) {
      return order === 'ASC' ? -1 : 1;
    }
    return 0;
  };

  //check selector is array
  if (Array.isArray(selector)) {
    return copiedArray.sort((a: T, b: T) => {
      for (let i = 0; i < selector.length; i++) {
        const selectorFn = selector[i];
        const orderValue = Array.isArray(order) ? order[i] : 'ASC';
        const compareResult = compare(a, b, selectorFn, orderValue);
        if (compareResult !== 0) {
          return compareResult;
        }
      }
      return 0;
    });
  } else {
    // for single field
    return copiedArray.sort((a: T, b: T) => compare(a, b, selector, order));
  }
};
