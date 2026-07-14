const express = require('express');

require('dotenv').config();

const PORT = process.env.PORT || 5000;
const helmet = require('helmet');

const rateLimit = require('express-rate-limit');
const mongoSanitize = require('express-mongo-sanitize');


const limiter = rateLimit({
    windowMs: 1 * 60 * 1000,
    limit: 10, 
    message: {
        status: false,
        message: 'Too many requests from this IP , please try after some times'
    },
    standardHeaders: 'draft-7',
    // legacyHeaders: true
})

const app = express();

app.use(helmet())
app.use(limiter);

app.use((req,res, next) => {
    console.log(req.headers['user-agent'])
    next();
})


app.use(express.json());
// app.use(mongoSanitize());


app.get('/', (req, res) => {
    res.status(200).send('hello from server side')
})
// app.use(morgan('combined'))


app.listen(PORT, () => {
    console.log('server is running on ' + PORT)
})