const base_datos = [
    {
        id: 1,
        name: "maa+nz z*anas",
        stock: true
    },
    {
        id: 2,
        name: "a((nna( (carrr**dos",
        stock: false
    },
    {
        id: 3,
        name: "a$aa $$$g**uac&ccatte",
        stock: true
    },
    {
        id: 4,
        name: "p$$pp***ooll o$",
        stock: true
    },
    {
        id: 5,
        name: "c&arrr$$n n***ee",
        stock: false
    },
    {
        id: 6,
        name: "f*ffr*amm mbues%sa$s",
        stock: true
    },
    {
        id: 7,
        name: "c&ce e&&rree&&eeaal&ess",
        stock: false
    },
    {
        id: 8,
        name: "q &&q**quuees***ssoooo",
        stock: true
    },
    {
        id: 9,
        name: "ppp$olll$oooo$",
        stock: true
    },
    {
        id: 10,
        name: "aa%%%gg**gu++uaa",
        stock: true
    },
    {
        id: 11,
        name: "ver*rrr*dddu*rr*ras&ss&",
        stock: true
    }
]

function getBBDDRestored(pBbdd) {

    const bbdd_stock = pBbdd.filter(producto => producto.stock === true);

    const bbdd_limpia = bbdd_stock.map(producto => {
        return {
            id: producto.id,
            nombre: cleanName(producto.name),
            stock: producto.stock
        }
    })

    return bbdd_limpia;
}


function cleanName(pNombre) {
    const nameWhioutCharacters = pNombre.replace(/[+*$&% ]/g, '');


    //split parte una cadena de caracteres en un array, y recibe por parametro el caracter por el que parto la cadena, este caracter no aparece en el array.
    const arrayCharacters = nameWhioutCharacters.split("")

    const unicos = new Array();
    let contador = 0;
    for (let i = 0; i < arrayCharacters.length; i++) {
        const elemento = arrayCharacters[i];
        const elementoAnterior = arrayCharacters[i - 1];

        if (elemento === 'l' && elementoAnterior === 'l' && contador === 0) {
            unicos.push(elemento);
            contador = 1
        }
        else if (elemento !== elementoAnterior) {
            unicos.push(elemento);
            contador = 0;
        }
    }

    //de un array de elementos los junta todos en un cadena de caracteres, si recibe cualquier parametro ese se convierte en la union de caracteres.
    return unicos.join("");

}

console.log(getBBDDRestored(base_datos));