//hacer una galeria de imagenes que funcione con los botones de anterior y siguiente.

//cuando la galeria llegue a la primera imagen hara bucle hasta la ultima y cuando este en la ultima hará bucle hasta la primera. 

//capturar los elementos del DOM con los que vamos interactuar.

let imagen = document.querySelector('figure img');
let botones = document.querySelectorAll('figure button');
let imagenActual = 1;
let totalImagenes = 3;

botones.forEach(boton => boton.addEventListener('click', moverGaleria));

function moverGaleria(event) {
    imagenActual = (event.target.innerText === 'NEXT') ? imagenActual + 1 : imagenActual - 1;
    //controlar los limites.
    if (imagenActual <= 0) {
        imagenActual = totalImagenes;
    } else if (imagenActual > totalImagenes) {
        imagenActual = 1;
    }
    cambiarImagen(imagenActual);
}

function cambiarImagen(pNumImg) {
    imagen.src = `./images/imagen${pNumImg
        }.jpg`
}