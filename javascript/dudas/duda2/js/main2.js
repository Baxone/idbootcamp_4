const spanresultado = document.querySelector('#resultado');
console.log(spanresultado);
if (localStorage.getItem('suma') !== null) {
    spanresultado.innerText = localStorage.getItem('suma')
}
