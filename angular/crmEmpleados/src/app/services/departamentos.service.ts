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
        numEmployees: 1
      },
      {
        id: 2,
        title: 'Direccion',
        numEmployees: 0
      },
      {
        id: 3,
        title: 'Desarrollo',
        numEmployees: 1
      }
      ,
      {
        id: 4,
        title: 'Cuentas',
        numEmployees: 0
      }
    ]
  }

  /**
   *  getAll
   *  @params none
   *  @returns Array Departamento[]
   */
  getAll(): Departamento[] {
    return this.arrDepartment;
  }

  /**
   *  updateNumEmployees
   *  @params id: number
   *  @returns  Object Departamento
   */
  updateNumEmployees(pId: number) {
    //buscar el departamento por id
    let departamentoActualizar: any = this.getById(pId);
    if (departamentoActualizar !== undefined) {
      departamentoActualizar.numEmployees++;
      return departamentoActualizar;
    }
    return {};

  }


  /**
   * getById
   * @param pId : number
   * @returns Object Departamento
   */
  getById(pId: number): Departamento | undefined {
    return this.arrDepartment.find(departamento => departamento.id === pId);
  }






}
