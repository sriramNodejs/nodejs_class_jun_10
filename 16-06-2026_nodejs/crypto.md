<!-- Navigation -->

<p align="right">
  <a href="../15-dns-module/README.md">⬅️ Previous</a> |
  <a href="../17-buffer-module/README.md">Next ➡️</a>
</p>

# Node.js Crypto Module

## Overview

The Crypto Module is a built-in Node.js core module used to perform cryptographic operations such as:

- Hashing
- Encryption
- Decryption
- Password Security
- Digital Signatures
- Random Data Generation

The Crypto Module is widely used in:

- Authentication Systems
- Banking Applications
- Payment Gateways
- JWT Authentication
- Secure Communication

---

## Definition

The Crypto Module is a built-in Node.js module that provides cryptographic functionalities for securing data and communications.

Import:

```js
const crypto = require("crypto");
```

---

## Why It Is Needed

Suppose a user registers on a website.

Bad Practice:

```js
{
   username: "rahul",
   password: "123456"
}
```

Password stored in plain text.

If database is hacked:

```text
All Passwords Exposed
```

---

Using Crypto:

```js
{
   username: "rahul",
   password:
   "8d969eef6ecad3c29..."
}
```

Password becomes unreadable.

---

Benefits:

- Security
- Data Protection
- Authentication
- Confidentiality
- Integrity

---

## How It Works

```text
Original Data
      │
      ▼
Crypto Algorithm
      │
      ▼
Encrypted / Hashed Data
      │
      ▼
Store Securely
```

---

## Architecture

```text
User Input
      │
      ▼
Crypto Module
      │
      ├── Hashing
      ├── Encryption
      ├── Decryption
      ├── Random Bytes
      └── HMAC
      │
      ▼
Secure Output
```

---

# Core Concepts

```text
Crypto Module
│
├── Hashing
├── Encryption
├── Decryption
├── Random Bytes
├── HMAC
├── Salt
└── Password Security
```

---

# Hashing

## Definition

Hashing converts data into a fixed-length string.

Hashing is a one-way process.

```text
Original Data
     ▼
Hash
```

Cannot be reversed.

---

## Why Needed

Used for:

- Password Storage
- Data Verification
- Security

---

## SHA256 Hashing

### Example

```js
const crypto = require("crypto");

const hash =
crypto.createHash("sha256")
      .update("hello")
      .digest("hex");

console.log(hash);
```

---

## Output

```text
2cf24dba5fb0a...
```

---

## Real World Example

```text
Password Storage
```

---

# Encryption

## Definition

Encryption converts readable data into unreadable data.

---

## Why Needed

To protect sensitive information.

Examples:

- Bank Details
- Credit Card Information
- Personal Data

---

## Diagram

```text
Original Data
      │
      ▼
Encryption Key
      │
      ▼
Encrypted Data
```

---

## Example

```js
const crypto = require("crypto");

const algorithm =
"aes-256-cbc";

const key =
crypto.randomBytes(32);

const iv =
crypto.randomBytes(16);

const cipher =
crypto.createCipheriv(
 algorithm,
 key,
 iv
);

let encrypted =
cipher.update(
 "Hello Node",
 "utf8",
 "hex"
);

encrypted +=
cipher.final("hex");

console.log(encrypted);
```

---

# Decryption

## Definition

Decryption converts encrypted data back into original data.

---

## Diagram

```text
Encrypted Data
       │
       ▼
Decryption Key
       │
       ▼
Original Data
```

---

## Example

```js
const decipher =
crypto.createDecipheriv(
 algorithm,
 key,
 iv
);

let decrypted =
decipher.update(
 encrypted,
 "hex",
 "utf8"
);

decrypted +=
decipher.final("utf8");

console.log(decrypted);
```

---

## Output

```text
Hello Node
```

---

# Hashing vs Encryption

| Feature | Hashing | Encryption |
|----------|----------|----------|
| Reversible | No | Yes |
| Key Required | No | Yes |
| Password Storage | Yes | No |
| Secure Communication | No | Yes |

---

# Random Bytes

## Definition

Generates cryptographically secure random values.

---

## Why Needed

Used for:

- Tokens
- OTPs
- Session IDs
- API Keys

---

## Example

```js
const crypto = require("crypto");

const token =
crypto.randomBytes(16)
      .toString("hex");

console.log(token);
```

---

## Output

```text
f3a9d8e7...
```

---

## Real World Example

Password Reset Tokens.

---

# HMAC

## Definition

HMAC stands for:

```text
Hash-Based Message Authentication Code
```

Used to verify data integrity.

