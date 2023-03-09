const bodyValidator = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate(req.body);
        if (error) {
            res.status(400).json({ message: error.message });
        }
        next();
    };
};

const paramsValidator = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate(req.params);
        if (error) {
            res.status(400).json({ message: error.message });
        }
        next();
    };
};


module.exports = {
    bodyValidator, paramsValidator
};