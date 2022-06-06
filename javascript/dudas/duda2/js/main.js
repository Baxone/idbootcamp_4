const numero1 = document.querySelector('#numero1')
const numero2 = document.querySelector('#numero2')
const btn = document.querySelector('#btn')


btn.addEventListener('click', sumar);

function sumar() {
    let valor1 = Number(numero1.value);
    let valor2 = Number(numero2.value);
    let suma = valor1 + valor2;
    suma = String(suma)
    //opcion 1; localstorage
    localStorage.setItem('suma', suma)
    window.location.href = 'resultado.html'

}

