import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioClientesComponent } from './components/formulario-clientes/formulario-clientes.component';
import { ListaClientesComponent } from './components/lista-clientes/lista-clientes.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/clientes' },
  { path: 'clientes', component: ListaClientesComponent },
  { path: 'clientes/new', component: FormularioClientesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: '**', redirectTo: '/clientes' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
