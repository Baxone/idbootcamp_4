import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-premio',
  templateUrl: './premio.component.html',
  styleUrls: ['./premio.component.css']
})
export class PremioComponent implements OnInit {

  url: string = "";
  constructor(
    private activatedRoute: ActivatedRoute,
    private usersService: UsersService
  ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(async (params: any) => {
      const token = params.token;
      const response = await this.usersService.getPremio(token);
      const premio = response?.success
      const valor = premio.split(': ')[1];
      this.url = valor.split(' ')[0]
    })


  }

}
