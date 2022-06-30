const router = require('express').Router();

router.post('/create', (req, res) => {
    res.end('Creamos un producto en el dashboard');
});

module.exports = router;