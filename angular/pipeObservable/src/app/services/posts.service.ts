import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { Post } from '../interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private baseUrl: string = "https://jsonplaceholder.typicode.com/posts"
  constructor(private httpClient: HttpClient) { }

  /* Peticion como observable */
  getAll(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.baseUrl);
  }

  /* Peticion como promesas */
  getAllPromises(): Promise<Post[]> {
    return lastValueFrom(this.httpClient.get<Post[]>(this.baseUrl));
  }


}
