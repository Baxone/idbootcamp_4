import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/interfaces/alumno';
import { AlumnosService } from 'src/app/services/alumnos.service';


@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit {

  edadMin: number = 0;
  edadMax: number = 0;
  alumnos: Alumno[] = [];

  //un inyectable o inyección de dependencia es un parametro privado dentro del contructor, recodar que en typescript los parametros hay que tiparlos.

  constructor(private alumnosService: AlumnosService) { }

  ngOnInit(): void {
    this.alumnos = this.alumnosService.getAll();
    //console.log(this.alumnos);
  }

  onDeleteStudent($event: boolean) {
    if ($event) {
      this.alumnos = this.alumnosService.getAll();
    }
  }

  getDataAge() {

    if (this.edadMax < this.edadMin) {
      alert('La edad minima no puedes ser mayor que maxima')
      return
    }

    if (this.edadMin === 0 && this.edadMax === 0) {
      this.alumnos = this.alumnosService.getAll();
      return
    }
    //llamar al servicio con los datos de edad y obtener una lista de alumnos filtrada.
    this.alumnos = this.alumnosService.getByAge(this.edadMin, this.edadMax);
    console.log(this.alumnos)
    this.edadMin = 0;
    this.edadMax = 0;
  }

}
