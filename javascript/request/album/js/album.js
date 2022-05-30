const url = "https://jsonplaceholder.typicode.com/photos"
const sectionAlbum = document.querySelector('#album');
const range = document.querySelector('#range');

function getPhotos(pNumImages) {
    //promesa, la uso para gestionar la peticion de forma asincrona.
    //voy a hacer la peticion a la api dentro de mi promesa.
    const cargaImagenes = new Promise((resolve, reject) => {
        let pedido = new XMLHttpRequest();
        pedido.open('GET', url, true);
        pedido.send()
        pedido.addEventListener('load', (event) => {
            if (event.target.status === 200) {
                let response = JSON.parse(event.target.responseText)
                resolve(response.slice(0, pNumImages))
                //console.log(response.slice(0, pNumImages))
            } else {
                reject('No se ha podido cargar el contenido')
            }
        })
    })

    return cargaImagenes;
}

range.addEventListener('input', recogerNumImages)

function recogerNumImages(event) {
    let num = parseInt(event.target.value)
    getPhotos(num)
        .then((pArrayImg) => {
            pintarImagenes(pArrayImg, sectionAlbum)
        })
        .catch(pError => console.log(pError))
}

function pintarImagenes(pArray, pDom) {
    pDom.innerHTML = "";
    pArray.forEach(photo => pintarFoto(photo, pDom));
}

function pintarFoto(pPhoto, pDom) {
    let figure = document.createElement('figure');
    let img = document.createElement('img');
    let figcaption = document.createElement('figcaption');
    figcaption.innerText = pPhoto.title;
    img.src = pPhoto.thumbnailUrl;
    img.alt = pPhoto.title;
    figure.append(img, figcaption)
    pDom.appendChild(figure);
}

