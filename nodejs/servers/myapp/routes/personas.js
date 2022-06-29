const router = require('express').Router();

router.get('/new', (req, res) => {
    res.end('Petición GET sobre /personas/new');
});

router.put('/edit', (req, res) => {
    res.end('Petición PUT sobre /personas/edit');
});

module.exports = router;