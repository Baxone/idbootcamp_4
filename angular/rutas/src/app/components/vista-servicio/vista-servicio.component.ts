import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Servicio } from 'src/app/interfaces/servicio';
import { ServiciosService } from 'src/app/services/servicios.service';

@Component({
  selector: 'app-vista-servicio',
  templateUrl: './vista-servicio.component.html',
  styleUrls: ['./vista-servicio.component.css']
})
export class VistaServicioComponent implements OnInit {

  miServicio: Servicio | any;

  constructor(
    private serviciosService: ServiciosService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    //Observable
    this.activatedRoute.params.subscribe(params => {
      //decido que hago con esos cambios
      let url = params['urlservicio'];

      this.miServicio = this.serviciosService.getByUrl(url)
    })
  }

}
