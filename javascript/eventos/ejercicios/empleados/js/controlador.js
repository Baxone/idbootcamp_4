function guardarEmpleado(pList, pName, pEmail, pSueldo) {
    const newEmployee = {
        id: id,
        name: pName,
        email: pEmail,
        sueldo: pSueldo
    }
    //tengo que comprobar el usuario no esta duplicado, con en email.
    //buscar un empleado que tenga el mismo email que me pasan por parametro, si lo hay aviso y paro, y si no guardo.

    let posicion = pList.findIndex(employee => employee.email === pEmail)

    if (posicion === -1) {
        let newPosition = pList.push(newEmployee)
        if (newPosition) {
            printOne(newEmployee, sectionEmpleados)
        }
        id++;
        console.log(pList)
    } else {
        alert('Usuario duplicado')
    }

}