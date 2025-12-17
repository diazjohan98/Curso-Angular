import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Formulario } from '../formulario/formulario';
import { Resultado } from '../resultado/resultado';

@Component({
  selector: 'app-calculdora',
  imports: [FormsModule, Formulario, Resultado],
  templateUrl: './calculdora.html',
  styleUrl: './calculdora.css',
})
export class Calculdora {
  resultadoPadre: number = 0;

  procesarResultado(resultadoHijo: number) {
    this.resultadoPadre = resultadoHijo;
  }
}
