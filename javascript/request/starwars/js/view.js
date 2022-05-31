const menuPeople = document.querySelector('#personajes');
const viewPerson = document.querySelector('#vistaPersonaje');
const botonesPag = document.querySelectorAll('.botones div');

function printMenu(pData) {
    menuPeople.innerHTML = "";
    pData.results.forEach(person => printPerson(person, menuPeople));
    //ojo me quedan los botones de paginacion.
    //console.log(pData)
    botonesPag[0].dataset.page = pData.previous;
    botonesPag[1].dataset.page = pData.next;

    botonesPag[0].style.display = (pData.previous === null) ? 'none' : 'block';
    botonesPag[1].style.display = (pData.next === null) ? 'none' : 'block';

    botonesPag.forEach(boton => boton.addEventListener('click', gotoPage));
}

function gotoPage(event) {
    let url = event.target.dataset.page;
    getDataMenu(url);
}




function printPerson(pPerson, pDom) {
    let li = document.createElement('li');
    li.innerText = pPerson.name;
    //ojo el boton tiene que almacenar la url del personaje
    li.dataset.url = pPerson.url

    pDom.appendChild(li);
    li.addEventListener('click', getPersonInfo)

}

function getPersonInfo(event) {
    //con esta funcion vamos a cargar toda la informacion del personaje a derecha
}