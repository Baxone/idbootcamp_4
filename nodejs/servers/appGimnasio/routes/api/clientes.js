const router = require('express').Router();

const Cliente = require('../../models/cliente.model');





// router.get('/', (req, res) => {
//     Cliente.getAll()
//         .then(result => res.json(result))
//         .catch(err => res.json({ error: err.message }));
// });

router.get('/', async (req, res) => {
    try {
        const result = await Cliente.getAll()
        res.json(result);
    } catch (err) {
        res.json({ error: err.message });
    }
});












router.post('/', (req, res) => {
    Cliente.create(req.body)
        .then(result => res.json(result))
        .catch(err => res.json({ error: err.message }));
});












router.put('/', (req, res) => {
    res.end('Petición PUT clientes');
});

router.delete('/', (req, res) => {
    res.end('Petición DELETE clientes');
});

module.exports = router;