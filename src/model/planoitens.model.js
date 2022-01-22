const { DataTypes, Model} = require('sequelize');
const database = require('../database');

class PlanoItens extends Model {}

PlanoItens.init(
    {
        descricao:{
            type: DataTypes.STRING
        },
        planoanalitico_id:{
            type: DataTypes.INTEGER,
            allowNull: false 
        },
        concluido:{
            type: DataTypes.BOOLEAN,
           defaultValue: false
        }
    },{
        sequelize: database,
        tableName: 'planoitens'
    }
);

module.exports = PlanoItens;