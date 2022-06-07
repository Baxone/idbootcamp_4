// crear un objeto que me permita manipluar textos, esta calse no tendar aningiuna propiedad e implementara tres metodos. El primero me permitira contar letras de una frase y solo letras sin espacios.
var HandleString = /** @class */ (function () {
    function HandleString() {
    }
    HandleString.prototype.countLetter = function (text) {
        var withoutSpace = this.cleanSpace(text);
        return withoutSpace.length;
    };
    HandleString.prototype.letterInside = function (text, letter) {
        var contador = 0;
        for (var i = 0; i < text.length; i++) {
            if (text[i].toLowerCase() === letter.toLowerCase()) {
                contador++;
            }
        }
        return contador;
    };
    HandleString.prototype.cleanSpace = function (text) {
        return text.trim().split(" ").join("");
    };
    return HandleString;
}());
var manejadorTexto = new HandleString();
var sinEspacios = manejadorTexto.cleanSpace('En un lugar de la mancha');
console.log(sinEspacios);
console.log(manejadorTexto.countLetter(sinEspacios));
console.log(manejadorTexto.letterInside(sinEspacios, 'A'));
console.log(manejadorTexto.cleanSpace('          Hola    desde el maravilloso mundo de javascript      '));
