const sectionArticulos = document.querySelector('section .flex');
const selectorCategorias = document.querySelector('#category')

function printProducts(pData) {
    sectionArticulos.innerHTML = "";
    pData.results.forEach(product => {
        if (product.active) {
            printOneProduct(product, sectionArticulos)
        }
    });
}

function printOneProduct(pProduct, pDom) {

    const article = document.createElement('article');
    const button = document.createElement('button');
    button.innerText = 'Añadir a carrito'
    //le añadiremos un evento al button
    button.addEventListener('click', addCarrito)
    article.innerHTML = `<small>${pProduct.category}</small>
                         <h3>${pProduct.name}</h3>
                        <figure>
                            <img src="${pProduct.image}">
                        </figure>
                         <p>Precio: ${pProduct.price} </p>`

    article.appendChild(button)
    pDom.appendChild(article);
}

function addCarrito(event) {
    alert('añadido a carrito')
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