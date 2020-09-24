const Sequelize = require('sequelize');
const connection = require('../database/connection');

const Book = connection.define('booklist', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    author: {
        type: Sequelize.STRING,
        allowNull: false
    },
    isbn: {
        type: Sequelize.STRING,
        allowNull: false
    },
    slug: {
        type: Sequelize.STRING,
        allowNull: false
    },
    regdate: {
        type: Sequelize.DATEONLY,
        allowNull: false
    }
});

Book.sync({ force: false });

module.exports = Book;