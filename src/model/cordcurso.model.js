const { DataTypes, Model } = require("sequelize");
const database = require('../database');

class CordCurso extends Model {}

CordCurso.init(
    {
        usuario_id:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        curso_id:{
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },{ 
        sequelize: database,
        tableName: 'cordcurso'
    }
)

module.exports = CordCurso;