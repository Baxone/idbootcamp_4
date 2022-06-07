// crear un objeto que me permita manipluar textos, esta calse no tendar aningiuna propiedad e implementara tres metodos. El primero me permitira contar letras de una frase y solo letras sin espacios.

//tendrá un metodo que me permitirá saber cuantas veces esta incluida determinada letra en una cadena de caracteres.
//En un lugar de la mancha  -> N

//un metodo que elimine todos los espacios en blanco de una de cadena de texto. OJO tanto por delenta como por el final como en el interrior.

//"  En un lugar de la mancha    " -> "Enunlugardelamancha"


interface IHandleString {
    countLetter(text: string): number;
    letterInside(text: string, letter: string): number;
    cleanSpace(text: string): string;
}


class HandleString implements IHandleString {


    countLetter(text: string): number {
        let withoutSpace = this.cleanSpace(text);
        return withoutSpace.length;
    }


    letterInside(text: string, letter: string): number {

        let contador = 0;

        for (let i = 0; i < text.length; i++) {
            if (text[i].toLowerCase() === letter.toLowerCase()) {
                contador++;
            }
        }

        return contador;
    }

    cleanSpace(text: string): string {
        return text.trim().split(" ").join("");
    }

}

const manejadorTexto = new HandleString();
let sinEspacios = manejadorTexto.cleanSpace('En un lugar de la mancha');
console.log(sinEspacios);

console.log(manejadorTexto.countLetter(sinEspacios));
console.log(manejadorTexto.letterInside(sinEspacios, 'A'))
console.log(manejadorTexto.cleanSpace('          Hola    desde el maravilloso mundo de javascript      '));




