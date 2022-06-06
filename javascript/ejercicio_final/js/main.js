import ApiMorty from "./class.api.js";

const selectEstado = document.querySelector('#estado');
const sectionPersonajes = document.querySelector('#personajes');
const buttonsPag = document.querySelectorAll('footer button');
let url = 'https://rickandmortyapi.com/api/character/'

const morty = new ApiMorty();

selectEstado.addEventListener('change', filterStatus);

function filterStatus(event) {
    //https://rickandmortyapi.com/api/character/?status=alive
    let urlFilter = (event.target.value !== "") ? url + '?status=' + event.target.value : url;
    cargarContenido(urlFilter);
}

//funcion autojecutada
/*
(() => {
    alert('es un afuncion autoejecutada')
})()
*/

async function cargarContenido(pUrl) {

    const personajes = await morty.getData(pUrl);
    buttonCharge(personajes.info.prev, personajes.info.next);
    morty.printCharacters(personajes.results, sectionPersonajes);
}

cargarContenido(url);


function buttonCharge(pUrlPrev, pUrlNext) {

    buttonsPag[0].disabled = (pUrlPrev === null) ? true : false;
    buttonsPag[1].disabled = (pUrlNext === null) ? true : false;

    buttonsPag[0].dataset.url = pUrlPrev;
    buttonsPag[1].dataset.url = pUrlNext;

    buttonsPag.forEach(button => button.addEventListener('click', irPagina))

}

async function irPagina(event) {
    let url = event.target.dataset.url;
    const data = await morty.getData(url)
    morty.printCharacters(data.results, sectionPersonajes);
    buttonCharge(data.info.prev, data.info.next);
}





