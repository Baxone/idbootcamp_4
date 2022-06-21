import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  userForm: FormGroup;
  type: string = 'Registrar';
  constructor(
    private usersService: UsersService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {

    this.userForm = new FormGroup({
      first_name: new FormControl('', [
        Validators.required
      ]),
      last_name: new FormControl('', [
        Validators.required
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
      ]),
      avatar: new FormControl('', []),
    }, []);

  }

  ngOnInit(): void {
    //cuando se cargue el formulario si hay ruta activa estamos actualizando, si no estamos registrando usuario.
    this.activatedRoute.params.subscribe(async (params: any) => {
      const id = params.userId;
      if (id) {
        this.type = 'Actualizar'
        //hacer una peticion al servicio para obtener los datos de un usuario - getById
        const response = await this.usersService.getById(id)
        const user: User = response.data;

        this.userForm = new FormGroup({
          first_name: new FormControl(user?.first_name, [
            Validators.required
          ]),
          last_name: new FormControl(user?.last_name, [
            Validators.required
          ]),
          email: new FormControl(user?.email, [
            Validators.required,
            Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
          ]),
          avatar: new FormControl(user?.avatar, []),
          id: new FormControl(user?.id, [])
        }, []);

      }
    })

  }


  async getDataForm(): Promise<void> {
    if (this.userForm.value.id) {
      //actualizando
      const response: any = await this.usersService.update(this.userForm.value)
      if (response.updatedAt) {
        alert('Usuario actualizado correctamente')
      }
    } else {
      //registrando
      const response: User = await this.usersService.create(this.userForm.value)
      //si la respuesta es correcta me llega el id y la fecha de creacion
      //if me llega la fecha entonces el usuario se ha registrado correctamente
      if (response.id) {
        alert('Usuario registrado correctamente')
        //redirigir a la agenda
        //rutas internas
      }
    }
    this.router.navigate(['/agenda']);
    //this.router.navigateByUrl('/agenda')
    //ruta externa
    //window.location.href = "http://www.google.es";
  }

  checkControl(pControlName: string, pErrorName: string): boolean {
    if (this.userForm.get(pControlName)?.hasError(pErrorName) && this.userForm.get(pControlName)?.touched) {
      return true
    }
    return false
  }
}
