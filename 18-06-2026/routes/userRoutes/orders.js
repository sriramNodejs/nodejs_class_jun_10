const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        status:true,
        message: 'this is from orders GET API'
    })
})

module.exports = router;