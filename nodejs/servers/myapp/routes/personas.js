const router = require('express').Router();

// GET localhost:3000/personas/new
router.get('/new', (req, res) => {
    res.end('Petición GET sobre /personas/new');
});

router.get('/:personaId', (req, res) => {
    console.log(req.params.personaId);
    res.end('Recupero la persona por ID');
});

// PUT localhost:3000/personas/edit
router.put('/edit', (req, res) => {
    res.end('Petición PUT sobre /personas/edit');
});

// DELETE localhost:3000/personas/remove
router.delete('/remove', (req, res) => {
    res.end('Borrando personas bla ble bli');
});

module.exports = router;