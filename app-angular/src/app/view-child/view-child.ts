import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-view-child',
  standalone: true,
  imports: [],
  templateUrl: './view-child.html',
  styleUrl: './view-child.css',
})
export class ViewChildComponent {
  @ViewChild('referenciaInput') InputElemento!: ElementRef;

  cambiarTexto() {
    this.InputElemento.nativeElement.value = 'Texto cambiado';
  }
}
