// crear un algoritmo que me pase un dni con la letra y me devuelva la solo la letra del dni.

function devolverLetra(pDni: string): string {

    return pDni[pDni.length - 1]
}

console.log(devolverLetra('56789D'));