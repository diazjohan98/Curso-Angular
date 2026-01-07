import { Component } from '@angular/core';
import { RouterLink, RouterModule } from "@angular/router";

@Component({
  selector: 'app-error',
  imports: [RouterLink, RouterModule],
  templateUrl: './error.html',
  styleUrl: './error.css',
})
export class Error {

}
