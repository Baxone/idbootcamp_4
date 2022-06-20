import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  arrUsers: User[] = [];
  constructor(private usersService: UsersService) { }

  async ngOnInit(): Promise<any> {
    //cuando hacemos una peticion a una api, la llamada es asincrona y habrá que gestionarla.
    try {
      const response: any = await this.usersService.getAll();
      this.arrUsers = response.data;
      console.log(this.arrUsers)
    } catch (err) {
      console.log(err)
    }
  }

}
