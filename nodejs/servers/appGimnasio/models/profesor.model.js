const { executeQuery, executeQueryOne } = require('../helpers/utils');

const getAll = () => {
    return executeQuery('select * from profesores');
}

const getById = (profesorId) => {
    return executeQueryOne('select * from profesores where id = ?', [profesorId]);
}

const getByExperiencia = (min, max) => {
    return executeQuery('select * from profesores where experiencia between ? and ? order by experiencia asc', [min, max]);
}

const create = ({ nombre, experiencia }) => {
    return executeQuery('insert into profesores (nombre, experiencia) values (?, ?)', [nombre, experiencia]);
}

const deleteById = (profesorId) => {
    return executeQuery('delete from profesores where id = ?', [profesorId]);
}

const update = (profesorId, { nombre, experiencia }) => {
    return executeQuery(
        'update profesores set nombre = ?, experiencia = ? where id = ?',
        [nombre, experiencia, profesorId]
    );
}

module.exports = {
    getAll, create, getById, deleteById, update, getByExperiencia
};