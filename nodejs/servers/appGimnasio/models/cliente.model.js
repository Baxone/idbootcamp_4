const getAll = () => {
    return new Promise((resolve, reject) => {
        db.query('select * from clientes', (err, result) => {
            if (err) return reject(err);
            resolve(result);
        });
    });
}



const create = ({ nombre, apellidos, direccion, email, edad, genero, cuota, fecha_nacimiento, dni }) => {
    return new Promise((resolve, reject) => {
        db.query(
            'insert into clientes (nombre, apellidos, direccion, email, edad, genero, cuota, fecha_nacimiento, dni) values (?,?,?,?,?,?,?,?,?)',
            [nombre, apellidos, direccion, email, edad, genero, cuota, fecha_nacimiento, dni],
            (err, result) => {
                if (err) return reject(err);
                resolve(result);
            }
        )
    });
}



module.exports = {
    getAll, create
}
