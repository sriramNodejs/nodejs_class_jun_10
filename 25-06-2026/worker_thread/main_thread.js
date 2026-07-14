const express = require('express');
require('dotenv').config();
const {Worker} = require('worker_threads')

const PORT = process.env.PORT || 5000;

const app = express();


app.get('/', (req, res) => {
    res.send('hello from server side')
})


app.get('/heavy-task', (req, res) => {
    const worker = new Worker('./workerScript.js');

    worker.on('message', (result) => {
        res.status(200).json({status:true, data: result})
    })

    worker.on('error', (result) => {
        res.status(500).json({status:true, message: error.message || 'internal server errror'})
    })
})

app.listen(PORT, () => {
    console.log('server is running on '+ PORT)
})