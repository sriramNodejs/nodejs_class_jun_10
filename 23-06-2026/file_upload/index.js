const express = require('express');

require('dotenv').config();

const PORT = process.env.PORT || 5000;
const fileUpload = require('express-fileupload')
const app = express();
const path = require('path');

const {fileUploadMiddleware} = require('./helpers/helper');
const {validations } = require('./validations/rules');
const {validationMiddleware} = require('./helpers/validationMiddleware');


app.use(express.json());
app.use(fileUpload());




app.use('/public', express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.send('hello from server')
})

app.post('/upload',validations.fileUpload, validationMiddleware, fileUploadMiddleware, (req, res) => {
    res.json({
        status:true, 
        message: 'file upload successfully'
    })
})

// Global error handler
app.use((err, req, res, next) => {
    res.status(500).json({
        status:false,
        message: err.message || 'internal server error'
    })
})

app.listen(PORT, () => {
    console.log('server is running on ' + PORT)
})