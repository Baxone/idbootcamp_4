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
    pararAudio();
    iniciarAudio();
    let url = event.target.dataset.url
    getDataInfo(url)
}

function pararAudio() {
    let audio = document.querySelector('#sable');
    if (audio !== null) {
        audio.parentNode.removeChild(audio);
    }
}

function iniciarAudio() {
    const audio = document.createElement('audio');
    audio.src = './mp3/sable.mp3'
    audio.autoplay = 'autoplay';
    audio.id = 'sable';
    document.body.appendChild(audio);
}






function printCharacter(pData) {
    //console.log(pData)
    viewPerson.innerHTML = "";
    const h2Character = document.createElement('h2');
    h2Character.innerText = pData.name;

    const ul = document.createElement('ul');
    ul.innerHTML = `<li>Altura: <span>${pData.height}</span> </li>
                    <li>Peso: <span>${pData.mass} </span></li>
                    <li>Color Piel: <span>${pData.skin_color} </span> </li>
                    <li>Color Pelo: <span>${pData.hair_color} </span></li>
                    <li>Genero:<span> ${pData.gender} </span></li>
                    <li>Año de nacimiento: <span>${pData.birth_year} </span></li>`

    const h2Films = document.createElement('h2');
    h2Films.innerText = 'Peliculas donde aparece';
    const div = document.createElement('div')
    div.classList.add('peliculas');

    viewPerson.append(h2Character, ul, h2Films, div);

    const films = pData.films

    films.forEach(film => getDataInfo(film))


}

function printFilm(pFilm) {
    const sectionFilms = document.querySelector('.peliculas');
    sectionFilms.innerHTML += `<article>
                        <h3>${pFilm.title}</h3>
                        <ul>
                            <li>Capitulo: ${pFilm.episode_id}</li>
                            <li>Director: ${pFilm.director}</li>
                            <li>Año: ${pFilm.release_date}</li>
                        </ul>
                    </article>`

}