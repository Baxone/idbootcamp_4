import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  private baseUrl: string = 'https://www.breakingbadapi.com/api/characters/'
  constructor(private httpClient: HttpClient) { }

  getAll(pUrl: string = this.baseUrl): Promise<Character[]> {
    return lastValueFrom(this.httpClient.get<Character[]>(pUrl))
  }


  getById(pId: string): Observable<Character[]> {
    return this.httpClient.get<Character[]>(this.baseUrl + pId);
  }


  getByName(pName: string): Promise<Character[]> {
    return lastValueFrom(this.httpClient.get<Character[]>(`${this.baseUrl}?name=${pName}`))
  }
}
