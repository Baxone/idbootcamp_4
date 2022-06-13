### para crear un formulario de tipo template, tenemos que seguir la siguiente receta.

        1 - importamos en app-module.ts la libreria FormsModule (es la misma que [(ngModel)])
        2 - Creamos la maquetacion de formulario con la etiqueta form y le colocamos un template o nombre del formulario. En Angular los templates se colocan con un #nombreFormulario dentro de la etiqueta form. E igualamos ese nombre a #nombreFormulario = "ngForm";
        3- creamos un evento en la etiqueta form que se llama (ngSubmit)="functionTs()". Ojo funcionTs es un nombre generico podeis poner cualquier nombre a la funcion.
        4- Cada campo del formulario (input,select, textarea...) deberan llevar un name="" y un atributo ngModel. Ojo sin parentesis ni corchetes.
        5- en la funcion de evento ngSubmit tenemos que pasar por parametro el nombre del template del formulario #nombreFormulario. En la funcion recogeremos nombreFormulario.value que me devolverá un objeto con todos los campos del formulario.

  