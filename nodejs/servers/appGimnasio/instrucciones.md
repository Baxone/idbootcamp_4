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