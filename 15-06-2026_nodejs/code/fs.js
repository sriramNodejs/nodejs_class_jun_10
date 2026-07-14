const fs = require('fs');
const fsPromises = require('fs/promises');


// reading a file in fs with callbacks (Asynchronous)

// fs.readFile('./notes.txt', 'utf-8',(err, data) => {
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(data);
// })

// reading a file in synchronous 

// const readFileOperation = () => {
//     try {
//         const data = fs.readFileSync('./notes.txt', 'utf-8');
//         console.log('data from sync function', data)
//     } catch (error) {
//         console.log(error)
//     }
// }
// readFileOperation();


// Promises
// Promises are object representation of future value 
// 2 ways to resolve promise

// 1. then catch 
// 2. Async await 

// read file using fsPromises

// fsPromises.readFile('./notes.txt', 'utf-8').then((data) => {
//     console.log(data, '\nfspromises in then catch')
// }).catch((err) => {
//     console.log(err)
// })


// const fsPromisesAsync = async() => {
//     try {
//         const data = await fsPromises.readFile('./notes.txt', 'utf-8');
//         console.log(data, '\nfspromises in try catch')
//     } catch (error) {
//         console.log(error);
//     }
// }
// fsPromisesAsync();


// fsPromises.readFile('./notes111.txt', 'utf-8').then((data) => {
//     console.log(data, '\nfspromises in then catch')
// }).catch((err) => {
//     console.log(err)
// })

// EADDRINUSE
// Error: ENOENT: no such file or directory, open './notes111.txt'
//     at async open (node:internal/fs/promises:637:25)
//     at async Object.readFile (node:internal/fs/promises:1269:14) {
//   errno: -2,
//   code: 'ENOENT',
//   syscall: 'open',
//   path: './notes111.txt'
// }




// create a file 
// const data = 'this is the content of notes 22'
// fs.writeFile('notes22.txt', data, (err) => {
//     if(err){
//         console.log(err);
//         return
//     }
//     console.log('file created sucessfully')
// })


// create a folder

// fs.mkdir('nodejs', (err) => {
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log('folder created')
// })


// add content to a file

// fs.appendFile('notes.txt', '\nthis is the appended text', (err) => {
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log('data added successfully')
// })


// const data = 'this is a new file'
// fs.writeFile('./nodejs/notes22.txt', data, (err) => {
//     if(err){
//         console.log(err);
//         return
//     }
//     console.log('file created sucessfully')
// })


// delete a file 

// fs.unlink('notes_test.txt', (err) => {
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log('file deleted successfully')
// })

// read the folder 
// fs.readdir('nodejs', (err, files) => {
//     if (err) {
//         console.log(err);
//         return;
//     }

//     console.log(files);
// })

// to get the details of the file 
fs.stat('notes.txt', (err, stats) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log(stats)
})