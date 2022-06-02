class Ordenador {

    //propiedades y metodos (variables y funciones)

    constructor(pDisco, pRam, pHeight, pWidth, pProcesador, pPantalla = false, pTeclado = false) {
        //dentro de este metodo se incializan las propiedades
        //vuelve el concepto de this. Este objeto en el que me encuentra.
        this.disco = pDisco;
        this.ram = pRam;
        this.height = pHeight;
        this.width = pWidth;
        this.procesador = pProcesador;
        this.pantalla = pPantalla;
        this.teclado = pTeclado;
        this.estado = "apagado";
    }


    //metodos que realiza un ordenador, que son funciones que marcan la posibilidades que tiene el ordenador

    encenderse() {
        this.estado = 'encendido';
    }

    apagarse() {
        this.estado = 'apagado';
    }

    sumar(...numeros) {
        //rest paremater
        if (this.estado === 'encendido') {
            let suma = 0;
            numeros.forEach(numero => suma += numero);
            console.log(suma);
        } else {
            console.log('el ordenador no funciona, esta apagado garrulo');
        }
    }

    navegarInternet(pUrl) {
        if (this.estado === 'encendido') {
            window.open(pUrl)
        } else {
            console.log('el ordenador no funciona, esta apagado garrulo');
        }
    }


}

