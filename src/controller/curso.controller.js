const cursoModel = require('../model/curso.model');

async function createCurso(request, response){
    const { descricao } = request.body;
    
    let msg = [];
    let falha = false;

    if(!descricao){
        falha = true;
        msg.push("Curso sem descrição")
    }

    if(falha)
        return response.status(400).send({
            error: true,
            message: msg,
            data: null
        })
    
        try {
            const curso = await cursoModel.create({descricao: descricao});
            return response.status(202).send({
                error: false,
                message: 'Curso adicionado',
                data: null
            })
        } catch (error) {
            return response.status(404).send({
                error: true,
                message: 'Falha ao salvar curso',
                data: error
            })
        }
}

module.exports = {
    createCurso
}