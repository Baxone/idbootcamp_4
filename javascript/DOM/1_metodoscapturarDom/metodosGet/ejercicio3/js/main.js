const sectionDestacados = document.getElementsByTagName('section')[0];

function printOneLaptop(pObject, pDom) {
    pDom.innerHTML = `<h1>Seccion destacados</h1><article>
                            <h3>${pObject.marca} - ${pObject.modelo} </h3>
                            <p>Precio: ${pObject.precio}</p>
                        </article>`

}

//printOneLaptop(portatiles[0], sectionDestacados);
function obtenerPortatilAleatorio(pList) {

    let numeroAletorio = Math.floor(Math.random() * pList.length);

    return pList[numeroAletorio]
}

//cada vez que entro el web.
printOneLaptop(obtenerPortatilAleatorio(portatiles), sectionDestacados);


//funcion intervalicas - funciones que manejan tiempo en milisegundos.

//setInterval(), setTimeout()

//setInteval(fn,tiempo) recibe dos parametros, el primero la funcion que se ejecuta a cada intervalo y el segungo el tiempo que tarda en repetirse esa llamada en milisegundos.

//setTimeout(fn, tiempo), igual que en setInterval fn y tiempo milisegundos, pero en este caso solo se ejecuta una vez. Es una funcion de retraso. 

//todas intervalicas tiene que esta asociadas a una varible, esto es importantisimo. Para parar un intervalo vamos a usar clearInterval(nombreIntervalo)


const intervalo = setInterval(() => {
    let portatil = obtenerPortatilAleatorio(portatiles);
    printOneLaptop(portatil, sectionDestacados)
}, 5000)


