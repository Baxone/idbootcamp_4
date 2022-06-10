import { Component } from '@angular/core';
import { Tarea } from './interfaces/tarea';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  tipo: string = "";
  textAlert: string = ""
  alert: boolean = false;
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

  getNewTarea($event: any): void {
    if ($event.titulo !== "" && $event.prioridad !== "") {
      $event.id = this.id;
      this.misTareas.push($event);
      this.todasTareas = this.misTareas;
      this.id++;
      this.tipo = 'success'
      this.textAlert = "Tarea guardada exitosamente";
      this.alert = true;

    } else {
      this.tipo = 'warning'
      this.alert = true;
      this.textAlert = "Los campos del formulario no pueden estar vacios"

    }

    setTimeout(() => {
      this.closeAlert()
    }, 1500);

  }



  search($event: string): void {
    this.misTareas = this.todasTareas.filter(tarea => tarea.titulo.toLowerCase().includes($event.toLowerCase()))
  }

  filterPrioridad($event: string): void {
    //opcion1
    // if ($event !== "") {
    //   this.misTareas = this.todasTareas.filter(tarea => tarea.prioridad === $event);
    // } else {
    //   this.misTareas = this.todasTareas;
    // }

    //opcion 2
    //this.misTareas = ($event !== "") ? this.todasTareas.filter(tarea => tarea.prioridad === $event) : this.todasTareas;

    //opcion3
    this.misTareas = this.todasTareas.filter(tarea => tarea.prioridad.includes($event))


  }

  closeAlert() {
    this.alert = false;
  }

  deleteTask($event: number) {
    this.todasTareas = this.todasTareas.filter(tarea => tarea.id !== $event)
    this.misTareas = this.todasTareas;
    this.tipo = 'danger'
    this.textAlert = "Tarea borrada exitosamente";
    this.alert = true;
    setTimeout(() => {
      this.closeAlert()
    }, 1500);
  }

}
