import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  logged: boolean;
  users: any[];

  constructor(
    private usersService: UsersService
  ) {
    this.logged = false;
    this.users = [];
  }

  ngOnInit(): void {
    this.usersService.getLogin$().subscribe(success => {
      this.logged = success;
    });

    this.usersService.getUsers$().subscribe(users => {
      this.users = users;
    })
  }

}
