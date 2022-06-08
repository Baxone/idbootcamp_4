import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  //1º paso creamos el Output de tipo EventEmitter.
  @Output() numeroEnviado: EventEmitter<number>;
  numero: number = 0;
  constructor() {
    //2º paso inicializamos el Ouput
    this.numeroEnviado = new EventEmitter();

  }

  ngOnInit(): void {
  }

  guardar() {
    //3º paso cuando tengo el dato que quiero enviar lo emito al padre.
    console.log(this.numero)
    this.numeroEnviado.emit(this.numero);
  }

}
