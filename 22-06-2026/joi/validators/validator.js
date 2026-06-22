const Joi = require('joi');


const validations = {
    createUser: {
        query: Joi.object({
            role: Joi.string().valid('admin', 'user').optional().messages({
                'string.base':'role must be string',
                'any.only':"role must between admin and user"
            })
        }),
        body: Joi.object({
            email: Joi.string().email().required().messages({
                'string.empty':'email is required 123',
                'any.required':'email is required',
                'string.email':"please enter a valid email format"
            }),
            password: Joi.string().min(6).required().messages({
                'string.empty':'password is required',
                'any.required':"password is required",
                'string.min':"password must be minimum 6 characters long"
            })
        })
    }
}

module.exports = {
    validations
}