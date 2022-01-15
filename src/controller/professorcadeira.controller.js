const profCadeira = require('../model/professorcadeira.model');
const cadeiraModel = require('../model/cadeira.model');

async function addCadeira(request, response) {
    const { usuario_id, cadeiras } = request.body;

    let msg = [];
    let falha = false;

    if (!usuario_id) {
        falha = true;
        msg.push('Selecione o professor a quem quer atribuir a(s) cadeira(s)');
    }

    if (!cadeiras || cadeiras.length == 0) {
        falha = true;
        msg.push('Selecione pelo menos uma cadeira que deseja atribuir ao professor');
    }

    if (falha)
        return response.status(400).send({
            error: true,
            message: msg,
            data: null
        })

    for (let index = 0; index < cadeiras.length; index++) {
        try {
            await profCadeira.create({ cadeira_id: cadeiras[index], usuario_id: usuario_id });
        } catch (error) {
        }
    }

    return response.status(202).send({
        error: false,
        message: 'Cadeiras atribuidas',
        data: null
    })

}

async function readCadeiras(request, response){
    const id = request.params.usuario_id;
    if(!id)
        return response.status(400).send({
            error: true,
            message: 'Selecione o professor',
            data: null
        })
    
    let lista = [];

    try {
        const profCad = await profCadeira.findAll({where:{ usuario_id: id }});
        if(profCad.length == 0)
            return response.status(404).send({
                error: true,
                message: 'Professor sem cadeiras atribuidas',
                data: null
            })
        
        for (let index = 0; index < profCad.length; index++) {
            try {
                const cadeira = await cadeiraModel.findOne({where:{ id: profCad[index]}})
                lista.push({
                    'id': cadeira.id,
                    'descricao': cadeira.descricao
                })
            } catch (error) {
                
            }
        }
        return response.status(202).send({
            error: false,
            message: 'Lista de cadeiras atribuidas ao professor',
            data: lista
        })
    } catch (error) {
        return response.status(500).send({
            error: true,
            message: 'Falha ao listar cadeiras',
            data: error
        })
    }
}

async function removeCadeira(request, response){
    const {usuario_id, cadeiras} = request.body;

    let msg = [];
    let falha = false;

    if (!usuario_id) {
        falha = true;
        msg.push('Selecione o professor a quem quer remover a(s) cadeira(s)');
    }

    if (!cadeiras || cadeiras.length == 0) {
        falha = true;
        msg.push('Selecione pelo menos uma cadeira que deseja remover ao professor');
    }

    if (falha)
        return response.status(400).send({
            error: true,
            message: msg,
            data: null
        })
    
    for (let index = 0; index < cadeiras.length; index++) {
        try {
            await profCadeira.destroy({where:{ cadeira_id: cadeiras[index]}});
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
    addCadeira,
    readCadeiras,
    removeCadeira
}