import { Component } from '@angular/core';
import { DatePipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu-principal',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './menu-principal.component.html',
  styleUrl: './menu-principal.component.css'
})
export class MenuPrincipalComponent {
  fechaActual: Date = new Date();
  horaActual: string = '';

  constructor() {
    this.actualizarHora();
    setInterval(() => this.actualizarHora(), 1000);
  }

  actualizarHora() {
    const ahora = new Date();
    this.fechaActual = ahora;
    this.horaActual = ahora.toLocaleTimeString();
  }
}
