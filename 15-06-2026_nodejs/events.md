<!-- Navigation -->

<p align="right">
  <a href="../09-http-module/README.md">⬅️ Previous</a> |
  <a href="../11-buffer-module/README.md">Next ➡️</a>
</p>

# Events Module (EventEmitter)

> The Events Module is a built-in Node.js core module used to create and handle custom events using the EventEmitter class.

---

# Overview

Node.js follows an Event-Driven Architecture.

Examples:

- User Login
- File Upload
- Payment Success
- Button Click
- Email Sent

These actions are called Events.

The Events Module helps applications:

- Create Events
- Listen to Events
- Trigger Events
- Execute Event Handlers

---

# Definition

The Events Module is a built-in Node.js module that provides the EventEmitter class to create and manage custom events.

Import:

```js
const EventEmitter = require("events");
```

---

# Why Needed

Imagine an E-Commerce Application.

When an order is placed:

```text
Order Created
      │
      ├── Send Email
      ├── Update Database
      ├── Generate Invoice
      └── Send Notification
```

Instead of calling all functions manually, we can trigger a single event.

This makes applications scalable and loosely coupled.

---

# Internal Working

```text
Event Created
      │
      ▼
Event Listener Registered
      │
      ▼
Event Triggered
      │
      ▼
Callback Function Executes
```

---

# Architecture

```text
Application
      │
      ▼
EventEmitter
      │
      ▼
Event Listener
      │
      ▼
Event Trigger
      │
      ▼
Execute Logic
```

---

# Diagram

```text
User Login
    │
    ▼
login Event
    │
    ▼
Event Listener
    │
    ▼
Send Welcome Email
```

---

# EventEmitter Class

## Definition

EventEmitter is a class provided by Node.js for handling events.

---

## Syntax

```js
const EventEmitter = require("events");

const emitter = new EventEmitter();
```

---

## Example

```js
const EventEmitter = require("events");

const emitter = new EventEmitter();

console.log(emitter);
```

---

# on()

## Definition

Registers an event listener.

---

## Why Needed

Without listeners, events cannot be handled.

---

## Syntax

```js
emitter.on(eventName, callback);
```

---

## Example

```js
const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("greet", () => {
    console.log("Hello User");
});

emitter.emit("greet");
```

---

## Output

```text
Hello User
```

---

## Real World Example

```js
emitter.on("userRegistered", () => {
   console.log("Send Welcome Email");
});
```

---

# emit()

## Definition

Used to trigger an event.

---

## Syntax

```js
emitter.emit("eventName");
```

---

## Example

```js
emitter.emit("greet");
```

---

## Real World Example

```js
emitter.emit("paymentSuccess");
```

Triggers:

- Invoice Generation
- Email Notification
- SMS Notification

---

# Passing Arguments

## Example

```js
const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("welcome", (name) => {
   console.log(`Welcome ${name}`);
});

emitter.emit("welcome", "Rahul");
```

---

## Output

```text
Welcome Rahul
```

---

# once()

## Definition

Executes an event listener only once.

---

## Syntax

```js
emitter.once(eventName, callback);
```

---

## Example

```js
const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.once("login", () => {
    console.log("User Logged In");
});

emitter.emit("login");
emitter.emit("login");
```

---

## Output

```text
User Logged In
```

Only once.

---

## Real World Example

One-Time Verification Events.

---

# removeListener()

## Definition

Removes a registered event listener.

---

## Syntax

```js
emitter.removeListener(
   eventName,
   callback
);
```

---

## Example

```js
const EventEmitter = require("events");

const emitter = new EventEmitter();

function greet(){
   console.log("Hello");
}

emitter.on("welcome", greet);

emitter.removeListener(
   "welcome",
   greet
);

emitter.emit("welcome");
```

---

## Output

```text
No Output
```

---

# Multiple Listeners

## Example

```js
const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("orderPlaced", () => {
   console.log("Generate Invoice");
});

emitter.on("orderPlaced", () => {
   console.log("Send Email");
});

emitter.on("orderPlaced", () => {
   console.log("Send SMS");
});

emitter.emit("orderPlaced");
```

