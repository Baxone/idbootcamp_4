const router = require('express').Router();

const Cliente = require('../../models/cliente.model');
const Profesor = require('../../models/profesor.model');

// router.get('/', (req, res) => {
//     Cliente.getAll()
//         .then(result => res.json(result))
//         .catch(err => res.json({ error: err.message }));
// });

router.get('/', async (req, res) => {
    try {
        const result = await Cliente.getAll()

        for (let cliente of result) {
            cliente.profesor = await Profesor.getById(cliente.profesor_id);
        }

        res.json(result);
    } catch (err) {
        res.json({ error: err.message });
    }
});

router.get('/edad/:edadSeleccionada', (req, res) => {
    const { edadSeleccionada } = req.params;

    Cliente.getByEdad(edadSeleccionada)
        .then(result => res.json(result))
        .catch(err => res.json({ error: err.message }))
});

router.post('/', async (req, res) => {
    try {
        const result = await Cliente.create(req.body)
        const cliente = await Cliente.getById(result.insertId);
        res.json(cliente);
    } catch (err) {
        res.json({ error: err.message });
    }
});













router.put('/:clienteId', (req, res) => {
    // ¿Qué valores tengo para trabajar?
    // req.params -> parámetros variables de la url
    // req.body -> todos los datos asociados a la petición
    // modelo Cliente
    const { clienteId } = req.params;

    Cliente.update(clienteId, req.body)
        .then(result => res.json(result))
        .catch(err => res.json(err.message));
});













// DELETE http://localhost:3000/api/clientes/78
router.delete('/:clienteId', (req, res) => {
    console.log(req.params.clienteId);

    Cliente.deleteById(req.params.clienteId)
        .then(result => {
            res.json({ success: 'Se ha borrado el cliente' });
        })
        .catch(err => res.json({ error: err.message }));
});

module.exports = router;