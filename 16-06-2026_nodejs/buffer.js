// Buffer is a temporary memory where we can store some data Binary

const newBuffer = Buffer.from('new String');
console.log(newBuffer)
console.log(newBuffer[1], newBuffer[0], 5)
console.log(newBuffer.toString(), 5);

const buffer2 = Buffer.alloc(10);
console.log(buffer2, '8');