import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() tareaEmitida: EventEmitter<any>
  newTarea: any;
  constructor() {
    this.newTarea = {
      titulo: "",
      prioridad: ""
    }

    this.tareaEmitida = new EventEmitter();
  }

  ngOnInit(): void {
  }


  getDataForm() {
    //console.log(this.newTarea);
    this.tareaEmitida.emit(this.newTarea);
    this.newTarea = {
      titulo: "",
      prioridad: ""
    }

  }

}
