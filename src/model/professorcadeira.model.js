const { DataTypes, Model } = require('sequelize');
const database = require('../database');

class ProfessorCadeira extends Model{}

ProfessorCadeira.init(
    {
        cadeira_id:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        usuario_id:{
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        sequelize: database,
        tableName: 'professorcadeira'
    }
);

module.exports = ProfessorCadeira;