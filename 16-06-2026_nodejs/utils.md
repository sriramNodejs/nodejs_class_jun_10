<!-- Navigation -->

<p align="right">
  <a href="../12-stream-module/README.md">⬅️ Previous</a> |
  <a href="../14-dns-module/README.md">Next ➡️</a>
</p>

# Node.js Util Module

## Overview

The Util Module is a built-in Node.js core module that provides utility functions for debugging, formatting, object inspection, inheritance, promisification, and other helper operations.

The util module helps developers write cleaner and more maintainable code by providing reusable utility methods.

Examples:

- Debugging Objects
- Converting Callbacks to Promises
- String Formatting
- Object Inspection
- Inheritance

---

## Definition

The Util Module is a built-in Node.js module that provides helper functions for working with objects, asynchronous code, debugging, and formatting.

Import:

```js
const util = require("util");
```

---

## Why It Is Needed

Without util module:

```js
console.log(JSON.stringify(obj));
```

Difficult to inspect deeply nested objects.

---

With util module:

```js
console.log(
   util.inspect(obj)
);
```

Easy debugging.

---

Benefits:

- Better Debugging
- Cleaner Code
- Promise Conversion
- Object Inspection
- Inheritance Support

---

## Internal Working

```text
Application
      │
      ▼
Util Module
      │
      ├── inspect()
      ├── format()
      ├── promisify()
      ├── inherits()
      └── callbackify()
```

---

## Architecture

```text
Application
      │
      ▼
Util Module
      │
      ▼
Helper Functions
      │
      ▼
Output
```

---

# Common Util Methods

```text
Util Module
│
├── format()
├── inspect()
├── promisify()
├── callbackify()
└── inherits()
```

---

# util.format()

## Definition

Used to format strings similar to printf in C language.

---

## Why Needed

To dynamically insert values into strings.

---

## Syntax

```js
util.format(
   formatString,
   values
);
```

---

## Example

```js
const util = require("util");

const result = util.format(
   "Hello %s",
   "Rahul"
);

console.log(result);
```

---

## Output

```text
Hello Rahul
```

---

### Format Specifiers

| Specifier | Meaning |
|------------|----------|
| %s | String |
| %d | Number |
| %j | JSON |
| %% | Percentage |

---

## Example

```js
console.log(
 util.format(
   "%s scored %d marks",
   "Rahul",
   95
 )
);
```

Output:

```text
Rahul scored 95 marks
```

---

# util.inspect()

## Definition

Used to inspect objects deeply.

Very useful for debugging.

---

## Why Needed

Nested objects are difficult to read using normal console.log().

---

## Example

```js
const util = require("util");

const user = {

   name:"Rahul",

   address:{
      city:"Hyderabad"
   }

};

console.log(
 util.inspect(user)
);
```

---

## Output

```text
{
 name: 'Rahul',
 address: {
   city: 'Hyderabad'
 }
}
```

---

## Deep Inspection

```js
console.log(

 util.inspect(
   user,
   {
      depth:null
   }

 )

);
```

---

## Real World Example

Debugging API Responses.

---

# util.promisify()

## Definition

Converts callback-based functions into Promise-based functions.

---

## Why Needed

Modern JavaScript uses:

```text
Promises
Async/Await
```

Many old APIs use callbacks.

promisify converts them.

---

## Example

### Callback Style

```js
const fs = require("fs");

fs.readFile(
 "data.txt",
 "utf8",
 (err,data)=>{

 }
);
```

---

### Promise Style

```js
const fs = require("fs");
const util = require("util");

const readFile =
util.promisify(
   fs.readFile
);
```

---

### Using Async/Await

```js
const data =
await readFile(
 "data.txt",
 "utf8"
);

console.log(data);
```

---

## Real World Example

Converting legacy callback APIs.

---

# util.callbackify()

## Definition

Converts Promise-based functions into Callback-based functions.

---

## Why Needed

Some older systems require callbacks.

---

## Example

