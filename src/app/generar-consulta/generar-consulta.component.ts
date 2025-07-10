import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-generar-consulta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './generar-consulta.component.html',
  styleUrl: './generar-consulta.component.css'
})
export class GenerarConsultaComponent {
  mostrarOrdenExamenes = false;
  mostrarRecetaMedica = false;

  @ViewChild('ordenExamenesBlock') ordenExamenesBlock!: ElementRef;
  @ViewChild('recetaMedicaBlock') recetaMedicaBlock!: ElementRef;

  abrirOrdenExamenes() {
    this.mostrarOrdenExamenes = true;
    this.mostrarRecetaMedica = false;
    setTimeout(() => {
      this.ordenExamenesBlock?.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  }

  abrirRecetaMedica() {
    this.mostrarRecetaMedica = true;
    this.mostrarOrdenExamenes = false;
    setTimeout(() => {
      this.recetaMedicaBlock?.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  }

  cerrarSubinterfaces() {
    this.mostrarOrdenExamenes = false;
    this.mostrarRecetaMedica = false;
  }
}
