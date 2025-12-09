import { Component } from '@angular/core';

@Component({
  selector: 'app-agregar-tarea',
  imports: [],
  templateUrl: './agregar-tarea.html',
  styleUrl: './agregar-tarea.css',
})
export class AgregarTarea {
  tarea: string = '';

  agregarTarea(muevaTarea: string): void {
    this.tarea = muevaTarea;
  }
}
