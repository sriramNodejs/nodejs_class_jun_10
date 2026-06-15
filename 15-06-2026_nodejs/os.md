<!-- Navigation -->

<p align="right">
  <button><a href="os.md">⬅️ Previous</a></button>
  <button>
    <a href="HTTP.md">Next ➡️</a>
  </button>
</p>

# OS Module

> The OS (Operating System) Module is a built-in Node.js core module used to retrieve information about the operating system, CPU, memory, hostname, uptime, and system architecture.

---

# Overview

Every Node.js application runs on an Operating System.

Sometimes applications need system information such as:

- Operating System Name
- CPU Information
- Memory Details
- Hostname
- System Uptime
- Architecture

The OS Module provides this information.

---

# Definition

The OS Module is a built-in Node.js module used to interact with and retrieve information about the operating system.

No installation is required.

Import:

```js
const os = require("os");
```

---

# Why Needed

Imagine you're building:

- Monitoring Tools
- Server Health Dashboards
- DevOps Applications
- Cloud Management Systems

These applications need system information.

The OS module provides access to that information.

---

# Internal Working

```text
Node.js Application
         │
         ▼
      OS Module
         │
         ▼
   Operating System
         │
         ▼
   System Information
```

---

# Architecture

```text
Application
     │
     ▼
 OS Module
     │
     ▼
 Operating System
     │
     ▼
 Hardware Resources
```

---

# Diagram

```text
CPU
RAM
Storage
OS
 │
 ▼
OS Module
 │
 ▼
Node.js Application
```

---

# Common OS Module Methods

```text
OS Module
│
├── platform()
├── arch()
├── cpus()
├── hostname()
├── freemem()
├── totalmem()
├── uptime()
├── homedir()
├── userInfo()
└── networkInterfaces()
```

---

# os.platform()

## Definition

Returns the operating system platform.

---

## Syntax

```js
os.platform();
```

---

## Example

```js
const os = require("os");

console.log(os.platform());
```

---

## Output

```text
win32
```

or

```text
linux
```

or

```text
darwin
```

(macOS)

---

## Real World Example

Running different logic based on OS.

```js
if(os.platform() === "win32"){
    console.log("Windows Machine");
}
```

---

# os.arch()

## Definition

Returns CPU architecture.

---

## Example

```js
const os = require("os");

console.log(os.arch());
```

---

## Output

```text
x64
```

---

## Real World Example

Checking application compatibility.

---

# os.hostname()

## Definition

Returns machine hostname.

---

## Example

```js
const os = require("os");

console.log(os.hostname());
```

---

## Output

```text
DESKTOP-ABC123
```

---

## Real World Example

Server identification.

---

# os.freemem()

## Definition

Returns available system memory in bytes.

---

## Example

```js
const os = require("os");

console.log(os.freemem());
```

---

## Output

```text
8457830400
```

Example value.

---

## Real World Example

Monitoring available server memory.

---

# os.totalmem()

## Definition

Returns total system memory.

---

## Example

```js
const os = require("os");

console.log(os.totalmem());
```

---

## Output

```text
17179869184
```

Example value.

---

## Real World Example

Server monitoring dashboards.

---

# os.uptime()

## Definition

Returns system uptime in seconds.

---

## Example

```js
const os = require("os");

console.log(os.uptime());
```

---

## Output

```text
3600
```

Meaning:

```text
1 Hour
```

---

## Real World Example

Server health monitoring.

---

# os.cpus()

## Definition

Returns information about all CPU cores.

---

## Example

```js
const os = require("os");

console.log(os.cpus());
```

---

## Output

```js
[
  {
    model: 'Intel Core i7',
    speed: 2800
  }
]
```

Example structure.

---

## Real World Example

Performance monitoring systems.

---

# os.homedir()

## Definition

Returns current user's home directory.

---

## Example

```js
const os = require("os");

console.log(os.homedir());
```

---

## Output

```text
C:\Users\Admin
```

---

## Real World Example

Storing user-specific files.

---

# os.userInfo()

## Definition

Returns information about the current user.

---

## Example

```js
const os = require("os");

console.log(os.userInfo());
```

---

## Output

```js
{
  username: 'Admin',
  homedir: 'C:\\Users\\Admin'
}
```

---

## Real World Example

