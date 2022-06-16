import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Serie } from 'src/app/interfaces/serie';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-serie-view',
  templateUrl: './serie-view.component.html',
  styleUrls: ['./serie-view.component.css']
})
export class SerieViewComponent implements OnInit {

  serie: Serie | any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private seriesService: SeriesService
  ) { }

  ngOnInit(): void {
    //cuando cargue el componente tengo que extraer de los parametros de ruta el id de la serie para pedir al servicio los datos de una serie concreta.
    this.activatedRoute.params.subscribe(params => {
      let id = parseInt(params['idserie'])
      this.serie = this.seriesService.getById(id);
    })


  }

}
