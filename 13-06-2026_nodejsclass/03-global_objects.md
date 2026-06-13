<!-- Navigation -->

<p align="right">
  <button><a href="02-running-javascript.md">⬅️ Previous</a></button> |
  <button><a href="04-module-systems.md">Next ➡️</a></button>
</p>

# 3. Global Objects in Node.js

## Overview

Node.js provides several built-in objects and variables that are available globally throughout the application without importing them.

These objects help developers access:

* Process Information
* File Information
* Directory Information
* Binary Data
* Logging Utilities

Unlike browsers, which provide the `window` object, Node.js provides the `global` object and other global variables.

---

## Definition

Global Objects are built-in objects and variables automatically available in every Node.js file without requiring an import statement.

Examples:

```js
console.log("Hello Node.js");
console.log(process.version);
console.log(__dirname);
```

Notice that none of these require `require()` or `import`.

---

## Why Do We Need Global Objects?

Global Objects provide quick access to important runtime information and utilities.

Without them, developers would need to import common functionality repeatedly.

Benefits:

* Easy Access
* Runtime Information
* System Information
* Logging
* File & Directory Information
* Binary Data Handling

---

## Architecture

```text
Node.js Runtime
      │
      ├── global
      ├── process
      ├── __dirname
      ├── __filename
      ├── Buffer
      └── console
```

When a Node.js application starts, these objects are automatically made available.

---

## Internal Working

```text
Application Starts
        ↓
Node.js Runtime Initializes
        ↓
Global Objects Created
        ↓
Objects Made Available
        ↓
Application Can Access Them
```

---

# 1. global Object

## Definition

The `global` object is the top-level global object in Node.js.

It behaves similarly to the browser's `window` object.

---

## Why Needed?

Used to create variables and methods accessible throughout the application.

---

## Syntax

```js
global.variableName = value;
```

---

## Sample Code

```js
global.appName = "Node Learning";

console.log(global.appName);
```

---

## Output

```text
Node Learning
```

---

## Real-World Example

```js
global.config = {
  appName: "E-Commerce App"
};

console.log(global.config.appName);
```

---

## Diagram

```text
global
   │
   ├── Variables
   ├── Functions
   └── Configuration
```

---

# 2. process Object

## Definition

The `process` object provides information about the currently running Node.js process.

---

## Why Needed?

Used to:

* Get Node Version
* Read Environment Variables
* Get Process ID
* Access Command Line Arguments

---

## Syntax

```js
process.property
```

---

## Sample Code

```js
console.log(process.version);
console.log(process.platform);
console.log(process.pid);
```

---

## Output

```text
v24.2.0
win32
12345
```

---

## Real-World Example

```js
console.log(process.env.PORT);
```

Used to read environment variables in production applications.

---

## Diagram

```text
Application
      ↓
process
      ↓
Environment Variables
      ↓
System Information
```

---

# 3. __dirname

## Definition

`__dirname` returns the absolute path of the current directory.

---

## Why Needed?

Used to locate:

* Configuration Files
* Images
* Static Resources
* Upload Directories

---

## Syntax

```js
console.log(__dirname);
```

---

## Sample Code

```js
console.log(__dirname);
```

---

## Output

```text
C:\Projects\node-app
```

---

## Real-World Example

```js
const path = require("path");

console.log(path.join(__dirname, "uploads"));
```

---

## Diagram

```text
Current File
      ↓
__dirname
      ↓
Directory Path
```

---

# 4. __filename

## Definition

`__filename` returns the complete path of the currently executing file.

---

## Why Needed?

Useful for:

* Debugging
* Logging
* File Operations

---

## Syntax

```js
console.log(__filename);
```

---

## Sample Code

```js
console.log(__filename);
```

---

## Output

```text
C:\Projects\node-app\index.js
```

---

## Real-World Example

```js
console.log(`Running File: ${__filename}`);
```

---

## Diagram

```text
Current File
      ↓
__filename
      ↓
Full File Path
```

---

# 5. Buffer

## Definition

Buffer is a global object used to handle binary data directly in memory.

---

## Why Needed?

