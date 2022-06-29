const colors = require('colors');
const axios = require('axios').default;

const { sum } = require('./operaciones');
const Persona = require('./Persona');

console.log(colors.red('Texto en rojo, ¡chachi!'));
console.log(colors.trap('Texto fantástico'));
console.log(colors.rainbow('OMG Rainbows!'));

(async () => {
    const { data, data: { info: { pages } } } = await axios.get('https://rickandmortyapi.com/api/character');

    console.log(pages);
})();

const resultado = sum(4, 5);
console.log(resultado);

const pers = new Persona('Mario', 'Girón', 32);
console.log(pers);

console.log(__dirname);
console.log(__filename);

console.log(process.argv);