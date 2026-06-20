const express = require('express');

require('dotenv').config();

const PORT = process.env.PORT || 5000;


const {validations} = require('./validations/validations');
const {validationMiddleware} = require('./middlewares/validationMiddleware')


const app = express();
app.use(express.json())


app.get('/', (req, res) => {
    res.status(200).json({
        status:true, 
        message: 'hello from server side'
    })
})


app.post('/user/create', validations.createUser, validationMiddleware ,(req, res) => {
    res.status(201).json({
        status:true,
        message: 'user created successfully'
    })
})

app.put('/user/update', validations.updateUser, validationMiddleware,  (req, res) => {
    res.status(200).json({
        status:true,
        message: 'user updated successfully'
    })
})

app.delete('/user/delete/:id', validations.deleteUser, validationMiddleware,  (req, res) => {
    res.status(200).json({
        status:true,
        message: 'user deleted successfully'
    })
})

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
})