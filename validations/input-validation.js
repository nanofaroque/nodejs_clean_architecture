'use strict';

class InputValidation {
    constructor() {
        // If you need to do any initializations here
    }

    /**
     * This is a abstract method, all the validations subclass need to implement this method.
     * @param req Request parameters for incoming request.
     * @param res Response object to the client.
     * @param next pass the control to next task.
     *
     * */
    validateInput(req, res, next) {
        return new Error('Any subclass needs to implement this method');
    }
}

module.exports = InputValidation;