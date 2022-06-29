/**
 * 
 * Recuperar todos los ficheros del directorio "ficheros" y hacer console.log del contenido de aquellos que tengan extensión .md
 * readdir - readFile
 * 
 */

const fs = require('fs');

fs.readdir('./ficheros', (err, files) => {
    for (let file of files) {
        if (file.endsWith('.md')) {
            const data = fs.readFileSync(`./ficheros/${file}`, 'utf-8');
            // console.log(data);
        }
    }
});

// Versión Flipaos

fs.readdir('./ficheros', (err, files) => {
    files.filter(file => file.endsWith('.md'))
        .forEach(file => {
            const data = fs.readFileSync(`./ficheros/${file}`, 'utf-8');
            fs.appendFileSync('./total.md', data);
        });
});