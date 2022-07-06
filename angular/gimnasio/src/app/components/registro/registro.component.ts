import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  formulario: FormGroup;
  errores: string[];

  constructor(
    private usuariosService: UsuariosService
  ) {
    this.formulario = new FormGroup({
      username: new FormControl<string | null>(null),
      email: new FormControl<string | null>(null),
      password: new FormControl<string | null>(null)
    });

    this.errores = [];
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.usuariosService.registro(this.formulario.value)
      .then(response => {
        if (response.affectedRows === 1) {
          alert('Registro completo');
        } else {
          // Recorrer el array y sacar la propiedad msg al nuevo array
          this.errores = response.map((error: any) => error.msg);
          alert('Registro erroneo');
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

}
