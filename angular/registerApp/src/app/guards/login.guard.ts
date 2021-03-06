import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(): boolean {
    console.log('paso por el guard')
    let token: string | null = localStorage.getItem('user-token')
    if (token === null) {
      //redirigir a la pagina de login.
      this.router.navigate(['/login'])
      return false
    }
    return true;

  }

}
