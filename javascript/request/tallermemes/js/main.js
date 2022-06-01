const url = 'https://api.giphy.com/v1/gifs/search?lang=es&q='
const urltrending = 'https://api.giphy.com/v1/gifs/trending?'

const token = '&api_key=F4vJv44PRX24Y4kBFStwfOQQEw4yVb2I'

const searchInput = document.querySelector('#search');
const sectionResults = document.querySelector('.results');


searchInput.addEventListener('keydown', recogerDatosSearch)

async function recogerDatosSearch(event) {
    if (event.keyCode === 13) {
        //tocando el intro
        if (event.target.value !== "") {
            let data = await getGifs(event.target.value)
            printGifs(data);
        } else {
            getTrending();
        }


    }
}

async function getGifs(pWord) {
    const response = await fetch(url + pWord + token, { method: 'GET' });
    const gifs = await response.json()
    return gifs.data;
}

async function getTrending() {
    const response = await fetch(urltrending + token, { method: 'GET' })
    const gifs = await response.json();
    printGifs(gifs.data);
}
getTrending()


function printGifs(pArrayGifs) {
    sectionResults.innerHTML = "";
    pArrayGifs.forEach(gif => printOneGif(gif, sectionResults));
}

function printOneGif(pGif, pDom) {
    let figure = document.createElement('figure');
    let img = document.createElement('img');
    let figcaption = document.createElement('figcaption');

    figcaption.innerText = pGif.title;
    img.src = pGif.images.original.url

    figure.append(img, figcaption);

    pDom.appendChild(figure);
}





//quiero que hagais un buscador de gifs, el buscador funcion cuando demos al intro y solo al intro, en la seccion correspodiente me pinteran todos lo gifs de la busqueda.

//pintarme inicialmente los gif trending




