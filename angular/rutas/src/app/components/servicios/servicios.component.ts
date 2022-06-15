import { Component, OnInit } from '@angular/core';
import { Servicio } from 'src/app/interfaces/servicio';
import { ServiciosService } from 'src/app/services/servicios.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

  arrServicios: Servicio[] = []

  constructor(private serviciosService: ServiciosService) { }

  ngOnInit(): void {
    this.arrServicios = this.serviciosService.getAll();
  }

}
