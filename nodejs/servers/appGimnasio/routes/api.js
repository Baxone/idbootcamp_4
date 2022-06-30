const router = require('express').Router();

const apiClientesRouter = require('./api/clientes');
const apiProfesoresRouter = require('./api/profesores');

router.use('/clientes', apiClientesRouter);
router.use('/profesores', apiProfesoresRouter);

module.exports = router;