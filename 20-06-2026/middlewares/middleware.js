const bodyMiddleware = (req, res, next) => {
    const name = req.body.name;
    if (!name) {
        return res.status(400).json({
            status: false,
            message: 'in body name is required'
        })
    }

    next();
}

const queryMiddleware = (req, res, next) => {
    let age = req.query.age;
    if (!age) {
        return res.status(400).json({
            status: false,
            message: 'in query age is required'
        })
    }

    if (isNaN(Number(age))) {
        return res.status(400).json({
            status: false,
            message: 'in query age must be a number'
        })
    }

    next();
}

const paramMiddleware = (req, res, next) => {
    const token = req.params.token;

    if (!token) {
        return res.status(400).json({
            status: false,
            message: 'in params token is required'
        })
    }

    if (isNaN(Number(token))) {
        return res.status(400).json({
            status: false,
            message: 'in params token must be a number'
        })
    }

    if(token !== '1234'){
        return res.status(400).json({
            status: false,
            message: 'token missmatched'
        })
    }

    next();
}

module.exports = {
    bodyMiddleware,
    queryMiddleware,
    paramMiddleware
}