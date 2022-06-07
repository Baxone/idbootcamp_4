//Vamos a crear una aplicación  que permita generar calculadoras de diferentes marca. Cada calculadora que yo cree tiene que implementar obligatoriamente tres metodos sumar, resta, multiplicar  a parte de una marca de calculadora CASIO.

//Cuando generemos un objetos le pasaremos la marca de la calculadora y probaremos alguno sus metodos.

interface ICalculadora {

    marca: string;
    sumar(...numeros: number[]): number;
    restar(): number;
    multiplicar(): number;


}

class Calculadora implements ICalculadora {

    marca: string = ""

    constructor(pMarca = 'LG') {
        this.marca = pMarca;
    }

    sumar(...pNumeros: number[]): number {
        let resultado: number = 0;
        pNumeros.forEach(numero => resultado += numero)
        return resultado;
    }


    restar(...pNumeros: number[]): number {
        let resultado: number = 0;
        pNumeros.forEach(numero => resultado -= numero)
        return resultado;
    }

    multiplicar(...pNumeros: number[]): number {
        let resultado: number = 1;

        resultado = pNumeros.reduce((prev, next) => prev * next)

        return resultado;
    }


}

const miCalculadora = new Calculadora('CASIO')

console.log(miCalculadora.sumar(1, 2, 3, 4, 5, 6, 7)) //28
console.log(miCalculadora.restar(45, 3, 12)) // -60
console.log(miCalculadora.multiplicar(3, 4, 5, 6)) //360
