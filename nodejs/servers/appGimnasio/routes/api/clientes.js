const router = require('express').Router();

router.get('/', (req, res) => {
    res.end('Petición GET clientes');
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