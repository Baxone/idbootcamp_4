const router = require('express').Router();

const { checkToken, checkAdmin, checkRole } = require('../helpers/middlewares');

const apiClientesRouter = require('./api/clientes');
const apiProfesoresRouter = require('./api/profesores');
const apiUsuariosRouter = require('./api/usuarios');

router.use('/clientes', checkToken, checkAdmin, apiClientesRouter);
router.use('/profesores', checkToken, checkRole('regular'), apiProfesoresRouter);
router.use('/usuarios', apiUsuariosRouter);

module.exports = router;