const { DataTypes, Model} = require('sequelize');
const database = require('../database');

class PlanoAnalitico extends Model {}

PlanoAnalitico.init(
    {
        descricao:{
            type: DataTypes.STRING
        },
        cadeira_id:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        curso_id:{
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },{
        sequelize: database,
        tableName: 'planoanalitico'
    }
);

module.exports = PlanoAnalitico;