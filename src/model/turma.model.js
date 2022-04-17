const { DataTypes, Model } = require('sequelize');
const database = require('../database');

class Turma extends Model{}

Turma.init(
    {
        designacao:{
            type: DataTypes.STRING(255),
            allowNull: false
        },
        curso_id:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        turno:{
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize: database,
        tableName: 'turma'
    }
);

module.exports = Turma;