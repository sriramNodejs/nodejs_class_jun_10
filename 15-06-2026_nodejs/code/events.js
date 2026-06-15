// Nodejs is EDA
// Event Driven Architecture
const EventEmitter = require('events');

const myEvent = new EventEmitter();

myEvent.on('userSignup', (username, password) => {
    console.log(`Your username is ${username} and your password is ${password}`)
});

myEvent.on('userSignup123', (username, password) => {
    console.log(`Your username is ${username} and your password is ${password}`)
});


myEvent.emit('userSignup', 'nodejs123', 'thisIsSuperSecret');
myEvent.emit('userSignup123', 'nodejs123', 'thisIsSuperSecret');