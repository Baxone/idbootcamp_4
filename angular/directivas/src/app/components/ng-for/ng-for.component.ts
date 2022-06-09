import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  numeros: number[] = [2, 4, 6, 8, 10, 12];
  todosEpisodios: any[] = [];
  episodios: any[] = [];

  constructor() {

    this.todosEpisodios = new Array(
      { title: 'Winter <span class="rojo">Is Coming</span>', director: 'Tim Van Patten' },
      { title: 'The Kingsroad', director: 'Tim Van Patten' },
      { title: 'Lord Snow', director: 'Brian Kirk' },
      { title: 'Cripples,<span class="rojo"> Bastards, and Broken Things</span>', director: 'Brian Kirk' },
      { title: 'The Wolf and the Lion', director: 'Brian Kirk' },
      { title: 'A Golden Crown', director: 'Daniel Minahan' },
      { title: 'You Win or You Die', director: 'Daniel Minahan' },
      { title: 'The Pointy End', director: 'Daniel Minahan' },
    )

    this.episodios = this.todosEpisodios;


  }

  ngOnInit(): void {
  }

  selectDirector($event: any): void {
    let director = $event.target.value;

    if (director !== "") {
      this.episodios = this.todosEpisodios.filter(episodio => episodio.director === director)
    } else {
      this.episodios = this.todosEpisodios;
    }



  }





}
