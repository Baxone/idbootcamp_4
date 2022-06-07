import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {

  //propiedades
  nombre: string = ""
  edad: number = 0;
  listaImagenes: any[] = [];
  color: string = 'green'
  constructor() {
    this.nombre = "Lucas",
      this.edad = 4;
    this.listaImagenes = [
      { url: 'http://c.files.bbci.co.uk/48DD/production/_107435681_perro1.jpg', alt: 'Perrio feliz' }
    ]
  }

  ngOnInit(): void {
  }

  sumar(pNumero1: number, pNumero2: number): string {
    return `El resultado de sumar ${pNumero1} más ${pNumero2} es igual <strong>${pNumero1 + pNumero2}</strong>`
  }

}