---

## Output

```text
Generate Invoice
Send Email
Send SMS
```

---

# Custom Events

## Definition

Events created by developers are called Custom Events.

---

## Example

```js
const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("userCreated", () => {
   console.log("User Added");
});

emitter.emit("userCreated");
```

---

## Output

```text
User Added
```

---

# Real World Examples

## User Registration

```text
User Registers
      │
      ▼
userRegistered Event
      │
      ├── Save User
      ├── Send Email
      └── Generate Welcome Message
```

---

## E-Commerce Order

```text
Order Placed
      │
      ▼
orderPlaced Event
      │
      ├── Update Inventory
      ├── Send Invoice
      └── Notify User
```

---

## Payment System

```text
Payment Success
      │
      ▼
paymentSuccess Event
      │
      ├── Generate Receipt
      ├── Send Email
      └── Update Database
```

---

# Event-Driven Architecture

## Definition

A software design pattern where actions are triggered by events.

---

## Architecture

```text
Event Source
      │
      ▼
Event Emitter
      │
      ▼
Event Listener
      │
      ▼
Business Logic
```

---

## Advantages

- Loose Coupling
- Better Scalability
- Reusable Components
- Cleaner Code

---

## Disadvantages

- Harder Debugging
- Complex Event Chains

---

# Fresher Interview Questions

### What is the Events Module?

A built-in Node.js module used to create and handle events.

---

### What is EventEmitter?

A class used to manage events.

---

### What does emit() do?

Triggers an event.

---

### What does on() do?

Registers an event listener.

---

### What does once() do?

Executes a listener only one time.

---

# 1–2 Years Interview Questions

### Difference between on() and once()?

on()

```text
Runs every time
```

once()

```text
Runs only once
```

---

### Can multiple listeners listen to the same event?

Yes.

---

### Why use EventEmitter?

To implement event-driven architecture.

---

# 3–6 Years Interview Questions

### Explain Event-Driven Architecture.

Applications respond to events rather than direct function calls.

---

### How does Node.js internally use EventEmitter?

Many core modules such as:

- Streams
- HTTP
- Process

are built using EventEmitter.

---

### Why are events important in Node.js?

Because Node.js is event-driven and non-blocking.

---

# Tricky Questions

## Question 1

```js
emitter.emit("hello");
```

No listener exists.

Output?

### Answer

```text
No Output
```

---

## Question 2

```js
emitter.on("test",()=>{
   console.log("Hello");
});

emitter.emit("test");
emitter.emit("test");
```

Output:

```text
Hello
Hello
```

---

## Question 3

```js
emitter.once("test",()=>{
   console.log("Hello");
});

emitter.emit("test");
emitter.emit("test");
```

Output:

```text
Hello
```

---

# Coding Questions

## Q1 Create Custom Event

```js
const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("welcome", () => {
   console.log("Welcome User");
});

emitter.emit("welcome");
```

---

## Q2 Pass Data Through Event

```js
const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("user", (name)=>{
   console.log(name);
});

emitter.emit("user", "Rahul");
```

---

## Q3 Multiple Event Listeners

```js
const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("order",()=>{
   console.log("Invoice");
});

emitter.on("order",()=>{
   console.log("Email");
});

emitter.emit("order");
```

---

# Summary

In this chapter, we learned:

- Events Module
- EventEmitter
- on()
- emit()
- once()
- removeListener()
- Custom Events
- Multiple Listeners
- Event-Driven Architecture
- Real-World Examples
- Coding Questions
- Interview Questions

The Events Module is one of the most important Node.js core modules because Node.js itself is built on an event-driven architecture.

---

## Next Topic

➡️ Buffer Module

Topics Covered:

- What is Buffer?
- Why Buffer Needed?
- Buffer Creation
- Buffer Methods
- Binary Data
- Encoding
- Decoding
- Real-World Examples

---

<!-- Bottom Navigation -->

<p align="left">
  <a href="HTTP_module_README.md">⬅️ Previous</a>
</p>

<p align="right">
  <a href="../11-Buffer-module/README.md">Next ➡️</a>
</p>