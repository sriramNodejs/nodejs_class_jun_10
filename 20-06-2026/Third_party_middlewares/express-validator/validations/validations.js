const { body, query, param } = require('express-validator')

const validations = {
    createUser: [
        body('name').notEmpty().withMessage('name is required'),
        body('age').notEmpty().withMessage('age is required'),
        body('gender').notEmpty().withMessage('gender is required').isIn(['male', 'female']).withMessage('gender must be male or female'),
        body('email').optional().isEmail().withMessage('email is invalid')
    ],
    deleteUser: [
        param('id').notEmpty().withMessage('id is required')
    ],
    updateUser: [
        query('id').notEmpty().withMessage('id is required in query')
    ]
};

module.exports = {
    validations
}