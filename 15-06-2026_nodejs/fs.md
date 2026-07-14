<p align="right">
  <!-- <a href="fs.md">⬅️ Previous</a> | -->
  <button>
    <a href="path-module.md">Next ➡️</a>
  </button>
</p>

# FS (File System) Module

## Overview

The FS (File System) module is one of the most important built-in modules in Node.js.

It allows Node.js applications to interact with files and directories stored on the operating system.

Using the FS module, we can:

- Create files
- Read files
- Update files
- Delete files
- Create folders
- Delete folders

Almost every backend application uses the FS module.

---

## Definition

The FS (File System) module is a built-in Node.js module used to perform file and directory operations.

Since it is a built-in module, no installation is required.

Import:

```js
const fs = require("fs");
```

---

## Why Needed

Imagine an application that needs to:

- Store user logs
- Generate reports
- Upload files
- Read configuration files
- Store application data

Without the FS module, Node.js cannot interact with files stored on the system.

---

## Internal Working

When a file operation is requested:

```text
Application
      │
      ▼
FS Module
      │
      ▼
Operating System
      │
      ▼
File System
      │
      ▼
Result
```

---

## Architecture

```text
Node.js Application
         │
         ▼
      FS Module
         │
         ▼
 Operating System
         │
         ▼
 Hard Disk / SSD
```

---

## Diagram

```text
index.js
    │
    ▼
FS Module
    │
    ▼
Read / Write File
    │
    ▼
Operating System
```

---

# Synchronous Methods

## Definition

Synchronous methods execute one task at a time.

The next line waits until the current operation completes.

---

## Example

```js
const fs = require("fs");

const data = fs.readFileSync("demo.txt", "utf8");

console.log(data);

console.log("Completed");
```

---

## Flow

```text
Read File
   │
   ▼
Wait
   │
   ▼
Data Received
   │
   ▼
Next Statement
```

---

## Advantages

- Easy to understand
- Good for scripts

---

## Disadvantages

- Blocks execution
- Not recommended for high-traffic applications

---

# Asynchronous Methods

## Definition

Asynchronous methods do not block execution.

Node.js continues executing other code while the operation runs.

---

## Example

```js
const fs = require("fs");

fs.readFile("demo.txt","utf8",(err,data)=>{
    console.log(data);
});

console.log("Completed");
```

---

## Output

```text
Completed
File Content
```

---

## Flow

```text
Read File
   │
   ▼
Continue Execution
   │
   ▼
File Ready
   │
   ▼
Callback Executes
```

---

## Advantages

- Faster
- Non-blocking
- Better performance

---

# readFile()

## Definition

Used to read data from a file asynchronously.

---

## Syntax

```js
fs.readFile(path, encoding, callback);
```

---

## Example

```js
const fs = require("fs");

fs.readFile("demo.txt","utf8",(err,data)=>{

    if(err){
        console.log(err);
        return;
    }

    console.log(data);
});
```

---

## Output

```text
Hello Node.js
```

---

## Real World Example

Reading:

- Configuration Files
- JSON Data
- User Uploads

---

# writeFile()

## Definition

Used to create a file or overwrite existing content.

---

## Syntax

```js
fs.writeFile(path,data,callback);
```

---

## Example

```js
const fs = require("fs");

fs.writeFile(
    "demo.txt",
    "Hello Node.js",
    (err)=>{
        if(err){
            console.log(err);
            return;
        }

        console.log("File Created");
    }
);
```

---

## Output

```text
File Created
```

---

## Real World Example

Used for:

- Log Files
- Report Generation
- Data Export

---

# appendFile()

## Definition

Adds new content to an existing file.

---

## Example

```js
const fs = require("fs");

fs.appendFile(
    "demo.txt",
    "\nNew Content",
    (err)=>{
        if(err){
            console.log(err);
            return;
        }

        console.log("Content Added");
    }
);
```

---

## Output

```text
Content Added
```

---

## Real World Example

Application Logs

```text
User Logged In
User Logged Out
```

---

# unlink()

## Definition

Used to delete a file.

---

## Example

```js
const fs = require("fs");

fs.unlink("demo.txt",(err)=>{

    if(err){
        console.log(err);
        return;
    }

    console.log("File Deleted");
});
```

---

## Output

```text
File Deleted
```

---

## Real World Example

Deleting:

- Temporary Files
- Old Reports
- User Uploads

---

# mkdir()

## Definition

Used to create a new directory (folder).

---

## Example

```js
const fs = require("fs");

fs.mkdir("uploads",(err)=>{

    if(err){
        console.log(err);
        return;
    }

    console.log("Folder Created");
});
```

