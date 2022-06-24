import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/interfaces/character.interface';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  arrCharacters: Character[] = [];
  constructor(
    private charactersService: CharactersService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    //cuando carguemos el componente pedimos los datos. Estos vienen en forma de promesa

    this.activatedRoute.queryParams.subscribe(async (queryParams: any) => {
      if (queryParams.name !== undefined) {
        //buscamos por nombre
        this.arrCharacters = await this.charactersService.getByName(queryParams.name);

      } else {
        //cargamos todos los personajes
        this.arrCharacters = await this.charactersService.getAll();
      }
    })


    // try {
    //   this.arrCharacters = await this.charactersService.getAll()
    // } catch (err) {
    //   console.log(err);
    // }

  }

}
