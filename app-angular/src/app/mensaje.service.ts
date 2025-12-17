import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Mensaje {

  private mensaje : string = 'Hola desde el servicio Mensaje';

  constructor() { }
  
  obtenerMensaje(): string {
    return this.mensaje;
  }

}
