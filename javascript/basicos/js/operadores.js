/* operador de asignacion */
var numA = 10;
var numB = 3;

/* operacion de incremento o decremento */
numA = numA + 2; //12
numB-- //2



/* operadores matematicos */
console.log('SUMA', numA + numB) //14
console.log('RESTA', numA - numB) //10
console.log('MULTIPLICACION', numA * numB) //24
console.log('DIVISION', numA / numB) //6
console.log('RESTO', numA % numB) //0

//negacion
var activo = true;

console.log('NEGACION', !activo); //false

console.log('IGUALDAD', numA == numB) //false
console.log('IGUALDAD', '12' == 12) //true
console.log('IGUALDAD estricta', '12' === 12) //false

console.log('DISTINTO', '14' != 14) //false
console.log('DISTINTO estricta', '14' !== 23) //true