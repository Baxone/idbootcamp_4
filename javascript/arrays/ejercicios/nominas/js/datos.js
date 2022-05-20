const nominas = new Array(
    {
        id: 1,
        nombre: 'Juan',
        bruto: 30000,
        irpf: 19,
        pagas: 12,
    },
    {
        id: 2,
        nombre: 'Manu',
        bruto: 20000,
        irpf: 15,
        pagas: 14,
    },
    {
        id: 3,
        nombre: 'Ruben',
        bruto: 22000,
        irpf: 17,
        pagas: 16,
    },
    {
        id: 4,
        nombre: 'Danny',
        bruto: 19000,
        irpf: 14,
        pagas: 12,
    },
)
//quiero realizar un programa que calcule y añada a mi lista un nuevo campo en cada objeto sueldo neto anual y sueldo neto mensual.

function calcularSueldoNeto(pNominas) {

    for (let nomina of pNominas) {

        let netoAnual = nomina.bruto - ((nomina.bruto * nomina.irpf) / 100);
        let netoMensual = netoAnual / nomina.pagas;

        addItem(nomina, 'netoAnual', netoAnual)
        addItem(nomina, 'netoMensual', netoMensual)

    }

}

function addItem(pNomina, pClave, pValor) {
    pNomina[pClave] = Math.floor(pValor);
}

calcularSueldoNeto(nominas)
console.log(nominas);

//netoAnual = bruto - ((bruto *  irpf) / 100)

//netoMensual = netoAnual / pagas


//Sacar el sueldo máximo y minimo de la lista.

function calcularSueldoMaximo(pNominas, pTipo) {

    let sueldoMaximo = 0;
    for (let nomina of pNominas) {
        if (nomina[pTipo] > sueldoMaximo) {
            sueldoMaximo = nomina[pTipo]
        }
    }
    return sueldoMaximo;
}

console.log(calcularSueldoMaximo(nominas, 'bruto'))

function calcularSueldoMinimo(pNominas) {
    let sueldoMinimo = 0;
    i = 0;
    do {
        if (i === 0) {
            sueldoMinimo = pNominas[i].bruto;
        } else if (sueldoMinimo > pNominas[i].bruto) {
            sueldoMinimo = pNominas[i].bruto;
        }
        i++;
    } while (i < pNominas.length)

    return sueldoMinimo;
}

console.log(calcularSueldoMinimo(nominas));

