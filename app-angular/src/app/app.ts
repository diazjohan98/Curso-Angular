import { Component, signal, Inject, LOCALE_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NuevoComponente } from './nuevo-componente/nuevo-componente';
import { ComponenteInline } from './componente-inline/componente-inline';
import { Interpolacion } from './interpolacion/interpolacion';
import { Padre } from './padre/padre';
import { Producto } from './producto/producto';
import { MostrarMensaje } from './mostrar-mensaje/mostrar-mensaje';
import { Replicador } from './replicador/replicador';
import { Saludar } from './saludar/saludar';
import { ComponenteIf } from './componente-if/componente-if';
import { AgregarTarea } from './agregar-tarea/agregar-tarea';
import { ComponenteFor } from './componente-for/componente-for';
import { ViewChildComponent } from './view-child/view-child';
import { Mensaje } from './mensaje.service';
import { ListadoUsuarios } from './listado-usuarios/listado-usuarios';
import { EjemploPipes } from './ejemplo-pipes/ejemplo-pipes';
import { registerLocaleData } from '@angular/common';
import localeES from '@angular/common/locales/es';

registerLocaleData(localeES, 'es');

@Component({
  selector: 'app-root',
  imports: [
    NuevoComponente,
    ComponenteInline,
    Interpolacion,
    Padre,
    Producto,
    MostrarMensaje,
    Replicador,
    Saludar,
    ComponenteIf,
    AgregarTarea,
    ComponenteFor,
    ViewChildComponent,
    ListadoUsuarios,
    EjemploPipes,
  ],
  providers: [{provide: LOCALE_ID, useValue: 'es'}],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'Johan es un DIOS del Angular';

  mensaje: string;
  constructor(mensajeService: Mensaje) {
    this.mensaje = mensajeService.obtenerMensaje();
  }
}
