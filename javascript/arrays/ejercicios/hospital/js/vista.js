

function printAllPatients(pPatientsList) {
    pPatientsList.forEach(patient => printOnePatient(patient));
}

function printOnePatient(pObjectPatient) {
    document.write(`<article class="paciente">
                        <h3>${pObjectPatient.nombre}  ${pObjectPatient.apellido}</h3>
                        <ul>
                            <li>Edad: ${pObjectPatient.edad}</li>
                            <li>SS: ${pObjectPatient.numeroSS}</li>
                        </ul>
                        <div class="diagnostico">${pObjectPatient.diagnostico}</div>
                    </article>`)
}


//printAllPatients(pacientes)
let pacientesEntre18y25 = filterByAge(pacientes, 18, 25);
document.write('<h2>Pacientes entre 18 y 45 años</h2><hr>')
printAllPatients(pacientesEntre18y25)

document.write('<h2>Pacientes con coronavirus</h2><hr>')
printAllPatients(filterByDiagnosis(pacientes, 'Coronavirus'));


document.write('<h2>Pacientes cuyo numero de la seguridad social acabe en 0</h2><hr>')
printAllPatients(filterByLastCharacter(pacientes, '0'))

document.write('<h2>Filtrar por edad y diagnostico a la vez 25, 50 con gripe</h2><hr>')

//opcion 1 por pasos
let listaPacientes25y50 = filterByAge(pacientes, 25, 50);
let listaPacientes25y50conGripe = filterByDiagnosis(listaPacientes25y50, 'gripe');
printAllPatients(listaPacientes25y50conGripe)


//opcion callbacks
document.write('<h2>Los mismo de antes pero con callbacks</h2><hr>')

printAllPatients(filterByAge(filterByDiagnosis(pacientes, 'gripe'), 25, 50))