import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/interfaces/cliente.interface';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {

  arrClientes: Cliente[];

  constructor(
    private clientesService: ClienteService
  ) {
    this.arrClientes = [];
  }

  async ngOnInit() {
    this.arrClientes = await this.clientesService.getAll();
  }

}
