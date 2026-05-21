const validator = require('../utilities/validate');

const saveContact = (req, res, next) => {
    const validationRule = {
        firstName: 'required|String',
        lastName: 'required|String',
        email: 'required|email',
        favoriteColor: 'required|String',
        birthday: 'string'
    };
    validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412).send({
                success: false,
                message: 'Validation failed',
                data: err
            });
        }else{
            next();
        }
    });
};

module.exports = {saveContact};