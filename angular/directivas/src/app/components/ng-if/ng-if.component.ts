import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {

  seccionActual: string = "sobremi"
  //visible: string = 'visto'
  constructor() { }

  ngOnInit(): void {
  }

  cargarSeccion(pSeccion: string): void {
    this.seccionActual = pSeccion;
  }
}
