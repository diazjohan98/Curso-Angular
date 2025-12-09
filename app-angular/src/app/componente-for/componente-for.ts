import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-for',
  imports: [],
  templateUrl: './componente-for.html',
  styleUrl: './componente-for.css',
})
export class ComponenteFor {
  tareas: string[] = ['Aprender angular', 'Desarrollar una app', 'Aprender TypeScript'];

  agrefarTarea(nuevaTarea: string): void {
    if (nuevaTarea) {
      this.tareas.push(nuevaTarea);
    }
  }
}
