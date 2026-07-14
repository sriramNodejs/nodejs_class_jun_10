<!-- Navigation -->

<p align="right">
  <button><a href="03-global_objects.md">⬅️ Previous</a></button > |
  <button><a href="05-project-setup-cjs-esm.md">Next ➡️</a></button>
</p>

# 4. Module System in Node.js

## Overview

As applications grow, writing all code in a single file becomes difficult to maintain.

Node.js solves this problem using the **Module System**.

A module is a reusable piece of code that can be exported from one file and imported into another file.

The Module System helps developers:

* Organize code
* Reuse functionality
* Improve maintainability
* Reduce duplication
* Build scalable applications

Node.js supports two module systems:

1. CommonJS (CJS)
2. ECMAScript Modules (ESM)

---

## Definition

A Module System is a mechanism that allows code to be split into multiple files and shared between them.

Instead of writing everything in one file:

```text
app.js
│
├── User Logic
├── Product Logic
├── Payment Logic
├── Authentication Logic
└── Database Logic
```

We can separate code:

```text
project
│
├── user.js
├── product.js
├── payment.js
├── auth.js
└── app.js
```

This makes applications easier to develop and maintain.

---

## Why Do We Need Modules?

Without modules:

* Large files become difficult to manage
* Code duplication increases
* Reusability decreases
* Team collaboration becomes harder

With modules:

* Better Code Organization
* Code Reusability
* Easier Testing
* Better Maintainability
* Scalable Applications

---

## Architecture

```text
Application
      │
      ├── user.js
      ├── product.js
      ├── auth.js
      ├── payment.js
      └── app.js
               │
               ↓
        Module System
               ↓
          Execution
```

---

## Internal Working

```text
Module Created
       ↓
Export Required Data
       ↓
Import Module
       ↓
Node.js Loads Module
       ↓
Module Cached
       ↓
Application Uses Module
```

### Important

Node.js loads a module only once.

After loading:

```text
First Import
      ↓
Load Module
      ↓
Cache Module

Second Import
      ↓
Use Cached Module
```

This improves performance.

---

# Types of Module Systems

```text
Node.js Module System
          │
          ├── CommonJS (CJS)
          │
          └── ECMAScript Modules (ESM)
```

---

# 1. CommonJS (CJS)

## Definition

CommonJS is the traditional module system used by Node.js.

It uses:

```js
require()
module.exports
```

---

## Why Needed?

Before ESM existed, Node.js required a mechanism to share code between files.

CommonJS became the default module system.

---

## Syntax

### Export

```js
module.exports = value;
```

### Import

```js
const value = require("./file");
```

---

## Sample Code

### user.js

```js
const user = {
    name: "John"
};

module.exports = user;
```

### app.js

```js
const user = require("./user");

console.log(user);
```

---

## Output

```text
{ name: 'John' }
```

---

## Real-World Example

```js
const express = require("express");

const app = express();
```

Many existing Node.js projects still use CommonJS.

---

## Diagram

```text
user.js
    │
module.exports
    │
    ↓
app.js
    │
require()
    ↓
Use Data
```

---

# 2. ECMAScript Modules (ESM)

## Definition

ECMAScript Modules (ESM) are the official JavaScript module standard.

ESM uses:

```js
import
export
```

ESM is now the recommended module system for modern JavaScript applications.

---

## Why Needed?

CommonJS works only in Node.js.

JavaScript needed a standard module system that would work across:

* Browsers
* Node.js
* Modern Build Tools

ESM solved this problem.

---

## Syntax

### Export

```js
export default value;
```

### Import

```js
import value from "./file.js";
```

---

## Sample Code

### user.js

```js
const user = {
    name: "John"
};

export default user;
```

### app.js

```js
import user from "./user.js";

console.log(user);
```

---

## Output

```text
{ name: 'John' }
```

---

## Real-World Example

```js
import express from "express";

const app = express();
```

Most modern projects prefer ESM.

---

## Diagram

