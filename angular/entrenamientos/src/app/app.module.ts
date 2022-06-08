import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ListaEntrenosComponent } from './components/lista-entrenos/lista-entrenos.component';
import { TotalTiempoComponent } from './components/total-tiempo/total-tiempo.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    ListaEntrenosComponent,
    TotalTiempoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
