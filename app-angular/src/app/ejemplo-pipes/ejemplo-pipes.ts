import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplo-pipes',
  imports: [CommonModule],
  templateUrl: './ejemplo-pipes.html',
  styleUrl: './ejemplo-pipes.css',
})
export class EjemploPipes {
  empleados = [
    { nombre: 'Johan Diaz', edad: 27, sueldo: 15000, fechaNacimiento: new Date('1998-11-19') },
    { nombre: 'Sebastian Vasquez', edad: 25, sueldo: 150000, fechaNacimiento: new Date('1998-11-17') },
    { nombre: 'Orlando Suarez', edad: 45, sueldo: 1500, fechaNacimiento: new Date('1978-12-17') },
  ];
}
