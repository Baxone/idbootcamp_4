import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VistaServicioComponent } from './components/vista-servicio/vista-servicio.component';
import { C404Component } from './components/c404/c404.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HomeComponent } from './components/home/home.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { VistaProductoComponent } from './components/vista-producto/vista-producto.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { CaracteristicasComponent } from './components/vista-producto/caracteristicas/caracteristicas.component';
import { OpinionesComponent } from './components/vista-producto/opiniones/opiniones.component';

const routes: Routes = [
  /* colocar un path vacio un componente y la segunda sería redireccionar a una ruta ya creada */
  // { path: '', pathMatch: 'full', component: HomeComponent },
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'servicio/:urlservicio', component: VistaServicioComponent },
  { path: 'productos', component: ProductosComponent },
  {
    path: 'producto/:idproduct', component: VistaProductoComponent, children: [
      { path: '', pathMatch: "full", redirectTo: "caracteristicas" },
      { path: 'caracteristicas', component: CaracteristicasComponent },
      { path: 'opiniones', component: OpinionesComponent }
    ]
  },
  { path: 'nuevo-producto', component: ProductFormComponent },
  { path: '**', component: C404Component }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
