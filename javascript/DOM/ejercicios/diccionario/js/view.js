
function printList(pDiccionario) {
    let seccion = "";
    seccion += `<section><h2>${pDiccionario[0].letter.toUpperCase()}</h2>`;

    pDiccionario.forEach(elemento => seccion += getElement(elemento));

    seccion += '</section>';
    document.body.innerHTML += seccion;

}

function getElement(pElement) {
    return `<article>
            <dt>${pElement.word}</dt>
            <dd>${pElement.definition}</dd>
        </article>`
}



for (let letra of abecedario) {
    let lista = filterByLetter(diccionario, letra);
    if (lista.length !== 0) {
        printList(lista);
    }

}

