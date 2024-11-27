
# orderby-ts

[![npm version](https://badge.fury.io/js/orderby-ts.svg)](https://badge.fury.io/js/orderby-ts)
[![Build Status](https://github.com/mr-samani/orderby-ts/workflows/Build/badge.svg)](https://github.com/mr-samani/orderby-ts/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

**orderby-ts** is a lightweight, type-safe utility for sorting arrays in TypeScript. It works with arrays of numbers, strings, or objects and is designed to be framework-agnostic, making it easy to use in any TypeScript or JavaScript project.

---

## 🚀 Features

- Sort arrays by keys or custom selector functions.
- Supports ascending and descending order.
- Framework-agnostic: works with Angular, React, Node.js, and plain TypeScript/JavaScript.
- Immutable: does not modify the original array.
- Fully type-safe and developer-friendly.

---

## 📦 Installation

You can install `orderby-ts` using npm or yarn:

```bash
npm install orderby-ts
```

Or with Yarn:

```bash
yarn add orderby-ts
```

---

## 🛠️ Usage

### Importing the Function
```typescript
import { orderby-ts } from 'orderby-ts';
```

### Sorting Arrays of Numbers
```typescript
const numbers = [5, 3, 8, 1];
const sortedNumbers = orderBy(numbers, (num) => num);
console.log(sortedNumbers); // Output: [1, 3, 5, 8]
```

### Sorting Arrays of Objects by Key
```typescript
const users = [
  { id: 1, name: 'Alice', age: 30 },
  { id: 2, name: 'Bob', age: 25 },
  { id: 3, name: 'Charlie', age: 35 },
];

const sortedByName = orderBy(users, 'name');
console.log(sortedByName);
// Output: [
//   { id: 1, name: 'Alice', age: 30 },
//   { id: 2, name: 'Bob', age: 25 },
//   { id: 3, name: 'Charlie', age: 35 }
// ];

const sortedByAgeDesc = orderBy(users, 'age', false);
console.log(sortedByAgeDesc);
// Output: [
//   { id: 3, name: 'Charlie', age: 35 },
//   { id: 1, name: 'Alice', age: 30 },
//   { id: 2, name: 'Bob', age: 25 }
// ];
```

### Sorting with a Custom Selector Function
```typescript
const sortedByNameLength = orderBy(users, (user) => user.name.length);
console.log(sortedByNameLength);
// Output: [
//   { id: 2, name: 'Bob', age: 25 },
//   { id: 1, name: 'Alice', age: 30 },
//   { id: 3, name: 'Charlie', age: 35 }
// ];
```

### Handling Empty Arrays
```typescript
const emptyArray = [];
const sorted = orderBy(emptyArray, (item) => item);
console.log(sorted); // Output: []
```

---

## 🔍 API

### `orderBy<T>(array: T[], selector: keyof T | (item: T) => any, ascending: boolean = true): T[]`

#### Parameters:
- **`array`**: The array to be sorted.
- **`selector`**: A key or a custom selector function to define the sorting logic.
- **`ascending`** (optional): Boolean indicating whether to sort in ascending order. Default is `true`.

#### Returns:
- A new, sorted array.

---

## 🧪 Tests

The project includes comprehensive tests written with Jest. To run the tests, clone the repository and run the following commands:

```bash
npm install
npm test
```

---

## 💻 Development

### Requirements
- Node.js (>= 14)
- TypeScript (>= 4.0)

### Building the Project
```bash
npm run build
```

### Linting and Formatting
This project uses **ESLint** and **Prettier** for linting and code formatting:

```bash
npm run lint     # Check for linting issues
npm run lint:fix # Automatically fix linting issues
npm run format   # Format the code with Prettier
```

---

## 🤝 Contributing

Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/my-feature`).
3. Commit your changes (`git commit -am 'Add my feature'`).
4. Push to the branch (`git push origin feature/my-feature`).
5. Open a Pull Request.

Please make sure your code follows the existing style and passes all tests.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🌟 Support

If you like this project, give it a star ⭐ on GitHub!

---

## 🔗 Links

- [GitHub Repository](https://github.com/mr-samani/orderby-ts)
- [npm Package](https://www.npmjs.com/package/orderby-ts)
```
