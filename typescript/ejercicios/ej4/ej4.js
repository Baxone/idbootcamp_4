//Vamos a crear una aplicación  que permita generar calculadoras de diferentes marca. Cada calculadora que yo cree tiene que implementar obligatoriamente tres metodos sumar, resta, multiplicar  a parte de una marca de calculadora CASIO.
var Calculadora = /** @class */ (function () {
    function Calculadora(pMarca) {
        if (pMarca === void 0) { pMarca = 'LG'; }
        this.marca = "";
        this.marca = pMarca;
    }
    Calculadora.prototype.sumar = function () {
        var pNumeros = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            pNumeros[_i] = arguments[_i];
        }
        var resultado = 0;
        pNumeros.forEach(function (numero) { return resultado += numero; });
        return resultado;
    };
    Calculadora.prototype.restar = function () {
        var pNumeros = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            pNumeros[_i] = arguments[_i];
        }
        var resultado = 0;
        pNumeros.forEach(function (numero) { return resultado -= numero; });
        return resultado;
    };
    Calculadora.prototype.multiplicar = function () {
        var pNumeros = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            pNumeros[_i] = arguments[_i];
        }
        var resultado = 1;
        resultado = pNumeros.reduce(function (prev, next) { return prev * next; });
        return resultado;
    };
    return Calculadora;
}());
var miCalculadora = new Calculadora('CASIO');
console.log(miCalculadora.sumar(1, 2, 3, 4, 5, 6, 7)); //28
console.log(miCalculadora.restar(45, 3, 12)); // -60
console.log(miCalculadora.multiplicar(3, 4, 5, 6)); //360
