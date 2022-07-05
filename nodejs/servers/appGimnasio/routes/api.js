const router = require('express').Router();

const { checkToken } = require('../helpers/middlewares');

const apiClientesRouter = require('./api/clientes');
const apiProfesoresRouter = require('./api/profesores');
const apiUsuariosRouter = require('./api/usuarios');

router.use('/clientes', checkToken, apiClientesRouter);
router.use('/profesores', checkToken, apiProfesoresRouter);
router.use('/usuarios', apiUsuariosRouter);

module.exports = router;