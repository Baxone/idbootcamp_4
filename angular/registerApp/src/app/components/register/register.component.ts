import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  constructor(
    private usersServices: UsersService,
    private router: Router
  ) {

    this.registerForm = new FormGroup({
      name: new FormControl('', []),
      surname: new FormControl('', []),
      age: new FormControl('', []),
      mail: new FormControl('', []),
      address: new FormControl('', []),
      username: new FormControl('', []),
      password: new FormControl('', []),
    }, [])
  }

  ngOnInit(): void {
  }

  async getDataForm() {
    try {
      const response: any = await this.usersServices.registerUser(this.registerForm.value);
      const msg = (response.success) ? response.success : response.error;
      alert(msg);
      if (response.success) {
        //redirijo a login
        this.router.navigate(['/login'])
      }
    } catch (error) {
      console.log(error)
    }
  }

}
