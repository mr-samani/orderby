export {}; // برای تبدیل فایل به ماژول ESM

declare global {
  interface Array<T> {
    orderBy(selector: (item: T) => any | ((item: T) => any)[], order?: 'ASC' | 'DESC'): T[];
  }
}

Array.prototype.orderBy = function <T>(
  selector: ((item: T) => any) | ((item: T) => any)[],
  order: 'ASC' | 'DESC' = 'ASC'
) {
  const compare = (a: T, b: T, selector: (item: T) => any, order: 'ASC' | 'DESC') => {
    const aValue = selector(a);
    const bValue = selector(b);

    if (aValue > bValue) {
      return order === 'ASC' ? 1 : -1;
    } else if (aValue < bValue) {
      return order === 'ASC' ? -1 : 1;
    }
    return 0;
  };

  // بررسی اینکه آیا selector یک آرایه است یا نه
  if (Array.isArray(selector)) {
    return this.sort((a: T, b: T) => {
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
    // حالت تک‌فیلدی
    return this.sort((a: T, b: T) => compare(a, b, selector, order));
  }
};
