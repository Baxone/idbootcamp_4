/*Crear una lista de alimentos, dicha lista de alimentos tendrá 
alimentos con la siguiente información, nombreAlimento, categoría 
del alimento y numero de calorías.  
Me gustaría separar los alimentos en dos listas saludables y no 
saludables, la condición para ser saludables es que tengan menos 
de 15 calorías.  
Debo pintar los dos listados , los alimentos saludables irán en 
verde y los no saludables en rojo. */

const alimentos = new Array(
    {
        nombre: 'aguacate',
        categoria: 'frutas',
        calorias: 80
    },
    {
        nombre: 'cafe',
        categoria: 'cereales',
        calorias: 6
    },
    {
        nombre: 'carne',
        categoria: 'proteinas',
        calorias: 150
    },
    {
        nombre: 'Tarta de queso',
        categoria: 'postre',
        calorias: 3
    },
)

function filterByCalories(pList, pCaloriesMin, pCaloriesMax) {

    return pList.filter(product => product.calorias >= pCaloriesMin && product.calorias <= pCaloriesMax);
}

let listaHealthy = filterByCalories(alimentos, 0, 15);

let listaNoHealthy = filterByCalories(alimentos, 16, 500);


function printHelthyFoods(pListFoods, pHealthy) {
    pListFoods.forEach(food => {
        let color = (pHealthy === true) ? 'green' : 'red';
        printOneFood(food, color);
    })
}

function printOneFood(pObjectFood, pColor) {
    document.write(`<div style="border: 2px solid ${pColor}">
        <h3>${pObjectFood.nombre} - ${pObjectFood.categoria}</h3>
        <p>Calorias: ${pObjectFood.calorias}</p>
    </div>`)
}

document.write('<h1>Healthy</h1>')
printHelthyFoods(listaHealthy, true)

document.write('<h1>NO Healthy</h1>')
printHelthyFoods(listaNoHealthy, false)