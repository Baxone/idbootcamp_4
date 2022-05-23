//capturar los elementos con los que voy trabajar de forma global
const sectionClasicos = document.getElementById('clasicos');
const sectionNovedades = document.getElementById('novedades');


//filtrar la lista de libros por categoria, que me devuelva una lista de una categoria concreta.

const filterByCategory = (pLista, pCategory) => {
    return pLista.filter(libro => libro.categoria.toLowerCase() === pCategory.toLowerCase())
}

let listaNovedades = filterByCategory(libros, 'novedades');
let listaClasicos = filterByCategory(libros, 'clasicos');


function printList(pLista, pObjectDom) {
    pLista.forEach(libro => printBook(libro, pObjectDom));
}

function printBook(pBook, pObjectDom) {

    pObjectDom.innerHTML += `<article>
                                <h3>${pBook.titulo}</h3>
                                <p>Autor: ${pBook.autor}</p>
                            </article>`

}

printList(listaClasicos, sectionClasicos)
printList(listaNovedades, sectionNovedades)

