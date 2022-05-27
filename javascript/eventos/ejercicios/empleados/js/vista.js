//capturar los elemento con los que interactuamos.
const sectionEmpleados = document.querySelector('#empleados');
const inputName = document.querySelector('#name');
const inputEmail = document.querySelector('#email');
const inputSalary = document.querySelector('#salary');
const submit = document.querySelector('#submit');
const sueldoMinimo = 900;


function printAllEmployees(pList, pDom) {
    pDom.innerHTML = "";
    if (pList.length !== 0) {
        pList.forEach(employee => printOne(employee, pDom));
    } else {
        pDom.innerHTML = '<h2 style="color: tomato">No hay empleados en la BBDD</h2>'
    }

}

/*
    <article>
        <h3>Nombre del empleado</h3>
                    <p>Email: </p>
                    <p>Salario Mensual: <span class="minimo">200€</span> </p>
                    <div>
                        <button>Borrar</button>
                    </div>
                </article> 
*/

function printOne(pEmployee, pDom) {
    let article = document.createElement('article');
    article.id = 'employee_' + pEmployee.id
    let h3 = document.createElement('h3');
    let pEmail = document.createElement('p')
    let pSalary = document.createElement('p');
    let span = document.createElement('span');
    let div = document.createElement('div');
    let button = document.createElement('button');
    //a esta objeto le puedo añadir un evento
    button.dataset.id = pEmployee.id
    button.addEventListener('click', borrar);
    h3.innerText = pEmployee.name;
    pEmail.innerText = `Email: ${pEmployee.email}`;
    pSalary.innerText = 'Salario Mensual: '
    let clase = (pEmployee.sueldo < sueldoMinimo) ? 'minimo' : 'correcto';
    span.classList.add(clase);
    span.innerText = pEmployee.sueldo;
    button.innerText = 'Borrar';
    //el button esta preparado para recibir el listener cuando haga la funcion de borrar.
    div.append(button)
    pSalary.appendChild(span);

    article.append(h3, pEmail, pSalary, div)

    pDom.appendChild(article);

}

function borrar(event) {
    let id = parseInt(event.target.dataset.id)
    let itemBorrar = document.querySelector('#employee_' + id)
    itemBorrar.parentNode.removeChild(itemBorrar);
    empleados = deleteEmployee(empleados, id);
    if (empleados.length === 0) {
        printAllEmployees(empleados, sectionEmpleados);
    }
}




printAllEmployees(empleados, sectionEmpleados);

/* Añadir empleados */

submit.addEventListener('click', recogerDatosForm);

function recogerDatosForm(event) {
    event.preventDefault();

    let name = inputName.value;
    let email = inputEmail.value;
    let sueldo = inputSalary.value;

    if (name === "" || email === "" || sueldo === "") {
        alert('todos los campos son obligatorios')
    } else {
        guardarEmpleado(empleados, name, email, sueldo);
    }

    inputName.value = ""
    inputEmail.value = ""
    inputSalary.value = ""

}



