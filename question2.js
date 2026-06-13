const fs = require('fs');



fs.readFile(__filename, () => {
    console.log('inside IO queue');

    setTimeout(() => console.log('time out '), 0);


    setImmediate(() => console.log('check queue'))
})

console.log('1')





// 1
// inside IO queue
// check queue
// set timeout 