const url = 'https://fakestoreapi.com/products'

async function getAllProducts() {

    const response = await fetch(url, { method: 'GET' })
    const data = await response.json()
    console.log(data)
    printProducts(data);

}


async function getAllCategories(pUrl = 'https://fakestoreapi.com/products') {
    //opcion 1 sin usar la api
    /* 
    try {
        const response = await fetch(url, { method: 'GET' })
        const data = await response.json();
        const productos = data.results;

        let categorias = productos.map(producto => producto.category);
        //eliminar los duplicados.
        categorias = [... new Set(categorias)]
        printCategories(categorias);
    } catch {
        alert('no se ha podido obtener las categorias')
    } */
    //opcion 2 con la api
    const urlCategories = pUrl + '/categories '
    try {
        const response = await fetch(urlCategories, { method: 'GET' })
        const data = await response.json();
        printCategories(data);
    } catch {
        alert('no se ha podido obtener las categorias')
    }
}


async function getProductsByCategoria(pCategoria) {
    const urlFinal = url + "/category/" + pCategoria;
    const response = await fetch(urlFinal, { method: 'GET' });
    const data = await response.json();
    console.log(data);
    printProducts(data);

}

async function getProduct(pId) {
    try {
        const urlProducto = url + "/" + pId;
        const response = await fetch(urlProducto, { method: 'GET' })
        const product = await response.json();
        return product;
    } catch (error) {
        return error
    }
}







getAllCategories()
getAllProducts()