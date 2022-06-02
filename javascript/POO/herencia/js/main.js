import Tarea from './tarea.js';
import Producto from './producto.js';


const mistareas = new Array(
    new Tarea(1, 'Estudiar javascript', 'urgente'),
    new Tarea(2, 'Sacar al perro', 'diaria'),
    new Tarea(3, 'Plantar un arbol', 'mensual')
)

const sectionTareas = document.querySelector('#tareas');

//productos

const listaCompra = new Array(
    new Producto(15, 'Leche desnatada', 'diaria', 0.50, 10),
    new Producto(16, 'Pan', 'urgente', 0.15, 3),
    new Producto(17, 'Carne', 'mensual', 4.15, 1)
)

const sectionProductos = document.querySelector('#listacompra');

pintarTareas(listaCompra, sectionProductos);

listaCompra[1].completarTarea()



function pintarTareas(pList, pDom) {
    pList.forEach(tarea => tarea.mostrarTarea(pDom));
}

pintarTareas(mistareas, sectionTareas);

mistareas[2].completarTarea()