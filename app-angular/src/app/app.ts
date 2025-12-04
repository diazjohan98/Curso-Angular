import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NuevoComponente } from './nuevo-componente/nuevo-componente';
import { ComponenteInline } from './componente-inline/componente-inline';
import { Interpolacion } from "./interpolacion/interpolacion";
import { Padre } from './padre/padre';
import { Producto } from './producto/producto';
import { Hijo } from "./hijo/hijo";
import { MostrarMensaje } from "./mostrar-mensaje/mostrar-mensaje";

@Component({
  selector: 'app-root',
  imports: [NuevoComponente, ComponenteInline, Interpolacion, Padre, Producto, Hijo, MostrarMensaje],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Universidad Angular';
}
