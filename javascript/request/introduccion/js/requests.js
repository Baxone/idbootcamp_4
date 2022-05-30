const sectionBlog = document.querySelector('#blog');

//metodo amazon
const url = 'https://jsonplaceholder.typicode.com/posts';

//crear un objeto pedido
const pedido = new XMLHttpRequest()

//abrir el canal de comunicacion con mi pagina
pedido.open('GET', url, true);

// GET -> obtener informacion - solo recibe
// POST -> enviar informacion - envie y recibe un contestacion
// PUT / PATH -> actualizar informacion envie y recibe un contestacion
// DELETE -> borrar informacion  - te envia un id y te devuelve una contestacion.

//hacenis un pedido, enviamos un pedido.
pedido.send();
//estoy atenteo a los cambios que se pueda producir en mi pedido.
//pedido.addEventListener('readystatechange', cargarArchivo);
pedido.addEventListener('load', cargarArchivo);

function cargarArchivo(event) {
    if (event.target.status === 200) {
        let data = JSON.parse(event.target.responseText);
        pintarBlog(data, sectionBlog)
    } else {
        alert('conexion perdida')
    }
}


function pintarBlog(pList, pDom) {
    pList.forEach((post, index) => pintarPost(post, pDom, index));
}

function pintarPost(pPost, pDom, pIndex) {
    const bgColor = (pIndex % 2 !== 0) ? 'black' : 'white';
    const color = (pIndex % 2 !== 0) ? 'white' : 'black';
    const article = document.createElement('article');
    article.setAttribute('style', `background-color: ${bgColor}; padding: 10px; color: ${color}`);
    const h3 = document.createElement('h3')
    const p = document.createElement('p')
    h3.innerText = pPost.title;
    p.innerText = pPost.body;
    article.dataset.id = pPost.id;

    article.append(h3, p);
    pDom.appendChild(article);
}

//impares fondo negro padding 10 y color texto blanco
//pares fondo blanco, padding 10 y color texto negro 









