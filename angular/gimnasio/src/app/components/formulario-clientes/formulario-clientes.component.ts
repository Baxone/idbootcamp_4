import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-formulario-clientes',
  templateUrl: './formulario-clientes.component.html',
  styleUrls: ['./formulario-clientes.component.css']
})
export class FormularioClientesComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private clienteService: ClienteService
  ) {
    this.formulario = new FormGroup({
      nombre: new FormControl<string | null>(null),
      apellidos: new FormControl<string | null>(null),
      direccion: new FormControl<string | null>(null),
      email: new FormControl<string | null>(null),
      edad: new FormControl<number | null>(null),
      genero: new FormControl<string | null>(null),
      cuota: new FormControl<number | null>(null),
      fecha_nacimiento: new FormControl<Date | null>(null),
      dni: new FormControl<string | null>(null),
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.clienteService.create(this.formulario.value)
      .then(response => console.log(response))
      .catch(err => console.log(err));
  }

}
