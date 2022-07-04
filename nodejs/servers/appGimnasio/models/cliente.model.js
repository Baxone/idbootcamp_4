const { executeQuery, executeQueryOne } = require("../helpers/utils");

const getAll = () => {
    return executeQuery('select * from clientes');
}

const getById = (clienteId) => {
    return executeQueryOne('select * from clientes where id = ?', [clienteId]);
}

const create = ({ nombre, apellidos, direccion, email, edad, genero, cuota, fecha_nacimiento, dni }) => {
    return executeQuery(
        'insert into clientes (nombre, apellidos, direccion, email, edad, genero, cuota, fecha_nacimiento, dni) values (?,?,?,?,?,?,?,?,?)',
        [nombre, apellidos, direccion, email, edad, genero, cuota, fecha_nacimiento, dni]
    )
}

const deleteById = (clienteId) => {
    return executeQuery('delete from clientes where id = ?', [clienteId]);
};

const getByEdad = (edad) => {
    return executeQuery('select * from clientes where edad > ?', [edad]);
}

const update = (clienteId, { nombre, apellidos, direccion, email, edad, genero, cuota, fecha_nacimiento, dni }) => {
    return executeQuery(
        'update clientes set nombre = ?, apellidos = ?, direccion = ?, email = ?, edad = ?, genero = ?, cuota = ?, fecha_nacimiento = ?, dni = ? where id = ?',
        [nombre, apellidos, direccion, email, edad, genero, cuota, fecha_nacimiento, dni, clienteId]
    )
}


module.exports = {
    getAll, create, getById, deleteById, getByEdad, update
}
