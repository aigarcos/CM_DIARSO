import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  titulo = 'Centro Médico';
  seccionSeleccionada = 'Bienvenido';

  cambiarSeccion(seccion: string) {
    this.seccionSeleccionada = seccion;
  }
}
