class Calculadora {

    constructor(pMarca) {
        this.marca = pMarca;
        this.estado = false;
    }

    sumar(...numeros) {
        if (this.estado) {
            let suma = 0;
            numeros.forEach(numero => suma += numero);
            return suma;
        }
        return 'no se puede realizar la operacion calculadora apagada'
    }

    restar(pNumero1, pNumero2) {
        if (this.estado) {
            return pNumero1 - pNumero2;
        }
        return 'no se puede realizar la operacion calculadora apagada'
    }

    multiplicar(...numeros) {
        if (this.estado) {
            let multiplicacion = 1;
            numeros.forEach(numero => multiplicacion *= numero)
            return multiplicacion;
        }
        return 'no se puede realizar la operacion calculadora apagada'
    }

    dividir(pNumero1, pNumero2) {
        if (this.estado) {
            return pNumero1 / pNumero2;
        }
        return 'no se puede realizar la operacion calculadora apagada'
    }

    potencia(pBase, pExponente) {
        if (this.estado) {
            return pBase ** pExponente;
        }
        return 'no se puede realizar la operacion calculadora apagada'
    }

    mostrarResultado(pResultado, pOperacion, pDom) {
        if (this.estado) {
            pDom.innerHTML = `<p>La ${pOperacion} es <strong>${pResultado}</strong></p>`
        } else {
            pDom.innerText = pResultado;
        }

    }

    encendido() {
        this.estado = !this.estado
    }

}