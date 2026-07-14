# HTTP Module

<!-- Navigation -->

<p align="right">
  <a href="../08-os-module/README.md">⬅️ Previous</a> |
  <a href="../10-events-module/README.md">Next ➡️</a>
</p>

> The HTTP Module is a built-in Node.js core module used to create web servers and build REST APIs.

---

# Overview

The HTTP module allows Node.js applications to communicate over the HTTP protocol.

Using the HTTP module we can:

- Create web servers
- Handle requests
- Send responses
- Build REST APIs
- Return JSON data
- Handle routes

---

# Definition

The HTTP module is a built-in Node.js module used to create HTTP servers and manage request-response communication.

```js
const http = require("http");
```

---

# Why Needed

Without the HTTP module:

- Browsers cannot communicate with Node.js applications.
- APIs cannot be created.
- Web servers cannot be built.

---

# Internal Working

```text
Client
  │
  ▼
HTTP Request
  │
  ▼
Node.js Server
  │
  ▼
Processing
  │
  ▼
HTTP Response
  │
  ▼
Client
```

---

# Architecture

```text
Browser / Postman
        │
        ▼
   HTTP Server
        │
        ▼
 Business Logic
        │
        ▼
    Database
        │
        ▼
   HTTP Response
```

---

# Creating Server

## Syntax

```js
const server = http.createServer((req,res)=>{

});
```

## Example

```js
const http = require("http");

const server = http.createServer((req,res)=>{
   res.end("Hello Node.js");
});

server.listen(3000);
```

Output:

```text
Hello Node.js
```

---

# server.listen()

Starts the server on a specific port.

```js
server.listen(3000);
```

Example URL:

```text
http://localhost:3000
```

---

# Request Object (req)

The request object contains information sent by the client.

## Common Properties

```js
req.url
req.method
req.headers
```

Example:

```js
const http = require("http");

http.createServer((req,res)=>{
   console.log(req.url);
   res.end("Done");
}).listen(3000);
```

---

# Response Object (res)

Used to send data back to the client.

## Common Methods

```js
res.write()
res.end()
res.setHeader()
```

Example:

```js
res.end("Welcome");
```

---

# Routes

Routes determine which response should be sent for a URL.

Example:

```js
const http = require("http");

http.createServer((req,res)=>{

   if(req.url === "/"){
      res.end("Home Page");
   }
   else if(req.url === "/about"){
      res.end("About Page");
   }
   else{
      res.end("404 Not Found");
   }

}).listen(3000);
```

---

# HTTP Methods

| Method | Purpose |
|----------|----------|
| GET | Retrieve Data |
| POST | Create Data |
| PUT | Update Data |
| PATCH | Partial Update |
| DELETE | Delete Data |

Example:

```js
console.log(req.method);
```

---

# Status Codes

| Code | Meaning |
|--------|---------|
| 200 | Success |
| 201 | Created |
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |
| 500 | Internal Server Error |

Example:

```js
res.statusCode = 200;
res.end("Success");
```

---

# Headers

Headers provide metadata.

Example:

```js
res.setHeader(
   "Content-Type",
   "application/json"
);
```

Common Headers:

```text
Content-Type
Authorization
Accept
```

---

# JSON Response

```js
const data = {
   id:1,
   name:"Rahul"
};

res.setHeader(
   "Content-Type",
   "application/json"
);

res.end(JSON.stringify(data));
```

Output:

```json
{
  "id": 1,
  "name": "Rahul"
}
```

---

# REST API Basics

```text
GET     /users
POST    /users
PUT     /users/1
PATCH   /users/1
DELETE  /users/1
```

Architecture:

```text
Client
  │
  ▼
Request
  │
  ▼
API Server
  │
  ▼
Database
  │
  ▼
JSON Response
```

---

# Sample Program 1

## Basic Server

```js
const http = require("http");

http.createServer((req,res)=>{
   res.end("Server Running");
}).listen(3000);
```

---

# Sample Program 2

## JSON API

```js
const http = require("http");

http.createServer((req,res)=>{

   res.setHeader(
      "Content-Type",
      "application/json"
   );

   res.end(
      JSON.stringify({
         name:"Rahul"
      })
   );

}).listen(3000);
```

---

# Fresher Interview Questions

1. What is HTTP Module?
2. What is createServer()?
3. What is req?
4. What is res?
5. What is localhost?
6. What is a port?
7. What is a route?
8. Difference between GET and POST?

---

# 1–2 Years Interview Questions

1. Difference between PUT and PATCH?
2. What are headers?
3. What is JSON?
4. Explain request-response cycle.
5. What is a status code?

---

# 3–6 Years Interview Questions

1. Why use Express instead of HTTP module?
2. Explain HTTP lifecycle.
3. How does Node.js handle multiple requests?
4. Difference between HTTP/1.1 and HTTP/2?
5. Explain REST API design.

---

# Tricky Questions

### What happens if res.end() is not called?

The browser keeps waiting for a response.

### Can two servers run on the same port?

No.

### What is the default HTTP method?

GET

### Difference between 401 and 403?

401 = Authentication issue

403 = Permission issue

---

# Coding Questions

### Q1 Create a Server

```js
const http = require("http");

http.createServer((req,res)=>{
   res.end("Hello");
}).listen(3000);
```

### Q2 Create Route Handling

```js
if(req.url === "/about"){
   res.end("About");
}
```

### Q3 Return JSON

```js
res.end(
 JSON.stringify({
   success:true
 })
);
```

---

# Summary

- HTTP Module
- createServer()
- server.listen()
- Request Object
- Response Object
- Routes
- HTTP Methods
- Status Codes
- Headers
- JSON Response
- REST API Basics

The HTTP Module is the foundation of backend development in Node.js.

---

## Next Topic

➡️ Events Module (EventEmitter)

<p align="left">
  <a href="../08-os-module/README.md">⬅️ Previous</a>
</p>

<p align="right">
  <a href="../10-events-module/README.md">Next ➡️</a>
</p>
