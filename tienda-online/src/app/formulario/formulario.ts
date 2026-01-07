import { Component } from '@angular/core';
import { Producto } from '../producto/producto.model';
import { FormsModule } from '@angular/forms';
import { ProductoService } from '../producto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class Formulario {
  productoId: number | null = null;
  descripcionInput: string = '';
  precioInput: number | null = null;

  constructor(
    private productoService: ProductoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const producto = this.productoService.getProductoById(Number(id));
      if (producto) {
        this.productoId = producto.id;
        this.descripcionInput = producto.descripcion;
        this.precioInput = producto.precio;
      }
    }
  }

  guardarProducto(evento: Event) {
    evento.preventDefault();

    if (this.descripcionInput.trim() === '' || this.precioInput == null || this.precioInput <= 0) {
      console.log('Debe ingresar una descripcion y uh precio validos');
      return;
    }

    const producto = new Producto(this.productoId, this.descripcionInput, this.precioInput);

    //Agregamos el nuevo producto al servicio 
    this.productoService.guardarProducto(producto);

    //Limpiamos el formulario
    this.limpiarFormulario();

    // Redirgir al inicio
    this.router.navigate(['/']);
  }

  cancelar() {
    this.router.navigate(['/']);
  }

  eliminarProducto() {
    if (this.productoId != null) {
      this.productoService.eliminarProducto(this.productoId);
      this.limpiarFormulario();
      this.router.navigate(['/']);
    }
  }

  limpiarFormulario() {
    this.productoId = null;
    this.descripcionInput = '';
    this.precioInput = null;
  }
}
