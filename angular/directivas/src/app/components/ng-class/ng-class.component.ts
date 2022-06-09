import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent implements OnInit {

  texto: string = 'textoRojo';
  activo: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  cambiarActivo(): void {
    this.activo = !this.activo;
  }

}
