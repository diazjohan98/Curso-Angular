import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculdora',
  imports: [FormsModule],
  templateUrl: './calculdora.html',
  styleUrl: './calculdora.css',
})
export class Calculdora {
  operandoA: number = 0;
  operandoB: number = 0;
  resultado: number = 0;
  reset: boolean = false; 

  sumar() {
    this.resultado = this.operandoA + this.operandoB;
  }
  restar () {
    this.resultado = this.operandoA - this.operandoB;
  }
  multi() {
    this.resultado = this.operandoA * this.operandoB;
  }
  dividir() {
    if (this.operandoB !== 0) {
      this.resultado = this.operandoA / this.operandoB;
    }
  }

  limpiar() {
    this.operandoA = 0;
    this.operandoB = 0;
    this.resultado = 0;
    this.reset = true;
  }
}
