const express = require('express');
const  router = express.Router();
const userValidation = require('../validations/users-validation');
const UserValidation = new userValidation();
let userInteractor = require('../interactors/users-interactor');
const UserInteractor = new userInteractor();

/* GET users listing. */
router.post('/',
    UserValidation.validateInput,
    function (req, res, next) {
        let user = {
            name: req.body.name,
            email: req.body.email
        }

        UserInteractor.saveUser(user).then(function (result) {
            res.status('200').send(result);
        }).catch(function (error) {
            res.status('500').send(error);
        })
    });

module.exports = router;
