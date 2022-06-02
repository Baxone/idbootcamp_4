import Profesor from './profesor.js'
import Asignatura from './asignatura.js'


let profesor1 = new Profesor('Ramón', 'García', 5)
let profesor2 = new Profesor('Rosa', 'Martinez', 9)
let algebra = new Asignatura('Álgebra', profesor1)
let electronica = new Asignatura('Electrónica', profesor2)
let fisica = new Asignatura('Física', profesor2)
algebra.mostrarAsignatura(false)
electronica.mostrarAsignatura(true)
fisica.mostrarAsignatura(true)