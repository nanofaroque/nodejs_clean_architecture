'use strict';
const interactor = require('../interactors/interactor');

class UserInteractor extends interactor {
	constructor() {
		super();
	}

	saveUser(user) {
		return new Promise(resolve => {
			/**
			 *Get the reference of User model
			 */
			const User = this.getDB().User;
			/**
			 * Build user object to save into db
			 * */
			let userModel = User.build(user);
			/**
			 * Save use object
			 * */
			userModel.save().then(function (savedUser) {
				resolve(savedUser);

			}).catch(function (err) {
				resolve(err);
			})

		}, reject => {
			reject('something went wrong');
		});
	}

	getUser(user) {
		return new Promise(resolve => {
				resolve("User found");
			},
			reject => {
				reject('User not found');
			});
	}
}

module.exports = UserInteractor;