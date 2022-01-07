const cadeiracurso = require('../model/cadeiracurso.model');

async function add(request, response){
    const {curso_id, cadeiras} = request.body;

    let msg = [];
    let falha = false;

    if (!curso_id) {
        falha = true;
        msg.push('Indique o curso que deseja adiconar a(s) cadeira(s)');
    }

    if (!cadeiras || cadeiras.length == 0) {
        falha = true;
        msg.push('Selecione pelo menos uma cadeira para adicionar à turma');
    }

    if (falha)
        return response.status(400).send({
            error: true,
            message: msg,
            data: null
        })
    
    for (let index = 0; index < cadeiras.length; index++) {
        try {
            await cadeira
        } catch (error) {
            
        }
    }
    
}


module.exports = {
    add
}