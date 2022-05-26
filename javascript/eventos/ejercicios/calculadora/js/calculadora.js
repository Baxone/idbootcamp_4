//capturar
const botones = document.querySelectorAll('.botonera button');
const display = document.querySelector('#display');
let numero = 0;
let resultado = 0;
display.value = numero;
let isTouch = false;

//eventos
botones.forEach(boton => boton.addEventListener('click', calcular))

function calcular(event) {
    if (event.target.id === 'reset') {
        numero = 0;
        resultado = 0;
        display.value = numero;
        isTouch = false;
    } else if (event.target.id !== 'igual') {
        numero = event.target.innerText;
        display.value = (isTouch) ? display.value + numero : numero;
        isTouch = true;
    } else if (event.target.id === 'igual') {
        //la funcion eval, evalua una cadena de caracteres y si esa cadena es una operacion matematica me calcula, si no me da NaN
        resultado = eval(display.value);
        display.value = resultado;
        isTouch = true;
    }

}