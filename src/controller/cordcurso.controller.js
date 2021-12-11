const cordcursoModel = require('../model/cordcurso.model');
const cursoModel = require('../model/curso.model');

async function addCurso(request, response){
    const { usuario, curso } = request.body;

    let msg = [];
    let falha = false;

    if(!usuario){
        falha = true;
        msg.push("Indique o coordenador para o curso")
    }

    if(!curso){
        falha = true;
        msg.push("Indique o(s) curso(s) para o coordenador");
    }

    if(falha)
    return response.status(400).send({
        error: true,
        message: msg,
        data: null
    })

    for (let index = 0; index < curso.length; index++) {
        try {
            await cordcursoModel.create({ usuario_id: usuario, curso_id: curso[index]});
        } catch (error) {
            console.log('Erro: ' + error);
        }
    }

    return response.status(202).send({
        error: false,
        message: 'Curso(s) atribuido(s) ao coordenador'
    })
}

async function readCurso(request, response){
    const id = request.params.id;
    if(!id)
        return response.status(400).send({
            error: true,
            message: 'Selecione o coordenador para listar cursos atribuidos',
            data: null
        })
    
    try {
        const cursos = await cordcursoModel.findAll({ where:{ usuario_id: id}});
        if(cursos.length == 0)
            return response.status(404).send({
                error: true,
                message: 'Coordenador sem cursos',
                data: null
            })
        let lista = [];
        for (let index = 0; index < cursos.length; index++) {
           const curso = await cursoModel.findOne({where:{ id: cursos[index].curso_id}});
           lista.push({
               'id': cursos[index].id,
               'curso_id': curso.id,
               'descricao': curso.descricao
           })
        }
        return response.status(202).send({
            error: false,
            message: 'Lista de cursos atribuidos',
            data: lista
        })
    } catch (error) {
        return response.status(500).send({
            error: true,
            message: 'Falha ao listar cursos',
            data: error
        })
    }
}

async function deleteCurso(request, response){
    const id = request.params.id;
    if(!id)
        return response.status(400).send({
            error: true,
            message: 'Selecione o que deseja remover',
            data: null
        })
    
        try {
            await cordcursoModel.destroy({where:{ id: id}});
            return response.status(202).send({
                error: false,
                message: 'Removido',
                data: null
            })
        } catch (error) {
            return response.status(500).send({
                error: true,
                message: 'Falha removendo curso atribuido ao coordenador',
                data: error
            })
        }
}

module.exports = {
    addCurso,
    readCurso,
    deleteCurso
}