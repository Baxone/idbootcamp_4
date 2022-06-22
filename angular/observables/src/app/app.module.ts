import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListaPersonajesComponent } from './componentes/lista-personajes/lista-personajes.component';
import { BuscadorComponent } from './componentes/buscador/buscador.component';
import { ModalPersonajeComponent } from './componentes/modal-personaje/modal-personaje.component';
import { TarjetaPersonajeComponent } from './componentes/tarjeta-personaje/tarjeta-personaje.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaPersonajesComponent,
    BuscadorComponent,
    ModalPersonajeComponent,
    TarjetaPersonajeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
