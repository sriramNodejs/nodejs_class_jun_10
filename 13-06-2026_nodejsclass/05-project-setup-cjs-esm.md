<!-- Navigation -->

<p align="right">
  <button><a href="04-module-systems.md">⬅️ Previous</a></button > |
  <button><a href="06-types-of-modules.md">Next ➡️</a></button>
</p>

# 5. Setting Up a Project in CommonJS (CJS) and ESM

## Overview

After understanding the Node.js Module System, the next step is learning how to create projects using:

1. CommonJS (CJS)
2. ECMAScript Modules (ESM)

Node.js supports both module systems, but each requires a slightly different setup.

Understanding both approaches is important because:

* Older projects mostly use CommonJS.
* Modern projects prefer ESM.

---

## Definition

Project setup refers to configuring a Node.js project to use a specific module system.

Node.js supports:

```text
Node.js Project
      │
      ├── CommonJS (CJS)
      └── ECMAScript Modules (ESM)
```

The module system determines how files communicate with each other.

---

## Why Do We Need Project Configuration?

Node.js must know:

* Which module system to use
* How imports should work
* How exports should work

Without proper configuration:

```js
import user from "./user.js";
```

may throw errors.

---

## Architecture

```text
Project
   │
   ├── package.json
   │
   ├── app.js
   │
   └── user.js
            │
            ↓
      Module System
            │
            ├── CJS
            └── ESM
```

---

# CommonJS (CJS) Project Setup

## Definition

CommonJS is the traditional Node.js module system.

Uses:

```js
require()
module.exports
```

CommonJS is the default behavior in Node.js.

---

## Project Structure

```text
cjs-project
│
├── package.json
├── app.js
└── user.js
```

---

## Step 1: Create Project Folder

```bash
mkdir cjs-project

cd cjs-project
```

---

## Step 2: Initialize Project

```bash
npm init -y
```

This creates:

```text
package.json
```

---

## Generated package.json

```json
{
  "name": "cjs-project",
  "version": "1.0.0"
}
```

Notice:

```json
"type": "module"
```

does NOT exist.

Node.js automatically treats the project as CommonJS.

---

## Step 3: Create user.js

```js
const user = {
  name: "John",
  age: 25
};

module.exports = user;
```

---

## Step 4: Create app.js

```js
const user = require("./user");

console.log(user);
```

---

## Step 5: Run Project

```bash
node app.js
```

---

## Output

```text
{
  name: 'John',
  age: 25
}
```

---

## Internal Working

```text
app.js
   ↓
require("./user")
   ↓
Node.js Loads Module
   ↓
module.exports Returned
   ↓
Execution
```

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
Use Module
```

---

## Real-World Example

Express applications traditionally use CommonJS.

```js
const express = require("express");

const app = express();
```

Many enterprise applications still use this approach.

---

# ECMAScript Modules (ESM) Project Setup

## Definition

ESM is the official JavaScript module system.

Uses:

```js
import
export
```

Modern applications prefer ESM.

---

## Project Structure

```text
esm-project
│
├── package.json
├── app.js
└── user.js
```

---

## Step 1: Create Project Folder

```bash
mkdir esm-project

cd esm-project
```

---

## Step 2: Initialize Project

```bash
npm init -y
```

---

## Step 3: Configure package.json

Add:

```json
{
  "type": "module"
}
```

Complete Example:

```json
{
  "name": "esm-project",
  "version": "1.0.0",
  "type": "module"
}
```

---

## Why "type": "module"?

This tells Node.js:

```text
Use ECMAScript Modules
```

instead of CommonJS.

---

## Step 4: Create user.js

```js
const user = {
  name: "John",
  age: 25
};

export default user;
```

---

## Step 5: Create app.js

```js
import user from "./user.js";

console.log(user);
```

---

## Step 6: Run Project

```bash
node app.js
```

---

## Output

```text
{
  name: 'John',
  age: 25
}
```

---

## Internal Working

```text
app.js
    ↓
import user
    ↓
Node.js ESM Loader
    ↓
Load Module
    ↓
Execute Module
```

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
Use Module
```

---

# CommonJS vs ESM Project Setup

| Feature                 | CommonJS       | ESM          |
| ----------------------- | -------------- | ------------ |
| Project Configuration   | Default        | type: module |
| Import                  | require()      | import       |
| Export                  | module.exports | export       |
| File Extension Required | No             | Yes          |
| Browser Support         | No             | Yes          |
| Modern Standard         | No             | Yes          |

---

# Common Mistakes

## Mistake 1

Using import without enabling ESM.

```js
import user from "./user.js";
```

Error:

```text
SyntaxError: Cannot use import statement outside a module
```

---

## Mistake 2

Forgetting file extension in ESM.

Wrong:

```js
import user from "./user";
```

Correct:

```js
import user from "./user.js";
```

---

## Mistake 3

Mixing CJS and ESM carelessly.

Wrong:

```js
const user = require("./user");
import product from "./product.js";
```

Avoid mixing module systems unless necessary.

---

# Real-World Project Structure

```text
ecommerce-app
│
├── package.json
├── src
│   ├── controllers
│   ├── routes
│   ├── models
│   ├── services
│   └── app.js
│
└── node_modules
```

Modern projects generally use ESM.

---

# Advantages

## CommonJS

* Easy to Learn
* Default Node.js Behavior
* Large Existing Ecosystem

---

## ESM

* Official JavaScript Standard
* Browser Compatible
* Better Tooling Support
* Future-Proof

---

# Fresher Interview Questions

### What is the default module system in Node.js?

CommonJS.

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

### How do you enable ESM?

Add:

```json
{
  "type": "module"
}
```

inside package.json.

---

# 1–2 Years Interview Questions

### Why is ESM preferred today?

Because it is the official JavaScript module standard.

---

### What happens if type: module is missing?

Node.js treats the project as CommonJS.

---

### Why do ESM imports require file extensions?

Because Node.js follows the ECMAScript specification.

---

# Experienced Interview Questions

### Can CommonJS and ESM coexist in one project?

Yes, but interoperability requires special handling.

---

### Why do modern frameworks prefer ESM?

Because it supports tree shaking, browser compatibility, and standardization.

---

### Which module system should new projects use?

ESM.

---

# Tricky Interview Questions

### Is ESM a Node.js feature?

❌ No

ESM is part of the ECMAScript specification.

---

### Is CommonJS part of JavaScript?

❌ No

CommonJS is a Node.js module system.

---

### Does ESM work in browsers?

✅ Yes

---

### Does require() work in browsers?

❌ No

---

### Can we use import without type: module?

❌ No (in Node.js projects)

---

# Summary

In this chapter, we learned:

* How to create a CommonJS project
* How to create an ESM project
* package.json configuration
* require() and module.exports
* import and export
* CommonJS vs ESM
* Common mistakes
* Real-world project structures
* Interview questions
* Tricky questions

Understanding both CommonJS and ESM is essential because many existing Node.js applications use CommonJS, while modern applications are moving toward ESM.

---

## Next Topic

➡️ Types of Modules (Core Modules, Custom Modules, Third-Party Modules)

<p align="left">
  <button><a href="04-module-systems.md">⬅️ Previous</a></button>
</p>

<p align="right">
  <button><a href="06-types-of-modules.md">Next ➡️</a></button>
</p>
