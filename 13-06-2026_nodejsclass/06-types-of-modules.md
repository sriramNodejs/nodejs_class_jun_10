<!-- Navigation -->

<p align="right">
  <button><a href="05-project-setup-cjs-esm.md">⬅️ Previous</a></button> |
  <button><a href="07-npm-package-management.md">Next ➡️</a></button>
</p>

# 6. Types of Modules in Node.js

## Overview

Node.js follows a modular architecture, where applications are divided into smaller reusable units called modules.

A module is a file containing reusable code that can be shared across different parts of an application.

Node.js provides three types of modules:

1. Core Modules (Built-in Modules)
2. Custom Modules (User-Defined Modules)
3. Third-Party Modules (External Modules)

Every Node.js application uses one or more of these module types.

---

## Definition

A module is a reusable block of code that can be imported and used in other files.

Example:

```text
Project
│
├── app.js
├── user.js
└── product.js
```

Instead of writing everything inside one file, we separate functionality into modules.

---

## Why Do We Need Modules?

Without modules:

```text
app.js
│
├── Authentication
├── User Logic
├── Product Logic
├── Payment Logic
├── Database Logic
└── API Logic
```

Problems:

* Large files
* Difficult debugging
* Poor maintainability
* Code duplication

With modules:

```text
Project
│
├── auth.js
├── users.js
├── products.js
├── payments.js
└── app.js
```

Benefits:

* Better Organization
* Reusability
* Scalability
* Easier Testing
* Team Collaboration

---

## Architecture

```text
Node.js Application
         │
         ├── Core Modules
         │
         ├── Custom Modules
         │
         └── Third-Party Modules
```

---

## Internal Working

```text
Application Starts
         ↓
Import Module
         ↓
Node.js Resolver
         ↓
Locate Module
         ↓
Load Module
         ↓
Cache Module
         ↓
Execute Application
```

---

# 1. Core Modules (Built-in Modules)

## Definition

Core Modules are modules that come pre-installed with Node.js.

They do not require installation.

Node.js provides them automatically.

---

## Why Needed?

Core modules provide common functionality such as:

* File Handling
* HTTP Servers
* Path Operations
* Operating System Information
* Cryptography
* Event Handling

without requiring external packages.

---

## Syntax

```js
const moduleName = require("module-name");
```

Example:

```js
const fs = require("fs");
```

---

## Sample Code

### Using FS Module

```js
const fs = require("fs");

console.log("FS Module Loaded");
```

---

## Output

```text
FS Module Loaded
```

---

## Common Core Modules

| Module | Purpose                      |
| ------ | ---------------------------- |
| fs     | File System Operations       |
| http   | Create Web Servers           |
| path   | File Path Handling           |
| os     | Operating System Information |
| dns    | DNS Operations               |
| crypto | Encryption & Hashing         |
| stream | Data Streaming               |
| events | Event Handling               |
| buffer | Binary Data Handling         |
| util   | Utility Functions            |

---

## Real-World Example

Creating a server using HTTP module:

```js
const http = require("http");

const server = http.createServer((req, res) => {
    res.end("Server Running");
});

server.listen(3000);
```

---

## Diagram

```text
Node.js
   │
   ├── fs
   ├── http
   ├── path
   ├── os
   └── crypto
```

---

# 2. Custom Modules (User-Defined Modules)

## Definition

Custom Modules are modules created by developers to organize application code.

They contain business logic specific to the application.

---

## Why Needed?

Used to:

* Organize Code
* Reuse Logic
* Improve Maintainability
* Reduce Duplication

---

## Project Structure

```text
Project
│
├── app.js
└── user.js
```

---

## Sample Code

### user.js

```js
const user = {
    name: "John",
    age: 25
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
{
  name: 'John',
  age: 25
}
```

---

## Real-World Example

```text
E-Commerce Application
│
├── auth.js
├── users.js
├── products.js
├── orders.js
└── payments.js
```

Each file is a custom module.

---

## Diagram

```text
Custom Modules
      │
      ├── auth.js
      ├── user.js
      ├── product.js
      └── payment.js
```

---

# 3. Third-Party Modules

## Definition

Third-Party Modules are modules developed by external developers and distributed through npm.

They are not built into Node.js.

They must be installed manually.

---

## Why Needed?

