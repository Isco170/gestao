const planoModel = require('../model/planoanalitico.model');
const planoitensModel = require('../model/planoitens.model');
const cursocadeiraModel = require('../model/cursocadeira.model')
const cursoModel = require('../model/curso.model');
const cadeiraModel = require('../model/cadeira.model')

async function createPlano(request, response) {
    const { descricao, cadeira_id, curso_id } = request.body;

    let msg = [];
    let falha = false;

    if (!descricao) {
        falha = true;
        msg.push('Falta a descrição do plano');
    }

    if (!cadeira_id) {
        falha = true;
        msg.push('Selecione a cadeira que deseja adicionar o plano');
    }

    if (!curso_id) {
        falha = true;
        msg.push('Selecione o curso que deseja adicionar o plano da cadeira');
    }

    if (falha)
        return response.status(400).send({
            error: true,
            message: msg,
            data: null
        })

    try {
        const existe = await cursocadeiraModel.findOne({ where: { curso_id: curso_id, cadeira_id: cadeira_id } })
        
        if(existe){
            const newPlano = await planoModel.create({ descricao: descricao, cadeira_id: cadeira_id, curso_id: curso_id });
            return response.status(202).send({
                error: false,
                message: 'Plano adicionado',
                data: newPlano
            })
        }else{
            return response.status(400).send({
                error: true,
                message: 'Cadeira não faz parte do curso',
                data: error
            })    
        }
    } catch (error) {
        return response.status(500).send({
            error: true,
            message: 'Falha ao adicionar plano',
            data: error
        })
    }

}

async function readPlano(request, response) {
    const { cadeira_id } = request.body;

    let msg = [];
    let falha = false;

    if (!cadeira_id) {
        falha = true;
        msg.push('Selecione a cadeira que deseja ver o plano');
    }

    if (falha)
        return response.status(400).send({
            error: true,
            message: msg,
            data: null
        })

    try {
        const plano = await planoModel.findOne({ where: { cadeira_id: cadeira_id } });

        if (!plano)
            return response.status(404).send({
                error: true,
                message: 'Plano não foi achado',
                data: null
            })
        const curso = await cursoModel.findOne({where:{id: plano.curso_id}});
        const listaItens = await planoitensModel.findAll({ where: { planoanalitico_id: plano.id } });

        return response.status(202).send({
            error: false,
            message: 'Plano analítico',
            data: {
                'plano_id': plano.id,
                'plano_descricao': plano.descricao,
                'curso_id': plano.curso_id,
                'curso_descricao': curso.descricao,
                'itens': listaItens.length > 0 ? listaItens : null
            }
        })
    } catch (error) {
        return response.status(500).send({
            error: true,
            message: 'Falha ao buscar dados',
            data: error
        })
    }
}

async function deletePlano(request, response) {
    const id = request.params.id;

    if (!id)
        return response.status(400).send({
            error: true,
            message: 'Selecione o curso que deseja apagar',
            data: null
        })

    try {
        await planoModel.destroy({ where: { id: id } });
        return response.status(202).send({
            error: false,
            message: 'Plano apagado',
            data: null
        })
    } catch (error) {
        return response.status(500).send({
            error: true,
            message: 'Falha ao apagar plano',
            data: null
        })
    }
}

async function readAll(request, response) {
    try {
        const plano = await planoModel.findAll({});

        if (!plano)
            return response.status(404).send({
                error: true,
                message: 'Sem Planos',
                data: null
            })

        
        let planos = []
        for (let index = 0; index < plano.length; index++) {
            try{                
                const listaItens = await planoitensModel.findAll({ where: { planoanalitico_id: plano[index].id } });
                const cadeira = await cadeiraModel.findOne({where:{id: plano[index].cadeira_id}});
                planos.push({
                    'plano_id': plano[index].id,
                    'plano_descricao' : plano[index].descricao,
                    'cadeira_id' : cadeira.id,
                    'cadeira_descricao': cadeira.descricao
                })
            }
            catch(error) {
                return response.status(500).send({
                    error: true,
                    message: 'Falha ao adicionar dados',
                    data: error
                })
            }
        }


        return response.status(202).send({
            error: false,
            message: 'Planos analíticos',
            data: planos
        })
    } catch (error) {
        return response.status(500).send({
            error: true,
            message: 'Falha ao buscar dados',
            data: error
        })
    }
}

module.exports = {
    createPlano,
    readPlano,
    deletePlano,
    readAll
}