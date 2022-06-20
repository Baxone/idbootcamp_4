import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  userForm: FormGroup;

  constructor(
    private usersService: UsersService,
    private router: Router
  ) {

    this.userForm = new FormGroup({
      first_name: new FormControl('', []),
      last_name: new FormControl('', []),
      email: new FormControl('', []),
      avatar: new FormControl('', []),
    }, []);

  }

  ngOnInit(): void {
  }


  async getDataForm(): Promise<void> {
    const response: User = await this.usersService.create(this.userForm.value)
    //si la respuesta es correcta me llega el id y la fecha de creacion
    //if me llega la fecha entonces el usuario se ha registrado correctamente
    if (response.id) {
      alert('Usuario registrado correctamente')
      //redirigir a la agenda
      //rutas internas
      this.router.navigate(['/agenda']);
      //this.router.navigateByUrl('/agenda')
      //ruta externa
      //window.location.href = "http://www.google.es";
    }
  }
}
