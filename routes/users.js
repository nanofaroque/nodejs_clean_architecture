'use strict';

const express = require('express');
const  router = express.Router();
const UserController=require('../controllers/user-controller');
const userValidation = require('../validations/users-validation');
const UserValidation = new userValidation();
router.post('/signup',UserValidation.validateInput, UserController.signup);
router.get('/signin', UserController.signin);
module.exports = router;