const router = require('express').Router();

const { checkToken, checkAdmin } = require('../helpers/middlewares');

const apiClientesRouter = require('./api/clientes');
const apiProfesoresRouter = require('./api/profesores');
const apiUsuariosRouter = require('./api/usuarios');

router.use('/clientes', checkToken, checkAdmin, apiClientesRouter);
router.use('/profesores', checkToken, /**checkRole('admin'),*/ apiProfesoresRouter);
router.use('/usuarios', apiUsuariosRouter);

module.exports = router;