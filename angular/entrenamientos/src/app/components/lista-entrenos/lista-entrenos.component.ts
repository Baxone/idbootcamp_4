import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-entrenos',
  templateUrl: './lista-entrenos.component.html',
  styleUrls: ['./lista-entrenos.component.css']
})
export class ListaEntrenosComponent implements OnInit {

  @Input() misEntrenos: any[] = [];

  constructor() { }

  ngOnInit(): void {
    //esta disponible en el ngOnInit
    console.log('lista entrenos', this.misEntrenos);
  }

  cargarEntrenos() {
    let ul = '<ul>';
    this.misEntrenos.forEach(entrenamiento => {
      ul += `<li>${entrenamiento.titulo} - ${entrenamiento.tiempo} minutos - fecha: ${entrenamiento.fecha} </li>`
    })
    ul += '</ul>'
    return ul;
  }

}
