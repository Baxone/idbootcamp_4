import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  //el servicio necesita conectarse a un API_REST. Para ello tenemos que importar el module HttpClientModule dentro de app.module. Y posteriormente inyector dentro del servicio HttpClient
  private baseUrl: string = "https://reqres.in/api/users/";

  constructor(private httpClient: HttpClient) { }

  getAll(): Promise<any> {
    //http devuelve siempre un observable, lo convertimos a promesa con el metodo lastValueFrom()
    return lastValueFrom(this.httpClient.get<any>(this.baseUrl))
  }

  delete(pId: number): Promise<any> {
    return lastValueFrom(this.httpClient.delete<any>(this.baseUrl + pId))
  }


  create(pForm: any): Promise<User> {
    //cabeceras validacion en un Api-rest validan la peticion del usuario y le permiten obtener el dato, es decir en alguna apis privadas no podemos hacer una peticion si no enviamos las cabeceras. Interceptors
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-type": "application/json",
      })
    }

    return lastValueFrom(this.httpClient.post<User>(this.baseUrl, pForm, httpOptions))
  }

  getById(pId: string): Promise<any> {
    return lastValueFrom(this.httpClient.get<any>(this.baseUrl + pId))
  }

  update(pForm: any): Promise<any> {
    return lastValueFrom(this.httpClient.put<any>(this.baseUrl + pForm.id, pForm))
  }


}
