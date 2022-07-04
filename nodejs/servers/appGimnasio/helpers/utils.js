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

module.exports = {
    executeQuery, executeQueryOne
}