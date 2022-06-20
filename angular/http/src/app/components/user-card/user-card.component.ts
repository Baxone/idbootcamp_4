import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input() myUser: User | any;
  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
  }

  async deleteUser(pId: number): Promise<any> {
    try {
      const response = await this.usersService.delete(pId);
      alert(response);
    } catch (error) {
      console.log(error)
    }
  }
}
