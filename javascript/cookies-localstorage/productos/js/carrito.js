const cantidadCarrito = document.querySelector('header .carrito p');
//primero capturamos el carrito donde lo vamos a pintar
const sectionCarrito = document.querySelector('section.carrito ul');
const sectionTotal = document.querySelector('section.carrito h3 span');

//capturamos el boton y le añadimos un evento
const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
    localStorage.removeItem('carrito');
    cantidadCarrito.innerText = 0;
    carrito = new Array();
    pintarCarrito(carrito, sectionCarrito, sectionTotal)
})

let carrito = new Array();
if (localStorage.getItem('carrito') !== null) {
    carrito = JSON.parse(localStorage.getItem('carrito'));
    cantidadCarrito.innerText = carrito.length
}

//puede ocurrir que esta vacio o lleno
function pintarCarrito(pCarrito, pDom, pDomTotal) {
    let total = 0;
    if (pCarrito.length === 0) {
        pDom.innerHTML = `<li>NO HAY PRODUCTOS PENDIENTES DE COMPRA</li>`
    } else {
        pCarrito.forEach(producto => {
            total += producto.price;
            pintarProducto(producto, pDom)
        });
    }
    pDomTotal.innerText = total.toFixed(2);
}

function pintarProducto(pProducto, pDom) {
    pDom.innerHTML += `<li><img src="${pProducto.image}"> ${pProducto.title} - ${pProducto.price} €</li>`;
}

pintarCarrito(carrito, sectionCarrito, sectionTotal)
