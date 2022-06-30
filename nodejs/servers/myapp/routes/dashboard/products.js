const router = require('express').Router();

router.get('/:productoId', (req, res) => {
    console.log(req.params.productoId);
    res.end('Recupero un producto en concreto');
});

router.post('/create', (req, res) => {
    res.end('Creamos un producto en el dashboard');
});

module.exports = router;