//componentes
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

//libs
import { AppComponent } from './app.component';
import { AlumnoComponent } from './components/alumno/alumno.component';
import { ListaAlumnosComponent } from './components/lista-alumnos/lista-alumnos.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaAlumnosComponent,
    AlumnoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
