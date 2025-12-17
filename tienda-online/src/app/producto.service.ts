import { EventEmitter, Injectable } from '@angular/core';
import { Producto } from './producto/producto.model';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
    productos: Producto[] = [
      new Producto('Camisa', 20),
      new Producto('Pantalones', 40),
      new Producto('Zapatos', 60),
    ];

    detalleProductoEmiter = new EventEmitter<Producto>();

    agregarProducto(producto: Producto) {
    this.productos.push(producto);
  }
}
