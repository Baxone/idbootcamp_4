const router = require('express').Router();

router.get('/', (req, res) => {
    res.end('Recupero todas las personas del dashboard');
});

router.put('/edit', (req, res) => {
    res.end('Edición de las personas del dashboard');
});

module.exports = router;