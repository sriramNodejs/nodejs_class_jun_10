const express = require('express');

require('dotenv').config();

const PORT = process.env.PORT || 5000;
// const { validateWithZod } = require('./middlewares/validationMiddleware');

// const { validations } = require('./validations/validator')

const app = express();
app.use(express.json())


app.get('/', (req, res) => {
    res.status(200).json({
        status: true,
        message: 'hello from server side'
    })
})

// app.post('/user/create', validateWithZod(validations.createUser), (req, res) => {
//     res.status(200).json({
//         status: true,
//         message: 'hello from server side'
//     })
// })

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
})