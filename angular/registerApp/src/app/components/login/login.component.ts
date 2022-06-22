import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private usersService: UsersService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  async getDataForm(pForm: any) {
    //tenemos enviar los datos a la api a traves del servicio.
    try {
      const response: User | any = await this.usersService.login(pForm.value)
      console.log(response);
      if (response.token) {
        localStorage.setItem('user-token', response.token)
        this.router.navigate(['/premio', response.token])
      }
      else {
        alert(response.error)
      }
    } catch (error) {
      console.log(error)
    }
  }

}
