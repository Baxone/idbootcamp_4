import { Injectable } from '@angular/core';
import { Departamento } from '../interfaces/departamento';
import { Empleado } from '../interfaces/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  private arrEmpleados: Empleado[] = []
  private id: number = 1;
  constructor() {
    this.arrEmpleados = [
      {
        id: 1,
        name: 'Juan Antonio',
        surname: 'Pérez',
        dni: '21342567V',
        email: 'juan@gmail.com',
        photo: 'https://randomuser.me/api/portraits/men/27.jpg',
        department: 3,
        status: true,
      },
      {
        id: 2,
        name: 'Elena',
        surname: 'Rodriguez',
        dni: '67849834T',
        email: 'elena@gmail.com',
        photo: 'https://randomuser.me/api/portraits/women/27.jpg',
        department: 1,
        status: false,
      }
    ]
  }

  /**
   * insertEmployee
   * @param pData: any
   * @returns Object: any
   */
  insertEmployee(pData: any): any {
    pData.id = this.id;
    pData.status = true;

    //antes de insertar tendre que comprobar por DNI que el usuario no esta duplicado.
    let posicion = this.arrEmpleados.findIndex(empleado => empleado.dni === pData.dni)

    if (posicion === -1) {
      this.arrEmpleados.push(pData);
      this.id++;
      console.log(this.arrEmpleados);
      return { msg: 'Usuario registrado correctamente', status: true }
    }

    return { msg: 'Usuario duplicado', status: false }

  }

  /**
   * getAll
   * @params none
   * @returns Empleado[]
   */
  getAll(): Empleado[] {
    return this.arrEmpleados
  }

  /**
   * filterByDepartment
   * @param pIdDepartment: number
   * @returns Array Empleado[]
   */
  filterByDepartment(pIdDepartment: number): Empleado[] {
    if (pIdDepartment !== 0) {
      return this.arrEmpleados.filter(empleado => empleado.department === pIdDepartment)
    }
    return this.arrEmpleados;
  }

}
