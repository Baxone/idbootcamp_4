import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  registerProduct: FormGroup

  constructor(
    private productosServices: ProductosService,
    private router: Router
  ) {

    this.registerProduct = new FormGroup({
      title: new FormControl('', []),
      price: new FormControl('', []),
      stock: new FormControl('', []),
      photo: new FormControl('', []),
    }, []);
  }

  ngOnInit(): void {
  }

  getDataForm() {
    let peticion = this.productosServices.addProduct(this.registerProduct.value);
    if (peticion) {
      //redirijo a productos
      this.router.navigate(['/productos'])

    } else {
      alert('el producto no se ha podido guardar, intentalo de nuevo')
    }
  }

}
