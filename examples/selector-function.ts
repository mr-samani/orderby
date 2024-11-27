import { orderBy } from '../src/order-by';
const users = [
  { id: 1, name: 'Alice', age: 30 },
  { id: 2, name: 'Bob', age: 25 },
  { id: 3, name: 'Charlie', age: 35 },
];
const sortedByNameLength = orderBy(users, (user) => user.name.length);
console.log(sortedByNameLength);
