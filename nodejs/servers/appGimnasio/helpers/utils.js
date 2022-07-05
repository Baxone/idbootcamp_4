const dayjs = require('dayjs');
const jwt = require('jsonwebtoken');

function executeQuery(sql, values = []) {
    return new Promise((resolve, reject) => {
        db.query(sql, values, (err, result) => {
            if (err) return reject(err);
            resolve(result);
        });
    });
}

// Solo lo ejecutamos cuando en una query de SELECT queremos recuperar un único elemento
function executeQueryOne(sql, values = []) {
    return new Promise((resolve, reject) => {
        db.query(sql, values, (err, result) => {
            if (err) return reject(err);
            if (result.length === 0) return resolve(null);
            resolve(result[0]);
        });
    });
}

function createToken(user) {
    const obj = {
        userId: user.id,
        expDate: dayjs().add(5, 'minutes').unix()
    }
    return jwt.sign(obj, 'en un lugar de la mancha');
}


module.exports = {
    executeQuery, executeQueryOne, createToken
}