Instead of writing everything from scratch, developers can use existing packages.

Benefits:

* Faster Development
* Reduced Code
* Community Support
* Better Productivity

---

## Installation

Example:

```bash
npm install express
```

---

## Sample Code

```js
const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello Express");
});

app.listen(3000);
```

---

## Output

```text
Server Running On Port 3000
```

---

## Popular Third-Party Modules

| Module       | Purpose                       |
| ------------ | ----------------------------- |
| express      | Web Framework                 |
| mongoose     | MongoDB ODM                   |
| dotenv       | Environment Variables         |
| nodemon      | Auto Restart Server           |
| bcrypt       | Password Hashing              |
| jsonwebtoken | JWT Authentication            |
| cors         | Cross-Origin Resource Sharing |
| axios        | HTTP Requests                 |

---

## Real-World Example

Install Express:

```bash
npm install express
```

Use Express to build REST APIs.

---

## Diagram

```text
npm Registry
      │
      ├── express
      ├── mongoose
      ├── dotenv
      ├── bcrypt
      └── axios
```

---

# Comparison of Module Types

| Feature               | Core Module       | Custom Module  | Third-Party Module  |
| --------------------- | ----------------- | -------------- | ------------------- |
| Created By            | Node.js Team      | Developer      | Community           |
| Installation Required | No                | No             | Yes                 |
| Available By Default  | Yes               | No             | No                  |
| Example               | fs                | user.js        | express             |
| Purpose               | Built-in Features | Business Logic | Additional Features |

---

# Real-World Application Architecture

```text
E-Commerce App
│
├── Core Modules
│   ├── fs
│   └── path
│
├── Custom Modules
│   ├── users.js
│   ├── products.js
│   └── orders.js
│
└── Third-Party Modules
    ├── express
    ├── mongoose
    └── dotenv
```

---

# Advantages

### Core Modules

* No Installation
* Optimized
* Maintained by Node.js

### Custom Modules

* Reusable
* Organized
* Project Specific

### Third-Party Modules

* Faster Development
* Community Support
* Rich Ecosystem

---

# Fresher Interview Questions

### What is a module?

A reusable piece of code that can be imported into other files.

---

### What are the types of modules in Node.js?

* Core Modules
* Custom Modules
* Third-Party Modules

---

### What is a Core Module?

A built-in module provided by Node.js.

---

### What is a Custom Module?

A module created by developers.

---

### What is a Third-Party Module?

A module installed from npm.

---

# 1–2 Years Interview Questions

### What is the difference between Core and Third-Party Modules?

Core modules come with Node.js.

Third-party modules must be installed using npm.

---

### Why are custom modules important?

They improve maintainability and code organization.

---

### How do you install a third-party module?

```bash
npm install package-name
```

Example:

```bash
npm install express
```

---

# Experienced Interview Questions

### When should you create a custom module?

When functionality needs to be reused across multiple files.

---

### Why should developers prefer third-party libraries instead of reinventing everything?

Because they reduce development time and provide tested solutions.

---

### How does Node.js locate a module?

Node.js uses a module resolution algorithm to find:

* Core Modules
* Local Modules
* node_modules Packages

---

# Tricky Interview Questions

### Is Express a Core Module?

❌ No

Express is a Third-Party Module.

---

### Is fs a Third-Party Module?

❌ No

fs is a Core Module.

---

### Do Core Modules require npm install?

❌ No

---

### Can a Custom Module use a Core Module?

✅ Yes

Example:

```js
const fs = require("fs");
```

inside your custom module.

---

### Which module type is fastest to load?

Generally Core Modules, because they are built into Node.js.

---

# Summary

In this chapter, we learned:

* What modules are
* Why modules are needed
* Core Modules
* Custom Modules
* Third-Party Modules
* Module Resolution
* Real-world examples
* Interview questions
* Tricky questions

Modules are the foundation of Node.js applications because they help organize code, improve maintainability, and promote reusability.

---

## Next Topic

➡️ NPM Package Management (Install, Uninstall, Dependencies, DevDependencies)

<p align="left">
  <button><a href="05-project-setup-cjs-esm.md">⬅️ Previous</a></button>
</p>

<p align="right">
  <button><a href="07-npm-package-management.md">Next ➡️</a></button>
</p>
