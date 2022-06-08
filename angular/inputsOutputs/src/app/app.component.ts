import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  listaNumeros: number[] = [];
  titulo: string = "";
  miAtributo: number = 23;

  constructor() {
    this.titulo = "Lista de Numeros"
    this.listaNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  }

  //punto 5 de output crear la funcion que recibe el numero en el padre.
  guardarNumero($event: number) {
    //$event representa el numero
    this.listaNumeros.push($event);
  }
}
