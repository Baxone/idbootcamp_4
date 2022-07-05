const jwt = require('jsonwebtoken');
const dayjs = require('dayjs');

const checkToken = (req, res, next) => {
    // 1 - Comprobar si el token viene incluido con la petición
    if (!req.headers['authorization']) {
        return res.json({ error: 'El token no está en la cabecera' });
    }

    // 2 - Comprobar si el token es correcto
    const token = req.headers['authorization'];

    let obj;
    try {
        obj = jwt.verify(token, 'en un lugar de la mancha');
    } catch (err) {
        return res.json({ error: 'El token está malamente' });
    }

    // 3 - Comprobar si el token está caducado
    // obj -> userId, expDate, iat
    console.log(obj.expDate, dayjs().unix());
    if (dayjs().unix() > obj.expDate) {
        return res.json({ error: 'El token está caducado' });
    }

    // Recuperar el usuario que hace la petición


    next();
}

module.exports = { checkToken };