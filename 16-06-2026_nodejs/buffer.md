<!-- Navigation -->

<p align="right">
  <a href="../12-stream-module/README.md">⬅️ Previous</a> |
  <a href="../14-util-module/README.md">Next ➡️</a>
</p>

# Node.js Buffer Module

## Overview

The Buffer Module is one of the most important Node.js core modules used for handling binary data.

JavaScript was originally designed to work with text data. However, Node.js applications often work with:

- Images
- Videos
- Audio Files
- PDFs
- Network Packets
- Streams

These files contain binary data, and Buffers help Node.js process that data efficiently.

---

## Definition

A Buffer is a temporary memory area used to store raw binary data directly in memory.

In simple words:

> Buffer is a fixed-size memory allocation used to store binary data before processing or transferring it.

---

## Why It Is Needed

Suppose we want to read a large video file.

Without Buffer:

```text
Read Entire File
      │
      ▼
Store Entire File In Memory
      │
      ▼
High Memory Usage
```

---

With Buffer:

```text
Read Chunk
     │
     ▼
Store In Buffer
     │
     ▼
Process Chunk
     │
     ▼
Read Next Chunk
```

Benefits:

- Efficient Memory Usage
- Faster Processing
- Better Performance
- Stream Support

---

## How It Works

```text
File
 │
 ▼
Buffer
 │
 ▼
Process Data
 │
 ▼
Output
```

---

## Internal Working

```text
Input Data
      │
      ▼
Buffer Memory
      │
      ▼
Binary Storage
      │
      ▼
Read / Write Operations
      │
      ▼
Output
```

---

## Architecture

```text
Application
      │
      ▼
Buffer Module
      │
      ▼
Memory Allocation
      │
      ▼
Binary Data Storage
      │
      ▼
Processing
```

---

# Why Buffers Exist

JavaScript Strings:

```js
const name = "Rahul";
```

Stored as text.

---

Images:

```text
image.jpg
```

Videos:

```text
movie.mp4
```

Audio:

```text
song.mp3
```

These are binary files.

JavaScript cannot directly manipulate binary data efficiently.

Node.js introduced Buffers to solve this problem.

---

# Creating Buffers

## Buffer.alloc()

### Definition

Creates a new Buffer with specified size.

---

## Syntax

```js
Buffer.alloc(size);
```

---

## Example

```js
const buffer = Buffer.alloc(10);

console.log(buffer);
```

---

## Output

```text
<Buffer 00 00 00 00 00 00 00 00 00 00>
```

---

## Why Needed

Allocates safe memory initialized with zeros.

---

# Buffer.from()

## Definition

Creates a Buffer from existing data.

---

## Syntax

```js
Buffer.from(data);
```

---

## Example

```js
const buffer =
Buffer.from("Hello");

console.log(buffer);
```

---

## Output

```text
<Buffer 48 65 6c 6c 6f>
```

---

## Example

```js
const buffer =
Buffer.from([65,66,67]);

console.log(buffer);
```

---

## Output

```text
<Buffer 41 42 43>
```

---

# Buffer.allocUnsafe()

## Definition

Allocates memory without initializing it.

---

## Syntax

```js
Buffer.allocUnsafe(size);
```

---

## Example

```js
const buffer =
Buffer.allocUnsafe(10);

console.log(buffer);
```

---

## Output

```text
Random Memory Values
```

---

## Why Needed

Faster than alloc().

Used when performance is critical.

---

# Writing Data To Buffer

## Syntax

```js
buffer.write(data);
```

---

## Example

```js
const buffer =
Buffer.alloc(20);

buffer.write("Hello");

console.log(buffer);
```

---

## Output

```text
<Buffer 48 65 6c 6c 6f ...>
```

---

# Reading Data From Buffer

## Syntax

```js
buffer.toString();
```

---

## Example

```js
const buffer =
Buffer.from("NodeJS");

console.log(
 buffer.toString()
);
```

---

## Output

```text
NodeJS
```

---

# Buffer Length

## Definition

Returns the size of the buffer.

---

## Example

```js
const buffer =
Buffer.from("Hello");

console.log(
 buffer.length
);
```

---

## Output

```text
5
```

---

# Converting String To Buffer

## Example

```js
const buffer =
Buffer.from("JavaScript");

console.log(buffer);
```

---

## Output

```text
<Buffer 4a 61 76 61 53 63 72 69 70 74>
```

---

# Converting Buffer To String

## Example

```js
const buffer =
Buffer.from("Node");

console.log(
 buffer.toString()
);
```

---

## Output

```text
Node
```

---

# Buffer Encodings

## Common Encodings

```text
utf8
ascii
hex
base64
```

---

## UTF8 Example

```js
const buffer =
Buffer.from(
 "Hello",
 "utf8"
);
```

---

## HEX Example

```js
const buffer =
Buffer.from("Hello");

console.log(
 buffer.toString("hex")
);
```

---

## Output

```text
48656c6c6f
```

---

## Base64 Example

```js
const buffer =
Buffer.from("Hello");

console.log(
 buffer.toString("base64")
);
```

---

## Output

```text
SGVsbG8=
```

---

# Buffer Methods

## Common Methods

```text
Buffer.alloc()
Buffer.allocUnsafe()
Buffer.from()
buffer.write()
buffer.toString()
buffer.slice()
buffer.copy()
buffer.equals()
buffer.compare()
```

---

# buffer.slice()

