import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  resultado: number = 0;
  numero1: number = 0;
  numero2: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  sumar() {
    this.resultado = this.numero1 + this.numero2;
    this.numero1 = this.numero2 = 0;
  }

  multiplicar() {
    this.resultado = this.numero1 * this.numero2;
    this.numero1 = this.numero2 = 0;
  }

  restar() {
    this.resultado = this.numero1 - this.numero2;
    this.numero1 = this.numero2 = 0;
  }
}
