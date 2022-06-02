export default class Tarea {

    constructor(pId, pTitulo, pPrioridad) {
        this.id = pId;
        this.titulo = pTitulo;
        this.prioridad = pPrioridad;
        this.completado = false;
    }

    mostrarTarea(pDom) {
        pDom.innerHTML += `<article id='tarea_${this.id}'>
                                <h3>${this.titulo}</h3>
                                <ul>
                                    <li>Prioridad: ${this.prioridad}</li>
                                    <li class=" ${(this.completado) ? 'verde' : 'rojo'}    ">Estado: ${(this.completado) ? 'completado' : 'no completado'} </li>
                                </ul>
                            </article>`
    }

    completarTarea() {
        this.completado = true;
        let actualizarTarea = document.querySelector('#tarea_' + this.id)
        let li = actualizarTarea.querySelector('li:last-child');
        if (this.completado) {
            li.classList.replace('rojo', 'verde');
            li.innerText = 'completado';
        }
    }




}

