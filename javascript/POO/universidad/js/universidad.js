export default class Universidad {

    constructor(pNombre) {
        this.nombre = pNombre;
        this.alumnos = new Array();
    }

    agregarAlumno(pAlumno) {
        this.alumnos.push(pAlumno)
    }

    mostrarUniversidad() {
        console.log(`UNIVERSIDAD(nombre: ${this.nombre})`)
        this.alumnos.forEach(alumno => alumno.mostrarEstudiante())
    }

    obtenerAlumnosAsignatura(pNombreAsignatura) {
        let contador = 0;

        this.alumnos.forEach(alumno => {
            alumno.asignaturas.forEach(asignatura => {
                contador = (asignatura.nombre === pNombreAsignatura) ? contador + 1 : contador;
            })
        })

        return `En ${pNombreAsignatura} hay ${contador} alumnos`
    }



}