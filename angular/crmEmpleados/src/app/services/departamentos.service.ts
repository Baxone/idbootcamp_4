import { Injectable } from '@angular/core';
import { Departamento } from '../interfaces/departamento';

@Injectable({
  providedIn: 'root'
})
export class DepartamentosService {

  private arrDepartment: Departamento[] = []
  constructor() {
    this.arrDepartment = [
      {
        id: 1,
        title: 'Marketing',
        numEmployees: 0
      },
      {
        id: 2,
        title: 'Direccion',
        numEmployees: 0
      },
      {
        id: 3,
        title: 'Desarrollo',
        numEmployees: 0
      }
      ,
      {
        id: 4,
        title: 'Cuentas',
        numEmployees: 0
      }
    ]
  }

  getAll(): Departamento[] {
    return this.arrDepartment;
  }




}
