import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from 'src/app/interfaces/personaje.interface';
import { PersonajesService } from 'src/app/servicios/personajes.service';

@Component({
  selector: 'app-modal-personaje',
  templateUrl: './modal-personaje.component.html',
  styleUrls: ['./modal-personaje.component.css']
})
export class ModalPersonajeComponent implements OnInit {

  @Input() miBusqueda: string = ""

  arrPersonajes: Personaje[] = [];
  constructor(private personajesService: PersonajesService) { }

  ngOnInit(): void {

  }

  ngOnChanges(): void {
    //cuando carguemos el componente tenemos que hacer una peticion a la api para hacer una busqueda por nombre. getByName que es un observable dentro del servicio
    this.personajesService.getByName(this.miBusqueda).subscribe((data: any) => {
      this.arrPersonajes = data.results;
    })

  }

}
