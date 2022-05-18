//quiero que pinteis un tablero de ajedrez donde se pueda eligir la cantidad de casillas por lado.
// el color por el empieza black o grey
// y el tamaño en pixeles de la casillas.

// premisas quiero que encapsules. NO QUIERO UNA FUNCION QUE LO HAGA TODO

// 1 - pintarUnaCasilla
// 2 - pintarUnaFila
// 3 - pintarTablero

//primero plantear como lo harias en puro html y luego pasalo a javascript.

function pintarUnaCasilla(pAncho, pColor) {
    let casilla = `<div style="background-color: ${pColor}; width: ${pAncho}px; height: ${pAncho}px"></div>`;
    return casilla;
}


function pintarUnaFila(pNumeroCasillas, pAncho, pColor1, pColor2) {
    let fila = `<div class="fila" style="display: flex">`

    for (let i = 1; i <= pNumeroCasillas; i++) {
        let color = (i % 2 !== 0) ? pColor1 : pColor2
        fila += pintarUnaCasilla(pAncho, color)
    }

    fila += '</div>';

    document.write(fila);
}


function pintarTablero(pNumeroCasillas, pAncho, pColor1, pColor2) {
    let tablero = '<div class="tablero">';

    for (let i = 1; i <= pNumeroCasillas; i++) {
        let colorInicial = (i % 2 !== 0) ? pColor1 : pColor2;
        let colorFinal = (i % 2 === 0) ? pColor1 : pColor2;
        pintarUnaFila(pNumeroCasillas, pAncho, colorInicial, colorFinal);
    }
    tablero += '</div>'
}

let numeroCasillas = parseInt(prompt('dime cantidad de casillas'))
let tamano = parseInt(prompt('dime ancho de casilla'))
let colorInicial = prompt('por que color empiezo, grey o black');
let colorFinal = (colorInicial === "black") ? 'grey' : 'black';


pintarTablero(numeroCasillas, tamano, colorInicial, colorFinal);


