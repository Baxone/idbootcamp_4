const router = require('express').Router();

const Profesor = require('../../models/profesor.model');

router.get('/', (req, res) => {
    Profesor.getAll()
        .then(result => res.json(result))
        .catch(err => res.json({ error: err.message }));
});

router.get('/min/:expMin/max/:expMax', (req, res) => {
    const { expMin, expMax } = req.params;

    Profesor.getByExperiencia(expMin, expMax)
        .then(result => res.json(result))
        .catch(err => res.json({ error: err.message }));

});

router.post('/', async (req, res) => {
    const result = await Profesor.create(req.body);
    const profesor = await Profesor.getById(result.insertId);
    res.json(profesor);
});

router.put('/:profesorId', (req, res) => {
    const { profesorId } = req.params;

    Profesor.update(profesorId, req.body)
        .then(result => res.json(result))
        .catch(err => res.json({ error: err.message }));
});

router.delete('/:profesorId', (req, res) => {
    Profesor.deleteById(req.params.profesorId)
        .then(result => res.json({ success: 'Se ha borrado el profesor' }))
        .catch(err => res.json({ error: err.message }));
});

module.exports = router;