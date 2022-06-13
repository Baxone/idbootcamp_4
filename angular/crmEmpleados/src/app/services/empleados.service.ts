import { Injectable } from '@angular/core';
import { Empleado } from '../interfaces/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  private arrEmpleados: Empleado[] = []
  private id: number = 1;
  constructor() { }

  insertEmployee(pData: any): string {
    pData.id = this.id;
    pData.status = true;

    //antes de insertar tendre que comprobar por DNI que el usuario no esta duplicado.
    let posicion = this.arrEmpleados.findIndex(empleado => empleado.dni === pData.dni)

    if (posicion === -1) {
      this.arrEmpleados.push(pData);
      this.id++;
      console.log(this.arrEmpleados);
      return 'Usuario registrado correctamente'
    }

    return 'Usuario duplicado'

  }
}
