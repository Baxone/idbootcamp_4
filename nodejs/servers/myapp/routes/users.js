var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  const personas = [
    { nombre: 'Rodrigo', apellidos: 'Gómez' },
    { nombre: 'Inés', apellidos: 'García' },
    { nombre: 'Laura', apellidos: 'López' }
  ]
  res.json(personas);
});

router.put('/edit/form', (req, res) => {
  res.send('Editamos el usuario lilillelele');
});

router.delete('/borrar/all', (req, res) => {
  res.end('Borramos todos los usuarios');
});

module.exports = router;
