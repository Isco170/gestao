const userModel = require('../model/usuario.model');


async function createAdmin(request, response){
    const { nome, apelido, telefone, email, role, senha} = request.body;

    let msg = [];
    let falha = false;

    if(!nome){
        falha = true;
        msg.push("Nome em falta")
    }

    if(!apelido){
        falha = true;
        msg.push("Apelido em falta")
    }

    if(!telefone){
        falha = true;
        msg.push("Telefone em falta")
    }

    if(!email){
        falha = true;
        msg.push("Email em falta")
    }

    if(!role){
        falha = true;
        msg.push("Função não foi especificada")
    }
    
    if(!senha){
        falha = true;
        msg.push("Deve escrever senha")
    }

    if(falha)
        return response.status(400).send({
            error: true,
            message: msg,
            data: null
        })
    
    try {
        const usuario = await userModel.create({ nome: nome, apelido: apelido, telefone: telefone, email: email, role: role, senha: senha});
        return response.status(202).send({
            error: false,
            message: 'Usuário criado',
            data: null
        })
    } catch (error) {
        return response.status(404).send({
            error: true,
            message: 'Falha criando conta',
            data: error
        })
    }
}

async function createUser(request, response){
    const { nome, apelido, telefone, email, role} = request.body;
    let msg = [];
    let falha = false;

    if(!nome){
        falha = true;
        msg.push("Nome em falta")
    }

    if(!apelido){
        falha = true;
        msg.push("Apelido em falta")
    }

    if(!telefone){
        falha = true;
        msg.push("Telefone em falta")
    }

    if(!email){
        falha = true;
        msg.push("Email em falta")
    }

    if(!role){
        falha = true;
        msg.push("Função não foi especificada")
    }

    if(falha)
        return response.status(400).send({
            error: true,
            message: msg,
            data: null
        })

    try {
        let date =  new Date();
        let senha = 'Escola' +date.getFullYear();
        
        const user = await userModel.create({ nome: nome, apelido: apelido, telefone: telefone, email: email, role: role, senha: senha});
        return response.status(202).json({
            error: false,
            message: 'Usuário criado',
            data: user
        })
    } catch (error) {
        return response.status(500).json({
            error: true,
            message: 'Falha criando  usuário',
            data: error
        })
    }


}


module.exports = {
    createAdmin,
    createUser
}