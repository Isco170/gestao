const { verify } = require('jsonwebtoken');
const authConfig = require('../config/authConfig');



function isAuthenticated(request, response, next){
    const { authorization} = request.headers;

    if(!authorization)
        return response.status(401).send({
            error: true,
            message: 'Token is missing'
        });
    
    const token = authorization.replace('Bearer', '').trim();
    try {
        const decodedToken = verify(token, authConfig.jwt.secret);

        const { id, role } = decodedToken;
        request.userId = id;
        request.userRole = role;

        return next();
    } catch (error) {
        return response.status(401).send({
            error: true,
            message: 'Invalid token'
        })
    }
}

module.exports = isAuthenticated;