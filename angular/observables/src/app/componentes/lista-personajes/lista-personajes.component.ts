import { Component, OnInit } from '@angular/core';
import { Personaje } from 'src/app/interfaces/personaje.interface';
import { PersonajesService } from 'src/app/servicios/personajes.service';

@Component({
  selector: 'app-lista-personajes',
  templateUrl: './lista-personajes.component.html',
  styleUrls: ['./lista-personajes.component.css']
})
export class ListaPersonajesComponent implements OnInit {

  arrPersonajes: Personaje[] = []
  next: string = "";
  prev: string = "";
  constructor(private personajesService: PersonajesService) { }

  ngOnInit(): void {
    //opcion 1: observable subscribe
    this.personajesService.getAllData().subscribe((data: any) => {
      console.log(data)
      this.arrPersonajes = data.results
      this.next = data.info.next;
      this.prev = data.info.prev;
    })
  }

  gotoPage(url: string): void {
    this.personajesService.getAllData(url).subscribe((data: any) => {
      this.arrPersonajes = data.results;
      this.next = data.info.next;
      this.prev = data.info.prev;
    })
  }

}
