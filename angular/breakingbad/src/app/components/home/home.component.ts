import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/interfaces/character.interface';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  arrCharacters: Character[] = [];
  constructor(private charactersService: CharactersService) { }

  async ngOnInit(): Promise<void> {
    //cuando carguemos el componente pedimos los datos. Estos vienen en forma de promesa
    try {
      this.arrCharacters = await this.charactersService.getAll()
    } catch (err) {
      console.log(err);
    }



  }

}
