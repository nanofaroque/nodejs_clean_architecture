'use strict';
const db = require('../models');

/**
 * This is the parent class of all the interactors.
 * Interactors is nothing but helper to communicate with any external api and db
 * */
class Interactor {

    /**
     * Represents Interactor for communicating with external services or DB.
     * @constructor
     * */
    constructor() {
        this.init();
    }

    /**
     * Initialize all needed abjects to communicate with db or any external api.
     * */
    init() {
        this.db = db;
    }

    /**
     * @return Reference of the db object to communicate with database
     * */
    getDB() {
        return this.db;
    }
}

module.exports = Interactor;