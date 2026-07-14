const router = require('express').Router();
const {testMiddleware, testMiddleware2} = require('../helpers/middlewares')

router.use(testMiddleware)
router.use(testMiddleware2)


router.get('/', (req, res) => {
    res.send('this is from get users')
})

router.get('/:id', (req, res) => {
    res.send('this is from get user by id ' + req.params.id)
})

router.post('/', (req, res) => {
    res.send('this is from post user')
})

router.put('/:id', (req, res) => {
    res.send('this is from put user')
})


router.delete('/:id', (req, res) => {
    res.send('this is from delete user')
})


module.exports = router;