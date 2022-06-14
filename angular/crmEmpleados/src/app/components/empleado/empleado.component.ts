import { Component, Input, OnInit } from '@angular/core';
import { Departamento } from 'src/app/interfaces/departamento';
import { Empleado } from 'src/app/interfaces/empleado';
import { DepartamentosService } from 'src/app/services/departamentos.service';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  @Input() miEmpleado: Empleado | any;

  constructor(private departamentosServices: DepartamentosService) {
  }

  ngOnInit(): void {
  }

  changeStatus() {
    this.miEmpleado.status = !this.miEmpleado.status;
  }

  printDepartment(pIdDepartment: number): string {
    let departamento: Departamento | undefined = this.departamentosServices.getById(pIdDepartment);
    if (departamento !== undefined) {
      return departamento.title;
    }
    return 'Sin departamento'
  }

}
