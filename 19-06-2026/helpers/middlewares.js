const testMiddleware = (req, res, next) => {
    console.log('Test middleware 1 is working')
    next();
}

const testMiddleware2 = (req, res, next) => {
    console.log('Test middleware 2 is working')
    next();
}

const testMiddleware3 = (req, res, next) => {
    console.log('Test middleware 3 is working')
    next();
}

const apiKeyMiddleware = (req, res, next) => {
    const apiKey = req.headers.api_key;

    if(!apiKey){
        return res.status(400).json({
            status:false,
            message: 'API Key is required'
        })
    }

    next();
}

module.exports = {
    testMiddleware,
    apiKeyMiddleware,
    testMiddleware2,
    testMiddleware3
}