Used for:

* Images
* Audio Files
* Video Files
* File Uploads
* Network Streams

---

## Syntax

```js
Buffer.from(data);
```

---

## Sample Code

```js
const buffer = Buffer.from("Hello");

console.log(buffer);
```

---

## Output

```text
<Buffer 48 65 6c 6c 6f>
```

Convert back to string:

```js
console.log(buffer.toString());
```

Output:

```text
Hello
```

---

## Real-World Example

```js
const imageBuffer = Buffer.from(imageData);
```

Used during image uploads and streaming.

---

## Diagram

```text
String
   ↓
Buffer
   ↓
Binary Data
```

---

# 6. console

## Definition

The `console` object is used for displaying information and debugging applications.

---

## Why Needed?

Used for:

* Logging
* Debugging
* Monitoring
* Error Tracking

---

## Syntax

```js
console.log(data);
```

---

## Sample Code

```js
console.log("Application Started");

console.error("Database Error");

console.warn("Warning Message");
```

---

## Output

```text
Application Started
Database Error
Warning Message
```

---

## Real-World Example

```js
console.log(`Server Running on Port ${3000}`);
```

Used in almost every Node.js application.

---

## Diagram

```text
Application
      ↓
console
      ↓
Logs
      ↓
Terminal
```

---

# Global Objects Mapping

| Purpose               | Global Object |
| --------------------- | ------------- |
| Global Variables      | global        |
| Process Information   | process       |
| Directory Information | __dirname     |
| File Information      | __filename    |
| Binary Data           | Buffer        |
| Logging               | console       |

---

# Advantages

* No Import Required
* Available Everywhere
* Faster Development
* Runtime Information Access
* Simplifies Debugging

---

# Limitations

* Overusing global variables can make applications difficult to maintain.
* Global data can be accidentally modified.
* Large applications should avoid excessive use of global variables.

---

# Fresher Interview Questions

### What are Global Objects?

Global Objects are built-in objects available throughout a Node.js application without importing them.

---

### What is the global object in Node.js?

The `global` object is the top-level object in Node.js.

---

### What is process?

The `process` object contains information about the currently running Node.js process.

---

### What is the purpose of __dirname?

Returns the current directory path.

---

### What is the purpose of __filename?

Returns the current file path.

---

### What is Buffer?

Buffer is used to handle binary data.

---

# 1–2 Years Interview Questions

### What is the difference between global and window?

| Browser | Node.js |
| ------- | ------- |
| window  | global  |

---

### How is process.env used?

Used to read environment variables.

```js
console.log(process.env.PORT);
```

---

### Why is Buffer required in Node.js?

Because files, streams, and network communication involve binary data.

---

# Experienced Interview Questions

### Why should global variables be avoided in large applications?

Because they increase coupling and make debugging difficult.

---

### How does Buffer improve performance?

Buffer stores binary data directly in memory, reducing conversion overhead.

---

### Why are __dirname and __filename unavailable in ESM modules?

Because ESM follows ECMAScript standards and does not expose them directly.

---

# Tricky Interview Questions

### Is global the same as window?

❌ No

They serve similar purposes but exist in different environments.

---

### Can we use __dirname inside browsers?

❌ No

It is available only in Node.js.

---

### Is Buffer a Core Module?

❌ No

Buffer is a Global Object.

---

### Is console.log asynchronous?

❌ Not necessarily.

It depends on the underlying stream.

---

### Can process terminate an application?

✅ Yes

```js
process.exit(0);
```

---

# Summary

In this chapter, we learned:

* What Global Objects are
* global object
* process object
* __dirname
* __filename
* Buffer
* console
* Internal working
* Real-world usage
* Interview questions
* Tricky questions

Global Objects are fundamental in Node.js because they provide access to runtime information, file paths, binary data, and debugging utilities without requiring imports.

---

## Next Topic

➡️ Module System (CommonJS & ESM)

<p align="left">
  <button><a href="02-running-javascript.md">⬅️ Previous</a></button>        
</p>

<p align="right">
  <button><a href="04-module-systems.md">Next ➡️</a></button>
</p>
