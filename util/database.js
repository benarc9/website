const Sequelize = require('sequelize');

class Database {
	constructor () {
	}

	connect () {
		Database.connection = new Sequelize('website', 'root', '1234', {
			host: 'localhost',
			dialect: 'mysql',
			port: 3306
		});
	}

	test () {
		Database.connection.authenticate()
			.then(() => {
				console.log('Connection established!');
			})
			.catch(err => {
				console.error('Failed to connect!');
			});
	}
}

Database.connection;

module.exports = Database;
