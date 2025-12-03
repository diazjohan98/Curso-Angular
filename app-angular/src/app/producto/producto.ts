import { Component } from '@angular/core';
import { ListadoProducto } from "./listado-producto/listado-producto";

@Component({
  selector: 'app-producto',
  imports: [ListadoProducto],
  templateUrl: './producto.html',
  styleUrl: './producto.css',
})
export class Producto {
  titulo = 'Tienda Online'
}
