import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-caracteristicas',
  templateUrl: './caracteristicas.component.html',
  styleUrls: ['./caracteristicas.component.css']
})
export class CaracteristicasComponent implements OnInit {

  id: number = 0;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    //id de la ruta que me pasan como parametro.
    //necesito la ruta activa de mi padre por que la mia es estatica
    this.activatedRoute.parent?.params.subscribe(params => {
      this.id = params['idproduct']
    })

  }

}