```js
const util = require("util");

async function getData(){

   return "Hello";

}

const callbackFunction =
util.callbackify(
   getData
);

callbackFunction(
 (err,data)=>{

   console.log(data);

 }
);
```

---

## Output

```text
Hello
```

---

# util.inherits()

## Definition

Used to implement inheritance between constructor functions.

Mostly used before ES6 classes.

---

## Example

```js
const util = require("util");

function Person(){

}

function Employee(){

}

util.inherits(
 Employee,
 Person
);
```

---

## Real World Example

Legacy Node.js Applications.

---

# Sample Program 1

## String Formatting

```js
const util = require("util");

console.log(

 util.format(
   "%s is %d years old",
   "Rahul",
   25
 )

);
```

Output:

```text
Rahul is 25 years old
```

---

# Sample Program 2

## Inspect Object

```js
const util = require("util");

const obj = {

   name:"Node",

   details:{
      version:"22"
   }

};

console.log(

 util.inspect(
   obj,
   {
      depth:null
   }
 )

);
```

---

# Sample Program 3

## Promisify File Read

```js
const fs = require("fs");
const util = require("util");

const readFile =
util.promisify(
 fs.readFile
);

async function getData(){

   const data =
   await readFile(
      "sample.txt",
      "utf8"
   );

   console.log(data);

}

getData();
```

---

# Real World Use Cases

## API Development

```text
Promisify Callback APIs
```

---

## Debugging

```text
Inspect Nested Objects
```

---

## Logging

```text
Formatted Console Logs
```

---

## Legacy Applications

```text
Inheritance Support
```

---

# Advantages

- Built-in Module
- Better Debugging
- Async/Await Support
- Cleaner Code
- Utility Functions

---

# Disadvantages

- Some methods are legacy
- ES6 Classes replaced inherits()

---

# Fresher Interview Questions

### What is Util Module?

A built-in Node.js module providing utility/helper functions.

---

### Why is util.inspect() used?

To inspect objects deeply.

---

### What is util.format()?

Used for string formatting.

---

### What is util.promisify()?

Converts callback functions into Promise-based functions.

---

# 1-2 Years Interview Questions

### Difference between callback and Promise?

Callback:

```text
Older Approach
```

Promise:

```text
Modern Approach
```

---

### Why use promisify()?

To use Async/Await with old callback APIs.

---

### What does callbackify() do?

Converts Promise functions into callback functions.

---

# Experienced Interview Questions

### Why was util.promisify introduced?

To bridge callback-based APIs with modern Promise-based JavaScript.

---

### Is util.inherits still used today?

Rarely.

ES6 classes are preferred.

---

### When would you use util.inspect over JSON.stringify?

When inspecting complex or circular objects.

---

# Tricky Interview Questions

### Question 1

```js
JSON.stringify(undefined)
```

Output:

```text
undefined
```

---

### Question 2

```js
util.format(
 "%d",
 "100"
);
```

Output:

```text
100
```

String converted to Number.

---

### Question 3

```js
typeof util.promisify
```

Output:

```text
function
```

---

### Question 4

Can util.promisify work on every function?

Answer:

```text
No
```

Only callback-style functions.

---

### Question 5

Which is preferred today?

```text
Promises + Async/Await
```

---

# Coding Questions

### Q1 Format User Information

### Q2 Inspect Nested Object

### Q3 Convert readFile() using Promisify

### Q4 Convert Promise using Callbackify

### Q5 Create Inheritance using util.inherits()

---

# Summary

In this chapter, we learned:

- Util Module
- util.format()
- util.inspect()
- util.promisify()
- util.callbackify()
- util.inherits()
- Debugging Techniques
- Promise Conversion
- Interview Questions
- Tricky Questions

The Util Module provides several helper functions that simplify debugging, formatting, and asynchronous programming in Node.js.

---

## Next Topic

➡️ DNS Module

Topics Covered:

- DNS Lookup
- DNS Resolve
- Reverse Lookup
- Record Types
- Real World Examples
- Interview Questions