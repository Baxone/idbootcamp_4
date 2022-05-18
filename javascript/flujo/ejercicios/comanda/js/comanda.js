const getPrecioComida = function (pTipo) {
    let precio = 0;
    switch (pTipo) {
        case 'carne':
            precio = 17
            break;

        case 'pescado':
            precio = 20
            break;

        case 'risotto':
            precio = 9
            break;
    }
    return precio;
}

const getPrecioBebida = (pTipoBebida) => {
    let precio = 0;
    switch (pTipoBebida) {
        case 'vino':
            precio = 10
            break;

        case 'cerveza':
            precio = 4
            break;

        case 'refresco':
            precio = 1.5
            break;

        case 'agua':
            precio = 0
            break;
    }
    return precio
}

function getPrecioPostre(postre) {
    return (postre === 'si') ? 3 : 0;
}

function getPropina(pPrecio, pPorcentaje) {
    return pPrecio * (pPorcentaje / 100);
}


function calcularComanda() {

    let comida = prompt('Que quieres comer, carne, pescado, risotto').toLowerCase();
    let bebida = prompt('Que quieres beber, vino, cerveza, refresco, agua').toLowerCase();
    let postre = prompt('Quieres postre, si o no').toLowerCase();

    let precioComida = getPrecioComida(comida);
    let precioBebida = getPrecioBebida(bebida);
    let precioPostre = getPrecioPostre(postre);

    let resultado = precioComida + precioBebida + precioPostre;

    let comanda = resultado + getPropina(resultado, 10)

    console.log(`Te toca pagar ${comanda} euros`)
}


calcularComanda();