import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IngresoService } from '../ingreso/ingreso.service';
import { EgresoService } from '../egreso/egreso.service';
import { IngresoModel } from '../ingreso/ingreso.model';
import { EgresosModel } from '../egreso/egreso.model';

@Component({
  selector: 'app-formulario',
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class Formulario {
  tipo: string = 'ingresoOperacion';

  descripcionInput: string | null = null;
  valorInput: number | null = null;

  constructor(private ingresoServicio: IngresoService, private egresoServicio: EgresoService) {}

  tipoOperacion(evento: Event) {
    const elementoSelect = evento.target as HTMLSelectElement;
    this.tipo = elementoSelect.value;
  }

  agregarValor() {
    if (this.descripcionInput != null && this.valorInput != null) {
      if (this.tipo === 'ingresoOperacion') {
        this.ingresoServicio.ingresos.push(
          new IngresoModel(this.descripcionInput, this.valorInput)
        );
      }
      else{
        this.egresoServicio.egresos.push(
          new EgresosModel(this.descripcionInput, this.valorInput)
        )
      }
    }
    else {
      console.log ('Por favor ingrese una descripción y un valor válido.');;
    }
    this.descripcionInput = null;
    this.valorInput = null;
  }
}
