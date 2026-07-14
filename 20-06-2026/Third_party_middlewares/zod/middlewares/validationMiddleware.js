const { ZodError } = require('zod');

const validateWithZod = (schema) => {
    return async (req, res, next) => {
        try {
            const parsed = await schema.parseAsync({
                body: req.body,
                query: req.query
            });

            req.body = parsed.body;
            req.query = parsed.query;

            next();
        } catch (error) {
            const errors = error.issues.map((issue) => ({
                feild: issue.path.join('.'),
                message: issue.message
            }));

            return res.status(400).json({
                message: 'validation Failed',
                firstError: errors[0],
                errors
            })

        }
    }
}

module.exports = {
    validateWithZod
}