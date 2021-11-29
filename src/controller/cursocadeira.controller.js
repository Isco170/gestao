const cursoCadeiraModel = require('../model/cursocadeira.model');

async function create(request, response) {
    const { curso_id, cadeira_id } = request.body;

    let msg = [];
    let falha = false;

    if (!curso_id) {
        falha = true;
        msg.push('Selecione o curso a que quer adicionar a cadeira');
    }

    if (!cadeira_id) {
        falha = true;
        msg.push('Selecione a cadeira que deseja adicionar ao curso');
    }

    if (falha)
        return response.status(400).send({
            error: true,
            message: msg,
            data: null
        })
    
    try {
        await cursoCadeiraModel.create({ cadeira_id: cadeira_id, curso_id: curso_id});
        return response.status(202).send({
            error: false,
            message: 'Cadeira adicionada ao curso',
            data: null
        })
    } catch (error) {
        return response.status(404).send({
            error: true,
            mesage: 'Falha ao adicionar a cadeira ao curso',
            data: error
        })
    }
}

module.exports = {
    create
}