const tareas = new Array(
    new Tarea(1, 'Estudiar Javascript', 'urgente'),
    new Tarea(2, 'Sacar al perro', 'diario'),
    new Tarea(3, 'Leer un libro', 'mensual'),
    new Tarea(4, 'Salir a correr', 'diario'),
    new Tarea(5, 'Arreglar el coche', 'urgente'),
)

//meto el array en el localstorage para poderlo usar en toda mi aplicacion.
localStorage.setItem('tasklist', JSON.stringify(tareas));
