import { Component } from '@angular/core';
import { Producto } from '../producto/producto.model';
import { FormsModule } from '@angular/forms';
import { Formulario } from '../formulario/formulario';
import { ProductoComponent } from '../producto/producto';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-listado-productos',
  imports: [FormsModule, Formulario, ProductoComponent],
  templateUrl: './listado-productos.html',
  styleUrl: './listado-productos.css',
})
export class ListadoProductos {
  productos: Producto[] = [];

  constructor(private productoService: ProductoService) {
    this.productoService.detalleProductoEmiter.subscribe(
      (producto: Producto)=> alert(`Producto: ${producto.descripcion}, $${producto.precio}`));
  }
  
  ngOnInit(){
    this.productos = this.productoService.productos;
  }
}
