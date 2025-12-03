import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolacion',
  imports: [],
  templateUrl: './interpolacion.html',
  styleUrl: './interpolacion.css',
})
export class Interpolacion {
  titulo = 'Universidad angular'
  usuario = {
    nombre: 'Johan Diaz',
    edad: 27
  };

  saludar() {
    return `Hola, ${this.usuario.nombre}`;
  }
}
