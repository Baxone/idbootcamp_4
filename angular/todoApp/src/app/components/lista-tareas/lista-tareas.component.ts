import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tarea } from 'src/app/interfaces/tarea';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css']
})
export class ListaTareasComponent implements OnInit {

  @Output() deletearTarea: EventEmitter<number>
  @Input() tareas: Tarea[] = []
  constructor() {

    this.deletearTarea = new EventEmitter();
  }

  ngOnInit(): void {
  }

  deleteTask($event: number) {
    this.deletearTarea.emit($event)
  }

}
