const usuarioModel = require('../model/usuario.model');

async function readProf(request, response){
    try {
        const professores = await usuarioModel.findAll({where:{ role: 3}});
        if(professores.length == 0)
            return response.status(404).send({
                error: true,
                message: 'Sem professores',
                data: null
            })
        return response.status(202).send({
            error: false,
            message: 'Lista de professores',
            data: professores
        })
    } catch (error) {
        return response.status(500).send({
            error: true,
            message: 'Falha ao listar professores',
            data: error
        })
    }
}

async function oneProf(request, response){
    const id = request.params.id;
    if(!id)
        return response.status(400).send({
            error: true,
            message: 'Selecione o professor',
            data: null
        })

    try {
        const prof = await usuarioModel.findOne({ where:{ id: id }});
        if(!prof)
            return response.status(404).send({
                error: true,
                message: 'Professor não foi achado',
                data: null
            })
        return response.status(202).send({
            error: false,
            message: 'Professor foi achado',
            data: prof
        })
    } catch (error) {
        return response.status(500).send({
            error: true,
            message: 'Falha ao buscar dados do professor',
            data: error
        })
    }
}

async function deleteProf(request, response){
    const id = request.params.id;
    if(!id)
        return response.status(400).send({
            error: true,
            message: 'Indique o professor que deseja remover',
            data: null
        })
    
        try {
            await usuarioModel.destroy({where:{ id: id, role: 3 }});
            return response.status(202).send({
                error: false,
                message: 'Professor removido',
                data: null
            })
        } catch (error) {
            return response.status(500).send({
                error: true,
                message: 'Não foi possível remover o professor',
                data: error
            })
        }
}

module.exports = {
    readProf,
    oneProf,
    deleteProf
}