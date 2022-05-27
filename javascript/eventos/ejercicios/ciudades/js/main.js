let btnAlfabetico = document.querySelector('#alfabetico');
let btnHabitantes = document.querySelector('#habitantes');
let ulCiudades = document.querySelector('.ciudades');
let divMapa = document.querySelector('.mapa');
let ordenAZ = false;
let ordenNum = false;

/* pintar el listado de ciudades */

function pintarCiudades(pList, pDom) {
    pDom.innerHTML = "";
    pList.forEach(ciudad => pintarUnaCiudad(ciudad, pDom))
}

function pintarUnaCiudad(pObjCiudad, pDom) {

    let li = document.createElement('li');
    li.innerText = `${pObjCiudad.nombre} - ${pObjCiudad.habitantes} habitantes`

    li.dataset.mapa = pObjCiudad.mapa;
    //tenemos que añadir a cada li un evento del click
    li.addEventListener('click', cargarMapa)

    pDom.appendChild(li);
}

pintarCiudades(ciudades, ulCiudades);

//ordenar por orden alfabetico

btnAlfabetico.addEventListener('click', ordenarAZ);

function ordenarAZ() {
    let listaOrdenada = new Array();
    if (ordenAZ) {
        listaOrdenada = ciudades.sort((actual, siguiente) => {
            return actual.nombre < siguiente.nombre
        });
        ordenAZ = false;
    } else {
        listaOrdenada = ciudades.sort((actual, siguiente) => {
            return actual.nombre > siguiente.nombre
        });
        ordenAZ = true;
    }

    pintarCiudades(listaOrdenada, ulCiudades)
}


//orden numero 1,10,11,12,13,14,15,16,17,18,19,2,20

btnHabitantes.addEventListener('click', ordenarNumerico)

function ordenarNumerico() {
    let listaOrdenada = new Array();

    if (ordenNum) {
        listaOrdenada = ciudades.sort((actual, siguiente) => {
            return actual.habitantes - siguiente.habitantes
        })
    } else {
        listaOrdenada = ciudades.sort((actual, siguiente) => {
            return siguiente.habitantes - actual.habitantes
        })
    }
    ordenNum = !ordenNum


    pintarCiudades(listaOrdenada, ulCiudades);
}

//vamos a pintar el mapa a la derecha

let iframe = divMapa.querySelector('iframe');
let inicioUrl = iframe.src;

function cargarMapa(event) {
    let finalUrl = event.target.dataset.mapa;
    let urlResultante = inicioUrl + finalUrl;
    iframe.src = urlResultante;
}