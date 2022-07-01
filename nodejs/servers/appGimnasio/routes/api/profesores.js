const router = require('express').Router();

const Profesor = require('../../models/profesor.model');

router.get('/', (req, res) => {
    Profesor.getAll()
        .then(result => res.json(result))
        .catch(err => res.json({ error: err.message }));
});

router.post('/', (req, res) => {
    Profesor.create(req.body)
        .then(result => {
            res.json(result);
            // - Tengo el ID en result.insertId
            // - Generar un método en el modelo getById
            // - Recibe el id del nuevo profesor y retorna sus datos
        })
        .catch(err => res.json({ error: err.message }));
});

router.put('/', (req, res) => {
    res.end('Petición PUT profesores');
});

router.delete('/', (req, res) => {
    res.end('Petición DELETE profesores');
});

module.exports = router;