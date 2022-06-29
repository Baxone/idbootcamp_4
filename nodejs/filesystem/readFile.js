const fs = require('fs');
const fsPromise = require('fs/promises');

// 1 - Síncrona

const data = fs.readFileSync('./ficheros/primero.md', 'utf-8');
console.log(data);

// 2 - Asíncrona (callback)

fs.readFile('./ficheros/primero.md', 'utf-8', (err, data) => {
    console.log(err);
    console.log(data);
});

// 3 - Promesas
fsPromise.readFile('./ficheros/primero.md', 'utf-8')
    .then(data => console.log(data))
    .catch(err => console.log(err));