<!-- Navigation -->

<p align="right">
  <a href="07-npm-package-management.md">⬅️ Previous</a> |
  <a href="../09-environment-variables-dotenv.md">Next ➡️</a>
</p>

# 8. Core Modules Overview

## Overview

Node.js provides several built-in modules known as **Core Modules**.

These modules are bundled with Node.js and do not require installation using npm.

Core modules provide essential functionality such as:

* File Handling
* HTTP Servers
* Operating System Information
* Path Manipulation
* DNS Operations
* Binary Data Handling
* Data Streaming
* Encryption
* Event Handling
* Utility Functions

---

## Definition

Core Modules are pre-built modules that come with Node.js.

Unlike third-party modules:

```bash
npm install express
```

Core modules require no installation.

Example:

```js
const fs = require("fs");
```

Node.js already knows where to find it.

---

## Why Do We Need Core Modules?

Without Core Modules, developers would need to implement common functionalities manually.

Examples:

* Reading files
* Creating servers
* Working with paths
* Encrypting passwords
* Handling events

Core Modules save development time and improve performance.

---

## Architecture

```text
Node.js Runtime
        │
        ├── FS
        ├── HTTP
        ├── OS
        ├── Path
        ├── DNS
        ├── Buffer
        ├── Stream
        ├── Crypto
        ├── Events
        └── Util
```

---

## Internal Working

```text
Application
      ↓
Import Core Module
      ↓
Node.js Resolver
      ↓
Built-in Module Found
      ↓
Module Loaded
      ↓
Execution
```

Unlike third-party modules, Node.js loads core modules directly from its internal implementation.

---

# 1. FS Module (File System)

## Definition

The `fs` module is used for interacting with files and directories.

---

## Why Needed?

Used for:

* Creating Files
* Reading Files
* Writing Files
* Updating Files
* Deleting Files

---

## Import

```js
const fs = require("fs");
```

---

## Sample Code

```js
const fs = require("fs");

fs.writeFileSync("sample.txt", "Hello Node.js");
```

---

## Real-World Example

* Log File Creation
* Configuration Files
* User Upload Storage

---

## Diagram

```text
Application
      ↓
FS Module
      ↓
File System
      ↓
Read / Write Files
```

---

# 2. HTTP Module

## Definition

The `http` module is used to create web servers.

---

## Why Needed?

Used for:

* APIs
* Backend Servers
* Request Handling
* Response Handling

---

## Import

```js
const http = require("http");
```

---

## Sample Code

```js
const http = require("http");

const server = http.createServer((req, res) => {
    res.end("Server Running");
});

server.listen(3000);
```

---

## Real-World Example

* REST APIs
* Backend Services
* Microservices

---

## Diagram

```text
Client
   ↓
HTTP Request
   ↓
Node Server
   ↓
HTTP Response
```

---

# 3. OS Module

## Definition

The `os` module provides information about the operating system.

---

## Why Needed?

Used for:

* CPU Information
* Memory Information
* Platform Details
* Host Information

---

## Import

```js
const os = require("os");
```

---

## Sample Code

```js
const os = require("os");

console.log(os.platform());
console.log(os.arch());
```

---

## Output

```text
win32
x64
```

---

## Real-World Example

Monitoring system resources.

---

## Diagram

```text
OS Module
      ↓
Operating System
      ↓
System Information
```

---

# 4. Path Module

## Definition

The `path` module is used to work with file and directory paths.

---

## Why Needed?

Used for:

* Joining Paths
* Resolving Paths
* Getting File Names

---

## Import

```js
const path = require("path");
```

---

## Sample Code

```js
const path = require("path");

console.log(path.join("users", "admin"));
```

---

## Output

```text
users/admin
```

---

## Real-World Example

Managing upload folders and configuration files.

---

## Diagram

```text
Path Module
      ↓
Path Operations
      ↓
Safe File Paths
```

---

# 5. DNS Module

## Definition

The `dns` module is used for DNS resolution.

---

## Why Needed?

Used for:

* Domain Lookup
* IP Resolution
* Network Diagnostics

---

## Import

```js
const dns = require("dns");
```

---

## Sample Code

```js
dns.lookup("google.com", (err, address) => {
    console.log(address);
});
```

---

## Real-World Example

Checking domain availability and connectivity.

---

## Diagram

```text
Domain Name
      ↓
DNS Module
      ↓
IP Address
```

---

# 6. Buffer Module

## Definition

Buffer is used for handling binary data directly in memory.

---

## Why Needed?

Used for:

* Images
* Audio
* Video
* File Uploads

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

---

## Real-World Example

Image uploads and streaming services.

---

## Diagram

```text
Text
  ↓
Buffer
  ↓
Binary Data
```

---

# 7. Stream Module

## Definition

Streams process data piece by piece instead of loading everything into memory.

---

## Why Needed?

Used for:

