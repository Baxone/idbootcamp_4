import { Component, OnInit } from '@angular/core';
import { Departamento } from 'src/app/interfaces/departamento';
import { Empleado } from 'src/app/interfaces/empleado';
import { DepartamentosService } from 'src/app/services/departamentos.service';
import { EmpleadosService } from 'src/app/services/empleados.service';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent implements OnInit {

  arrEmpleados: Empleado[] = [];
  arrDepartamentos: Departamento[] = [];

  constructor(
    private empleadosService: EmpleadosService,
    private departamentosServices: DepartamentosService
  ) { }

  ngOnInit(): void {
    this.arrEmpleados = this.empleadosService.getAll();
    this.arrDepartamentos = this.departamentosServices.getAll();
  }

  getDepartment($event: any): void {
    let idDepartment = Number($event.target.value);
    //llamar al servicio de empleados obteniendo los empleados por departamento.
    this.arrEmpleados = this.empleadosService.filterByDepartment(idDepartment)
  }


}
