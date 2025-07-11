import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MockDatosService } from '../servicios/mock-datos.service';
import { Paciente, TipoServicio } from '../modelos/modelos';

@Component({
  selector: 'app-registrar-cita',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registrar-cita.component.html',
  styleUrl: './registrar-cita.component.css'
})
export class RegistrarCitaComponent implements OnInit {
  pacientes: Paciente[] = [];
  pacienteSeleccionado: Paciente | null = null;
  pacienteIndex: number = 0;

  especialidades: TipoServicio[] = [];
  especialidad: string = '';
  medico: string = '';
  fecha: string = '';
  hora: string = '';

  mostrarModalPaciente = false;
  busquedaPaciente = '';
  pacientesFiltrados: Paciente[] = [];

  medicos: any[] = [];
  medicoSeleccionado: any = null;
  mostrarModalMedico = false;
  busquedaMedico = '';
  medicosFiltrados: any[] = [];
  modalExito = false;

  constructor(private datosService: MockDatosService) {}

  ngOnInit() {
    this.pacientes = this.datosService.getPacientes();
    this.especialidades = this.datosService.getEspecialidades().filter(e => e.IdTipoSev === 1);
    this.pacientesFiltrados = this.pacientes;
    this.medicos = this.datosService.getMedicos();
    this.medicosFiltrados = this.medicos;
  }

  abrirModalPaciente() {
    this.filtrarPacientes(); // Filtra usando el texto ya escrito
    this.mostrarModalPaciente = true;
  }

  cerrarModalPaciente() {
    this.mostrarModalPaciente = false;
  }

  filtrarPacientes() {
    const texto = this.busquedaPaciente.toLowerCase();
    this.pacientesFiltrados = this.pacientes.filter(
      p =>
        p.DNI.toString().includes(texto) ||
        p.nombres.toLowerCase().includes(texto) ||
        p.apellidos.toLowerCase().includes(texto)
    );
  }

  seleccionarPaciente(p: Paciente) {
    this.pacienteSeleccionado = p;
    this.cerrarModalPaciente();
  }

  buscarPaciente() {
    this.pacienteSeleccionado = this.pacientes[this.pacienteIndex];
    alert('Paciente encontrado: ' + this.pacienteSeleccionado.nombres + ' ' + this.pacienteSeleccionado.apellidos);
  }

  buscarMedico() {
    alert('Búsqueda de médico: ' + this.medico);
  }

  abrirModalMedico() {
    this.filtrarMedicos();
    this.mostrarModalMedico = true;
  }

  cerrarModalMedico() {
    this.mostrarModalMedico = false;
  }

  filtrarMedicos() {
    const texto = this.busquedaMedico.toLowerCase();
    this.medicosFiltrados = this.medicos.filter(
      m =>
        m.nombres.toLowerCase().includes(texto) ||
        m.apellidos.toLowerCase().includes(texto) ||
        m.cmp.toLowerCase().includes(texto) ||
        m.especialidad.toLowerCase().includes(texto)
    );
  }

  seleccionarMedico(m: any) {
    this.medicoSeleccionado = m;
    this.medico = m.nombres + ' ' + m.apellidos;
    this.cerrarModalMedico();
  }

  registrarCita() {
    if (!this.pacienteSeleccionado || !this.especialidad || !this.medico || !this.fecha || !this.hora) {
      alert('Por favor, completa todos los campos.');
      return;
    }
    this.modalExito = true;
  }

  cerrarModalExito() {
    this.modalExito = false;
    // Limpiar formulario
    this.pacienteSeleccionado = null;
    this.busquedaPaciente = '';
    this.especialidad = '';
    this.medico = '';
    this.medicoSeleccionado = null;
    this.busquedaMedico = '';
    this.fecha = '';
    this.hora = '';
  }
}