User session management.

---

# os.networkInterfaces()

## Definition

Returns network interface details.

---

## Example

```js
const os = require("os");

console.log(os.networkInterfaces());
```

---

## Real World Example

Network monitoring applications.

---

# Sample Program 1

## System Information Dashboard

```js
const os = require("os");

console.log("Platform :", os.platform());
console.log("Architecture :", os.arch());
console.log("Hostname :", os.hostname());
```

---

## Output

```text
Platform : win32
Architecture : x64
Hostname : DESKTOP-ABC123
```

---

# Sample Program 2

## Memory Information

```js
const os = require("os");

console.log("Free Memory :", os.freemem());
console.log("Total Memory :", os.totalmem());
```

---

# Real World Examples

## Server Monitoring Tool

```text
OS Module
    │
    ▼
CPU Usage
RAM Usage
Hostname
Uptime
```

---

## Cloud Dashboard

```text
AWS Server
      │
      ▼
OS Module
      │
      ▼
Display Metrics
```

---

## DevOps Monitoring

```text
Node.js App
      │
      ▼
OS Module
      │
      ▼
System Statistics
```

---

# Advantages

- Built-in module
- No installation required
- Useful for monitoring systems
- Provides hardware information

---

# Disadvantages

- Read-only information
- Cannot directly control hardware

---

# Interview Answer

The OS Module is a built-in Node.js module used to retrieve information about the operating system such as CPU details, memory information, hostname, uptime, and system architecture.

---

# Fresher Interview Questions

### What is the OS Module?

A Node.js core module used to retrieve operating system information.

---

### Do we need to install it?

No.

It is built-in.

---

### What does os.platform() return?

Operating system platform.

---

### What does os.arch() return?

CPU architecture.

---

### What does os.hostname() return?

Machine hostname.

---

# 1–2 Years Interview Questions

### Difference between freemem() and totalmem()?

freemem()

Returns available memory.

totalmem()

Returns total memory.

---

### Why use os.uptime()?

To know how long the system has been running.

---

### What does os.cpus() return?

CPU core information.

---

# 3–6 Years Interview Questions

### How would you build a server monitoring dashboard using Node.js?

Using:

- OS Module
- HTTP Module
- Database
- Frontend Dashboard

---

### Why is OS Module useful in cloud applications?

It provides runtime system metrics.

---

### How can memory information help application performance?

It helps identify memory bottlenecks and resource issues.

---

# Tricky Questions

## Question 1

```js
console.log(typeof os.platform());
```

Output:

```text
string
```

---

## Question 2

```js
console.log(typeof os.freemem());
```

Output:

```text
number
```

---

## Question 3

```js
console.log(os.arch());
```

Possible Output:

```text
x64
```

Not:

```text
Windows
```

Architecture and platform are different.

---

## Question 4

Difference between:

```js
os.platform()
```

and

```js
os.arch()
```

platform()

```text
win32
linux
darwin
```

arch()

```text
x64
arm64
```

---

# Coding Questions

## Q1. Display Platform

```js
const os = require("os");

console.log(os.platform());
```

---

## Q2. Display Hostname

```js
const os = require("os");

console.log(os.hostname());
```

---

## Q3. Display Memory

```js
const os = require("os");

console.log(os.freemem());
console.log(os.totalmem());
```

---

## Q4. Display CPU Count

```js
const os = require("os");

console.log(os.cpus().length);
```

---

## Output

```text
8
```

Example CPU core count.

---

# Summary

In this chapter, we learned:

- OS Module
- platform()
- arch()
- cpus()
- hostname()
- freemem()
- totalmem()
- uptime()
- homedir()
- userInfo()
- networkInterfaces()
- Real-world examples
- Coding questions
- Interview questions

The OS Module is widely used in monitoring, DevOps, cloud applications, and server management tools.

---

## Next Topic

➡️ HTTP Module

Topics Covered:

- Creating Server
- req Object
- res Object
- Routes
- Status Codes
- Headers
- JSON Response
- REST API Basics

---

<!-- Bottom Navigation -->

<p align="left">
  <button>
    <a href="path.md">⬅️ Previous</a>
  </button>
</p>

<p align="right">
  <button>
    <a href="HTTP.md">Next ➡️</a>
  </button>
</p>