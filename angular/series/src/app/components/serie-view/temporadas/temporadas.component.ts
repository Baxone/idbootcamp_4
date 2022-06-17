import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-temporadas',
  templateUrl: './temporadas.component.html',
  styleUrls: ['./temporadas.component.css']
})
export class TemporadasComponent implements OnInit {


  arrTemporadas: string[] = [];
  constructor(
    private seriesServices: SeriesService,
    private activatedRouted: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRouted.parent?.params.subscribe(params => {
      this.arrTemporadas = this.seriesServices.getSeasons(params['idserie']);
    })
  }

}
