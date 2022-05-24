//capturar los elementos del DOM con los que voy inteactuar
const sectionPoligonos = document.querySelector('.poligonos');
let contador = 1;

function cargarDivs(pListaPoligonos, pDom) {
    pListaPoligonos.forEach(poligono => cargarPoligono(poligono, pDom));
}

function cargarPoligono(pPoligono, pDom) {
    pDom.innerHTML += `<div id="poligono${contador}" style="background-color: ${pPoligono.bgcolor}; width: ${pPoligono.width}; height: ${pPoligono.height}; border: ${pPoligono.border}; border-radius: ${pPoligono.radio} "></div>`
    contador++;
}

cargarDivs(poligonos, sectionPoligonos)

function moverPoligono(pNum, pPixeles) {
    const poligonoSeleccionado = document.getElementById('poligono' + pNum);
    poligonoSeleccionado.style.marginLeft = pPixeles;
    poligonoSeleccionado.style.transition = '1s';

}