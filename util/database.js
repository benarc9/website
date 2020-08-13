const Sequelize = require('sequelize');

class Database {
	constructor () {
	}

	connect (dbName, username, password, hostPath, api, hostPort) {
		Database.connection = new Sequelize(
			dbName,
			username,
			password,
			{
				host: hostPath,
				dialect: api,
				port: hostPort
			}
		)
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

	getConnection() {
		return Database.connection;
	}
}

Database.connection = null;

module.exports = Database;
