import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  imagenActual: number = 2;
  arrImagenes: any[] = []
  constructor() {
    this.arrImagenes = [
      { url: './assets/images/imagen_1.jpg', title: 'Yellow' },
      { url: './assets/images/imagen_2.jpg', title: 'Orange' },
      { url: './assets/images/imagen_3.jpg', title: 'Tomato' },
      { url: './assets/images/imagen_4.jpg', title: 'Blue' },
    ]
  }

  ngOnInit(): void {
  }

  cambiarImagen($event: any) {
    //console.log($event.target.innerText)
    if ($event.target.innerText === 'NEXT') {
      this.imagenActual = (this.imagenActual === this.arrImagenes.length - 1) ? 0 : this.imagenActual + 1;
    } else {
      this.imagenActual = (this.imagenActual === 0) ? this.arrImagenes.length - 1 : this.imagenActual - 1;
    }

  }

}
