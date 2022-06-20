import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  //el servicio necesita conectarse a un API_REST. Para ello tenemos que importar el module HttpClientModule dentro de app.module. Y posteriormente inyector dentro del servicio HttpClient
  baseUrl: string = "https://reqres.in/api/users/";

  constructor(private httpClient: HttpClient) { }

  getAll(): Promise<any> {
    //http devuelve siempre un observable, lo convertimos a promesa con el metodo lastValueFrom()
    return lastValueFrom(this.httpClient.get<any>(this.baseUrl))
  }

}
