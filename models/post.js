var {Sequelize, DataTypes, Model} = require('sequelize');
const { Database } = require('../util/database');

let connection = connect();

class Post extends Model {
}

Post.init ({
    postId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        get() {
            return this.getDataValue(postId);
        },
        set(val) {
            this.setDataValue(val);
            if (!this.properties){
                this.properties = {};
                this.properties[postId] = val;
            }
        }
    },
    title: {
        type: DataTypes.STRING
    },
    body: {
        type: DataTypes.TEXT({ length: 'medium' })
    }
},
{
    sequelize: connection,
    modelName: 'Post'
}
);

connection.close();

module.exports = Post;
