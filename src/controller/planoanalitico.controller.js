const planoModel = require('../model/planoanalitico.model');
const planoitensModel = require('../model/planoitens.model');

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

    try {
        const plano = await planoModel.findOne({ where:{curso_id: curso_id, cadeira_id: cadeira_id}});

        if(!plano)
            return response.status(404).send({
                error: true,
                message: 'Plano não foi achado',
                data: null
            })
        const listaItens = await planoitensModel.findAll({where:{ planoanalitico_id: plano.id}});

        return response.status(202).send({
            error:false,
            message: 'Plano analítico',
            data: {
                'plano_id': plano.id,
                'plano_descricao': plano.descricao,
                'itens': listaItens.length > 0 ? listaItens : null
            }
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

async function readAll(request, response){
    try {
        const plano = await planoModel.findAll({});

        if(!plano)
            return response.status(404).send({
                error: true,
                message: 'Sem Planos',
                data: null
            })

        let planos = []
        for (let index = 0; index < plano.length; index++) {
            const listaItens = await planoitensModel.findAll({where:{ planoanalitico_id: plano[index].plano.id}});
            planos.push(
                'plano_id' = plano.id,
                'plano_descricao' = plano.descricao,
                'cadeira_id' = plano.cadeira_id,
                'curso_id' = plano.curso_id,
                'itens' = listaItens.length > 0 ? listaItens : null
            )            
        }


        return response.status(202).send({
            error:false,
            message: 'Planos analíticos',
            data: planos
        })
    } catch (error) {
        return response.status(500).send({
            error: true,
            message: 'Falha ao buscar dados',
            data: error
        })
    }
}

module.exports = {
    createPlano,
    readPlano,
    deletePlano,
    readAll
}