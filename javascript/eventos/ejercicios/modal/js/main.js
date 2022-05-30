const articles = document.querySelectorAll('.container section article');
const modal = document.querySelector('#miModal');
const oscura = modal.querySelector('.oscura');
const card = modal.querySelector('.card');
const close = modal.querySelector('.close');


//recorro los articles asociando a cada article un evento de click.
articles.forEach(article => article.addEventListener('click', abrirModal))

function abrirModal(event) {
    modal.style.visibility = 'visible';
    modal.style.opacity = 1;
    document.addEventListener('keydown', cerrarModal);
    close.addEventListener('click', cerrarModal);
    oscura.addEventListener('click', cerrarModal)
    oscura.style.opacity = 1;
    card.style.opacity = 1;
    card.classList.add('marginAnimate');

    //Carga de contenidos
    //imagen
    let article = event.target.parentNode;
    let img = article.querySelector('img');
    let imgCard = card.querySelector('img');
    imgCard.src = img.src;
    //titulo de card
    let h3 = article.querySelector('h3');
    let h3Card = card.querySelector('h3');
    h3Card.innerText = h3.innerText;
    //categoria de card
    let h4 = article.querySelector('h4');
    let p = card.querySelector('p');
    p.innerText = h4.innerText;

}

function cerrarModal(event) {

    if (event.keyCode === 27 || event.type === 'click') {
        modal.style.opacity = 0;
        modal.style.visibility = 'hidden';
        card.classList.remove('marginAnimate');
    }
}