//capturamos los elementos con los que interactuamos
let botones = document.querySelectorAll('.menu a');
let secciones = document.querySelectorAll('.contenedor section');

//listeners
botones.forEach(boton => boton.addEventListener('click', capturarBoton));

function capturarBoton(event) {
    //los enlaces href y los formularios tienes un accion por defecto que es llevarme a otra pagina o recargar en la que me encuentro. Tengo evitar esta acción por defecto.
    event.preventDefault();
    let seccion = event.target.innerText.toLowerCase();
    cambiarSeccion(seccion, event.target);
}

function cambiarSeccion(pSeccion, pBoton) {
    //primero oculto todas las secciones
    secciones.forEach(seccion => seccion.style.display = 'none');
    botones.forEach(boton => boton.classList.remove('activo'))
    //muestro la seccion que cargo
    document.getElementById(pSeccion).style.display = 'block';
    pBoton.classList.add('activo');
}
