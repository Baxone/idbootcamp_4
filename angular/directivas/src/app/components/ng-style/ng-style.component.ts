import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent implements OnInit {

  color: string = 'tomato'
  fontSize: number = 10;
  estiloParrafo: any = {};
  propiedad: string = "";
  valor: string = ""
  constructor() {  }

  ngOnInit(): void {
  }

  cambiarFuente($event: any) {
    this.fontSize = $event.target.value;
  }

  cambiarEstilo() {
    this.estiloParrafo[this.propiedad] = this.valor;
    console.log(this.estiloParrafo)
  }

}
