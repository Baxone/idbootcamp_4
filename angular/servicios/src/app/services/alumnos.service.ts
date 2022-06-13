import { Injectable } from '@angular/core';
import { ALUMNOS } from '../db/alumnos.db';
import { Alumno } from '../interfaces/alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  //private solo es accesibles desde esta clase, las propiedades privadas ni se heredan ni se importan
  //public, si no ponemos nada ya se considera public que podría ser accesible desde cualquier elemento donde se inyecte el servicio
  //protected seria como privada pero tambien prodian acceder a ello las clases que herenden.
  private arrAlumnos: Alumno[] = [];

  constructor() {
    this.arrAlumnos = ALUMNOS;
  }

  //el servicios va tener metodos que me permitan interactuar con los datos.

  getAll(): Alumno[] {
    return this.arrAlumnos;
  }

  deleteById(pId: number): string {

    this.arrAlumnos = this.arrAlumnos.filter(alumno => alumno.id !== pId)

    return 'Alumno borrado correctamente'
  }

  getByAge(pEdadMin: number, pEdadMax: number): Alumno[] {
    return this.arrAlumnos.filter(alumno => alumno.age >= pEdadMin && alumno.age <= pEdadMax);
  }

}
