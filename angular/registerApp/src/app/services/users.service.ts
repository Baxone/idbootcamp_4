import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseUrl: string = 'https://register-codehouse-app.herokuapp.com/';
  constructor(private httpClient: HttpClient) { }


  registerUser(pFormValue: any): Promise<any> {
    return lastValueFrom(this.httpClient.post<any>(this.baseUrl + 'register', pFormValue))
  }


  login(pFormValue: any): Promise<User | any> {
    return lastValueFrom(this.httpClient.post<User | any>(this.baseUrl + 'login', pFormValue))
  }


  getPremio(pToken: string): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'user-token': pToken
      })
    }
    return lastValueFrom(this.httpClient.get<any>(this.baseUrl + 'premio', httpOptions))
  }
}
