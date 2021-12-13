const cadeiraModel = require('../model/cadeira.model');

async function createCadeira(request, response){
    const { descricao } = request.body;

    let msg = [];
    let falha = false;

    if(!descricao){
        falha = true;
        msg.push("Cadeira sem descrição");
    }

    if(falha)
        return response.status(400).json({
            error: true,
            message: msg,
            data: null
        })
    
    try {
        await cadeiraModel.create({ descricao: descricao});
        return response.status(202).send({
            error: false,
            message: 'Cadeira adicionada',
            data: null
        })
    } catch (error) {
        return response.status(404).send({
            error: true,
            message: 'Falha adicionando cadeira',
            data: error
        })
    }
}

async function readCadeira(request, response){
    try {
        const cadeiras = await cadeiraModel.findAll();
        if(cadeiras.length == 0)
            return response.status(404).send({
                error: true,
                message: 'Sem cadeiras',
                data: null
            })
        return response.status(202).send({
            error: false,
            message: 'Lista de cadeiras',
            data: cadeiras
        })
    } catch (error) {
        return response.status(404).send({
            error: true,
            message: 'Falha ao listar cadeiras',
            data: error
        })
    }
}

async function updateCadeira(request, response){
    const { id, descricao } = request.body;

    let msg = [];
    let falha = false;

    if(!id){
        falha = true;
        msg.push("Selecione a cadeira que deseja modificar");
    }

    if(!descricao){
        falha = true;
        msg.push("Cadeira sem descrição");
    }

    if(falha)
        return response.status(404).send({
            error: true,
            message: msg,
            data: error
        })
    
    try {
        await cadeiraModel.update({descricao: descricao}, {where:{id: id}});
        return response.status(202).send({
            error: false,
            message: 'Cadeira modificada',
            data: null
        })
    } catch (error) {
        return response.status(404).send({
            error: true,
            message: 'Falha ao modificar cadeira',
            data: null
        })
    }
}

async function deleteCadeira(request, response){
    const id = request.params.id;

    if(!id)
        return response.status(400).send({
            error: true,
            message: 'Selecione a cadeira que deseja remover',
            data: null
        })
    
    try {
        await cadeiraModel.destroy({where:{id: id}});
        return response.status(202).send({
            error: false,
            message: 'Cadeira removida',
            data: null
        })
    } catch (error) {
        return response.status(404).send({
            error: true,
            message: 'Falha ao remover cadeira',
            data: error
        })
    }
}

module.exports = {
    createCadeira,
    readCadeira,
    updateCadeira,
    deleteCadeira
}