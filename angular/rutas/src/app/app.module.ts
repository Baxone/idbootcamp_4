import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { C404Component } from './components/c404/c404.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ProductosComponent } from './components/productos/productos.component';
import { VistaProductoComponent } from './components/vista-producto/vista-producto.component';
import { VistaServicioComponent } from './components/vista-servicio/vista-servicio.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { CaracteristicasComponent } from './components/vista-producto/caracteristicas/caracteristicas.component';
import { OpinionesComponent } from './components/vista-producto/opiniones/opiniones.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ContactoComponent,
    C404Component,
    ServiciosComponent,
    ProductosComponent,
    VistaProductoComponent,
    VistaServicioComponent,
    ProductFormComponent,
    CaracteristicasComponent,
    OpinionesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
