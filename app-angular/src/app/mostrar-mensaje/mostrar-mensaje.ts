import { Component } from '@angular/core';

@Component({
  selector: 'app-mostrar-mensaje',
  imports: [],
  templateUrl: './mostrar-mensaje.html',
  styleUrl: './mostrar-mensaje.css',
})
export class MostrarMensaje {

  mensaje: string = '';

  mostrarMensaje() {
    this.mensaje = 'Hola, has hecho click en el boton!'
  }

  resetearMensaje() {
    this.mensaje = '';
  }
}
