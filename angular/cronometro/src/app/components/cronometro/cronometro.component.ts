import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent implements OnInit {


  @Input() inicio: number = 0;
  @Input() fin: number = 0;
  @Output() cronoTerminado: EventEmitter<boolean>;
  textoBtn: string = "Iniciar";
  contador: number = 0;
  estado: boolean = false;
  intervalo: any;
  constructor() {
    this.cronoTerminado = new EventEmitter();
  }

  ngOnInit(): void {
    this.contador = this.inicio;
  }

  startStop(): void {
    if (this.estado) {
      this.textoBtn = "Iniciar";
      clearInterval(this.intervalo)
    } else {
      this.textoBtn = "Parar";
      this.intervalo = setInterval(() => {
        this.contador++
        if (this.contador === this.fin) {
          this.parar();
        }

      }, 1000)
    }
    this.estado = !this.estado;


  }

  parar() {
    clearInterval(this.intervalo);
    this.estado = false;
    //emitir un output al padre para avisarle que he terminado.
    this.cronoTerminado.emit(true);
  }

}
