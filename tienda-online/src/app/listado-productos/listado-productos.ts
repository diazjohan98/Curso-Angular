import { Component } from '@angular/core';
import { Producto } from '../producto/producto.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-listado-productos',
  imports: [FormsModule],
  templateUrl: './listado-productos.html',
  styleUrl: './listado-productos.css',
})
export class ListadoProductos {
  productos: Producto[] = [
    new Producto('Camisa', 20),
    new Producto('Pantalones', 40),
    new Producto('Zapatos', 60),
  ];

  descripcionInput: string = '';
  precioInput: number | null = null;

  agregarProducto(nuevoProducto: Producto): void {
    if (this.descripcionInput.trim() === '' || this.precioInput == null || this.precioInput <= 0) {
      console.log('Debe ingresar una descripcion y uh precio validos');
      return;
    }

    const producto = new Producto(this.descripcionInput, this.precioInput);
    this.productos.push(producto);

    this.descripcionInput = '';
    this.precioInput = null;
  }

  // limpiar campos
}
