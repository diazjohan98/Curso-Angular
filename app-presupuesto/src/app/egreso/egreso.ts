import { Component, Input } from '@angular/core';
import { EgresosModel } from './egreso.model';
import { EgresoService } from './egreso.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-egreso',
  imports: [ CommonModule ],
  templateUrl: './egreso.html',
  styleUrl: './egreso.css',
})
export class Egreso {

  egresos: EgresosModel[] = [];
  @Input() ingresoTotal!: number;

  constructor(private egresoService: EgresoService) {
    this.egresos = this.egresoService.egresos;
  }

  eliminarEgreso(egreso: EgresosModel) {
    this.egresoService.eliminar(egreso)
  }

  calcularPorcentaje(egreso: EgresosModel){
    return egreso.valor / this.ingresoTotal;
  }
}
