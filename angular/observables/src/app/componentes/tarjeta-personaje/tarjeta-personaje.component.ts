import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from 'src/app/interfaces/personaje.interface';

@Component({
  selector: 'app-tarjeta-personaje',
  templateUrl: './tarjeta-personaje.component.html',
  styleUrls: ['./tarjeta-personaje.component.css']
})
export class TarjetaPersonajeComponent implements OnInit {

  @Input() miPersonaje: Personaje | any;
  constructor() { }

  ngOnInit(): void {
  }

}
