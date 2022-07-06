const router = require('express').Router();
const dayjs = require('dayjs');

const Cliente = require('../models/cliente.model');

router.get('/', async (req, res) => {
    const clientes = await Cliente.getAll();
    res.render('clientes/index', {
        clientes: clientes
    });
});

router.get('/new', (req, res) => {
    res.render('clientes/formulario');
});

router.get('/edit/:clienteId', async (req, res) => {
    const { clienteId } = req.params;

    const cliente = await Cliente.getById(clienteId);

    cliente.fecha_nacimiento = dayjs(cliente.fecha_nacimiento).format('YYYY-MM-DD');

    res.render('clientes/formularioEdit', {
        cliente
    });
});

router.get('/delete', (req, res) => {
    res.end('Respuesta genérica');
});

router.post('/create', async (req, res) => {
    await Cliente.create(req.body);
    res.redirect('/clientes');
});

router.post('/update', (req, res) => {
    res.end('Respuesta genérica');
});

module.exports = router;