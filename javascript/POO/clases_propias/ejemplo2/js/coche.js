class Coche {

    constructor(pMarca, pModelo, pColor, pEscenario) {
        this.color = pColor;
        this.marca = pMarca;
        this.modelo = pModelo;
        this.section = pEscenario //elemento del dom

        this.div = document.createElement('div');
        this.div.style.width = '200px';
        this.div.style.height = '80px';
        this.div.innerText = this.marca;
        this.div.style.backgroundColor = this.color;

        this.section.appendChild(this.div);
        this.avance = 0;
        this.estado = false;

    }

    encenderse(pAdelante, pDetras) {
        this.estado = true;
        document.addEventListener('keydown', (event) => {
            //console.log(event.key)
            if (event.key === pAdelante && this.estado === true) {
                //marcha alante
                this.acelerar(40);
            } else if (event.key === pDetras && this.estado === true) {
                //marcha atras
                this.acelerar(-40);
            }
        })

    }

    acelerar(pVelocidad) {
        this.avance += pVelocidad;
        this.div.style.marginLeft = this.avance + 'px';
    }


    apagar() {
        this.estado = false;
    }

}