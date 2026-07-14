<!-- Navigation -->

<p align="right">
  <a href="../11-buffer-module/README.md">⬅️ Previous</a> |
  <a href="../13-crypto-module/README.md">Next ➡️</a>
</p>

# Node.js Stream Module

## Overview

Streams are one of the most powerful features in Node.js.

A Stream is used to process data piece-by-piece (chunks) instead of loading the entire data into memory.

Streams improve:

- Performance
- Memory Usage
- Scalability

Examples:

- Video Streaming (YouTube)
- File Download
- File Upload
- Audio Streaming
- Real-Time Chat

---

## Definition

A Stream is an object that allows reading or writing data continuously in small chunks without loading the entire data into memory.

In simple words:

> Stream = Process Data Chunk By Chunk

---

## Why It Is Needed

Suppose we have a file:

```text
movie.mp4
Size: 5 GB
```

Without Streams:

```text
Read Entire File
       │
       ▼
Store In Memory
       │
       ▼
Send Data
```

Problems:

- High Memory Usage
- Slow Performance
- Application Crash Risk

---

With Streams:

```text
Read Small Chunk
       │
       ▼
Send Chunk
       │
       ▼
Read Next Chunk
       │
       ▼
Send Next Chunk
```

Benefits:

- Less Memory
- Faster Processing
- Better Performance

---

## How It Works

```text
Large File
     │
     ▼
Chunk 1
Chunk 2
Chunk 3
Chunk 4
     │
     ▼
Processed Sequentially
```

---

## Internal Working

```text
Source
   │
   ▼
Read Stream
   │
   ▼
Buffer
   │
   ▼
Chunks
   │
   ▼
Write Stream
   │
   ▼
Destination
```

---

## Architecture

```text
Input Source
      │
      ▼
Readable Stream
      │
      ▼
Buffer
      │
      ▼
Writable Stream
      │
      ▼
Output Destination
```

---

# Types of Streams

```text
Streams
│
├── Readable Stream
├── Writable Stream
├── Duplex Stream
└── Transform Stream
```

---

# Readable Stream

## Definition

Readable Streams are used to read data from a source.

Examples:

- Files
- Network Requests
- Database Responses

---

## Syntax

```js
const fs = require("fs");

const readStream =
fs.createReadStream("sample.txt");
```

---

## Example

```js
const fs = require("fs");

const readStream =
fs.createReadStream("sample.txt");

readStream.on("data",(chunk)=>{

   console.log(chunk);

});
```

---

## Real World Example

```text
Reading Large Video Files
```

---

# Writable Stream

## Definition

Writable Streams are used to write data to a destination.

Examples:

- Files
- Network Responses
- Logs

---

## Syntax

```js
const fs = require("fs");

const writeStream =
fs.createWriteStream("output.txt");
```

---

## Example

```js
writeStream.write(
   "Hello Stream"
);
```

---

## Real World Example

```text
Saving Uploaded Files
```

---

# Duplex Stream

## Definition

A Duplex Stream can read and write data.

Examples:

- Sockets
- TCP Connections

---

## Diagram

```text
Read Data
     ▲
     │
Duplex
     │
     ▼
Write Data
```

---

# Transform Stream

## Definition

Transform Streams modify data while reading and writing.

Examples:

- Compression
- Encryption
- Data Formatting

---

## Diagram

```text
Input
  │
  ▼
Transform
  │
  ▼
Output
```

---

## Real World Example

```text
ZIP Compression
```

---

# Stream Events

Streams are EventEmitter objects.

Common Events:

```text
data
end
error
finish
close
```

---

## data Event

Triggered whenever data is available.

Example:

```js
readStream.on("data",(chunk)=>{

   console.log(chunk);

});
```

---

## end Event

Triggered when reading completes.

```js
readStream.on("end",()=>{

   console.log("Completed");

});
```

---

## error Event

Triggered when an error occurs.

```js
readStream.on("error",(err)=>{

   console.log(err);

});
```

---

## finish Event

Triggered when writing completes.

```js
writeStream.on("finish",()=>{

   console.log("Done");

});
```

---

# Pipe Method

## Definition

The pipe() method connects a readable stream directly to a writable stream.

---

## Why Needed

Without Pipe:

```text
Read
  │
  ▼
Store
  │
  ▼
Write
```

With Pipe:

