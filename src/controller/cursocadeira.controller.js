const cursoCadeiraModel = require('../model/cursocadeira.model');
const cadeiraModel = require('../model/cadeira.model');

async function create(request, response) {
    const { curso_id, cadeiras } = request.body;

    let msg = [];
    let falha = false;

    if (!curso_id) {
        falha = true;
        msg.push('Selecione o curso a que quer adicionar a cadeira');
    }

    if (!cadeiras) {
        falha = true;
        msg.push('Selecione pelo menos uma cadeira que deseja adicionar ao curso');
    }

    if (falha)
        return response.status(400).send({
            error: true,
            message: msg,
            data: null
        })
    
    for (let index = 0; index < cadeiras.length; index++) {
        const existe = await cursoCadeiraModel.findOne({ where:{ curso_id: curso_id, cadeira_id: cadeiras[index]}});
        if(!existe){
            const addCadeira = await cursoCadeiraModel.create({ curso_id: curso_id, cadeira_id: cadeiras[index]});
        }
    }
    return response.status(202).json({
        error: false,
        message: 'Cadeira(s) adicionada(s)',
        data: null
    })
}

async function read(request, response) {
    const id = request.params.curso_id;

    if (!id)
        return response.status(400).send({
            error: true,
            message: 'Selecione o curso que deseja listar cadeiras',
            data: null
        })
    let lista = [];

    try {
        const cadCurso = await cursoCadeiraModel.findAll({ where: { curso_id: id } });
        if (cadCurso.length == 0)
            return response.status(500).send({
                error: true,
                message: 'Curso sem cadeiras',
                data: null
            })

        for (let index = 0; index < cadCurso.length; index++) {
            const cadeira = await cadeiraModel.findOne({ where: { id: cadCurso[index].cadeira_id } });
            if(cadeira)
                lista.push({
                    'id': cadeira.id,
                    'descricao': cadeira.descricao
                })
        }

        return response.status(202).send({
            error: false,
            message: 'Lista de cadeiras do curso',
            data: lista
        })
    } catch (error) {
        return response.status(500).send({
            error: true,
            message: 'Falha ao listar cadeiras do curso',
            data: error
        })
    }
}

async function removeCadeira(request, response){
    const { curso_id, cadeiras} = request.body;

    let msg = [];
    let falha = false;

    if (!curso_id) {
        falha = true;
        msg.push('Nenhum curso foi selecionado para remover cadeiras');
    }

    if (!cadeiras || cadeiras.length == 0) {
        falha = true;
        msg.push('Selecione pelo menos uma cadeira para remover do curso');
    }

    if (falha)
        return response.status(400).send({
            error: true,
            message: msg,
            data: null
        })
    
    for (let index = 0; index < cadeiras.length; index++) {
        try {
            await cursoCadeiraModel.destroy({ where:{ curso_id: curso_id, cadeira_id: cadeiras[index]}});
        } catch (error) {
            
        }        
    }

    return response.status(202).send({
        error: false,
        message: 'Cadeira(s) removida(s)',
        data: null
    })
}

module.exports = {
    create,
    read,
    removeCadeira
}