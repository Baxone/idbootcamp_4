import { Component } from '@angular/core';
import { Tarea } from './interfaces/tarea';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  misTareas: Tarea[] = [];
  todasTareas: Tarea[] = [];
  id: number = 4;
  constructor() {

    this.todasTareas = [
      {
        id: 1,
        titulo: 'Estudiar Angular',
        prioridad: 'urgente'
      },
      {
        id: 2,
        titulo: 'Sacar al perro',
        prioridad: 'diaria'
      },
      {
        id: 3,
        titulo: 'Leer un libro',
        prioridad: 'mensual'
      },
    ]

    this.misTareas = this.todasTareas;

  }

}
