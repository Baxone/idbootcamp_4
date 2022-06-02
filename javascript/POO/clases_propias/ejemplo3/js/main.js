const casio = new Calculadora('CASIO')

const inputNumero1 = document.querySelector('#numero1')
const inputNumero2 = document.querySelector('#numero2')
const sectionResultado = document.querySelector('#resultado')
const botones = document.querySelectorAll('button');

botones.forEach(boton => boton.addEventListener('click', getOperation))

function getOperation(event) {
    let resultado = 0;
    let numero1 = Number(inputNumero1.value);
    let numero2 = Number(inputNumero2.value);

    switch (event.target.innerText) {
        case 'sumar':
            resultado = casio.sumar(numero1, numero2);
            break;

        case 'multiplicar':
            resultado = casio.multiplicar(numero1, numero2)
            break;

        case 'restar':
            resultado = casio.restar(numero1, numero2)
            break;

        case 'dividir':
            resultado = casio.dividir(numero1, numero2)
            break;

        case 'potencia':
            resultado = casio.potencia(numero1, numero2)
            break;

        case 'ON/OFF':
            casio.encendido()
            break;

    }
    if (event.target.innerText !== 'ON/OFF') {
        casio.mostrarResultado(resultado, event.target.innerText, sectionResultado);
    }


}
