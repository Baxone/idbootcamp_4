export default class ApiMorty {

    async getData(pUrl) {
        let response = await fetch(pUrl, { method: 'GET' });
        if (response.status === 200) {
            let data = await response.json();
            return data;
        }
        return response.statusText
    }

    printCharacters(pList, pDom) {
        pDom.innerHTML = "";
        pList.forEach(character => this.printOneCharacter(character, pDom));
    }

    printOneCharacter(pCharacter, pDom) {
        let article = document.createElement('article');
        article.classList.add('col-12', 'col-md-6', 'col-lg-3');
        let claseColor = "";

        if (pCharacter.status === 'Alive') {
            claseColor = 'text-success';
        } else if (pCharacter.status === 'Dead') {
            claseColor = 'text-danger'
        } else if (pCharacter.status === 'unknown') {
            claseColor = 'text-warning'
        } else {
            claseColor = "";
        }

        article.innerHTML = `<div class="card">
                            <img src="${pCharacter.image}" class="card-img-top">
                            <div class="card-body">
                                <h5 class="card-title">${pCharacter.name}</h5>
                                <p class="card-text">Estado: <span class="${claseColor}">${pCharacter.status}</span></p>
                            </div>
                        </div>`

        pDom.appendChild(article);

    }

}