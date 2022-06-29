const express = require('express');

require('dotenv').config();

const app = express();

app.get('/', (req, res) => {
    res.end('Peticion sobre localhost:3000');
});

app.post('/new', (req, res) => {
    res.end('Petición POST sobre /new');
});

app.put('/edit', (req, res) => {
    res.end('Petición de edición!');
});

// Si el valor del puerto es nulo en el fichero de entorno, colocar 3000 como puerto

// const PORT = process.env.PORT ? process.env.PORT : 3000;
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Server escuchando en el puerto ' + PORT);
});