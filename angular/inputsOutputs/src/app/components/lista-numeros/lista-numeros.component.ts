import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-numeros',
  templateUrl: './lista-numeros.component.html',
  styleUrls: ['./lista-numeros.component.css']
})
export class ListaNumerosComponent implements OnInit {
  //los Inputs estan disponibles cuando se carga totalmente el componente y eso ocurre en en ngOnInit
  @Input() atributo: number = 0;
  @Input() titulo: string = "";
  @Input() numeros: number[] = [];
  @Input() tipo: string = "";
  constructor() {
    //console.log(this.atributo) //no aqui es 0
  }

  ngOnInit(): void {
    console.log(this.atributo) //23
    console.log(this.numeros);
    console.log(this.tipo);
  }

  cargarNumeros() {
    let arrayTemporal: any[] = []
    if (this.tipo === 'pares') {
      //filtrare lista de pares
      arrayTemporal = this.numeros.filter(numero => numero % 2 === 0);
    } else if (this.tipo === 'impares') {
      //filtrare lista de impares
      arrayTemporal = this.numeros.filter(numero => numero % 2 !== 0);
    } else {
      arrayTemporal = this.numeros;
    }

    let ul = '<ul>'

    arrayTemporal.forEach(numero => {
      ul += `<li>${numero}</li>`
    })

    ul += '</ul>';
    return ul;
  }

}


