const UnprocessableEntityException = require('../exceptions/UnprocessableEntityException');
const db = require('../services/db');

module.exports = (validationRules, params) => async (req, res, next) => {
    const errors = {};

    for await (const field of Object.keys(validationRules)) {
        const errMessages = [];
        const rules = validationRules[field];

        for await (const ruleWithParams of Object.entries(rules)) {
            const [rule, param] = ruleWithParams;
            switch (rule) {
                case 'required':
                    if (!req.body[field]) {
                        errMessages.push('field is required');
                    }
                    break;
                case 'email':
                    if (!/^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/.test(req.body[field])) {

                        errMessages.push(' email is not valid');
                    }
                    break;
                case 'min': {
                    const minValue = parseFloat(param);
                    if (req.body[field] && req.body[field].length < minValue) {
                        errMessages.push(`input is too short, min length is ${minValue}`);
                    }
                    break;
                }
                case 'max': {
                    const maxValue = parseFloat(param);
                    if (req.body[field] && req.body[field].length > maxValue) {
                        errMessages.push(`input is too long, max length is ${maxValue}`);
                    }
                    break;
                }
            }
        }
        if (errMessages.length !== 0) {
            errors[field] = errMessages;
        }
    }

    if (Object.keys(errors).length === 0) {
        return next();
    }
    return next(new UnprocessableEntityException(errors));
};

