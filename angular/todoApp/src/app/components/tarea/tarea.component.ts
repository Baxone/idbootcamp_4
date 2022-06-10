import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tarea } from 'src/app/interfaces/tarea';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {

  @Input() miTarea: Tarea | any;
  @Output() deletearTarea: EventEmitter<number>;
  constructor() {
    this.deletearTarea = new EventEmitter();
  }

  ngOnInit(): void {
  }

  deleteTask(pId: number) {
    this.deletearTarea.emit(pId);
  }

}
