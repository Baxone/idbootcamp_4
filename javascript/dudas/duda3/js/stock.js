const ulStock = document.querySelector('#stock');
let products = new Array();

if (localStorage.getItem('productos') !== null) {
    products = JSON.parse(localStorage.getItem('productos'))
    pintarStock(products, ulStock)
}

function pintarStock(pList, pDom) {
    pList.forEach(producto => {
        if (producto.stock === true) {
            pintarUnProducto(producto, pDom)
        }
    });
}

function pintarUnProducto(pProducto, pDom) {
    pDom.innerHTML += `<li>${pProducto.name}: ${pProducto.stock}</li>`
}