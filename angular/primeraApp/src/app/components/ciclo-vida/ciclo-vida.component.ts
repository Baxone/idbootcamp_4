import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciclo-vida',
  templateUrl: './ciclo-vida.component.html',
  styleUrls: ['./ciclo-vida.component.css']
})
export class CicloVidaComponent implements OnInit {

  @Input() nombre: string = ""
  constructor() {
    this.nombre = 'Maria'
    console.log('constructor', this.nombre)
  }

  ngOnInit(): void {
    console.log('ngoninit', this.nombre)
  }

  ngOnChanges(): void {
    console.log('ngonchanges', this.nombre);
  }


  ngDoCheck(): void {
    console.log('ngdocheck', this.nombre);
  }

  ngAfterViewInit() {
    console.log('afterviewInit', this.nombre)
  }
}
