import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface PacienteExamen {
  id: number;
  doctor: string;
  dni: string;
  paciente: string;
  fecha: string;
  estado: 'pendiente' | 'terminado';
}

interface ExamenPaciente {
  id: number;
  analisis: string;
  examen: string;
}

@Component({
  selector: 'app-registrar-examenes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registrar-examenes.component.html',
  styleUrl: './registrar-examenes.component.css'
})
export class RegistrarExamenesComponent {
  mostrarDetalle = false;
  pacientes: PacienteExamen[] = [
    { id: 1, doctor: 'Juan', dni: '18653274', paciente: 'Carlos Bilca', fecha: '2025-04-11', estado: 'pendiente' },
    { id: 2, doctor: 'Jorge', dni: '74968512', paciente: 'Susab Cuadras', fecha: '2025-04-21', estado: 'pendiente' },
    { id: 3, doctor: 'Carlos', dni: '95123374', paciente: 'Pablo Sanchez', fecha: '2025-04-06', estado: 'terminado' },
    { id: 4, doctor: 'Pablo', dni: '74223954', paciente: 'David Quispe', fecha: '2025-04-18', estado: 'pendiente' }
  ];
  examenesPorPaciente: { [key: number]: ExamenPaciente[] } = {
    1: [
      { id: 1, analisis: 'Examenes de sangre', examen: 'Glucosa' },
      { id: 2, analisis: 'Examenes de sangre', examen: 'Plaquetas' }
    ],
    2: [
      { id: 1, analisis: 'Orina', examen: 'pH' },
      { id: 2, analisis: 'Orina', examen: 'Proteínas' }
    ],
    3: [
      { id: 1, analisis: 'COVID-19', examen: 'PCR' }
    ],
    4: [
      { id: 1, analisis: 'Examenes de sangre', examen: 'Hemoglobina' }
    ]
  };
  busquedaDni = '';
  pacientesFiltrados: PacienteExamen[] = this.pacientes;
  pacienteActual: PacienteExamen | null = null;
  examenesActual: ExamenPaciente[] = [];
  examenesFiltrados: ExamenPaciente[] = [];
  busquedaExamen = '';
  modalExito = false;

  buscarPorDNI() {
    const valor = this.busquedaDni.trim();
    if (valor === '') {
      this.pacientesFiltrados = this.pacientes;
      return;
    }
    this.pacientesFiltrados = this.pacientes.filter(p => p.dni.includes(valor));
  }

  abrirDetalle(p: PacienteExamen) {
    this.pacienteActual = p;
    this.examenesActual = this.examenesPorPaciente[p.id] || [];
    this.examenesFiltrados = this.examenesActual;
    this.busquedaExamen = '';
    this.mostrarDetalle = true;
  }

  volver() {
    this.mostrarDetalle = false;
    this.pacienteActual = null;
    this.examenesActual = [];
    this.examenesFiltrados = [];
    this.busquedaExamen = '';
  }

    filtrarExamenes() {
    const texto = this.busquedaExamen.toLowerCase();
    if (texto === '') {
      this.examenesFiltrados = this.examenesActual;
      return;
    }
    this.examenesFiltrados = this.examenesActual.filter(
      ex =>
        ex.id.toString().includes(texto) ||
        ex.analisis.toLowerCase().includes(texto) ||
        ex.examen.toLowerCase().includes(texto)
    );
  }

  guardar() {
    this.modalExito = true;
  }

  cerrarModalExito() {
    this.modalExito = false;
  }
}
