const express = require('express');

require('dotenv').config();

const PORT = process.env.PORT || 5000;
const app = express();


app.use(express.json());

app.get('/', (req, res) => {
    res.send('hello from server')
})

const catchAsync = (fn) => {
    return (req, res, next) => {
        fn(req, res, next).catch(next)
    }
}


app.get('/post', (req, res) => {
    try {
        console.log('global error handler is called')
        throw new Error('this is error')
        res.send('hello from server')
    } catch (error) {
        // next(error);
        res.status(500).json({
            status: false,
            message: error.message || 'server error'
        })
    }

})

app.post('/post', catchAsync((req, res) => {
    console.log('global error handler is called')
    throw new Error('this is error')
    res.send('hello from server')
}))


// Global error handler
app.use((err, req, res, next) => {
    res.status(500).json({
        status: false,
        message: err.message || 'internal server error'
    })
})

process.on('uncaughtException', (error) => {
    console.log('uncaught exceptions');
    gracefulShutDown()
})

process.on('unhandledRejection', (error) => {
    console.log('unhandledRejection exceptions');
    gracefulShutDown()
})

function gracefulShutDown(){
    process.exit(1); // we are getting a error
}

app.listen(PORT, () => {
    console.log('server is running on ' + PORT)
})