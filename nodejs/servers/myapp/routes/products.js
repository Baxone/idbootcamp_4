const router = require('express').Router();

router.get('/by-id', (req, res) => {
    res.end('Recuperamos el producto por ID');
});

module.exports = router;