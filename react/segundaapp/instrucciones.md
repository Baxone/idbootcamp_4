# Lista Tareas

- Crear un proyecto **listatareas**

### Componentes
- Formulario
    - Muestra los campos de título, texto y prioridad (select)
    - Cuando pulsamos el botón envía el objeto generado al componente padre
- App 
    - Dispone de un array donde se almacenan las tareas
    - Cuando recibe una tarea del formulario la incluye en dicho array
- Lista
    - Recibe a través de las props un array con tareas y las muestra