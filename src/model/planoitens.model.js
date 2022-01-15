const { DataTypes, Model} = require('sequelize');
const database = require('../database');

class PlanoItens extends Model {}

PlanoAnalitico.init(
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
            default: false
        }
    },{
        sequelize: database,
        tableName: 'planoitens'
    }
);

module.exports = PlanoItens;