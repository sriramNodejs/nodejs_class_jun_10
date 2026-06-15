// what is the use of crypto 
const crypto = require('crypto');

// generating unique IDs
// console.log(crypto.randomBytes(10).toString('hex'))
// console.log(crypto.randomBytes(10).toString('hex'))
// console.log(crypto.randomBytes(10).toString('hex'))
// console.log(crypto.randomBytes(10).toString('hex'))


const str = 'hello world';
const md5 = crypto.createHash('md5').update(str).digest('binary');
console.log(md5, 'md5 string')


const sha256 = crypto.createHash('sha256').update(str).digest('hex');
console.log(sha256);

// CIPHer , IV