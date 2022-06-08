import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-total-tiempo',
  templateUrl: './total-tiempo.component.html',
  styleUrls: ['./total-tiempo.component.css']
})
export class TotalTiempoComponent implements OnInit {

  @Input() misEntrenos: any[] = []


  constructor() { }

  ngOnInit(): void { }

  cargarTiempoTotal() {
    let tiempoTotal = 0;
    this.misEntrenos.forEach(entreno => {
      tiempoTotal += entreno.tiempo
    })
    return tiempoTotal;
  }



}
