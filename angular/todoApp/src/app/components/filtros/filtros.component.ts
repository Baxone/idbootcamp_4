import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.css']
})
export class FiltrosComponent implements OnInit {

  @Output() busqueda: EventEmitter<string>;
  @Output() filtroPrioridad: EventEmitter<string>

  constructor() {
    this.busqueda = new EventEmitter();
    this.filtroPrioridad = new EventEmitter();
  }

  ngOnInit(): void {
  }

  getDataSearch($event: any) {
    //console.log($event.target.value)
    this.busqueda.emit($event.target.value)
  }

  getDataPriority($event: any) {
    //console.log($event.target.value)
    this.filtroPrioridad.emit($event.target.value);
  }

}
