const usuario = require('../model/usuario.model');

function filtrar(usuario){
    return usuario.role != 1;
}

async function read(request, response){
    try {
        const cord = await usuario.findAll();
        
        let lista = cord.filter(filtrar)

        return response.status(202).json({
            error: false,
            message: 'Lista de coordenadores',
            data: lista
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