//CRUD crear leer actualizar borrar.

//pinteis con la maquetación que querais los animales dentro del html

//crear un funcion que me permita insertar un animal dentro del array.

//filtrar animales por peligrosidad

//buscar un animal por nombre, el nombre a buscar no tiene que estar necesariamente completo le -> leon, leopardo. Buscador semantico.

/**
 *   pintar lista animales completa
 */

function pintarTodosAnimales(pListaAnimales) {
    for (let animal of pListaAnimales) {
        pintarUnAnimal(animal)
    }
}

/**
 *  pintar un animal
 */

function pintarUnAnimal(pObjectAnimal) {
    document.write(`<article class="${obtenerPeligrosidad(pObjectAnimal.peligrosidad)}">
        <h3>${pObjectAnimal.raza}</h3>
        <figure>
            <img src="${pObjectAnimal.foto}" alt="${pObjectAnimal.raza}">
        </figure>
        <p>Peso: ${pObjectAnimal.peso}kg</p>
    </article>`)
}

/**
 * Dado un numero obtener la peligrosidad asociada a dicho numero
 */

function obtenerPeligrosidad(pNum) {
    let peligrosidad = "";

    switch (pNum) {
        case 5:
            peligrosidad = 'peligroso'
            break;

        case 4:
            peligrosidad = 'cuidadin'
            break;

        case 3:
            peligrosidad = 'ojito'
            break;

        case 2:
            peligrosidad = 'suavecito'
            break;

        case 1:
            peligrosidad = 'docil'
            break;

    }

    return peligrosidad
}


/**
 * insertar un animal
 */
let id = 8;
function insertarAnimal(pRaza, pPeso, pPeligrosidad, pFoto, pLista) {
    const newAnimal = {
        id: id,
        raza: pRaza,
        peso: pPeso,
        peligrosidad: pPeligrosidad,
        foto: pFoto
    }
    let posicionSiguiente = pLista.length;
    pLista[posicionSiguiente] = newAnimal
    pintarUnAnimal(newAnimal)
}

//pintarTodosAnimales(animales);

//insertarAnimal('Jony', 80, 5, 'https://images-ext-1.discordapp.net/external/r-FYpPcPlty2_MgN07fN1MKxQLoWLmx6XWES4PsWpek/https/i.imgur.com/8mUsfjy.png', animales)


/**
 * Filtrar animales por peligrosidad
 * 
 */

function filtrarPorPeligrosidad(pLista, pPeligrosidad) {
    let listaFiltrada = new Array()
    let i = 0;
    for (let animal of pLista) {
        if (animal.peligrosidad === pPeligrosidad) {
            //Este es el que quiero.
            listaFiltrada[i] = animal;
            i++
        }
    }
    return listaFiltrada;
}

//let listaAnimales4 = filtrarPorPeligrosidad(animales, 4);
//pintarTodosAnimales(listaAnimales4)

//existe una funcion de string que me permite buscar un trozo dentro de otra includes()

//let cadena = 'supercalifragilistoco'
//let busqueda = 'jony'

//console.log(cadena.includes(busqueda))

function buscarAnimal(pBusqueda, pLista) {
    let listaFiltrada = new Array()
    let i = 0;
    for (let animal of pLista) {
        if (animal.raza.toLowerCase().includes(pBusqueda.toLowerCase())) {
            listaFiltrada[i] = animal
            i++
        }
    }
    return listaFiltrada;
}

let listaAnimaleConLe = buscarAnimal('le', animales);
pintarTodosAnimales(listaAnimaleConLe);


