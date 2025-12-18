import { Injectable } from '@angular/core';
import { EgresosModel } from './egreso.model';

@Injectable({ providedIn: 'root' })
export class EgresoService {
  egresos: EgresosModel[] = [
    new EgresosModel('Renta Dpto', 100000),
    new EgresosModel('Ropa', 4000),
  ];

  eliminar(egreso: EgresosModel) {
    const indice: number = this.egresos.indexOf(egreso);
    this.egresos.splice(indice, 1);
  }
}
