var {Sequelize, DataTypes} = require('sequelize');
const Database = require('../util/database').connection;

const Post = Database.getConnection().define('Post', {
    postId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true
    },
    title: {
        type: DataTypes.STRING
    },
    body: {
        type: DataTypes.TEXT({length: 'medium'})
    }
});

module.exports = Post;