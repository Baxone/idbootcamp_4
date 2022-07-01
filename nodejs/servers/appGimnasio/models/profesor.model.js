const getAll = () => {
    return new Promise((resolve, reject) => {
        db.query('select * from profesores', (err, result) => {
            if (err) return reject(err);
            resolve(result);
        })
    });
}

const create = ({ nombre, experiencia }) => {
    return new Promise((resolve, reject) => {
        db.query(
            'insert into profesores (nombre, experiencia) values (?, ?)',
            [nombre, experiencia],
            (err, result) => {
                if (err) return reject(err);
                resolve(result);
            }
        )
    });
}

// executeQuery

module.exports = { getAll, create };