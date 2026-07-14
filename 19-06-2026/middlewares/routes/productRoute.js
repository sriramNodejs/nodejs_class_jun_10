const router = require('express').Router();
const {rotuerLeveMiddlewareInRoutes} = require('../utils/middlewares')

// router.use(rotuerLeveMiddlewareInRoutes)


router.get('/', rotuerLeveMiddlewareInRoutes,(req, res) => {
    res.status(200).json({
        status: true,
        message: 'Products retrieved successfully'
    });
});


router.post('/create', (req, res) => {
    res.status(201).json({
        status: true,
        message: 'Products Created Successfully'
    });
});

router.delete('/:id', (req, res) => {
    res.status(200).json({
        status: true,
        message: 'Products Deleted Successfully'
    });
});


router.put('/:id', (req, res) => {
    res.status(200).json({
        status: true,
        message: 'Products Updated Successfully'
    });
});


module.exports = router;
