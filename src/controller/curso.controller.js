const cursoModel = require('../model/curso.model');
const usuarioModel = require('../model/usuario.model')

async function createCurso(request, response){
    const { descricao, coordenador } = request.body;
    
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
            const curso = await cursoModel.create({descricao: descricao, coordenador: coordenador});
            
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

async function readCurso(request, response){
    try {
        const cursos = await cursoModel.findAll({});
        let lista = [];

        if(cursos.length == 0)
            return response.status(404).send({
                error: true,
                message: 'Sem cursos',
                dara: null
            })

        for (let index = 0; index < cursos.length; index++) {
            if (cursos[index].coordenador){
                let coord = await usuarioModel.findOne({where:{id: cursos[index].coordenador}})
                console.log(coord)
                lista.push({
                    'id': cursos[index].id,
                    'descricao': cursos[index].descricao,
                    'coordenador_id': coord.id,
                    'coordenador_nome': coord.nome
                })
            }else{
                lista.push({
                    'id': cursos[index].id,
                    'descricao': cursos[index].descricao,
                    'coordenador_id': 0,
                    'coordenador_nome': 'Sem coordenador'
                })
            }   
        }
        return response.status(202).send({
            error: false,
            message: 'Lista de cursos',
            data: lista
        });
    } catch (error) {
        return response.status(500).send({
            error: true,
            message: 'Erro listando cursos',
            data: error
        })
    }
}

async function updateCurso(request, response){
    const { id, descricao} = request.body;

    let msg = [];
    let falha = false;

    if(!id){
        falha = true;
        msg.push('Selecione o curso que deseja modificar');
    }

    if(!descricao){
        falha = true;
        msg.push('O curso deve ter descrição');
    }

    if(falha)
        return response.status(400).send({
            error: true,
            message: msg,
            data: null
        })
    
    try {
        await cursoModel.update({descricao: descricao}, {where:{id: id}});
        return response.status(202).send({
            error: false,
            message: 'Curso modificado',
            data: null
        })
    } catch (error) {
        return response.status(404).send({
            error: true,
            message: 'Falha modificando curso',
            data: error
        })
    }
}

async function deleteCurso(request, response){
    const id = request.params.id;
    if(!id)
        return response.status(400).send({
            error: true,
            message: 'Selecione o curso que deseja remover',
            data: null
        })
    
    try {
        await cursoModel.destroy({where:{id: id}});
        return response.status(200).send({
            error: false,
            message: 'Curso removido',
            data: null
        })
    } catch (error) {
        return response.status(404).send({
            error: true,
            message: 'Falha removendo curso',
            data: error
        })
    }
}

module.exports = {
    createCurso,
    readCurso,
    updateCurso,
    deleteCurso
} 