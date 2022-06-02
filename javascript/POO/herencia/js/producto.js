import Tarea from "./tarea.js";

export default class Producto extends Tarea {

    constructor(pId, pTitulo, pPrioridad, pPrecio, pCantidad = 1) {
        //super se refiere al metodo de la clase tarea en este caso al constructor.
        super(pId, pTitulo, pPrioridad)
        this.precio = pPrecio;
        this.cantidad = pCantidad;
    }

    calcularPrecio() {
        return this.precio * this.cantidad;
    }

    //podemos sobrescribir un metodo del padre. Lo unico necesario para sobrescribir un metodo es llamar igual al del padre.

    mostrarTarea(pDom) {
        pDom.innerHTML += `<article id='tarea_${this.id}'>
                                <h3>${this.titulo}</h3>
                                <ul>
                                    <li>Prioridad: ${this.prioridad}</li>
                                    <li>Cantidad: ${this.cantidad}</li>
                                    <li>Precio: ${this.calcularPrecio().toFixed(2)} </li>
                                    <li class=" ${(this.completado) ? 'verde' : 'rojo'}    ">Estado: ${(this.completado) ? 'completado' : 'no completado'} </li>
                                </ul>
                            </article>`
    }


}