### Crear un formulario de tipo model.

      1 - Importamos en app.module.ts la libreria ReactiveFormsModule
      2 - Creamos un atributo dentro de la etiqueta form que se llama formGroup que tendra el nombre del formulario
      3 - Necesitamos implementar el evento ngSubmit que llame a un función que recoja todos los valores del formulario. A diferencia del template esta funcion NO RECIBE PARAMETROS.
      4 - A cada campo del formulario (input, select, textarea,...) solo le tenemos que añadir un atributo formControlName con el nombre del campo.
      5 - Inicializamos dentro del ts el formGroup creado en el punto 2, donde tenemos que dar de alta un objeto con todos los formControlName que hemos creado en el punto anterior.
