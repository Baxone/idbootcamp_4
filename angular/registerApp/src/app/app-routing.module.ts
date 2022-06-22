import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PremioComponent } from './components/premio/premio.component';
import { ProductosComponent } from './components/productos/productos.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  { path: "", pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'productos', component: ProductosComponent, canActivate: [LoginGuard], children: [
      /* {path: 'productos/opiniones', component: ProductosComponent, canActivateChild: []} */
    ]
  },
  { path: 'premio/:token', component: PremioComponent },
  { path: "**", redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
