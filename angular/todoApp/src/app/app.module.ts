//imports
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

//declarations
import { AppComponent } from './app.component';
import { FiltrosComponent } from './components/filtros/filtros.component';
import { FormComponent } from './components/form/form.component';
import { ListaTareasComponent } from './components/lista-tareas/lista-tareas.component';
import { TareaComponent } from './components/tarea/tarea.component';




@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    FiltrosComponent,
    ListaTareasComponent,
    TareaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
