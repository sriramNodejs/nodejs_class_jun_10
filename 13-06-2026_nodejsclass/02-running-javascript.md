<!-- Navigation -->

<p align="right">
  <button><a href="class_content.md">⬅️ Previous</a></button> |
  <button><a href="03-global_objects.md">Next ➡️</a></button>
</p>
  <

# 2. Running JavaScript on Your Machine

## Overview

Before building applications, it is important to understand how JavaScript code is executed.

JavaScript can run in two environments:

1. Browser Environment
2. Node.js Environment

Both environments execute JavaScript, but they provide different features and use cases.

---

## Definition

Running JavaScript means executing JavaScript code using a JavaScript Engine.

JavaScript can be executed:

* Inside a Browser
* Inside Node.js Runtime

---

## Why Do We Need Different Execution Environments?

Originally, JavaScript was designed to run only in browsers.

Example:

```text
JavaScript
      ↓
Browser
      ↓
Execution
```

Later, Node.js was introduced.

Now JavaScript can also run on servers.

```text
JavaScript
      ↓
Node.js Runtime
      ↓
Execution
```

This allows developers to use JavaScript for both:

* Frontend Development
* Backend Development

---

# Browser Environment

A browser executes JavaScript using its built-in JavaScript Engine.

Examples:

| Browser | JavaScript Engine |
| ------- | ----------------- |
| Chrome  | V8                |
| Firefox | SpiderMonkey      |
| Safari  | JavaScriptCore    |
| Edge    | V8                |

JavaScript can be executed in two ways.

---

## Method 1: Using Script Tag

The `<script>` tag allows us to write JavaScript directly inside an HTML file.

### Example

```html
<!DOCTYPE html>
<html>
<head>
    <title>JavaScript Demo</title>
</head>
<body>

    <h1>Hello JavaScript</h1>

    <script>
        console.log("Hello from Script Tag");
    </script>

</body>
</html>
```

### Execution Flow

```text
HTML File
    ↓
Browser Loads HTML
    ↓
<script> Tag Found
    ↓
JavaScript Engine
    ↓
Execution
```

### Output

```text
Hello from Script Tag
```

---

## Method 2: Using External JavaScript File

Instead of writing JavaScript inside HTML, we can place it in a separate file.

### index.html

```html
<!DOCTYPE html>
<html>
<body>

<script src="index.js"></script>

</body>
</html>
```

### index.js

```js
console.log("Hello from External File");
```

### Execution Flow

```text
HTML File
    ↓
script src
    ↓
Loads index.js
    ↓
JavaScript Engine
    ↓
Execution
```

### Benefits

* Better Code Organization
* Reusability
* Easier Maintenance
* Cleaner HTML Files

### Real-World Usage

Most production applications use external JavaScript files.

---

# Node.js Environment

Node.js allows JavaScript to run outside the browser.

Node.js uses the V8 JavaScript Engine internally.

JavaScript can be executed in two ways.

---

## Method 1: Running a JavaScript File

Create a file:

### index.js

```js
console.log("Hello Node.js");
```

Run the file:

```bash
node index.js
```

### Output

```text
Hello Node.js
```

### Execution Flow

```text
index.js
    ↓
Node.js Runtime
    ↓
V8 Engine
    ↓
Execution
```

---

## Method 2: Node.js REPL

REPL stands for:

```text
R → Read
E → Evaluate
P → Print
L → Loop
```

### What is REPL?

REPL is an interactive shell provided by Node.js where developers can execute JavaScript code directly without creating a file.

Start REPL:

```bash
node
```

### Example

```bash
> 10 + 20
30

> "hello".toUpperCase()
HELLO

> true && false
false
```

Exit REPL:

```bash
.exit
```

or

```bash
Ctrl + C (twice)
```

---

## Internal Working of REPL

```text
User Input
      ↓
Read
      ↓
Evaluate
      ↓
Print Result
      ↓
Wait For Next Input
      ↓
Loop
```

### Why Use REPL?

* Quick Testing
* Learning JavaScript
* Debugging Expressions
* Trying Small Code Snippets

---

# Browser vs Node.js

| Feature            | Browser              | Node.js             |
| ------------------ | -------------------- | ------------------- |
| Purpose            | Frontend Development | Backend Development |
| HTML Required      | Yes                  | No                  |
| DOM Access         | Yes                  | No                  |
| File System Access | No                   | Yes                 |
| APIs Creation      | No                   | Yes                 |
| Runtime            | Browser Engine       | Node.js Runtime     |

---

# Architecture

## Browser Execution

```text
HTML File
    ↓
Browser
    ↓
JavaScript Engine
    ↓
Execution
```

---

## Node.js Execution

```text
JavaScript File
      ↓
Node.js Runtime
      ↓
V8 Engine
      ↓
Execution
```

---

# Real-World Examples

## Browser Example

A user clicks a button on a website.

```js
button.addEventListener("click", () => {
    alert("Button Clicked");
});
```

This code runs inside the browser.

---

## Node.js Example

Creating a backend API.

```js
console.log("Server Started");
```

This code runs inside Node.js.

---

# Interview Questions

## Fresher Level

### How can JavaScript run in a browser?

Using:

* Script Tag
* External JavaScript File

### How do you run a JavaScript file using Node.js?

```bash
node index.js
```

### What is REPL?

REPL stands for:

* Read
* Evaluate
* Print
* Loop

---

## 1–2 Years Experience

### Why is an external JavaScript file preferred?

Because it improves:

* Maintainability
* Reusability
* Project Structure

### What is the difference between Browser JavaScript and Node.js JavaScript?

Browser JavaScript can access the DOM.

Node.js JavaScript can access the File System and create APIs.

### What happens internally when you execute:

```bash
node index.js
```

Node.js loads the file, passes it to the V8 Engine, compiles it, and executes it.

---

## Experienced Level

### When would you use REPL?

* Debugging
* Testing Expressions
* Learning APIs
* Quick Experiments

### Why does Node.js use V8?

Because V8 is a high-performance JavaScript Engine that compiles JavaScript into optimized machine code.

---

# Tricky Interview Questions

### Can JavaScript run without HTML?

✅ Yes

Using Node.js.

---

### Can Node.js run HTML files?

❌ No

Node.js executes JavaScript, not HTML.

---

### Is REPL a programming language?

❌ No

REPL is an interactive execution environment.

---

### Can Browser JavaScript access local files directly?

❌ No

Due to browser security restrictions.

---

### Can Node.js access the local file system?

✅ Yes

Using modules like:

```js
fs
```

---

### Does Node.js execute JavaScript directly?

❌ Not directly.

Node.js passes JavaScript code to the V8 Engine, which compiles and executes it.

---

# Summary

In this chapter, we learned:

* How JavaScript runs in browsers
* Script Tag Method
* External JavaScript File Method
* How JavaScript runs in Node.js
* Running JavaScript files
* Node.js REPL
* Browser vs Node.js
* Internal execution flow
* Common interview questions

---

## Next Topic

➡️ Global Objects

<p align="left">
  <button><a href="class_content.md">⬅️ Previous</a></button>        
</p>    

<p align="right">
  <button><a href="03-global_objects.md">Next ➡️</a></button>
</p>
