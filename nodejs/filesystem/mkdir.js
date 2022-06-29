const fs = require('fs');


if (fs.existsSync('logs')) {

    console.log('Ya existe el directorio');

} else {

    fs.mkdir('logs', (err) => {
        console.log(err);
        console.log('Directorio creado');
    });

}