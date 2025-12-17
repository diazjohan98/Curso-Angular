import { Component, ViewChild } from '@angular/core';
import { Hijo } from "./hijo/hijo";

@Component({
  selector: 'app-padre',
  imports: [Hijo],
  templateUrl: './padre.html',
  styleUrl: './padre.css',
})
export class Padre {
  // mensajePadre: string = "Mensaje desde el componente Padre";

  @ViewChild(Hijo)  componenteHijo!: Hijo;

  cambiarMensajeHijo() {
    this.componenteHijo.cambiarMensaje('Mensaje cambiado desde el componente Padre');
  }
}
