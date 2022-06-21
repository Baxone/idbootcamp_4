## Register App

 - vamos a crear un aplicacion con sorpresa. La aplicación entrará en la home y me da dos opciones (tipo matrix pildora roja pildora azul).

 - La pildora roja es el boton de registrarme
 - la pildora azul es un boton que lleva a logarme.

  La ruta base para hacer las consultas:
    https://register-codehouse-app.herokuapp.com

  Para registrarme me piden.

          el siguiente modelo de datos:
            id no se rellena es automatico
            name: string
            surname: string
            username: string
            password: string
            mail: string
            address: string
            age: number
    El formulario a usar es el de tipo model, pero sin validaciones
    - Crear interfaces de User
    - Crear servicios de Users

    - Dentro del servicio habra varios metodos.
        registerUser()
        - Este metodo enviará los datos del formulario sin cabeceras a la siguiente url o endpoint
           https://register-codehouse-app.herokuapp.com/register
        ¿ tipo de peticion get, post, delete, put?
        - Podreis recibir los siguiente mensajes.
              - mensaje de ok:

                        {
                           "success": "Usuario registrado correctamente. Ya puedes hacer login con username y password"
                        }


              - mensaje de ko:

                        {
                          "error": "El username ya se encuentra en la base de datos."
                        }

        - si recibimos ok redireccionais a login para hacer el proceso de logeo.

              ¿ tipo de peticion get, post, delete, put?
        
          https://register-codehouse-app.herokuapp.com/login

         No hace falta enviar cabeceras en esta peticion tampoco, solo el usuario y el password.
                {
                  username
                  password
                }

          El formulario de login es de tipo template
          El servicicio creamos la funcion login() y le pasaremos los datos de formulario.

          mensaje de ok ->  te devuelve un objeto con todos los datos del usuario incluido el token

          mensaje de ko -> te devuelve un
                    {
                      "error": "No existe el usuario o la clave es incorrecta"
                    }

  - si habeis recibido el token tendreis que hacer una tercera peticion y ultima para obtener vuestro regalo.

 el formulario de login redirigirá al una tercera ruta /premio donde debe aparecer el premio que hemos obtenido llamando al servicio cuando se cargue el compomente pasandole como cabecera el token recibido con metodo get.

          getPremio()

la cabecera tiene que tener este formato, os recuerdo que hay que importar el httpHeaders.

  {
    'user-token': '23456754redsadgfdsgsdg'
  }

  la ruta de servidor a la tendreis que pedir el premio es la siguiente

       GET 'https://register-codehouse-app.herokuapp.com/premio'

 ¿Componentes cuantos? 
    - home donde estan los botones de register y login
    - register donde esta el formulario de tipo model de registro
    - login donde esta el formulario template de login
    - premio donde se ve el premio.
¿Que librerias necesito importa para poder hacer esta practica?
   - FormsModule tipo template
   - ReactiveFormsModule para tipo Model
   - HttpClientModule para hacer peticiones en servicio.
¿Cuantas rutas?
    "/home" -> home
    "/register" -> register
    "/login" -> login
    "/premio/:token" - ver el premio.

¿Cuantos metodos o verbos uso en este ejercicio para hacer peticiones?
  - registrar -> create() -> POST() - no necesita cabeceras
  - logeo -> login() -> POST()
  - getPremio() -> GET() - si que necesita httpOptions es decir cabeceras.

  import {HttpClientModule} from '@angular/common/http/'




