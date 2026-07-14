<!-- Navigation -->

<p align="right">
  <a href="../14-util-module/README.md">⬅️ Previous</a> |
  <a href="../16-crypto-module/README.md">Next ➡️</a>
</p>

# Node.js DNS Module

## Overview

The DNS (Domain Name System) Module is a built-in Node.js core module used to perform DNS lookups and resolve domain names into IP addresses.

Whenever we open a website like:

```text
google.com
facebook.com
youtube.com
```

Computers do not understand domain names.

They understand only IP addresses.

The DNS Module helps convert:

```text
google.com
      │
      ▼
142.250.183.14
```

---

## Definition

The DNS Module is a built-in Node.js module that provides methods to perform DNS resolution and lookup operations.

Import:

```js
const dns = require("dns");
```

---

## Why It Is Needed

Humans remember:

```text
google.com
youtube.com
amazon.com
```

Computers understand:

```text
142.250.183.14
172.217.160.110
```

DNS acts as a translator between domain names and IP addresses.

Without DNS:

```text
Users must remember IP addresses
```

which is difficult.

---

## How DNS Works

```text
User Opens Website
        │
        ▼
google.com
        │
        ▼
DNS Server
        │
        ▼
Find IP Address
        │
        ▼
142.250.183.14
        │
        ▼
Connect To Website
```

---

## Internal Working

```text
Application
      │
      ▼
DNS Module
      │
      ▼
DNS Server
      │
      ▼
IP Address
      │
      ▼
Response Returned
```

---

## Architecture

```text
Node.js App
      │
      ▼
DNS Module
      │
      ▼
DNS Resolver
      │
      ▼
DNS Server
      │
      ▼
IP Address
```

---

# DNS Methods

```text
DNS Module
│
├── lookup()
├── resolve4()
├── resolve6()
├── reverse()
├── resolveMx()
├── resolveTxt()
├── resolveNs()
└── getServers()
```

---

# dns.lookup()

## Definition

Looks up the IP address of a hostname.

---

## Syntax

```js
dns.lookup(
 hostname,
 callback
);
```

---

## Example

```js
const dns = require("dns");

dns.lookup(
 "google.com",
 (err,address,family)=>{

   console.log(address);
   console.log(family);

 }
);
```

---

## Output

```text
142.x.x.x
4
```

(IP may vary)

---

## Real World Example

Finding server IP before establishing connection.

---

# dns.resolve4()

## Definition

Resolves IPv4 addresses for a domain.

---

## Example

```js
const dns = require("dns");

dns.resolve4(
 "google.com",
 (err,addresses)=>{

   console.log(addresses);

 }
);
```

---

## Output

```js
[
 '142.x.x.x',
 '142.x.x.x'
]
```

---

# dns.resolve6()

## Definition

Resolves IPv6 addresses.

---

## Example

```js
const dns = require("dns");

dns.resolve6(
 "google.com",
 (err,addresses)=>{

   console.log(addresses);

 }
);
```

---

## Output

```js
[
 '2404:6800:4007::'
]
```

---

# dns.reverse()

## Definition

Performs Reverse DNS Lookup.

Converts:

```text
IP Address
      ▼
Domain Name
```

---

## Syntax

```js
dns.reverse(
 ip,
 callback
);
```

---

## Example

```js
const dns = require("dns");

dns.reverse(
 "8.8.8.8",
 (err,hostnames)=>{

   console.log(hostnames);

 }
);
```

---

## Output

```text
dns.google
```

---

## Real World Example

Network Monitoring Tools.

---

# dns.resolveMx()

## Definition

Retrieves Mail Exchange (MX) records.

Used for email servers.

---

## Example

```js
const dns = require("dns");

dns.resolveMx(
 "gmail.com",
 (err,records)=>{

   console.log(records);

 }
);
```

---

## Output

```js
[
 {
   exchange:
   'alt1.gmail-smtp-in.l.google.com',
   priority: 10
 }
]
```

---

## Real World Example

Email Verification Systems.

---

# dns.resolveTxt()

## Definition

Retrieves TXT records.

TXT records contain domain-related information.

---

## Example

```js
dns.resolveTxt(
 "google.com",
 (err,records)=>{

   console.log(records);

 }
);
```

---

## Real World Example

SPF Records

Email Security

Domain Verification

---

# dns.resolveNs()

## Definition

Retrieves Name Server records.

---

## Example

```js
dns.resolveNs(
 "google.com",
 (err,records)=>{

   console.log(records);

 }
);
```

