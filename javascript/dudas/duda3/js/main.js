//capturo los elementos de dom

const sectionProductos = document.querySelector('#productos ul');


//almacenar mi array en el localstorage para poderlo usar en toda aplicacion
if (localStorage.getItem('productos') !== null) {
    products = JSON.parse(localStorage.getItem('productos'));
} else {
    localStorage.setItem('productos', JSON.stringify(products))
}

function printProducts(pLista, pDom) {
    pLista.forEach(product => printOneProduct(product, pDom));
}

function printOneProduct(pProducto, pDom) {
    let li = document.createElement('li')
    li.innerText = `${pProducto.name}: ${pProducto.price}`;
    let button = document.createElement('button');
    button.innerText = 'estado';
    button.style.marginLeft = '10px'
    li.style.margin = '10px';
    button.dataset.id = pProducto.name
    button.addEventListener('click', cambiarEstado)
    li.appendChild(button)
    pDom.appendChild(li);
}

printProducts(products, sectionProductos)


function cambiarEstado(event) {
    let nombre = event.target.dataset.id;
    let productoActualizar = products.find(producto => producto.name === nombre)
    productoActualizar.stock = !productoActualizar.stock;
    localStorage.setItem('productos', JSON.stringify(products))
}