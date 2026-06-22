const validateWithJoi = (schema) => {
    return (req, res, next) => {
        if (schema.query) {
            const { error, value } = schema.query.validate(req.query);
            if (error) return res.status(400).json({ status: false, message: error.details[0].message })

            req.query = value
        }

        if (schema.body) {
            const { error, value } = schema.body.validate(req.body);
            if (error) return res.status(400).json({ status: false, message: error.details[0].message })

            req.body = value
        }

        next();
    }
}

module.exports = {
    validateWithJoi
}