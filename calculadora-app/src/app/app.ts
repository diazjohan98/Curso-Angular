import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Calculdora } from './calculdora/calculdora';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Calculdora],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  titulo = "App Calculadora"
}
