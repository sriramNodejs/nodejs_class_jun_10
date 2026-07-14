const express = require('express');

require('dotenv').config();

const {logger} = require('./middlewares/logging-middleware');

const PORT = process.env.PORT || 5000

const app = express();


app.use(express.json());



app.get('/', (req, res) => {
    logger.info('this is a message')
    res.status(200).json({
        status:true,
        message: 'hello from server side'
    })
})

app.all('/user', (req, res) => {
    logger.info('this is also a message')

    logger.warn('this is warning')
    logger.error('this is error')

    res.status(200).json({
        status:true,
        message: 'hello from server side of all API'
    })
})


app.listen(PORT, () => {
    console.log('server is running on ' + PORT)
})