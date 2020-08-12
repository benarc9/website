const Sequelize = require('sequelize');

class Database {
	constructor () {
	}

	tryRoot() {
		Database.connection  = new Sequelize('website', 'root', '1', {
			host: 'localhost',
			dialect: 'mysql'
		});
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
}

Database.connection;

module.exports = Database;
