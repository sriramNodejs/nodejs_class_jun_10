const express = require('express');

require('dotenv').config();

const PORT = process.env.PORT || 5000;

const app = express();
const {testMiddleware, apiKeyMiddleware, testMiddleware2, testMiddleware3} = require('./helpers/middlewares');

const userRoutes = require('./routes/users');

// How to register a middleware  -> by using use method
app.use(express.json());


// app.get('/:name/:age', testMiddleware, (req, res) => {
//     // qs (query string library)
    
//     // http://localhost:5000?name=nodejs&age=10&desciption=nodejs_software
//     // console.log(req.query, 'query data')
//     // const num = Number(req.query.age)
//     // const num2 = parseInt(req.query.age)
//     // console.log(num2)

//     // console.log(num)

//     // http://localhost:5000/nodejs/12
//     console.log(req.params)

//     res.send('hello world')
// })


app.post('/', apiKeyMiddleware,testMiddleware, testMiddleware2, testMiddleware3 ,(req, res) => {
    console.log(req.body, 32);
    res.send('hello world')
})

app.put('/', (req, res) => {
    console.log(req.headers, 32);
    res.send('hello world')
})

app.use('/users', userRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})