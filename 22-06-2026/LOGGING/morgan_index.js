const express = require('express');

require('dotenv').config();

const PORT = process.env.PORT || 5000

const app = express();

const morgan = require('morgan');

app.use(express.json());

// app.use(morgan('dev'));
app.use(morgan('combined'));



app.get('/', (req, res) => {
    res.status(200).json({
        status:true,
        message: 'hello from server side'
    })
})

app.all('/user', (req, res) => {
    res.status(200).json({
        status:true,
        message: 'hello from server side of all API'
    })
})


app.listen(PORT, () => {
    console.log('server is running on ' + PORT)
})