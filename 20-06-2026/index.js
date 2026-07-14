const express = require('express');

require('dotenv').config();

const PORT = process.env.PORT || 5000;

const {bodyMiddleware, paramMiddleware, queryMiddleware} = require('./middlewares/middleware');

const app = express();
app.use(express.json())



app.get('/', (req, res) => {
    res.status(200).json({
        status:true, 
        message: 'hello from server side'
    })
})

app.post('/user', bodyMiddleware, (req, res) => {
    res.status(200).json({
        status:true, 
        message: 'hello from server side POST API'
    })
})

app.put('/user', queryMiddleware, (req, res) => {
    res.status(200).json({
        status:true, 
        message: 'hello from server side of PUT API'
    })
})

app.delete('/user/:token', paramMiddleware, (req, res) => {
    res.status(200).json({
        status:true, 
        message: 'hello from server side'
    })
})


app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
})