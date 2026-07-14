const express = require('express');
const router = express.Router();

const ordersRoutes = require('./orders');
const addressRoutes = require('./addresses');

// registering our routers
router.use('/orders', ordersRoutes)
router.use('/address', addressRoutes)

module.exports = router;