const palabra = "f*r*am bues%a$s";

function limpiarCadena(pString) {
    let cadena = pString.replaceAll("*", "");
    cadena = cadena.replaceAll("%", "");
    cadena = cadena.replaceAll('$', "");
    cadena = cadena.replaceAll(' ', '');
    cadena = cadena.replaceAll("&", "");
    cadena = cadena.replaceAll("+", "");
    cadena = cadena.replaceAll("(", "");
    cadena = cadena.replaceAll(")", "");

    return cadena;
}

console.log(limpiarCadena(palabra))

