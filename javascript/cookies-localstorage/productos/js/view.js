const sectionArticulos = document.querySelector('section .flex');
const selectorCategorias = document.querySelector('#category')
const cantidadCarrito = document.querySelector('.carrito p');
let carrito = new Array();


function printProducts(pData) {
    sectionArticulos.innerHTML = "";
    pData.forEach(product => {
        printOneProduct(product, sectionArticulos)
    });
}

function printOneProduct(pProduct, pDom) {

    const article = document.createElement('article');
    const button = document.createElement('button');
    button.innerText = 'Añadir a carrito';
    button.dataset.id = pProduct.id;
    //le añadiremos un evento al button
    button.addEventListener('click', addCarrito)
    article.innerHTML = `<small>${pProduct.category}</small>
                         <h3>${pProduct.title}</h3>
                        <figure>
                            <img src="${pProduct.image}">
                        </figure>
                         <p>Precio: ${pProduct.price} </p>`

    article.appendChild(button)
    pDom.appendChild(article);
}

async function addCarrito(event) {
    let id = event.target.dataset.id;
    let productoCarrito = await getProduct(id);

    //tengo que guardarlo en el localstorage
    //voy a comprobar que localstorage no tiene datos en memoria
    if (localStorage.getItem('carrito') !== null) {
        carrito = JSON.parse(localStorage.getItem('carrito'))
    }
    carrito.push(productoCarrito);

    //una vez que he añadido el nuevo producto al carrito tengo que volver a guardar el array en el localstorage

    localStorage.setItem('carrito', JSON.stringify(carrito))

}

function printCategories(pCategorias) {
    pCategorias.forEach(categoria => {
        selectorCategorias.innerHTML += `<option value="${categoria}">${categoria}</option>`
    })
    selectorCategorias.addEventListener('change', filterByCategoria)
}

function filterByCategoria(event) {
    let categoria = event.target.value;
    getProductsByCategoria(categoria);
}