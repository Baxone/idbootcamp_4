const fs = require('fs');
const fsPromise = require('fs/promises');

// 1 - Síncrona

const files = fs.readdirSync('../primerproyecto');
console.log(files);

// 2 - Asíncrona (callback)

fs.readdir('../primerproyecto', (err, files) => {
    console.log(err);
    console.log(files);
});

// 3 - Promesas

fsPromise.readdir('../primerproyecto')
    .then(files => console.log(files))
    .catch(err => console.log(err));