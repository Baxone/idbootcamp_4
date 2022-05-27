const ferrari = document.querySelector('#ferrari');
const lamborghini = document.querySelector('#lamborghini');
const porche = document.querySelector('#porche');
const mensaje = document.querySelector('#mensaje');
let avanceFerrari = 0;
let avanceLamborguini = 0;
let avancePorche = 0;
let nitros = 3;
let meta = 675;
//ferrari el que movemos nosotros.

document.addEventListener('keydown', capturarTeclas);

function capturarTeclas(event) {
    switch (event.keyCode) {
        case 32:
            //mover el coche
            moverFerrari(25);
            break;

        case 78:
            if (nitros > 0) {
                //oxido nitroso
                moverFerrari(45);
                nitros--
            }

            break;
    }
}

function moverFerrari(pVelocidad) {
    avanceFerrari += pVelocidad;
    ferrari.style.marginLeft = avanceFerrari + 'px'
    if (avanceFerrari >= meta) {
        pararJuego('Ferrari')
    }

}

//mover lambo, se tiene de forma autonoma a velocidad constante. Funciones intervalicas. setInterval()


const intervaloLamb = setInterval(moverLamborghini, 80);

function moverLamborghini() {
    avanceLamborguini += 20;
    lamborghini.style.marginLeft = avanceLamborguini + 'px';
    if (avanceLamborguini >= meta) {
        pararJuego('Lambo')
    }
}

//mover le porche,. de forma aleatorioa en 10 - 50 

const intervaloPorche = setInterval(moverPorche, 100);

function moverPorche() {
    avancePorche += Math.ceil(Math.random() * (40 - 10)) + 10;
    porche.style.marginLeft = avancePorche + 'px';
    if (avancePorche >= meta) {
        pararJuego('Porche')
    }
}

function pararJuego(pCoche) {
    mensaje.innerText = pCoche + ' a ganado la carrera'
    clearInterval(intervaloLamb)
    clearInterval(intervaloPorche)
    document.removeEventListener('keydown', capturarTeclas)
}