import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cabecero } from './cabecero/cabecero';
import { Formulario } from './formulario/formulario';
import { Ingreso } from './ingreso/ingreso';
import { IngresoModel } from './ingreso/ingreso.model';
import { Egreso } from './egreso/egreso';
import { EgresosModel } from './egreso/egreso.model';
import { EgresoService } from './egreso/egreso.service';
import { IngresoService } from './ingreso/ingreso.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Cabecero, Formulario, Ingreso, Egreso],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  ingresos: IngresoModel[] = [];
  egresos: EgresosModel[] = [];

  constructor(
    private ingresoServicio: IngresoService, 
    private egresoServicio: EgresoService) {
      this.ingresos = this.ingresoServicio.ingresos;
      this.egresos = this.egresoServicio.egresos;
    }

    getIngresoTotal() {
      let ingresoTotal: number = 0;
      this.ingresos.forEach(ingreso => {
        ingresoTotal += ingreso.valor;
      });
      return ingresoTotal;
    }

    getEgresoTotal() {
      let egresoTotal: number = 0;
      this.egresos.forEach(egreso => {
        egresoTotal += egreso.valor;
      });
      return egresoTotal;
    }

    getPorcentajeTotal() {
      return this.getEgresoTotal() / this.getIngresoTotal();
    }

    getPresupuestoTotal() {
      return this.getIngresoTotal() - this.getEgresoTotal();
    }
}
