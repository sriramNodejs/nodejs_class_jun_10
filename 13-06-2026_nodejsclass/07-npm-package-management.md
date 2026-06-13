<!-- Navigation -->

<p align="right">
    <button><a href="06-types-of-modules.md">⬅️ Previous</a></button> |
  <button><a href="08-core-modules-overview.md">Next ➡️</a></button>
</p>

# 7. NPM Package Management

## Overview

NPM (Node Package Manager) is the default package manager for Node.js.

It helps developers:

* Install Packages
* Update Packages
* Remove Packages
* Manage Dependencies
* Share Packages
* Build Applications Faster

When Node.js is installed, npm is automatically installed along with it.

Today, npm is the world's largest software package registry.

---

## Definition

NPM (Node Package Manager) is a tool used to manage JavaScript packages and dependencies in Node.js applications.

It consists of:

```text
NPM
 │
 ├── CLI (Command Line Interface)
 ├── Package Registry
 └── Package Management System
```

---

## Why Do We Need NPM?

Imagine building everything from scratch:

* Authentication
* Database Connection
* API Framework
* Password Encryption
* Environment Variables

Development would take a long time.

NPM solves this problem by allowing developers to install pre-built packages.

Example:

```bash
npm install express
```

Now we can create APIs without building an HTTP framework from scratch.

---

## Architecture

```text
Developer
     ↓
npm CLI
     ↓
NPM Registry
     ↓
Download Package
     ↓
node_modules
     ↓
Project Uses Package
```

---

## Internal Working

When you execute:

```bash
npm install express
```

NPM performs:

```text
npm install express
         ↓
Connect To Registry
         ↓
Download Package
         ↓
Download Dependencies
         ↓
Store In node_modules
         ↓
Update package.json
         ↓
Update package-lock.json
```

---

# What Gets Created?

After:

```bash
npm init -y
```

Project Structure:

```text
Project
│
├── package.json
├── package-lock.json
└── node_modules
```

---

## package.json

Contains project metadata.

Example:

```json
{
  "name": "node-app",
  "version": "1.0.0"
}
```

---

## package-lock.json

Locks dependency versions.

Purpose:

* Consistent installations
* Team collaboration
* Production stability

---

## node_modules

Stores installed packages.

Example:

```text
node_modules
│
├── express
├── mongoose
├── dotenv
└── bcrypt
```

---

# Installing Packages

## Install Latest Version

```bash
npm install express
```

Shortcut:

```bash
npm i express
```

---

## Sample Code

Install Express:

```bash
npm install express
```

Use:

```js
const express = require("express");

const app = express();

app.listen(3000);
```

---

## Output

```text
Server Running
```

---

## Real-World Example

Almost every Node.js backend application uses:

```bash
npm install express
```

for API development.

---

# Uninstalling Packages

## Remove Package

```bash
npm uninstall express
```

Shortcut:

```bash
npm remove express
```

---

## Internal Working

```text
npm uninstall express
          ↓
Remove Package
          ↓
Update package.json
          ↓
Update package-lock.json
```

---

## Real-World Example

Remove unused libraries to:

* Reduce project size
* Improve security
* Improve performance

---

# Dependencies

## Definition

Dependencies are packages required for the application to run.

Without these packages, the application will fail.

---

## Installation

```bash
npm install express
```

---

## package.json

```json
{
  "dependencies": {
    "express": "^5.0.0"
  }
}
```

---

## Why Needed?

Example:

```js
const express = require("express");
```

If Express is missing:

```text
Error: Cannot find module 'express'
```

---

## Real-World Example

Common Dependencies:

```text
express
mongoose
jsonwebtoken
bcrypt
axios
```

---

## Diagram

```text
Application
      ↓
Dependencies
      ↓
Required For Runtime
```

---

# Dev Dependencies

## Definition

Dev Dependencies are packages required only during development.

They are not needed in production.

---

## Installation

```bash
npm install nodemon --save-dev
```

Shortcut:

```bash
npm i nodemon -D
```

---

## package.json

```json
{
  "devDependencies": {
    "nodemon": "^3.0.0"
  }
}
```

---

## Why Needed?

Tools such as:

* nodemon
* eslint
* prettier
* jest

help during development but are not required when the application runs in production.

---

## Real-World Example

Install Nodemon:

```bash
npm i nodemon -D
```

Instead of:

```bash
node app.js
```

Use:

```bash
nodemon app.js
```

Automatically restarts the server whenever files change.

