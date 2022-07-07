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

router.get('/:clienteId', async (req, res) => {
    try {
        const { clienteId } = req.params;
        const cliente = await Cliente.getById(clienteId);
        res.render('clientes/show', { cliente });
    } catch (error) {
        console.log(error);
    }
});

router.post('/create', async (req, res) => {
    const result = await Cliente.create(req.body);
    res.redirect('/clientes/' + result.insertId);
});

router.post('/update', async (req, res) => {
    const { clienteId } = req.body;

    await Cliente.update(clienteId, req.body);
    res.redirect('/clientes/' + clienteId);
});

module.exports = router;