```text
Read
  │
  ▼
Pipe
  │
  ▼
Write
```

---

## Syntax

```js
readStream.pipe(writeStream);
```

---

## Example

```js
const fs = require("fs");

const readStream =
fs.createReadStream("input.txt");

const writeStream =
fs.createWriteStream("output.txt");

readStream.pipe(writeStream);
```

---

## Real World Example

```text
Copying Large Files
```

---

# Buffer vs Stream

| Feature | Buffer | Stream |
|----------|----------|----------|
| Data Handling | Entire Data | Chunk By Chunk |
| Memory Usage | High | Low |
| Performance | Lower | Higher |
| Large Files | Not Suitable | Suitable |

---

# Sample Program 1

## Read File Using Stream

```js
const fs = require("fs");

const readStream =
fs.createReadStream("sample.txt");

readStream.on("data",(chunk)=>{

   console.log(chunk.toString());

});
```

---

# Sample Program 2

## Write File Using Stream

```js
const fs = require("fs");

const writeStream =
fs.createWriteStream("output.txt");

writeStream.write("Hello");

writeStream.end();
```

---

# Sample Program 3

## Copy File Using Pipe

```js
const fs = require("fs");

const readStream =
fs.createReadStream("input.txt");

const writeStream =
fs.createWriteStream("output.txt");

readStream.pipe(writeStream);
```

---

# Real-World Use Cases

## Video Streaming

```text
Netflix
YouTube
Amazon Prime
```

---

## Audio Streaming

```text
Spotify
Gaana
JioSaavn
```

---

## File Upload

```text
Google Drive
Dropbox
OneDrive
```

---

## File Download

```text
Software Downloads
Large Reports
```

---

# Advantages

- Fast Processing
- Low Memory Usage
- Efficient For Large Files
- Better Scalability
- Supports Real-Time Processing

---

# Disadvantages

- More Complex
- Event Handling Required
- Debugging Can Be Difficult

---

# Fresher Interview Questions

### What is a Stream?

A Stream processes data chunk by chunk instead of loading the entire data into memory.

---

### Why are Streams used?

To improve performance and reduce memory consumption.

---

### What are the types of Streams?

- Readable
- Writable
- Duplex
- Transform

---

### What is pipe()?

Used to connect Readable Stream to Writable Stream.

---

# 1-2 Years Interview Questions

### Difference Between Buffer and Stream?

Buffer stores entire data.

Stream processes data in chunks.

---

### What are Stream Events?

- data
- end
- error
- finish

---

### Why are Streams important?

They allow processing large files efficiently.

---

# Experienced Interview Questions

### How do Streams improve performance?

By processing chunks instead of loading entire data into memory.

---

### Explain Backpressure.

When Writable Stream is slower than Readable Stream.

Node.js controls the flow automatically.

---

### What is HighWaterMark?

Determines the size of internal buffer used by streams.

---

# Tricky Interview Questions

### Question 1

Can Streams work without Buffers?

Answer:

```text
No
```

Streams internally use Buffers.

---

### Question 2

What happens if a large file is read without streams?

Answer:

```text
High Memory Usage
Possible Application Crash
```

---

### Question 3

Is pipe() synchronous?

Answer:

```text
No
```

It works asynchronously.

---

### Question 4

Can a Duplex Stream read and write simultaneously?

Answer:

```text
Yes
```

---

### Question 5

Which stream type is used for compression?

Answer:

```text
Transform Stream
```

---

# Coding Questions

### Q1 Read File Using Stream

### Q2 Write File Using Stream

### Q3 Copy File Using Pipe

### Q4 Create Readable Stream

### Q5 Create Writable Stream

### Q6 Handle Stream Errors

### Q7 Stream Large Video File

### Q8 Compress Data Using Streams

---

# Summary

In this chapter, we learned:

- What Streams Are
- Why Streams Are Needed
- Internal Working
- Readable Streams
- Writable Streams
- Duplex Streams
- Transform Streams
- Stream Events
- Pipe Method
- Buffer vs Stream
- Real-World Examples
- Interview Questions
- Tricky Questions

Streams are one of the most important Node.js concepts because they allow efficient processing of large amounts of data while consuming minimal memory.

---

## Next Topic

➡️ Crypto Module

Topics Covered:

- Hashing
- Encryption
- Decryption
- Random Bytes
- Password Security
- SHA256
- HMAC
- Interview Questions