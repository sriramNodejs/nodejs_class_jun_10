const rotuerLeveMiddleware = (req, res, next) => {
    console.log('router level Middleware executed in application level');
    next();
}

const rotuerLeveMiddlewareInRoutes = (req, res, next) => {
    console.log('router level Middleware executed in router level');
    next();
}


const bodyMiddleware  = (req,res, next) => {
    if(!req.body.name){
        return res.status(400).json({
            status:false,
            message: 'name is required in the body'
        })
    }

    next()
}

const queryMiddleware  = (req,res, next) => {
    if(!req.query.id){
        return res.status(400).json({
            status:false,
            message: 'id is required in the query'
        })
    }

    next()
}

const roleMiddleware  = (req,res, next) => {
    if(!req.query.role){
        return res.status(400).json({
            status:false,
            message: 'role is missing'
        })
    }

    if(!['admin', 'employee'].includes(req.query.role)){
        return res.status(400).json({
            status:false,
            message: 'correct role is required '
        })
    }

    if(req.query.role !== 'admin'){
        return res.status(400).json({
            status:false,
            message: 'you dont have authorization to use this API'
        })
    }

    next()
}

const paramsMiddleware  = (req,res, next) => {
    if(!req.params.id){
        return res.status(400).json({
            status:false,
            message: 'id is required in the params'
        })
    }

    next()
}

const tokenMiddleware  = (req,res, next) => {

    if(!req.headers.token){
        return res.status(400).json({
            status:false,
            message: 'token is missing'
        })
    }
    // console.log(typeof req.headers.token)

    req.headers.token = parseInt(req.headers.token)
    // req.headers.token = Number(req.headers.token)

    if(req.headers.token !== 12345){
        return res.status(400).json({
            status:false,
            message: 'token is not matched'
        })
    }

    next()
}

module.exports = {
    rotuerLeveMiddleware,
    rotuerLeveMiddlewareInRoutes,
    bodyMiddleware,
    queryMiddleware,
    roleMiddleware,
    paramsMiddleware,
    tokenMiddleware
}