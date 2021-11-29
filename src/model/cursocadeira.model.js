const { DataTypes, Model } = require('sequelize');
const database = require('../database');

class CursoCadeira extends Model {}

CursoCadeira.init(
    {
        curso_id:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        cadeira_id:{
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },{
        sequelize: database,
        tableName: 'cursocadeira'
    }
);

module.exports = CursoCadeira;