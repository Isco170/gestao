const cursoCadeiraModel = require('../model/cursocadeira.model');

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

module.exports = {
    create
}