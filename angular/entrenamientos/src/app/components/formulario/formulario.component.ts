import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  /* titulo: string = "";
  tiempo: number = 0;
  fecha: string = ""; */
  nuevoEntrenamiento: any;
  @Output() entrenoEnviado: EventEmitter<any>;

  constructor() {
    this.nuevoEntrenamiento = {
      titulo: "",
      tiempo: 0,
      fecha: ""
    }

    this.entrenoEnviado = new EventEmitter();

  }

  ngOnInit(): void {
  }

  guardar() {
    /* let nuevoEntrenamiento = {
      titulo: this.titulo,
      tiempo: this.tiempo,
      fecha: this.fecha
    } */
    console.log(this.nuevoEntrenamiento)
    this.entrenoEnviado.emit(this.nuevoEntrenamiento);
  }

}
