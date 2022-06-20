import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { HomeComponent } from './components/home/home.component';
import { UserViewComponent } from './components/user-view/user-view.component';
import { UsersListComponent } from './components/users-list/users-list.component';

const routes: Routes = [
  { path: "", pathMatch: 'full', redirectTo: "/inicio" },
  { path: "inicio", component: HomeComponent }, //home pagina de inicio
  { path: 'agenda', component: UsersListComponent }, // listar todos los usuarios
  { path: "nuevo-usuario", component: FormComponent }, // Crear un nuevo usuario
  { path: "usuario/:userId", component: UserViewComponent }, //Vista individual del usuario
  { path: "actualizar/:userId", component: FormComponent },
  { path: "**", redirectTo: '/agenda' } //ruta 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
