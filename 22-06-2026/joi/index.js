const express = require('express');

const app = express();
require('dotenv').config();

app.use(express.json());

const KUMAR = process.env.KUMAR || 5000;

const { validateWithJoi } = require('./middleware/validationMiddleware');

const { validations } = require('./validators/validator');

app.get('/', (req, res) => {
    res.send('hello from server side')
})

app.post('/user/signin', validateWithJoi(validations.createUser), (req, res) => {
    res.json({
        status: true,
        message: 'sign in successful'
    })
})

app.listen(KUMAR, () => {
    console.log(`server is running on ${KUMAR}`)
})