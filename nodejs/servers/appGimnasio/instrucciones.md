# NUEVA RUTA

GET /api/clientes/edad/45

- OBJ Principal: Recuperar todos los clientes mayores de una edad dada

    - Tenemos que definir la ruta en api/clientes.js X
    - Método en el modelo (getByEdad) que nos devuelva los clientes mayores de una edad
    - En el manejador de la ruta ejecutamos el método
    - Respondemos con el array resultante


GET /api/clientes/genero/m
GET /api/clientes/genero/f
- Recuperar todos los clientes de un genéro

GET /api/profesores/min/10/max/30
- Recupera los profesores con experiencia entre 10 y 30

GET /api/clientes/nombre/John
- Recupera todos los clientes que tengan en su nombre la palabra que incorporamos dentro de la URL
- En la query podemos utilizar LIKE '%.....%'



# ANGULAR

- Crear la APP (Gimnasio)
- OPT instalar bootstrap
- RUTAS:
    - /clientes -> ListaClientesComponent
    - /clientes/new -> FormularioClientesComponent
- Importar ReactiveFormsModule y HttpClientModule dentro de AppModule
- Crear servicio ClientesService
    - Función que recupere todos los clientes
        - Se ejecuta desde ListaClientesComponent


# REGISTRO

- Generar el modelo para los usuarios
- Dentro del modelo generamos la función create
    - SQL insert
    - El método create recibe como parámetro un objeto con username, password, email
- Dentro del manejador para el registro llamamos al método pasándole aquellos datos que recibimos en el req.body


# Angular Reg-Login

- 2 rutas:
    - /login -> LoginComponent
    - /registro -> RegistroComponent
- Servicio de Usuarios

### Registro

- Formulario con los datos necesarios para realizar el registros
- En el envío del formulario, lanzamos una función dentro del servicio que mande la info de registro al back (¡¡HAY QUE REPLICAR LA MISMA PETICIÓN QUE HACEMOS EN LA PARTE DE EXPRESS!!)


## LISTA DE CLIENTES

- ¿Dónde se está respondiendo a la petición GET localhost:3000/clientes?
- ¿Cómo recupero TODOS los clientes? (console.log)
- Renderizamos la vista /views/clientes/index.pug

## FORMULARIO de CLIENTES

- GET /clientes/new
- Renderizamos la vista views/clientes/formulario.pug
- Mostramos un formulario con los 9 datos del cliente a insertar
- ¡¡FORMULARIO NORMAL DE HTML!!
- ¿Cómo envío todos los datos del formulario a la url POST /clientes/create?

## EDICIÓN DE CLIENTES

- /clientes/edit/:clienteId
- Para recuperar el ID del cliente lo hacemos a través de req.params
- Recupero el cliente que vamos a modificar
- Renderizamos la vista clientes/formularioEdit.pug y le pasamos el cliente a editar
- Formulario para editar con los datos del cliente en cada uno de los campos