
let nombre: string = 'Juan Antonio';
let edad: number;
edad = 40
let estado: boolean = true;

console.log(edad * 5);

//en typescript tengo dos formas de definir un array

//opcion 1
const arrNum: number[] = [1, 2, 4, 5]

//opcion 2
const arrNombre: Array<string> = new Array('Juan', 'Pepe', 'Maria');

//funciones

function sumar(pNumeroA: number, pNumeroB: number): number {
    let resultado = pNumeroA + pNumeroB
    return resultado;
}

let valor: number = 2;
//console.log(sumar(4, valor))

let resultado: number = sumar(3, 3);

//funcion flecha

const restar = (pNumeroA: number, pNumeroB: number): number => {
    return pNumeroA - pNumeroB;
}

function saludar(pNombre: string): void {
    console.log('Hola ' + pNombre);
}

saludar('Pepe');

//haga peticion a una api y no se de que tipo me viene dato.
//any seria un tipado de datos abierto.

let peticion: any = 4
peticion = '4';

//Typescript inicio un tipo concreto de Array que se llama TUPLA
let tupla: [string, number, boolean] = ['Juan', 40, true]
console.log(tupla);

//typescript el concepto de enum 

enum Talla {
    sm,
    m,
    l,
    xl,
    xxl
}

console.log(Talla)
console.log(Talla['0']) //sm
console.log(Talla.xl) // 3









