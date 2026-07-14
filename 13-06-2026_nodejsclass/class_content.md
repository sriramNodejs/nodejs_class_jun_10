<!-- Navigation -->

<p align="right">
  <!-- <a href="../00-introduction/README.md">⬅️ Previous</a> | -->
  <a href="02-running-javascript.md">Next ➡️</a>
</p>

# 1. Setting Up Node.js

## Overview

Before developing Node.js applications, we need to set up a proper development environment.

A development environment consists of:

* Node.js Runtime
* Code Editor (IDE)
* Terminal / Command Prompt

Once installed, we can write, execute, and debug JavaScript applications outside the browser.

---

## Definition

Node.js setup refers to the process of installing the required tools needed to develop and execute JavaScript applications on a local machine.

The two primary requirements are:

1. IDE (Integrated Development Environment)
2. Node.js Software

---

## Why Do We Need Node.js?

Originally, JavaScript could only run inside browsers.

Example:

```text
JavaScript
      ↓
Browser
      ↓
Execution
```

Developers wanted JavaScript to run on servers as well.

Node.js solved this problem.

Now:

```text
JavaScript
      ↓
Node.js Runtime
      ↓
Server Execution
```

Benefits:

* Build REST APIs
* Create Backend Applications
* Handle Databases
* Develop Real-Time Applications
* Build Full Stack Applications

---

## Development Environment Requirements

### 1. IDE (Code Editor)

An IDE is used to write, edit, debug, and manage source code.

Recommended IDE:

```text
Visual Studio Code (VS Code)
```

Why VS Code?

* Lightweight
* Free
* Extension Support
* Auto Completion
* Integrated Terminal
* Debugging Tools

Other IDEs:

* WebStorm
* Sublime Text
* Notepad++

---

### 2. Node.js Software

Node.js is a JavaScript Runtime Environment.

Download:

```text
https://nodejs.org
```

Choose:

```text
LTS Version (Recommended)
```

LTS = Long Term Support

Used in production environments.

---

## Installation Steps

### Step 1

Download Node.js from:

```text
https://nodejs.org
```

### Step 2

Run the installer.

### Step 3

Complete installation using default settings.

### Step 4

Verify installation.

Open terminal:

```bash
node -v
```

Example Output:

```bash
v24.2.0
```

Check npm:

```bash
npm -v
```

Example Output:

```bash
11.3.0
```

---

## What Gets Installed?

When Node.js is installed:

```text
Node.js
   │
   ├── V8 Engine
   ├── npm
   ├── Core Modules
   └── Runtime Environment
```

### V8 Engine

Executes JavaScript code.

### npm

Node Package Manager.

Used to install libraries and packages.

### Core Modules

Built-in modules such as:

* fs
* http
* path
* os

---

## Internal Working

When you execute:

```bash
node app.js
```

Node.js performs:

```text
app.js
   ↓
Node.js Runtime
   ↓
V8 Engine
   ↓
Machine Code
   ↓
Execution
```

---

## Architecture

```text
Developer
    ↓
VS Code
    ↓
JavaScript File
    ↓
Node.js Runtime
    ↓
V8 Engine
    ↓
Operating System
    ↓
Execution
```

---

## Real-World Example

Suppose you want to create:

```text
Online Shopping Application
```

Backend requirements:

* User Login
* Product APIs
* Payment APIs
* Database Connection

Node.js provides the runtime environment to build all these backend services.

---

## Common Verification Commands

Check Node.js Version:

```bash
node -v
```

Check npm Version:

```bash
npm -v
```

Check Installation Location:

```bash
where node
```

Linux/Mac:

```bash
which node
```

---

# Interview Questions

## Fresher Level

### What is Node.js?

Node.js is a JavaScript Runtime Environment that allows JavaScript to run outside the browser.

### Why do we install Node.js?

To execute JavaScript on servers and local machines outside the browser.

### What is npm?

npm (Node Package Manager) is used to install and manage packages.

### What is the recommended Node.js version?

LTS (Long Term Support).

---

## 1–2 Years Experience

### What components are installed with Node.js?

* V8 Engine
* npm
* Core Modules
* Runtime Environment

### What happens internally when we execute:

```bash
node app.js
```

Node.js loads the file, sends JavaScript code to the V8 Engine, which compiles and executes it.

### Difference between Node.js and V8?

| Node.js             | V8                    |
| ------------------- | --------------------- |
| Runtime Environment | JavaScript Engine     |
| Provides APIs       | Executes JavaScript   |
| Uses V8 internally  | Core execution engine |

---

## Experienced Level

### Why should production applications use the LTS version?

Because it receives:

* Security Updates
* Bug Fixes
* Long-Term Support
* Better Stability

### Can Node.js work without V8?

No.

Node.js depends on V8 to execute JavaScript.

---

# Tricky Interview Questions

### Is Node.js a Programming Language?

❌ No

Node.js is a Runtime Environment.

---

### Is Node.js a Framework?

❌ No

Node.js is not a framework.

---

### Is Node.js a Library?

❌ No

Node.js is not a library.

---

### Does Node.js compile JavaScript?

Indirectly.

Node.js uses the V8 Engine, which compiles JavaScript into machine code.

---

### Can JavaScript run without Node.js?

✅ Yes

Inside browsers.

---

### Can Node.js run without JavaScript?

❌ No

Node.js is specifically designed to execute JavaScript.

---

## Summary

In this chapter, we learned:

* Why Node.js is needed
* How to install Node.js
* What gets installed with Node.js
* The role of V8 Engine
* The role of npm
* How Node.js executes JavaScript
* Verification commands
* Common interview questions

---

## Next Topic

➡️ Running JavaScript on Your Machine

<!-- <p align="left">
  <a href="../00-introduction/README.md">⬅️ Previous</a>
</p> -->

<p align="right">
  <a href="02-running-javascript.md">Next ➡️</a>
</p>
