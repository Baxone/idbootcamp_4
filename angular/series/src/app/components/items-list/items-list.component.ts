import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/interfaces/character';
import { Serie } from 'src/app/interfaces/serie';
import { CharactersService } from 'src/app/services/characters.service';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {

  channel: string = "";
  title: string = "series";
  arrCharacters: Character[] = [];
  arrSeries: Serie[] = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private seriesService: SeriesService,
    private charactersService: CharactersService
  ) { }

  ngOnInit(): void {
    //cuando cargue el componente tengo que determinar la ruta si es personajes o series para hacer una peticion al servicio correspondiente.
    this.title = this.activatedRoute.snapshot.url[0].path;
    console.log(this.title);
    if (this.title === 'series') {
      //pido y lleno el array de series
      this.arrSeries = this.seriesService.getAll();
    } else {
      //pido y lleno el array de characters
      this.arrCharacters = this.charactersService.getAll();
    }
  }

  ngDoCheck() {
    let response = this.activatedRoute.snapshot.url;
    if (response.length > 1) {
      //console.log(response[1].path)
      this.channel = response[1].path;

      this.arrSeries = this.seriesService.getByChannel(this.channel);
      console.log(this.arrSeries);
    }
  }

}
