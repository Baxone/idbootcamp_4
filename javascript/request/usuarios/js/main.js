const url = 'https://reqres.in/api/users?page=';
const selectPage = document.querySelector('#paginas');
const sectionUsuarios = document.querySelector('#usuarios');
let numeroPaginas = 0;

async function cargarUsuarios(pPage) {
    let response = await fetch(url + pPage, { method: 'GET' })
    let result = await response.json();
    numeroPaginas = result.total_pages
    pintarSelector(numeroPaginas, selectPage);
    pintarUsuarios(result.data, sectionUsuarios)
}
cargarUsuarios(1)

function pintarSelector(pNum, pDom) {
    pDom.innerHTML = '<option value="">Selecciona un pagina</option>'
    for (let i = 1; i <= pNum; i++) {
        pDom.innerHTML += `<option value="${i}">Pagina ${i}</option>`
    }
    selectPage.addEventListener('change', cambiarPagina)
}

function cambiarPagina(event) {
    let page = parseInt(event.target.value)
    cargarUsuarios(page);
}


function pintarUsuarios(pList, pDom) {
    pDom.innerHTML = "";
    pList.forEach(user => pintarUnUsuario(user, pDom));
}


function pintarUnUsuario(pUser, pDom) {
    let article = document.createElement('article')
    let h3 = document.createElement('h3')
    let figure = document.createElement('figure')
    let p = document.createElement('p')

    h3.innerText = pUser.first_name + " " + pUser.last_name
    figure.innerHTML = `<img src="${pUser.avatar}">`
    p.innerText = 'Email: ' + pUser.email;
    article.append(figure, h3, p);

    pDom.appendChild(article)

}