---

## Diagram

```text
Developer
     ↓
Dev Dependency
     ↓
Development Tools
     ↓
Not Required In Production
```

---

# Dependency vs Dev Dependency

| Feature              | Dependency   | Dev Dependency         |
| -------------------- | ------------ | ---------------------- |
| Needed In Production | Yes          | No                     |
| Installed Using      | npm install  | npm install --save-dev |
| Stored In            | dependencies | devDependencies        |
| Example              | express      | nodemon                |

---

# Installing Only Production Dependencies

## Why Needed?

Production servers do not require:

* nodemon
* eslint
* prettier
* testing libraries

Only runtime dependencies should be installed.

---

## Install Production Packages

```bash
npm install --production
```

or

```bash
npm ci --omit=dev
```

---

## Internal Working

```text
Production Server
        ↓
Install Dependencies
        ↓
Skip Dev Dependencies
        ↓
Reduced Size
        ↓
Faster Deployment
```

---

# Useful NPM Commands

## Initialize Project

```bash
npm init -y
```

---

## Install Package

```bash
npm install package-name
```

Example:

```bash
npm install express
```

---

## Uninstall Package

```bash
npm uninstall package-name
```

---

## Install Dev Dependency

```bash
npm install nodemon --save-dev
```

---

## List Installed Packages

```bash
npm list
```

---

## Show Package Version

```bash
npm view express version
```

---

## Update Package

```bash
npm update
```

---

# Real-World Project Structure

```text
Project
│
├── src
│
├── node_modules
│
├── package.json
│
├── package-lock.json
│
└── .env
```

---

# Advantages of NPM

* Huge Package Ecosystem
* Faster Development
* Community Support
* Easy Dependency Management
* Version Control

---

# Common Mistakes

## Mistake 1

Installing development tools as runtime dependencies.

Wrong:

```bash
npm install nodemon
```

Correct:

```bash
npm install nodemon --save-dev
```

---

## Mistake 2

Deleting package-lock.json randomly.

This may create version inconsistencies.

---

## Mistake 3

Committing node_modules to Git.

Wrong:

```text
Git Repository
 └── node_modules
```

Use:

```gitignore
node_modules
```

---

# Fresher Interview Questions

### What is NPM?

NPM is the default package manager for Node.js.

---

### What is package.json?

A file containing project metadata and dependencies.

---

### What is node_modules?

A directory where installed packages are stored.

---

### How do you install a package?

```bash
npm install express
```

---

### How do you uninstall a package?

```bash
npm uninstall express
```

---

# 1–2 Years Interview Questions

### What is the difference between dependency and devDependency?

Dependencies are required in production.

DevDependencies are required only during development.

---

### What is package-lock.json?

A file that locks dependency versions to ensure consistent installations.

---

### Why should node_modules not be committed to Git?

Because it increases repository size and can be regenerated using package.json.

---

# Experienced Interview Questions

### Why is npm ci preferred in CI/CD pipelines?

Because it installs exact versions from package-lock.json and is faster than npm install.

---

### How does npm resolve dependency versions?

Using semantic versioning rules defined in package.json.

---

### Why should production environments avoid devDependencies?

To reduce package size, improve security, and speed up deployments.

---

# Tricky Interview Questions

### Is npm a package?

❌ No

NPM is a package manager.

---

### Does Node.js require npm?

Node.js can run without npm, but npm is typically installed with Node.js.

---

### Can package.json exist without node_modules?

✅ Yes

node_modules can always be regenerated.

---

### Can an application run without package-lock.json?

✅ Yes

But dependency versions may differ across environments.

---

### Is nodemon a dependency or devDependency?

✅ Usually a Dev Dependency.

---

# Summary

In this chapter, we learned:

* What NPM is
* Installing Packages
* Uninstalling Packages
* Dependencies
* Dev Dependencies
* package.json
* package-lock.json
* node_modules
* Production Installations
* Useful NPM Commands
* Interview Questions
* Tricky Questions

NPM is one of the most important tools in the Node.js ecosystem because it simplifies package management and speeds up application development.

---

## Next Topic

➡️ Core Modules Overview (FS, HTTP, OS, Path, DNS, Buffer, Stream, Crypto, Events, Util)

<p align="left">
  <button><a href="06-types-of-modules.md">⬅️ Previous</a></button>
</p>

<p align="right">
  <button><a href="08-core-modules-overview.md">Next ➡️</a></button>
</p>
