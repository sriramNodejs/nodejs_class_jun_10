const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('hello from server and Process Id is ' + process.pid)
})

app.listen(3000, () => {
    console.log('server is running on ' + 3000)
})