```text
user.js
    │
export
    │
    ↓
app.js
    │
import
    ↓
Use Data
```

---

# CommonJS vs ESM

| Feature         | CommonJS       | ESM          |
| --------------- | -------------- | ------------ |
| Import          | require()      | import       |
| Export          | module.exports | export       |
| Loading         | Synchronous    | Asynchronous |
| Standard        | Node.js        | ECMAScript   |
| Browser Support | No             | Yes          |
| Modern Usage    | Less Preferred | Recommended  |

---

# Module Caching

## What is Module Caching?

When a module is imported for the first time:

```text
Import Module
      ↓
Execute Module
      ↓
Store in Cache
```

Next time:

```text
Import Module
      ↓
Load From Cache
```

Node.js does not re-execute the module.

This improves performance.

---

## Sample Code

### counter.js

```js
console.log("Module Loaded");

module.exports = {};
```

### app.js

```js
require("./counter");
require("./counter");
```

---

## Output

```text
Module Loaded
```

Notice:

The module executes only once.

---

# Real-World Example

Consider an E-Commerce Application:

```text
Project
│
├── auth.js
├── products.js
├── users.js
├── payments.js
└── app.js
```

Each feature becomes a separate module.

Benefits:

* Better Organization
* Easier Maintenance
* Team Collaboration
* Scalability

---

# Advantages

### CommonJS

* Simple
* Easy to Learn
* Supported by Older Node.js Projects

### ESM

* Official JavaScript Standard
* Browser Support
* Better Tree Shaking
* Future-Proof

---

# Limitations

### CommonJS

* Node.js Specific
* Not Browser Friendly

### ESM

* Slightly More Configuration in Older Node.js Versions
* Requires File Extensions

---

# Fresher Interview Questions

### What is a Module?

A module is a reusable piece of code that can be exported and imported between files.

---

### Why do we use modules?

To organize and reuse code.

---

### What are the two module systems in Node.js?

* CommonJS (CJS)
* ECMAScript Modules (ESM)

---

### Which keywords are used in CommonJS?

```js
require()
module.exports
```

---

### Which keywords are used in ESM?

```js
import
export
```

---

# 1–2 Years Interview Questions

### What is the difference between CommonJS and ESM?

CommonJS uses:

```js
require()
module.exports
```

ESM uses:

```js
import
export
```

---

### Why is ESM preferred in modern projects?

Because it is the official JavaScript standard and works in both browsers and Node.js.

---

### What is Module Caching?

Node.js loads and executes a module only once, then stores it in memory.

---

# Experienced Interview Questions

### Why is ESM considered future-proof?

Because it follows the ECMAScript specification and is supported across JavaScript environments.

---

### How does module caching improve performance?

Modules are loaded only once and reused from memory.

---

### Can CommonJS and ESM coexist?

Yes, but special handling may be required depending on the project configuration.

---

# Tricky Interview Questions

### Is CommonJS part of JavaScript?

❌ No

It is a Node.js module system.

---

### Is ESM part of JavaScript?

✅ Yes

It is part of the ECMAScript specification.

---

### Can browsers run require()?

❌ No

Browsers support ESM, not CommonJS.

---

### Does importing a module multiple times execute it multiple times?

❌ No

Node.js caches modules after the first execution.

---

### Which module system should you use in new projects?

✅ ESM

Because it is the modern JavaScript standard.

---

# Summary

In this chapter, we learned:

* What a Module System is
* Why modules are needed
* CommonJS (CJS)
* ECMAScript Modules (ESM)
* Module Caching
* CommonJS vs ESM
* Real-world usage
* Interview questions
* Tricky questions

Modules are a fundamental part of Node.js development because they help organize, reuse, and maintain code efficiently.

---

## Next Topic

➡️ Setting Up a Project in CommonJS (CJS) and ESM

<p align="left">
  <a href="../03-global_objects.md">⬅️ Previous</a>
</p>

<p align="right">
  <a href="05-project-setup-cjs-esm.md">Next ➡️</a>
</p>
