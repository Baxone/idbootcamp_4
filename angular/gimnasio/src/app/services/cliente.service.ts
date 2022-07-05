import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Cliente } from '../interfaces/cliente.interface';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private baseUrl: string;

  constructor(
    private httpClient: HttpClient
  ) {
    this.baseUrl = 'http://localhost:3000/api/clientes';
  }

  getAll(): Promise<Cliente[]> {
    return lastValueFrom(
      this.httpClient.get<Cliente[]>(this.baseUrl)
    );
  }

  create(values: any): Promise<any> {
    return lastValueFrom(
      this.httpClient.post(this.baseUrl, values)
    );
  }

}
