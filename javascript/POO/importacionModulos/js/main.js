import { sumar, nombre } from './funciones.js';
import Alumno from './alumno.js';

console.log(nombre)

console.log(sumar(4, 5))

const jorge = new Alumno('jorge', 22, 7);
const jony = new Alumno('jony', 30, 10);

console.log(jony.presentar())