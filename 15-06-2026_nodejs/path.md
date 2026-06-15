<!-- Navigation -->

<p align="right">
  <button><a href="fs.md">⬅️ Previous</a> |</button>
  <button>
    <a href="os-module.md">Next ➡️</a>
  </button>
</p>

# Path Module

> The Path Module is a built-in Node.js module used to work with file and directory paths efficiently across different operating systems.

---

# Overview

When working with files and folders in Node.js, we often need to:

- Join folder paths
- Get file names
- Get file extensions
- Find absolute paths
- Normalize paths

The Path Module helps us perform these operations safely and consistently.

---

# Definition

The Path Module is a built-in Node.js core module used to handle and manipulate file system paths.

No installation is required.

Import:

```js
const path = require("path");
```

---

# Why Needed

Without Path Module:

```js
const filePath =
"users" + "/" + "documents" + "/" + "resume.pdf";
```

Problems:

- Different operating systems use different path separators.
- Hardcoded paths may break.

Path Module solves these issues.

---

# Internal Working

```text
Application
      │
      ▼
Path Module
      │
      ▼
Path Processing
      │
      ▼
Formatted Path
```

---

# Architecture

```text
Node.js App
      │
      ▼
Path Module
      │
      ▼
Path Operations
      │
      ▼
Result
```

---

# Diagram

```text
Folder Path
     │
     ▼
Path Module
     │
     ▼
Safe File Path
```

---

# Common Path Methods

```text
Path Module
│
├── join()
├── resolve()
├── basename()
├── dirname()
├── extname()
├── normalize()
└── parse()
```

---

# join()

## Definition

Combines multiple path segments into a single path.

---

## Why Needed

Avoid manually adding:

```text
/
\
```

for different operating systems.

---

## Syntax

```js
path.join(path1, path2, path3);
```

---

## Example

```js
const path = require("path");

const result =
path.join("users", "documents", "resume.pdf");

console.log(result);
```

---

## Output

```text
users/documents/resume.pdf
```

(Separator depends on OS)

---

## Real World Example

```js
const uploadPath =
path.join(__dirname, "uploads", "profile.jpg");
```

Used in file upload systems.

---

# resolve()

## Definition

Creates an absolute path.

---

## Why Needed

Applications often require the complete path from the root directory.

---

## Syntax

```js
path.resolve();
```

---

## Example

```js
const path = require("path");

console.log(
path.resolve("uploads")
);
```

---

## Output

```text
C:\Project\uploads
```

(Example Windows Path)

---

## Real World Example

Locating configuration files.

```js
const configPath =
path.resolve("config.json");
```

---

# basename()

## Definition

Returns only the file name from a path.

---

## Syntax

```js
path.basename(path);
```

---

## Example

```js
const path = require("path");

console.log(
path.basename("/users/docs/file.txt")
);
```

---

## Output

```text
file.txt
```

---

## Real World Example

Extract uploaded file names.

---

# dirname()

## Definition

Returns the directory name from a path.

---

## Example

```js
const path = require("path");

console.log(
path.dirname("/users/docs/file.txt")
);
```

---

## Output

```text
/users/docs
```

---

## Real World Example

Finding parent folders.

---

# extname()

## Definition

Returns the file extension.

---

## Example

```js
const path = require("path");

console.log(
path.extname("resume.pdf")
);
```

---

## Output

```text
.pdf
```

---

## Real World Example

File Validation

```js
if(path.extname(file) === ".jpg"){
   console.log("Image File");
}
```

---

# normalize()

## Definition

Removes unnecessary path separators and fixes path format.

---

## Example

```js
const path = require("path");

console.log(
path.normalize("users//docs///file.txt")
);
```

---

## Output

```text
users/docs/file.txt
```

---

## Real World Example

Cleaning user-provided paths.

---

# parse()

## Definition

Breaks a path into an object.

---

## Example

