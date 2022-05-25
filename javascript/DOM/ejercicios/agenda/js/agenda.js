let id = 1;
const sectionAgenda = document.querySelector('.agenda .flex')

function addContact() {
    let nombre = prompt('Dime el nombre del contacto');
    let telefono = prompt('Dime un telefono');
    let email = prompt('Dime un email');

    const nuevoContacto = {
        id: id,
        nombre: nombre,
        telefono: telefono,
        email: email
    }
    agenda.push(nuevoContacto);
    pintarContacto(nuevoContacto, sectionAgenda)
    id++;
}

function pintarAgenda(pList, pDom) {
    pList.forEach(contact => pintarContacto(contact, pDom))
}

function pintarContacto(pObjContact, pDom) {

    let article = document.createElement('article');
    let divSombra = document.createElement('div')
    let divInfo = document.createElement('div');
    divInfo.className = "info";
    divSombra.className = "sombra"
    article.id = 'contacto_' + pObjContact.id

    divInfo.innerHTML = `<h3>${pObjContact.nombre}</h3>
                    <p>Telefono: ${pObjContact.telefono}</p>
                    <p>Email: <a href="mailto:${pObjContact.email}">${pObjContact.email}</a></p>`

    //append me permite añadir varios el elemento en orden a la vez
    article.append(divSombra, divInfo)

    //appendChild a parte de añadir un nodo y solo uno te devuelve el objeto completo.
    pDom.appendChild(article);

}

function borrarContacto(pId) {
    //borrar de el interfaz
    const elementBorrar = document.querySelector('#contacto_' + pId);
    elementBorrar.parentNode.removeChild(elementBorrar);
    //borrar del array

    //opcion 1 - borrar con filter
    // agenda = agenda.filter(contacto => contacto.id !== pId);

    //opcion 2 - borrar con splice por posicion
    //preguntarle la posicion del id. findIndex

    const posicionBorrar = agenda.findIndex(contacto => contacto.id === pId);
    agenda.splice(posicionBorrar, 1);



}


pintarAgenda(agenda, sectionAgenda)


