// Some of Utility methods present inside util module 
const utils = require('util');
const fs = require('fs');
const dnsPromise = require('dns/promises');


// promisify
// -> convert callbcks into promises


// async and callback based
// fs.readFile

/*

const fsReadFilePromise = utils.promisify(fs.readFile);

fsReadFilePromise('notes.txt', 'utf-8').then((data) => {
    console.log(data)
}).catch((err) => {
    console.log(err)
})

*/

// callbackify
// -> it will convert promises to callbacks 

// const callBackDnsResolve = utils.callbackify(dnsPromise.resolve);
// callBackDnsResolve('google.com', (err, addresses) => {
//     if(err){
//         console.log(err)
//         return;
//     }
//     console.log(addresses)
// })


console.log(utils.format('your username is %s and your age is %d', 'nodejs', 12))
// JSON -> %j
// Objects -> %O
// %s -> string 
// %i , %d -> number

console.log(utils.format('this is a json object %i',{
    name: 'nodejs',
    age: '12'
}))