const url = 'https://peticiones.online/api/products'

async function getAllProducts() {
    try {
        const response = await fetch(url, { method: 'GET' })
        const data = await response.json()
        printProducts(data);
    } catch {
        alert('conexion perdida');
    }
}


async function getAllCategories(pUrl = 'https://peticiones.online/api/products') {
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

    const response = await fetch(url, { method: 'GET' });
    const data = await response.json();

    if (pCategoria !== "") {
        const products = data.results;
        const myData = {};
        myData.results = products.filter(product => product.category === pCategoria);
        printProducts(myData);
    } else {
        printProducts(data);
    }


}

getAllCategories()
getAllProducts()