---

## Output

```js
[
 'ns1.google.com',
 'ns2.google.com'
]
```

---

# dns.getServers()

## Definition

Returns configured DNS servers.

---

## Example

```js
const dns = require("dns");

console.log(
 dns.getServers()
);
```

---

## Output

```js
[
 '8.8.8.8',
 '8.8.4.4'
]
```

(May vary)

---

# Sample Program 1

## Domain To IP

```js
const dns = require("dns");

dns.lookup(
 "github.com",
 (err,address)=>{

   console.log(address);

 }
);
```

---

# Sample Program 2

## IPv4 Resolver

```js
const dns = require("dns");

dns.resolve4(
 "google.com",
 (err,addresses)=>{

   console.log(addresses);

 }
);
```

---

# Sample Program 3

## Reverse Lookup

```js
const dns = require("dns");

dns.reverse(
 "8.8.8.8",
 (err,hostnames)=>{

   console.log(hostnames);

 }
);
```

---

# Real World Use Cases

## Browser Access

```text
google.com
     ▼
IP Address
```

---

## Email Servers

```text
MX Records
```

---

## Network Monitoring

```text
Reverse Lookup
```

---

## Security Applications

```text
Domain Verification
```

---

## CDN Services

```text
Cloudflare
Akamai
Fastly
```

Use DNS heavily.

---

# Advantages

- Built-In Module
- Domain Resolution
- Email Record Lookup
- Network Analysis
- Security Verification

---

# Disadvantages

- Depends On Internet
- DNS Queries Can Be Slow
- External Server Dependency

---

# Fresher Interview Questions

### What is DNS?

DNS stands for Domain Name System.

It converts domain names into IP addresses.

---

### What is the DNS Module?

A built-in Node.js module used for DNS operations.

---

### What does dns.lookup() do?

Returns the IP address of a hostname.

---

### What is Reverse DNS Lookup?

Converts IP address back to hostname.

---

### What is an MX Record?

Mail Exchange Record used for email routing.

---

# 1-2 Years Interview Questions

### Difference between lookup() and resolve4()?

lookup()

```text
Uses OS DNS Configuration
```

resolve4()

```text
Performs Actual DNS Query
```

---

### What is IPv4?

Example:

```text
192.168.1.1
```

---

### What is IPv6?

Example:

```text
2404:6800:4007::
```

---

### Why use reverse()?

To identify domain name from IP address.

---

# Experienced Interview Questions

### How does DNS resolution work internally?

```text
Client
  ▼
Resolver
  ▼
DNS Server
  ▼
IP Address
```

---

### Why is DNS caching important?

Reduces lookup time and improves performance.

---

### Difference between A Record and MX Record?

A Record:

```text
Domain → IP
```

MX Record:

```text
Domain → Mail Server
```

---

### What is DNS Propagation?

The time required for DNS changes to spread globally.

---

# Tricky Interview Questions

### Question 1

Can a website work without DNS?

Answer:

```text
Yes
```

Using direct IP address.

---

### Question 2

What happens if DNS server is down?

Answer:

```text
Domain Resolution Fails
```

Website becomes inaccessible.

---

### Question 3

Which DNS method returns hostname from IP?

Answer:

```text
dns.reverse()
```

---

### Question 4

Which DNS record is used for emails?

Answer:

```text
MX Record
```

---

### Question 5

Can a domain have multiple IP addresses?

Answer:

```text
Yes
```

Used for Load Balancing.

---

# Coding Questions

### Q1 Find IP Address Of Domain

### Q2 Perform Reverse Lookup

### Q3 Retrieve MX Records

### Q4 Retrieve TXT Records

### Q5 Display DNS Servers

### Q6 Get IPv4 Addresses

### Q7 Get IPv6 Addresses

---

# Summary

In this chapter, we learned:

- DNS Module
- dns.lookup()
- dns.resolve4()
- dns.resolve6()
- dns.reverse()
- dns.resolveMx()
- dns.resolveTxt()
- dns.resolveNs()
- dns.getServers()
- Domain Resolution
- Reverse Lookup
- Email Records
- Interview Questions
- Tricky Questions

The DNS Module is essential for network programming because it enables domain name resolution, server discovery, email routing, and network diagnostics.

---

## Next Topic

➡️ Crypto Module

Topics Covered:

- Hashing
- Encryption
- Decryption
- SHA256
- HMAC
- Random Bytes
- Password Hashing
- Security Concepts
- Interview Questions