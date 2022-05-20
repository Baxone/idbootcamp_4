//1 - pintar lista de productos, html y css.

function pintarProductos(pListaProductos) {
    pListaProductos.forEach(producto => pintarUnProducto(producto));
}

function pintarUnProducto(pProducto) {
    document.write(`
     <article class="${(pProducto.stock) ? 'stock' : 'sinstock'}">
        <h2>${pProducto.name}</h2>
        <p>Precio: ${pProducto.price}€</p>
        <p>Categoria: ${pProducto.category}</p>
        <hr>
    </article>
    `)
}

//pintarProductos(products)

// 2 - filtrar productos que esten entre 1 y 3 euros (ojo capacidad de abstracción).

function filterByPrice(pList, pMinPrice, pMaxPrice) {
    let listaFiltrada = pList.filter(product => product.price >= pMinPrice && product.price <= pMaxPrice);

    return listaFiltrada;
}

//pintarProductos(filterByPrice(products, 1, 3))

//  3 - filtrar por categoria

function filterByCategory(pList, pCategory) {
    let listaFiltrada = pList.filter(product => {
        return product.category.toLowerCase() === pCategory.toLowerCase()
    })

    return listaFiltrada
}



//  4- filtrar por disposicion, si tengo o no tengo stock

function filterByStock(pList, pBoolean) {
    let listaFiltrada = pList.filter(product => product.stock === pBoolean)

    return listaFiltrada;
}


//   5 - filtrar productos entre 1 y 3 euros que tengan stock

/*
let lista1a3 = filterByPrice(products, 1, 3);
let lista1a3withStock = filterByStock(lista1a3, true);
pintarProductos(lista1a3withStock)
*/

pintarProductos(filterByStock(filterByPrice(products, 1, 3), true))

