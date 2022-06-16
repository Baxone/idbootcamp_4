import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/interfaces/character';
import { CharactersService } from 'src/app/services/characters.service';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-character-view',
  templateUrl: './character-view.component.html',
  styleUrls: ['./character-view.component.css']
})
export class CharacterViewComponent implements OnInit {

  serieName: string = ""
  character: Character | any;
  constructor(
    private activateRoute: ActivatedRoute,
    private charactersService: CharactersService,
    private seriesService: SeriesService
  ) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params => {
      let id: number = parseInt(params['idcharacter'])
      this.character = this.charactersService.getById(id);
      let serie = this.seriesService.getById(this.character.serie)
      this.serieName = serie.titulo;
    })
  }

}
