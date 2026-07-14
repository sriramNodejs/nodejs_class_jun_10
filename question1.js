const fs = require('fs');

console.log(__filename, 'filename')

const readStream = fs.createReadStream(__filename);

readStream.close();

// Closed callback
readStream.on('close', () => {
    console.log('closed stream')
})

// I/O
fs.readFile(__filename, () => {
    console.log('file read');
})


fs.readFile(__filename, () => {
    console.log('inside IO queue');

    setTimeout(() => console.log('time out '), 0);


    setImmediate(() => console.log('check queue'))
})

console.log('1.1')


console.log('1');

setTimeout(() => console.log(2), 0)

console.log('3');

process.nextTick(() => console.log(4));

setImmediate(() => console.log(5));


console.log(6);

Promise.resolve().then(() => console.log(7));

// read stream write stream , Buffer 