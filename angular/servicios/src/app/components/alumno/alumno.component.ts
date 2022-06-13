import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Alumno } from 'src/app/interfaces/alumno';
import { AlumnosService } from 'src/app/services/alumnos.service';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {

  @Output() alumnoBorrado: EventEmitter<boolean>
  @Input() miAlumno: Alumno | any;
  constructor(private alumnosServices: AlumnosService) {
    this.alumnoBorrado = new EventEmitter()
  }

  ngOnInit(): void {
  }

  delete(pId: number): void {
    //console.log(pId)
    //tengo que llamar al servicio para pedirle que borre del array el dato con el id que yo le pase.
    let msg = this.alumnosServices.deleteById(pId);
    this.alumnoBorrado.emit(true);
    alert(msg)
  }

}
