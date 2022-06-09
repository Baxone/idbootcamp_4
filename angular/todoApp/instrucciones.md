#### TODO APP - Practica de CRUD básico

1 - Instalar bootstrap ✅

``````
npm install bootstrap

``````
2 - Poner la referencia de bootstrap en el fichero angular.json para nuestra aplicacion reconozca tanto los css como los js de bootstrap. SIEMPRE que toqueis el fichero angular.json por algo, teneis que parar y volver a levantar el servidor. las rutas son:
        css : "node_modules/bootstrap/dist/css/bootstrap.min.css" ✅
        js: "node_modules/bootstrap/dist/js/bootstrap.min.js" ✅



3 - ¿ Cuantos componentes necesito ? - 4
            - listaTareas  ✅
            - form ✅
            - filtros ✅
            - tarea ✅

4 - Vamos crear un interfaz de datos. Define el modelo de datos un una tarea. Es basicamente los campos de una tarea.
             - id: number
             - titulo: string
             - prioridad: string

Los interfaces de datos son un singular. 

``````
      ng generate interface interfaces/nombreInterfaz 
      ng g i interfaces/nombreInterfaz 

``````

5 -  pasarle el array de datos desde app-component a listaTareas (INPUT).
     Detectar superficie iterable y pintar el array con todas las tareas. 
    pensar y ejecutar como traslado el tarea component cada tarea. INPUT dentro del ngFor
