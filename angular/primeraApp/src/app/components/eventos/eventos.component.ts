import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  city: string = "Angular";
  color: string = "";
  constructor() { }

  ngOnInit(): void {
  }

  responder($event: any) {
    //console.log($event.target.value)
    this.city = ($event.target.value !== "") ? $event.target.value : 'Angular';
  }

  cambiarColor($event: any) {
    this.color = $event.target.value;
    console.log(this.color)
  }


}
