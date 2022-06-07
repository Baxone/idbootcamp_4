import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  contador: number = 1;
  name: string = "Hector";
  age: number;
  nombres: string[] = new Array('Lucia', 'Pepe', ' Daniel')
  url: string = 'http://c.files.bbci.co.uk/48DD/production/_107435681_perro1.jpg'
  constructor() {
    this.age = 40;
  }

  onClick(pNumber: number) {
    this.contador += pNumber;
  }


}




