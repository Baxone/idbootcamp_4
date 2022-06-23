import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  baseUrl: string = "https://rickandmortyapi.com/api/character/"
  constructor(private httpClient: HttpClient) { }

  getAllData(pPage: string = this.baseUrl): Observable<any> {
    //obserables no se convierten en promesas se gestionan con suscribe
    return this.httpClient.get<any>(pPage)
  }

  getByName(pSearch: string): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl + '?name=' + pSearch);
  }

}