* Large Files
* Video Streaming
* Audio Streaming

---

## Import

```js
const fs = require("fs");

const stream = fs.createReadStream("largefile.txt");
```

---

## Real-World Example

Netflix and YouTube streaming.

---

## Diagram

```text
Large File
     ↓
Stream
     ↓
Chunks
     ↓
User
```

---

# 8. Crypto Module

## Definition

The `crypto` module provides cryptographic functionality.

---

## Why Needed?

Used for:

* Password Hashing
* Encryption
* Token Generation

---

## Import

```js
const crypto = require("crypto");
```

---

## Sample Code

```js
const crypto = require("crypto");

const hash = crypto
  .createHash("sha256")
  .update("password")
  .digest("hex");

console.log(hash);
```

---

## Real-World Example

User Authentication Systems.

---

## Diagram

```text
Password
     ↓
Crypto
     ↓
Hash Value
```

---

# 9. Events Module

## Definition

The `events` module helps implement event-driven programming.

---

## Why Needed?

Used for:

* Event Handling
* Notifications
* Custom Events

---

## Import

```js
const EventEmitter = require("events");
```

---

## Sample Code

```js
const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("login", () => {
    console.log("User Logged In");
});

emitter.emit("login");
```

---

## Output

```text
User Logged In
```

---

## Real-World Example

Email Notifications and User Activities.

---

## Diagram

```text
Event Triggered
       ↓
EventEmitter
       ↓
Listener Executes
```

---

# 10. Util Module

## Definition

The `util` module provides helper functions for developers.

---

## Why Needed?

Used for:

* Debugging
* Formatting
* Promisifying Callbacks

---

## Import

```js
const util = require("util");
```

---

## Sample Code

```js
const util = require("util");

console.log(util.types.isDate(new Date()));
```

---

## Output

```text
true
```

---

## Real-World Example

Converting callback-based code into Promise-based code.

---

## Diagram

```text
Utility Functions
        ↓
Util Module
        ↓
Developer Productivity
```

---

# Core Modules Summary Table

| Module | Purpose                      |
| ------ | ---------------------------- |
| fs     | File System Operations       |
| http   | Create Web Servers           |
| os     | Operating System Information |
| path   | Path Manipulation            |
| dns    | Domain Resolution            |
| Buffer | Binary Data                  |
| stream | Data Streaming               |
| crypto | Encryption & Hashing         |
| events | Event Handling               |
| util   | Utility Functions            |

---

# Real-World Architecture

```text
Node.js Application
│
├── FS       → Files
├── HTTP     → APIs
├── OS       → System Info
├── Path     → Paths
├── DNS      → Domain Lookup
├── Buffer   → Binary Data
├── Stream   → Large Files
├── Crypto   → Security
├── Events   → Notifications
└── Util     → Helpers
```

---

# Fresher Interview Questions

### What are Core Modules?

Built-in modules provided by Node.js.

---

### Do Core Modules require installation?

No.

---

### Which module is used to create a server?

```js
http
```

---

### Which module is used for file operations?

```js
fs
```

---

### Which module is used for encryption?

```js
crypto
```

---

# 1–2 Years Interview Questions

### What is the difference between Buffer and Stream?

Buffer loads data into memory.

Stream processes data in chunks.

---

### Why is Stream preferred for large files?

Because it reduces memory usage.

---

### What is EventEmitter?

A class used to create and handle custom events.

---

# Experienced Interview Questions

### Why are Streams important in high-performance applications?

They prevent memory overload and improve scalability.

---

### When would you use DNS module directly?

For custom networking tools and diagnostics.

---

### Why is crypto preferred over custom encryption logic?

Because it is secure, optimized, and maintained by Node.js.

---

# Tricky Interview Questions

### Is Buffer a Core Module?

❌ Not exactly.

Buffer is a Global Object available in Node.js.

---

### Is EventEmitter a module?

❌ No.

It is a class provided by the events module.

---

### Can HTTP module create REST APIs without Express?

✅ Yes.

---

### Does fs work asynchronously?

✅ Yes.

It supports both synchronous and asynchronous methods.

---

### Which is faster: Buffer or Stream?

Neither is universally faster.

Streams are more memory efficient for large data.

---

# Summary

In this chapter, we learned:

* What Core Modules are
* Why they are needed
* FS Module
* HTTP Module
* OS Module
* Path Module
* DNS Module
* Buffer
* Stream Module
* Crypto Module
* Events Module
* Util Module
* Interview Questions
* Tricky Questions

Core Modules are the foundation of Node.js development because they provide powerful built-in functionality without requiring external packages.

---

## Next Topic

➡️ Environment Variables & dotenv (.env)

<p align="left">
  <button><a href="07-npm-package-management.md">⬅️ Previous</a></button>
</p>

<p align="right">
  <button><a href="09-environment-variables-dotenv.md">Next ➡️</a></button>
</p>
