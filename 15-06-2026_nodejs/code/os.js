// OS -> Operating System 
// it is a software which directly work with hardware (CPU and other hardware components)

// OS
const os = require('os');
console.log(os.hostname(), 'host name of the Operating system');
console.log(os.cpus().length, 'no of cpus');
console.log(os.arch())
console.log(os.freemem(), 'free memory');
console.log(os.totalmem(), 'total memory');
console.log(os.type());

console.log(os.version());
console.log(os.platform());
console.log(os.userInfo());