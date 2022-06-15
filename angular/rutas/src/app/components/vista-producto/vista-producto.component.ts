import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/interfaces/producto';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-vista-producto',
  templateUrl: './vista-producto.component.html',
  styleUrls: ['./vista-producto.component.css']
})
export class VistaProductoComponent implements OnInit {

  producto: Producto | any;
  constructor(
    private productosService: ProductosService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {

    //cuando cargue el componente necesito el id de producto, este me viene en la ruta. Para poder sacar el id producto de la ruta, necesito capturar la ruta activa. ActivatedRoute es un injectable

    this.activatedRoute.params.subscribe(params => {
      let id = parseInt(params['idproduct']);

      this.producto = this.productosService.getById(id)

    })


  }

}
