'use strict';
const InputValidation = require('./input-validation');

class UserValidation extends InputValidation {

    constructor() {
        super();
    }

    validateInput(req, res, next) {
        console.log(req.body.name);
        console.log(req.body.email);
        console.log('do your validation');
        next();
    }
}
module.exports = UserValidation;