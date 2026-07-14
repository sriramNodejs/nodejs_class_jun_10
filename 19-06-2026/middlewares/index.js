const express = require('express');
const PORT = 3000;

const productRoutes = require('./routes/productRoute');
const { rotuerLeveMiddleware, bodyMiddleware, queryMiddleware, paramsMiddleware, roleMiddleware, tokenMiddleware } = require('./utils/middlewares');

const morgan = require('morgan');

const app = express();

app.use(express.json());

app.use(morgan('combined'))

const testMiddlware = (req, res, next) => {
    console.log('Middleware executed');
    next();
}


app.get('/',testMiddlware, (req, res) => {
    res.status(200).json({
        status:true, 
        message: 'hello from server side '
    })
})

app.post('/', bodyMiddleware,(req, res) => {
    console.log(req.body, 'request body')
    res.status(200).json({
        status:true, 
        message: 'hello from server side '
    })
})

app.put('/', queryMiddleware, (req, res) => {
    // console.log(req.body, 'request body')
    // throw new Error('this is test error')
    res.status(200).json({
        status:true, 
        message: 'hello from server side PUT API'
    })
})

app.delete('/:id', paramsMiddleware, (req, res) => {
    // console.log(req.body, 'request body')
    // throw new Error('this is test error')
    res.status(200).json({
        status:true, 
        message: 'hello from server side delete API'
    })
})

app.put('/users', roleMiddleware, (req, res) => {
    res.status(200).json({
        status:true, 
        message: 'hello from server side PUT API'
    })
})

app.post('/users/create', tokenMiddleware, (req, res) => {
    res.status(200).json({
        status:true, 
        message: 'hello from server side Users Create API'
    })
})

app.use('/products', productRoutes)




// error handling middleware
// app.use((err, req, res, next) => {

// })


app.use(function(err, req, res, next){
    res.status(500).json({
        status:false,
        message: err.message || 'internal server error'
    })
})

app.listen(PORT, () => {
    console.log('server is running on port', PORT);
})