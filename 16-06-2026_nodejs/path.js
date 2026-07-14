// Path module is useful for file path operations 
const path = require('path');


console.log(path.join(__dirname, 'second_folder'))

// const secondFolderPath = __dirname + '/second_folder';
// console.log(secondFolderPath);

// get the extension name of the file 
console.log(path.extname(__filename));
console.log(path.basename(__filename));
console.log(path.dirname(__filename));

console.log(path.relative(__filename, 'newfile'));
console.log(path.isAbsolute(__filename));
console.log(path.isAbsolute('../newfile'));
console.log(path.resolve('newfile', 'newfile2'));



// photos 
// store the photos in uploads folder 
// console.log(path.join(__dirname, 'uploads'));
// fs.writefile()