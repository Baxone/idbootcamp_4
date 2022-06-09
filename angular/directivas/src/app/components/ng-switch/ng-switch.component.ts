import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.css']
})
export class NgSwitchComponent implements OnInit {

  productos: string[] = []
  constructor() {

    this.productos = new Array('leche', 'huevos', 'carne', 'pescado', 'aceite', 'sal')
  }

  ngOnInit(): void {
  }

}
