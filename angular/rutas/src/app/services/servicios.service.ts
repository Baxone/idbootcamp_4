import { Injectable } from '@angular/core';
import { SERVICIOS } from '../db/servicios.db';
import { Servicio } from '../interfaces/servicio';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  private arrServicios: Servicio[] = [];
  constructor() {
    this.arrServicios = SERVICIOS
  }


  /**
   *  getAll
   * @params none
   * @returns Array Servicio[]
   */
  getAll() {
    return this.arrServicios;
  }

  /**
   *  getByUrl
   * @params url:string
   * @returns Object Servicio
   */
  getByUrl(pUrl: string): Servicio | any {
    return this.arrServicios.find(servicio => servicio.url === pUrl);
  }


}
