const url = 'https://swapi.py4e.com/api/people/?page=1';

async function getDataMenu(pUrl) {
    const response = await fetch(pUrl, { method: 'GET' });
    const data = await response.json();
    printMenu(data);
}

getDataMenu(url)