## Definition

Creates a portion of an existing buffer.

---

## Example

```js
const buffer =
Buffer.from("JavaScript");

const result =
buffer.slice(0,4);

console.log(
 result.toString()
);
```

---

## Output

```text
Java
```

---

# buffer.copy()

## Example

```js
const source =
Buffer.from("Hello");

const target =
Buffer.alloc(5);

source.copy(target);

console.log(
 target.toString()
);
```

---

## Output

```text
Hello
```

---

# buffer.equals()

## Example

```js
const b1 =
Buffer.from("Hello");

const b2 =
Buffer.from("Hello");

console.log(
 b1.equals(b2)
);
```

---

## Output

```text
true
```

---

# buffer.compare()

## Example

```js
const b1 =
Buffer.from("A");

const b2 =
Buffer.from("B");

console.log(
 Buffer.compare(
  b1,
  b2
 )
);
```

---

## Output

```text
-1
```

---

# Buffer and Streams

## Relationship

Streams internally use Buffers.

Diagram:

```text
Large File
     │
     ▼
Stream
     │
     ▼
Buffer
     │
     ▼
Chunk Processing
```

---

## Why Important

Without Buffers:

```text
Entire File Loaded
```

With Buffers:

```text
Chunk Processing
```

---

# Sample Program 1

## Create Buffer

```js
const buffer =
Buffer.from("Hello");

console.log(buffer);
```

---

# Sample Program 2

## Buffer To String

```js
const buffer =
Buffer.from("NodeJS");

console.log(
 buffer.toString()
);
```

---

# Sample Program 3

## String To Base64

```js
const buffer =
Buffer.from("Hello");

console.log(
 buffer.toString("base64")
);
```

---

# Sample Program 4

## Copy Buffer

```js
const source =
Buffer.from("OpenAI");

const target =
Buffer.alloc(6);

source.copy(target);

console.log(
 target.toString()
);
```

---

# Real World Use Cases

## File Upload

```text
Google Drive
Dropbox
OneDrive
```

---

## Video Streaming

```text
YouTube
Netflix
Prime Video
```

---

## Audio Streaming

```text
Spotify
JioSaavn
Gaana
```

---

## Image Processing

```text
Image Compression
Image Upload
Image Resize
```

---

## Network Communication

```text
TCP Packets
HTTP Data
Socket Communication
```

---

# Advantages

- Efficient Memory Usage
- Fast Binary Processing
- Stream Support
- Built-In Module
- High Performance

---

# Disadvantages

- Fixed Size
- Binary Data Can Be Hard To Debug
- allocUnsafe() May Contain Old Memory Data

---

# Fresher Interview Questions

### What is Buffer?

A temporary memory area used to store binary data.

---

### Why is Buffer needed?

To handle binary data efficiently.

---

### What is Buffer.from()?

Creates a Buffer from existing data.

---

### What is Buffer.alloc()?

Allocates a new buffer initialized with zeros.

---

### What is Buffer.allocUnsafe()?

Allocates memory without initialization.

---

# 1–2 Years Interview Questions

### Difference Between Buffer.alloc() and Buffer.allocUnsafe()?

alloc():

```text
Safe
Initialized
```

allocUnsafe():

```text
Fast
Uninitialized
```

---

### Why are Buffers important for Streams?

Streams use Buffers internally to process chunks of data.

---

### What is Base64 Encoding?

A method to represent binary data using text characters.

---

# Experienced Interview Questions

### How do Buffers improve performance?

By processing binary data directly in memory.

---

### How are Streams and Buffers related?

Streams use Buffers internally for chunk-based processing.

---

### What happens if a large file is loaded without Buffers?

High memory consumption and poor performance.

---

### Explain Buffer Pooling.

Node.js internally reuses memory pools for small buffer allocations to improve performance.

---

# Tricky Interview Questions

### Question 1

```js
const buffer =
Buffer.from("A");

console.log(
 buffer.length
);
```

Output:

```text
1
```

---

### Question 2

```js
console.log(
 Buffer.from("Hello")
       .toString("hex")
);
```

Output:

```text
48656c6c6f
```

---

### Question 3

```js
const buffer =
Buffer.alloc(5);

console.log(
 buffer.toString()
);
```

Output:

```text
Empty String
```

---

### Question 4

Can Buffers store Objects?

Answer:

```text
No
```

Buffers store binary data.

---

### Question 5

Which module internally uses Buffers heavily?

Answer:

```text
Streams
```

---

### Question 6

```js
Buffer.isBuffer(
 Buffer.from("Hello")
);
```

Output:

```text
true
```

---

# Coding Questions

### Q1 Create Buffer Using alloc()

### Q2 Convert String To Buffer

### Q3 Convert Buffer To String

### Q4 Encode String To Base64

### Q5 Decode Base64 Data

### Q6 Compare Two Buffers

### Q7 Copy One Buffer To Another

### Q8 Read Binary Data From File

---

# Summary

In this chapter, we learned:

- Buffer Module
- Buffer.alloc()
- Buffer.allocUnsafe()
- Buffer.from()
- Writing Data
- Reading Data
- Encodings
- Base64
- HEX
- Buffer Methods
- Streams and Buffers
- Real World Examples
- Interview Questions
- Tricky Questions

The Buffer Module is one of the foundational modules in Node.js because it enables efficient binary data handling and serves as the backbone for Streams, File Processing, Networking, and Media Applications.

---

