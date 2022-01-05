const profCadeira = require('../model/professorcadeira.model');

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

module.exports = {
    addCadeira
}