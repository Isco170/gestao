const usuario = require('../model/usuario.model');

async function read(request, response){
    try {
        const cord = await usuario.findAll({ where:{ role: 2}});
        return response.status(202).json({
            error: false,
            message: 'Lista de coordenadores',
            data: cord
        })
    } catch (error) {
        return response.status(500).json({
            error: true,
            message: 'Falha ao listar coordenadores',
            data: error
        })
    }
}

module.exports = {
    read
}