const { DataTypes, Model } = require('sequelize');

const bcrypt = require('bcrypt');
const database = require('../database');

class Usuario extends Model { }

Usuario.init(
    {
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        apelido: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        telefone: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        senha: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        role:{
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        sequelize: database,
        tableName: 'Usuario'
    }
);

Usuario.beforeCreate((usuario, option) => {
    return bcrypt.hash(usuario.senha, 10)
        .then(hash => {
            usuario.senha = hash
        })
        .catch(err => {
            console.log("No password");
        })
})

module.exports = Usuario;