import { Component, Input, OnInit } from '@angular/core';
import { Character } from 'src/app/interfaces/character';
import { Serie } from 'src/app/interfaces/serie';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() item: Character | Serie | any;
  @Input() cat: string = "";
  miSerie: Serie | any;
  miCharacter: Character | any;
  constructor() { }

  ngOnInit(): void {
    if (this.cat === 'series' || this.cat === 'canal') {
      this.miSerie = this.item
    } else {
      this.miCharacter = this.item
    }
  }

}
