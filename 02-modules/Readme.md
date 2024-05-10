# Module

- A module is a reusable piece of code that encapsulates related functionality. Modules help organize code into logical units, making it easier to manage and maintain large applications.
- Modules are a fundamental concept for organizing code, and the CommonJS module system is used. Each file in a Node.js application is treated as a module, and you can use the require function to import functionality from other modules.

# require(), module, export

1. require():

- require is a function used to import functionality from other modules.
- It takes a module identifier (usually a path to a module file) as an argument and returns the exports object of that module.
- Example: const square = require('./square');

2. module:

- module is an object representing the current module.
- It contains metadata about the module and its exports.
- Developers use module.exports to expose functionality from the current module to other modules.
- Example: module.exports = square;

3. export:

- export is a keyword used to export functionality from a module.
- It allows you to specify what functionality should be available to other modules when they import your module.
- There are two main syntaxes for exporting:
  - Default export: export default square;
  - Named export: export function square(x) { return x \* x; }
- Example of using named export: import { square } from './square.js';
