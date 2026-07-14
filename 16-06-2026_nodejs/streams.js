const fs = require('fs');
const { Duplex } = require('stream');
const zlib = require('zlib');


/*
const readStream = fs.createReadStream('notes.txt', 'utf-8');

readStream.on('data', (chunk) => {
    console.log('chunk data received');
    console.log(chunk);
})

readStream.on('end', () => {
    console.log('file read successfully');
})

readStream.on('err', (err) => {
    console.log(' error in readStream', err);
})

*/

/*

const writeStream = fs.createWriteStream('output.txt');
writeStream.write('this is a write stream')
writeStream.write('\nthis is a write stream 1')
writeStream.write('\nthis is a write stream 2')
writeStream.write('\nthis is a write stream 3')

writeStream.end();

writeStream.on('finish', () => {
    console.log('file written successfully');
})

*/

// Piping -> transfers one stream to another stream 

/*
const readStream = fs.createReadStream('notes.txt', 'utf-8');
const writeStream = fs.createWriteStream('output_notes.txt');
readStream.pipe(writeStream);

*/


/*
class MyDuplexStream extends Duplex{
    constructor(options){
        super(options)
        this.readCount = 1
    }

    _write(chunk, encoding, callback){
        console.log('writing: ---> saving data '+ chunk.toString().trim())
        callback()
    }

    _read(){
        if(this.readCount <= 3){
            this.push('reading: => automated message'+ this.readCount);
            this.readCount++
        } else {
            this.push(null)
        }
    }
}

const myDuplexStreamObject = new MyDuplexStream();

myDuplexStreamObject.pipe(process.stdout);
myDuplexStreamObject.write('      first line       \n');
myDuplexStreamObject.write('second line\n');
myDuplexStreamObject.write('third line\n');
myDuplexStreamObject.write('fourth line\n');

myDuplexStreamObject.end();


*/


// Transform 
const src = fs.createReadStream('notes.txt');

const transformGzip = zlib.createGzip();

const destination = fs.createWriteStream('notes.txt.gz');

src.pipe(transformGzip).pipe(destination);

console.log('file compressed successfully')