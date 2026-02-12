const { DataTypes } = require('sequelize');
const sequelize = require('./database'); // ton instance Sequelize

const Article = sequelize.define('Article', {
    uid: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    desc: {
        type: DataTypes.TEXT, // texte plus long que STRING
        allowNull: true
    },
    author: {
        type: DataTypes.STRING,
        allowNull: true
    },
    imgPath: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    tableName: 'articles', // pour correspondre au nom de la collection MongoDB
    timestamps: true        // optionnel, crée createdAt et updatedAt
});

module.exports = Article;
