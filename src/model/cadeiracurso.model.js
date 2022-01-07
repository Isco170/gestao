const { DataTypes, Model } = require("sequelize");
const database = require('../database');

class CadeiraCurso extends Model {}

CadeiraCurso.init(
    {
        curso_id:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        cadera_id:{
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },{ 
        sequelize: database,
        tableName: 'cadeiracurso'
    }
)

module.exports = CadeiraCurso;