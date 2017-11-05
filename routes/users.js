var express = require('express');
var router = express.Router();
var userValidation = require('../validations/users-validation');
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
        //res.send('respond with a resource');

    });

module.exports = router;
