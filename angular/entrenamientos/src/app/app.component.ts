import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  entrenamientos: any[] = [];
  id: number = 3;
  constructor() {
    this.entrenamientos = [
      {
        id: 1,
        titulo: 'Press de banca',
        tiempo: 15,
        fecha: '08-06-2022'
      },
      {
        id: 2,
        titulo: 'Dominadas',
        tiempo: 7,
        fecha: '08-06-2022'
      },
    ]
  }

  guardarEntreno($event: any) {
    //el objeto que recibo no tiene id tengo que añadir el id
    $event.id = this.id;
    this.entrenamientos.push($event);
    this.id++;
  }
}
