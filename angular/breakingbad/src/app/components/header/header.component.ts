import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  searchName: string = "";
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  search() {
    //crear la queryParams y redirigir a ella.
    let url = (this.searchName !== "") ? `/home?name=${this.searchName}` : '/home'
    this.router.navigateByUrl(url)
  }

}
