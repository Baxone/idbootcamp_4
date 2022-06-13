//lib
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//componentes
import { AppComponent } from './app.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ListaEmpleadosComponent } from './components/lista-empleados/lista-empleados.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaEmpleadosComponent,
    FormularioComponent,
    EmpleadoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
