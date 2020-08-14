const Sequelize = require('sequelize');

class Database {};

connect = function () {
	let connection = new Sequelize(
		'website',
		'admin',
		'caution2',
		{
			host: 'localhost',
			dialect: 'mysql',
			port: '3306'
		}
	)

	return connection;
}

test = function (connection) {
	connection.authenticate().then(() => {
		console.log('Connection established!');
	}).catch(err => {
		console.error('Failed to connect!');
	});
}

module.exports = {Database};
