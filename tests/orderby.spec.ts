import { orderBy } from '../src/order-by';

describe('orderBy function', () => {
  it('should sort an array of numbers in ascending order', () => {
    const numbers = [5, 3, 8, 1];
    const result = orderBy(numbers, (num) => num);
    expect(result).toEqual([1, 3, 5, 8]);
  });

  it('should sort an array of numbers in descending order', () => {
    const numbers = [5, 3, 8, 1];
    const result = orderBy(numbers, (num) => num, false);
    expect(result).toEqual([8, 5, 3, 1]);
  });

  it('should sort an array of objects by a key', () => {
    const users = [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Charlie' },
      { id: 3, name: 'Bob' },
    ];
    const result = orderBy(users, 'name');
    expect(result).toEqual([
      { id: 1, name: 'Alice' },
      { id: 3, name: 'Bob' },
      { id: 2, name: 'Charlie' },
    ]);
  });

  it('should handle an empty array', () => {
    const result = orderBy([], (item) => item);
    expect(result).toEqual([]);
  });

  it('should not mutate the original array', () => {
    const numbers = [5, 3, 8, 1];
    const result = orderBy(numbers, (num) => num);
    expect(numbers).toEqual([5, 3, 8, 1]);
    expect(result).not.toBe(numbers);
  });
});
