const { z } = require('zod');


const validations = {
    createUser: z.object({
        query: z.object({
            role: z.enum(['admin', 'user'], {
                message: 'Role must be admin or user'
            }).optional()
        }),
        body: z.object({
            email: z.string().email({
                message: 'Enter valid email'
            }),
            password: z.string().min(6, {
                message: 'password must be at least 6 characters long'
            })
        })
    })
}

module.exports = {
    validations
}