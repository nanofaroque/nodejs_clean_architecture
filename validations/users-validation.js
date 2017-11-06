'use strict';
const InputValidation = require('./input-validation');

class UserValidation extends InputValidation {

    /**
     *
     * @constructor
     * */
    constructor() {
        super();
    }

    /**
     * This validation for particular parameter on a specific route. If you have validation for generic purpose,
     * it is better to use as a middleware
     * */
    validateInput(req, res, next) {
        console.log(req.body.name);
        console.log(req.body.email);
        console.log('do your validation');
        next();
    }
}
module.exports = UserValidation;