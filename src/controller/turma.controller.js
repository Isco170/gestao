const Curso = require('../model/curso.model');
const turmaModel = require('../model/turma.model');

async function addTurma(request, response) {
    const { designacao, curso_id, turno } = request.body;

    let msg = [];
    let falha = false;

    if (!designacao) {
        falha = true;
        msg.push('Digite o nome da turma');
    }

    if (!curso_id) {
        falha = true;
        msg.push('Indique o curso que a turma pertence');
    }

    if (!curso_id) {
        falha = true;
        msg.push('Indique o turno da turma');
    }

    if (falha)
        return response.status(400).send({
            error: true,
            message: msg,
            data: null
        })

    try {
        const turma = await turmaModel.create({ designacao: designacao, curso_id: curso_id, turno: turno });
        return response.status(202).send({
            error: false,
            message: 'Turma adicionada',
            data: turma
        })
    } catch (error) {
        return response.status(500).send({
            error: true,
            message: 'Falha ao adicionar turma',
            data: error
        })
    }

}

async function readTurmas(request, response) {
    try {
        const turmas = await turmaModel.findAll({});
        if (turmas.length < 0)
            return response.status(404).send({
                error: true,
                message: 'Sem turmas',
                data: null
            })

        try {
            let lista = []
            
            for (let index = 0; index < turmas.length; index++) {
                const curso = await Curso.findOne({ where: { id: turmas[index].curso_id } })
                lista.push({
                    'id': turmas[index].id,
                    'designacao': turmas[index].designacao,
                    'curso': curso.descricao,
                    'turno': turmas[index].turno
                })
            }
            return response.status(202).send({
                error: false,
                message: 'Lista de turmas',
                data: lista
            })

        } catch (error) {
            return response.status(500).send({
                error: true,
                message: 'Falha ao buscar cursos',
                data: error
            })
        }
    } catch (error) {
        return response.status(500).send({
            error: true,
            message: 'Falha ao listar turmas',
            data: error
        })
    }
}

async function readOneTurma(request, response) {
    const id = request.params.id;
    if (!id)
        return response.status(404).send({
            error: true,
            message: 'Selecione a turma que deseja ver',
            data: null
        })

    try {
        const turma = await turmaModel.findOne({ where: { id: id } });
        if (!turma)
            return response.status(404).send({
                error: true,
                message: 'Turma não encontrada',
                data: null
            })
        return response.status(202).send({
            error: false,
            message: 'Turma encontrada',
            data: turma
        })
    } catch (error) {
        return response.status(500).send({
            error: true,
            message: 'Falha ao pesquisar turma',
            data: error
        })
    }
}

module.exports = {
    addTurma,
    readTurmas,
    readOneTurma
}