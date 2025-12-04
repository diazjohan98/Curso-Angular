import { Component } from '@angular/core';

@Component({
  selector: 'app-hijo',
  imports: [],
  templateUrl: './hijo.html',
  styleUrl: './hijo.css',
})
export class Hijo {
  private titulo = ' Titulo componente hijo'

  // Geter de Typescript
  get mostrarTitulo() {
    return this.titulo;
  }

  geTitulo() {
    return this.titulo;
  }
}
