'use strict';

let userInteractor = require('../interactors/users-interactor');
const UserInteractor = new userInteractor();

exports.signup=function(req,res,next){
    UserInteractor.saveUser(user).then(function (result) {
        res.status('200').send(result);
    }).catch(function (error) {
        res.status('500').send(error);
    });
};

exports.signin=function(req,res,next){
    UserInteractor.getUser(user).then(result=>{
        res.status('200').send(result);
    }).catch(error=>{
        res.status('500').send(error);
    })
};