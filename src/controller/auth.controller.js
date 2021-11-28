const userModel = require("../model/usuario.model");
const {compare} = require('bcrypt');
const {sign} = require('jsonwebtoken');
const authConfig = require('../config/authConfig');

async function login(request, response) {
    const { email, senha } = request.body;

    let msg = [];
    let falha = false;

    if (!email) {
        falha = true;
        msg.push("Introduza o email");
    }

    if (!senha) {
        falha = true;
        msg.push("Introduza a senha");
    }

    if (falha)
        return response.status(400).send({
            error: true,
            message: msg,
            data: null
        })

    try {
        let existe = await userModel.findOne({ where: { email: email } });
        if (!existe)
            return response.status(404).send({
                error: true,
                message: 'Usuário não existe',
                data: null
            })
        
            const compared = await compare(senha, existe.senha);
            if(!compared)
                return response.status(403).send({
                    error: true,
                    message: 'Acesso negado',
                    data: null
                })

            delete existe["senha"];
            let token = sign({ id: existe.id, role: existe.role}, authConfig.jwt.secret, {
                subject: String(existe.id),
                expiresIn: authConfig.jwt.expiresIn
            });
            return response.status(200).send({
                error: false,
                existe,
                token
            })

    } catch (error) {
        return response.status(404).send({
            error: true,
            message: 'Falha procurando usuário',
            data: error
        })
    }
}

module.exports = {
    login
}