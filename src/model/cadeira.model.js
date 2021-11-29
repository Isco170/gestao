const { DataTypes, Model } = require("sequelize");
const database = require('../database');

class Cadeira extends Model {}

Cadeira.init(
    {
        descricao:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    },{ 
        sequelize: database,
        tableName: 'cadeira'
    }
)

module.exports = Cadeira;