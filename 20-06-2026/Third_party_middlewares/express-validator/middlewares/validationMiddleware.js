const { validationResult } = require('express-validator')

const validationMiddleware = (req, res, next) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        // first error message
        const errorMessage = errors.array()[0].msg;
        return res.status(400).json({
            status:false,
            message: errorMessage
        })
    }

    next();
}

module.exports = {
    validationMiddleware
}