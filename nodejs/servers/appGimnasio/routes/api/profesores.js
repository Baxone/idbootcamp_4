const router = require('express').Router();

router.get('/', (req, res) => {
    res.end('Petición GET profesores');
});

router.post('/', (req, res) => {
    res.end('Petición POST profesores');
});

router.put('/', (req, res) => {
    res.end('Petición PUT profesores');
});

router.delete('/', (req, res) => {
    res.end('Petición DELETE profesores');
});

module.exports = router;