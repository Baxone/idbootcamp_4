const router = require('express').Router();

const Cliente = require('../../models/cliente.model');





router.get('/', (req, res) => {
    Cliente.getAll()
        .then(result => res.json(result))
        .catch(err => console.log(err));
});












router.post('/', (req, res) => {
    res.end('Petición POST clientes');
});

router.put('/', (req, res) => {
    res.end('Petición PUT clientes');
});

router.delete('/', (req, res) => {
    res.end('Petición DELETE clientes');
});

module.exports = router;