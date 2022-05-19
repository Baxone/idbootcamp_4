//Dada una frase cualquier, En un lugar la mancha, pedir una letra del abcedario por ejemplo la a y decirme cuanta veces se repite dentro del cadena de caracteres. Da igual mayuscula que minusculas.


function contarLetras(pFrase, pLetra) {
    let contador = 0;
    for (let caracter of pFrase) {
        if (caracter.toLowerCase() === pLetra.toLowerCase()) {
            contador++;
        }
    }
    return contador
}

console.log(contarLetras('Solo se que no se nada', 'O')); //3

console.log(contarLetras('En un lugar de la mancha', 'a')); //4

