import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Cliente } from '../interfaces/cliente.interface';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getAll(): Promise<Cliente[]> {
    return lastValueFrom(
      this.httpClient.get<Cliente[]>('http://localhost:3000/api/clientes')
    );
  }

}
