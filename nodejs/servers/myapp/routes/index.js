var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/contacto', (req, res) => {
  res.end('Respondo al POST de /contacto');
});

router.put('/edit', (req, res) => {
  res.end('Edición general');
});

module.exports = router;
