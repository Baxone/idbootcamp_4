import { Injectable } from '@angular/core';
import { PRODUCTOS } from '../db/productos.db';
import { Producto } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {


  private arrProductos: Producto[] = []
  constructor() {
    this.arrProductos = PRODUCTOS
  }

  /**
   * getAll
   * @params none
   * @returns Array Producto[]
   */
  getAll(): Producto[] {
    return this.arrProductos;
  }

  /**
  * getById
  * @params id: number
  * @returns Object Producto
  */
  getById(pId: number): Producto | any {
    return this.arrProductos.find(producto => producto.id === pId);
  }

}