---

## Output

```text
Folder Created
```

---

## Real World Example

Creating:

```text
uploads
images
reports
logs
```

folders dynamically.

---

# rmdir()

## Definition

Used to remove a directory.

---

## Example

```js
const fs = require("fs");

fs.rmdir("uploads",(err)=>{

    if(err){
        console.log(err);
        return;
    }

    console.log("Folder Deleted");
});
```

---

## Output

```text
Folder Deleted
```

---

# Sample Program 1

## Create and Read File

```js
const fs = require("fs");

fs.writeFile(
    "student.txt",
    "Rahul",
    (err)=>{

        if(err){
            console.log(err);
            return;
        }

        fs.readFile(
            "student.txt",
            "utf8",
            (err,data)=>{

                console.log(data);
            }
        );
    }
);
```

Output:

```text
Rahul
```

---

# Sample Program 2

## Student Report

```js
const fs = require("fs");

const report = `
Name : Rahul
Marks : 90
Result : Pass
`;

fs.writeFile(
    "report.txt",
    report,
    (err)=>{
        console.log("Report Generated");
    }
);
```

---

# Real World Examples

## Logging System

```js
fs.appendFile(
    "logs.txt",
    "User Logged In\n",
    ()=>{}
);
```

---

## File Upload System

```text
User Uploads Image
        │
        ▼
FS Module
        │
        ▼
Store In uploads Folder
```

---

## Report Generation

```text
Database Data
      │
      ▼
Generate Report
      │
      ▼
Write To File
```

---

# Fresher Interview Questions

### What is the FS module?

FS is a built-in Node.js module used for file and folder operations.

---

### Do we need to install FS?

No.

It is a built-in module.

---

### Difference between readFile and readFileSync?

readFile → Asynchronous

readFileSync → Synchronous

---

### What does writeFile do?

Creates or overwrites a file.

---

### What does appendFile do?

Adds content to an existing file.

---

# 1-2 Years Interview Questions

### Why are asynchronous methods preferred?

Because they do not block the event loop.

---

### What happens if a file does not exist in readFile?

An error is returned in the callback.

---

### Difference between writeFile and appendFile?

writeFile replaces content.

appendFile adds content.

---

# 3-6 Years Interview Questions

### Why should synchronous methods be avoided in production?

They block the event loop and reduce application performance.

---

### Explain FS module interaction with Event Loop.

Asynchronous FS operations are delegated to libuv thread pool and callbacks execute after completion.

---

### How does Node.js handle large file operations?

Using Streams instead of reading the entire file into memory.

---

# Tricky Questions

## Question 1

```js
fs.writeFile(
  "demo.txt",
  "Hello",
  ()=>{}
);
```

File exists already.

What happens?

### Answer

Existing content is overwritten.

---

## Question 2

```js
fs.readFile(
 "missing.txt",
 "utf8",
 (err,data)=>{
    console.log(data);
 });
```

Output?

### Answer

```text
undefined
```

Error object contains file-not-found information.

---

## Question 3

Which is faster?

```text
readFileSync
readFile
```

Answer:

```text
readFile
```

Because it is non-blocking.

---

# Coding Questions

## Q1. Create a File

```js
const fs = require("fs");

fs.writeFile(
    "demo.txt",
    "Hello World",
    ()=>{}
);
```

---

## Q2. Read a File

```js
const fs = require("fs");

fs.readFile(
    "demo.txt",
    "utf8",
    (err,data)=>{
        console.log(data);
    }
);
```

---

## Q3. Append Content

```js
const fs = require("fs");

fs.appendFile(
    "demo.txt",
    "\nNode.js",
    ()=>{}
);
```

---

## Q4. Delete File

```js
const fs = require("fs");

fs.unlink(
    "demo.txt",
    ()=>{}
);
```

---

# Summary

In this chapter, we learned:

- FS Module
- Synchronous Methods
- Asynchronous Methods
- readFile()
- writeFile()
- appendFile()
- unlink()
- mkdir()
- rmdir()
- Real-world examples
- Coding questions
- Interview questions

The FS module is one of the most important Node.js core modules because it enables applications to interact with files and folders on the operating system.


<!-- Navigation -->

<p align="right">
  <!-- <a href="fs.md">⬅️ Previous</a> | -->
  <button>
    <a href="path-module.md">Next ➡️</a>
  </button>
</p>

<!-- # FS (File System) Module

> Node.js Core Module used for file and folder operations.

---

<!-- Your Complete FS Content Here -->

--- -->