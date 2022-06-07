var nombre = 'Juan Antonio';
var edad;
edad = 40;
var estado = true;
console.log(edad * 5);
//en typescript tengo dos formas de definir un array
//opcion 1
var arrNum = [1, 2, 4, 5];
//opcion 2
var arrNombre = new Array('Juan', 'Pepe', 'Maria');
//funciones
function sumar(pNumeroA, pNumeroB) {
    var resultado = pNumeroA + pNumeroB;
    return resultado;
}
var valor = 2;
//console.log(sumar(4, valor))
var resultado = sumar(3, 3);
//funcion flecha
var restar = function (pNumeroA, pNumeroB) {
    return pNumeroA - pNumeroB;
};
function saludar(pNombre) {
    console.log('Hola ' + pNombre);
}
saludar('Pepe');
//haga peticion a una api y no se de que tipo me viene dato.
//any seria un tipado de datos abierto.
var peticion = 4;
peticion = '4';
//Typescript inicio un tipo concreto de Array que se llama TUPLA
var tupla = ['Juan', 40, true];
console.log(tupla);
//typescript el concepto de enum 
var Talla;
(function (Talla) {
    Talla[Talla["sm"] = 0] = "sm";
    Talla[Talla["m"] = 1] = "m";
    Talla[Talla["l"] = 2] = "l";
    Talla[Talla["xl"] = 3] = "xl";
    Talla[Talla["xxl"] = 4] = "xxl";
})(Talla || (Talla = {}));
console.log(Talla);
