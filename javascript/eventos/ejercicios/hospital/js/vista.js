//pintar todos los pacientes

//capturamos los elementos con los que interactuamos.
let divNumPacientes = document.querySelector('.numpacientes');
let sectionPacientes = document.querySelector('.contenedor');

function printAllPatients(pList, pDom, pNumPacientes) {
    pDom.innerHTML = "";
    pNumPacientes.innerText = pList.length;
    pList.forEach(patient => printOnePatient(patient, pDom));
}

/*
<article class="paciente">
            <h3>Nombre completo del paciente</h3>
            <ul>
                <li>Edad: 23</li>
                <li>SS: A234567</li>
            </ul>
            <div class="diagnostico">Gripe</div>
 </article>
*/
function printOnePatient(pPatient, pDom) {
    let article = document.createElement('article');
    article.classList.add('paciente');

    let h3 = document.createElement('h3');
    h3.innerText = `${pPatient.nombre} ${pPatient.apellido}`;

    let ul = document.createElement('ul');
    ul.innerHTML = `<li>Edad: ${pPatient.edad}</li><li>Seguridad Social: ${pPatient.numeroSS}</li>`

    let div = document.createElement('div');
    div.innerText = pPatient.diagnostico;
    div.classList.add('diagnostico')

    article.append(h3, ul, div);
    pDom.appendChild(article);
}

printAllPatients(pacientes, sectionPacientes, divNumPacientes);

/*  ------------------------------------------------ */

/* filtro de edad */
/* capturar los elementos con los que vamos a interactuar */
let inputEdadMin = document.querySelector('#edadmin');
let inputEdadMax = document.querySelector('#edadmax');
let boton = document.querySelector('#btn');

//añadimos el evento al boton
boton.addEventListener('click', recogerEdad);

function recogerEdad() {

    let edadMin = inputEdadMin.value;
    let edadMax = inputEdadMax.value;

    if (edadMin === "" || edadMax === "") {
        alert('los campos no pueden estar vacios')
    } else if (parseInt(edadMin) > parseInt(edadMax)) {
        alert('Edad Minima no puede ser mayor que la máxima')
    }
    else {
        let listaFiltrada = filterByAge(pacientes, parseInt(edadMin), parseInt(edadMax));
        printAllPatients(listaFiltrada, sectionPacientes, divNumPacientes);
    }

    inputEdadMin.value = ""
    inputEdadMax.value = "";

}


/*  ------------------------------------------------ */

/* filtro de diagnostico */

//el filtro por diagnostico lo hacemos con un select, el select tiene un tipo de evento asociado que se llama change, que solo reacciona cuando hay un cambio

//capturamos los elementos del dom con los que vamos a interactuar.

let selectDiagnostico = document.querySelector('#diagnostico');
selectDiagnostico.addEventListener('change', recogerDatosSelect);

function recogerDatosSelect(event) {
    let diagnostico = event.target.value;
    const listaFiltrada = (diagnostico !== "") ? filterByDiagnosis(pacientes, diagnostico) : pacientes;

    /*
    if (diagnostico !== "") {
        //filtrar por diagnostico
        listaFiltrada = filterByDiagnosis(pacientes, diagnostico);
    } else {
        //pintar todos los pacientes.
        listaFiltrada = pacientes;
    }*/


    printAllPatients(listaFiltrada, sectionPacientes, divNumPacientes);
}

//quiero llenar el selector de las enfermedades que hay en mi array

function llenarSelector(pList, pSelector) {
    // es coger de la lista solo un array de diagnosticos.

    const listaEnfermedades = pList.map(patient => patient.diagnostico);
    //new Set() es un metodo estatico que elimina elementos duplicados dentro un array, modifica el arrya principal luego es conveniento aplicarlo con spread operator.

    let resultado = [... new Set(listaEnfermedades)];

    for (let enfermedad of resultado) {
        let option = document.createElement('option');
        option.value = enfermedad.toLowerCase();
        option.innerText = enfermedad;
        pSelector.appendChild(option);
    }


}

llenarSelector(pacientes, selectDiagnostico);




