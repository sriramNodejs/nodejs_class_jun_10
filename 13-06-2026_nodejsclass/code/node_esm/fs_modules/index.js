// const fs = require('fs');
import fs from "fs";

// Read the files 

// async callback way
// fs.readFile('notes.txt', 'utf-8', (err, data) => {
//     if(err){
//         console.log('err')
//         return;
//     }
//     console.log(data)
// })

// Sync way 
const data = fs.readFileSync('notes.txt', 'utf-8');
console.log(data, 'from sync way')


