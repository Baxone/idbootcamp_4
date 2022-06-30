const router = require('express').Router();

router.get('/by-id', (req, res) => {
    res.end('Recuperamos el producto por ID');
});

router.get('/all', (req, res) => {
    res.end('Recupero todos los productos');
});

router.post('/create/new', (req, res) => {
    console.log(req.body);
    res.end('Creamos un nuevo producto');
});

module.exports = router;