---

## Why Needed

Ensures data has not been modified.

---

## Example

```js
const crypto = require("crypto");

const hmac =
crypto.createHmac(
 "sha256",
 "secret-key"
)
.update("hello")
.digest("hex");

console.log(hmac);
```

---

## Output

```text
7e0d076777...
```

---

## Real World Example

JWT Signatures.

---

# Salt

## Definition

Salt is a random value added before hashing.

---

## Why Needed

Prevents:

```text
Rainbow Table Attacks
```

---

## Example

```js
const salt =
crypto.randomBytes(16)
      .toString("hex");

console.log(salt);
```

---

# Password Hashing Example

```js
const crypto = require("crypto");

const password =
"admin123";

const hash =
crypto.createHash("sha256")
      .update(password)
      .digest("hex");

console.log(hash);
```

---

# Sample Program 1

## Generate SHA256 Hash

```js
const crypto = require("crypto");

const hash =
crypto.createHash("sha256")
      .update("Hello")
      .digest("hex");

console.log(hash);
```

---

# Sample Program 2

## Generate Random Token

```js
const crypto = require("crypto");

console.log(

 crypto.randomBytes(16)
       .toString("hex")

);
```

---

# Sample Program 3

## Generate HMAC

```js
const crypto = require("crypto");

const hmac =
crypto.createHmac(
 "sha256",
 "secret"
)
.update("data")
.digest("hex");

console.log(hmac);
```

---

# Real World Use Cases

## User Authentication

```text
Password Hashing
```

---

## Banking Systems

```text
Encryption
```

---

## JWT Authentication

```text
HMAC Signatures
```

---

## OTP Systems

```text
Random Tokens
```

---

## API Security

```text
Request Verification
```

---

# Advantages

- Built-In Module
- Strong Security
- Fast Hashing
- Secure Random Values
- Encryption Support

---

# Disadvantages

- Complex Algorithms
- Wrong Usage Can Cause Security Risks

---

# Fresher Interview Questions

### What is Crypto Module?

A built-in Node.js module used for cryptographic operations.

---

### What is Hashing?

Converting data into a fixed-length secure string.

---

### What is Encryption?

Converting readable data into unreadable data.

---

### What is Decryption?

Converting encrypted data back into original form.

---

### What is SHA256?

A popular hashing algorithm.

---

# 1-2 Years Interview Questions

### Difference Between Hashing and Encryption?

Hashing:

```text
One Way
```

Encryption:

```text
Two Way
```

---

### What is HMAC?

Used to verify integrity and authenticity.

---

### Why use Salt?

To prevent rainbow table attacks.

---

### What is randomBytes()?

Generates secure random values.

---

# Experienced Interview Questions

### Why should passwords be hashed instead of encrypted?

Passwords only need verification, not decryption.

---

### Why is bcrypt preferred over SHA256 for passwords?

bcrypt includes:

- Salt
- Multiple Rounds
- Better Security

---

### What is AES?

Advanced Encryption Standard used for encryption.

---

### Explain Symmetric vs Asymmetric Encryption.

Symmetric:

```text
Same Key
```

Asymmetric:

```text
Public Key + Private Key
```

---

# Tricky Interview Questions

### Question 1

Can a SHA256 hash be decrypted?

Answer:

```text
No
```

Hashing is one-way.

---

### Question 2

Which is safer for passwords?

```text
bcrypt
```

Not plain SHA256.

---

### Question 3

Can two identical inputs produce the same hash?

```text
Yes
```

Without salt.

---

### Question 4

Why add salt?

To generate unique hashes.

---

### Question 5

Can encryption work without a key?

```text
No
```

---

### Question 6

Which crypto method generates OTP-like tokens?

```js
crypto.randomBytes()
```

---

# Coding Questions

### Q1 Generate SHA256 Hash

### Q2 Generate Random Token

### Q3 Encrypt Text

### Q4 Decrypt Text

### Q5 Create HMAC

### Q6 Generate Salt

### Q7 Password Hashing

### Q8 Verify Data Integrity

---

# Summary

In this chapter, we learned:

- Crypto Module
- Hashing
- Encryption
- Decryption
- SHA256
- HMAC
- Salt
- Random Bytes
- Password Security
- Real World Examples
- Interview Questions
- Tricky Questions

The Crypto Module is one of the most important Node.js core modules because it provides security, authentication, data integrity, and encryption capabilities required by modern applications.

---

## Next Topic

➡️ Child Process Module

Topics Covered:

- exec()
- spawn()
- fork()
- execFile()
- Process Communication
- IPC
- Interview Questions