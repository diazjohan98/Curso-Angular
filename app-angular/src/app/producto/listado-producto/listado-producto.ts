import { Component } from '@angular/core';

@Component({
  selector: 'app-listado-producto',
  imports: [],
  templateUrl: './listado-producto.html',
  styleUrl: './listado-producto.css',
})
export class ListadoProducto {
  titulo = 'Listado de Productos';
  listadoProductos = {
    producto1: 'Nuevo Producto',
    precio: 100,
  };
}
