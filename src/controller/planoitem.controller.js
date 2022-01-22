const planoitemModel = require('../model/planoitens.model');

async function createItem(request, response){
    const { descricao, planoanalitico_id} = request.body;

    let msg = [];
    let falha = false;

    if (!descricao) {
        falha = true;
        msg.push('Falta a descrição');
    }

    if (!planoanalitico_id) {
        falha = true;
        msg.push('Selecione o plano ao qual deseja adicionar o tema');
    }

    if (falha)
        return response.status(400).send({
            error: true,
            message: msg,
            data: null
        })
    
    try {
        const newItem = await planoitemModel.create({ descricao: descricao, planoanalitico_id: planoanalitico_id});
        return response.status(202).send({
            error: false,
            message: 'Item adicionado ao plano',
            data: newItem
        })

    } catch (error) {
        return response.status(500).send({
            error: true,
            message: 'Falha ao adicionar item ao plano',
            data: error
        })
    }
}

async function readItens(request, response){
    const id = request.params.id;
    if(!id)
        return response.status(404).send({
            error: true,
            message: 'Selecione o plano',
            data: null
        })
    
    try {
        const lista = await planoitemModel.findAll({where:{ planoanalitico_id: id}});
        return response.status(202).send({
            error: false,
            message: 'Lista de itens do plano',
            data: lista
        })
    } catch (error) {
        return response.status(500).send({
            error: true,
            message: 'Falha ao lista itens do plano',
            data: error
        })
    }
}

module.exports = {
    createItem,
    readItens
}