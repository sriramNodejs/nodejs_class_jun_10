const express = require('express');
require('dotenv').config();

const PORT = process.env.PORT || 8008;

const app = express();


const userRoutes = require('./routes/userRoutes')


// GET Home ROute
app.get('/', (req, res) => {
    res.send('hello world from express server');
})

app.get('/json', (req, res) => {
    res.status(500).json({
        status:true,
        message: 'this is a json format'
    })
})

app.patch('/json', (req, res) => {
    res.status(500).json({
        status:true,
        message: 'this is a json format from patch api'
    })
})

app.delete('/json', (req, res) => {
    res.status(500).json({
        status:true,
        message: 'this is a json format from delete api'
    })
})

app.all('/all-method', (req, res) => {
    const methodName = req.method;
    res.status(500).json({
        status:true,
        message: 'this is a json format from app.all ' + methodName
    })
})

app.use('/user', userRoutes)


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})