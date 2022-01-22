const planoModel = require('../model/planoanalitico.model');

async function createPlano(request, response){
    const { descricao, cadeira_id, curso_id} = request.body;

    let msg = [];
    let falha = false;

    if (!descricao) {
        falha = true;
        msg.push('Falta a descrição do plano');
    }

    if (!cadeira_id) {
        falha = true;
        msg.push('Selecione a cadeira que deseja adicionar o plano');
    }

    if (!curso_id) {
        falha = true;
        msg.push('Selecione o curso da cadeira');
    }

    if (falha)
        return response.status(400).send({
            error: true,
            message: msg,
            data: null
        })
    
    try {
        const newPlano = await planoModel.create({ descricao: descricao, cadeira_id: cadeira_id, curso_id: curso_id});
        return response.status(202).send({
            error: false,
            message: 'Plano adicionado',
            data: newPlano
        })
    } catch (error) {
        return response.status(500).send({
            error: true,
            message: 'Falha ao adicionar plano',
            data: error
        })
    }

}

async function readPlano(request, response){
    const { curso_id, cadeira_id} = request.body;

    let msg = [];
    let falha = false;

    if (!curso_id) {
        falha = true;
        msg.push('Selecione o curso da cadeira');
    }

    if (!cadeira_id ){
        falha = true;
        msg.push('Selecione a cadeira que deseja ver o plano');
    }

    if (falha)
        return response.status(400).send({
            error: true,
            message: msg,
            data: null
        })
    
    if(!planoModel)
        return response.status(404).send({
            error: true,
            message: 'Selecione a cadeira que deseja ver o plano',
            data: null
        })

    try {
        const plano = await planoModel.findOne({ curso_id: curso_id, cadeira_id: cadeira_id});
        return response.status(202).send({
            error:false,
            message: 'Plano analítico',
            data: plano
        })
    } catch (error) {
        return response.status(500).send({
            error: true,
            message: 'Falha ao buscar dados',
            data: error
        })
    }
}

async function deletePlano(request, response){
    const id = request.params.id;
    
    if(!id)
        return response.status(400).send({
            error: true,
            message: 'Selecione o curso que deseja apagar',
            data: null
        })
    
    try {
        await planoModel.destroy({ where:{ id: id}});
        return response.status(202).send({
            error: false,
            message: 'Plano apagado',
            data: null
        })
    } catch (error) {
        return response.status(500).send({
            error: true,
            message: 'Falha ao apagar plano',
            data: null
        })
    }
}

module.exports = {
    createPlano,
    readPlano,
    deletePlano
}