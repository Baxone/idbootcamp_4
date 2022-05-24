//paso 1 capturar los elementos del DOM con los que voy a interactuar.
const galeria = document.querySelector('#galeria');

function pintarGaleria(pListaImagenes, pObjectDom) {
    pListaImagenes.forEach(imagen => pintarImagen(imagen, pObjectDom))
}

function pintarImagen(pObjImagen, pObjDom) {
    pObjDom.innerHTML += `<article style="width: ${pObjImagen.width}px; height: ${pObjImagen.height}px; background-image:url('${pObjImagen.url}')"><h2>${pObjImagen.title}</h2></article>`
}

function marcarImagen(pNumImagen) {
    const articleSeleccionado = document.querySelector(`#galeria article:nth-child(${pNumImagen})`)
    articleSeleccionado.style.border = "3px solid red";
}


pintarGaleria(datos, galeria)