```js
const path = require("path");

console.log(
path.parse("/users/docs/file.txt")
);
```

---

## Output

```js
{
 root: '/',
 dir: '/users/docs',
 base: 'file.txt',
 ext: '.txt',
 name: 'file'
}
```

---

## Real World Example

Extracting file metadata.

---

# Sample Program 1

## Upload File Path

```js
const path = require("path");

const uploadPath =
path.join(
    __dirname,
    "uploads",
    "image.jpg"
);

console.log(uploadPath);
```

---

# Sample Program 2

## File Extension Checker

```js
const path = require("path");

const file = "resume.pdf";

console.log(
path.extname(file)
);
```

Output:

```text
.pdf
```

---

# Real World Examples

## File Upload System

```text
Image Upload
      │
      ▼
Path Module
      │
      ▼
uploads/profile.jpg
```

---

## Log Management

```js
const logFile =
path.join(
   __dirname,
   "logs",
   "app.log"
);
```

---

## Configuration Files

```js
const config =
path.resolve("config.json");
```

---

# Advantages

- Cross-platform compatibility
- Cleaner path handling
- Safer file operations
- Reduces path-related bugs

---

# Disadvantages

- None significant
- Requires understanding path behavior across OS

---

# Interview Answer

The Path Module is a built-in Node.js module used to handle and manipulate file and directory paths safely across operating systems.

---

# Fresher Interview Questions

### What is the Path Module?

A built-in Node.js module for working with file paths.

---

### Do we need to install Path Module?

No.

It is a core module.

---

### What does join() do?

Combines multiple path segments.

---

### What does extname() return?

File extension.

---

# 1–2 Years Interview Questions

### Difference between join() and resolve()?

join()

- Combines path segments.

resolve()

- Returns absolute path.

---

### Why use extname()?

To identify file types.

---

### What does dirname() return?

Parent directory path.

---

# 3–6 Years Interview Questions

### Why should paths not be hardcoded?

Different operating systems use different path separators.

---

### How does path.resolve() work internally?

It resolves relative paths into absolute paths using the current working directory.

---

### Why is path.join() preferred?

It automatically handles platform-specific separators.

---

# Tricky Questions

## Question 1

```js
console.log(
path.extname("file")
);
```

Output:

```text
""
```

No extension exists.

---

## Question 2

```js
console.log(
path.basename("resume.pdf")
);
```

Output:

```text
resume.pdf
```

---

## Question 3

```js
console.log(
path.dirname("resume.pdf")
);
```

Output:

```text
.
```

Current directory.

---

## Question 4

```js
console.log(
path.parse("demo.js").name
);
```

Output:

```text
demo
```

---

# Coding Questions

## Q1. Extract File Extension

```js
const path = require("path");

console.log(
path.extname("image.png")
);
```

Output:

```text
.png
```

---

## Q2. Extract File Name

```js
const path = require("path");

console.log(
path.basename("/docs/report.pdf")
);
```

Output:

```text
report.pdf
```

---

## Q3. Create Upload Path

```js
const path = require("path");

const uploadPath =
path.join(
   __dirname,
   "uploads",
   "image.jpg"
);

console.log(uploadPath);
```

---

# Summary

In this chapter, we learned:

- Path Module
- join()
- resolve()
- basename()
- dirname()
- extname()
- normalize()
- parse()
- Real-world examples
- Coding questions
- Interview questions

The Path Module is essential for handling file and folder paths safely and consistently in Node.js applications.

---

## Next Topic

➡️ OS Module

Topics Covered:

- os.platform()
- os.arch()
- os.cpus()
- os.hostname()
- os.freemem()
- os.totalmem()
- os.uptime()

---

<!-- Bottom Navigation -->

<p align="left">
 <button><a href="fs.md">⬅️ Previous</a></button>
</p>

<p align="right">
  <button>
    <a href="os-module.md">Next ➡️</a>
  </button>
</p>