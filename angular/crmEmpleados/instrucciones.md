### CRM EMPLEADOS.

      1 - Crear un interface de empleado y de departamento. ✅
             -  Empleado: 
                      id:number
                      name: string
                      surname: string
                      dni: string
                      email: string
                      photo: string;
                      department: string;
                      status: boolean.
            
            - Departamento: ✅
                      id: number
                      title: string
                      numEmployees: number

      2 - Crear dos servicios, uno para empleados y otro para departamentos. ✅

      3 - Limpiar el app.component.html y generar un estructura a dos columnas responsive con bootstrap. Formulario de dar de alta Empleados a la izquierda y lista empleados a la derecha ✅

      4 - Pensar cuantos componentes son necesarios, segun el dibujo adjunto. Crearlos cuando lo tengais decidido. ✅

      5 - Crear un formulario de tipo template para insertar empleados. Los empleados no pueden estar duplicados (Ojo tenemos DNI). ✅ 

      6 - Cada empleado tendra un borde de color rojo si es un empleado de status: false (si no esta activo). Si lo esta sera de borde verde.  ✅ 

      7 - Cada empleado tendra un boton que pasará el empleado de status activo a no activo y viceversa. Si el usuario esta activo el boton pondra desactivar y si esta no activo pondra activar.  ✅ 

      8 - Crear un filtro por departamentos, donde se mostraran solo los empleados de dicho departamento. El servicio de departamentos tendrá un array con los siguiente departamentos siguiendo su modelo o interfaz. Marketing, Direccion, Desarrollo, Cuentas.  ✅ 

      