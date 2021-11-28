const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('gestao', 'root', '', {
    repositoryMode: true,
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;