import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MockDatosService } from '../servicios/mock-datos.service';
import { Paciente } from '../modelos/modelos';

interface ServicioPago {
  id: string;
  tipo: number;
  nombre: string;
  tipoNombre: string;
  detalle: string;
  precio: number;
}

interface DetallePago {
  nombre: string;
  precio: number;
}

@Component({
  selector: 'app-realizar-pago',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './realizar-pago.component.html',
  styleUrl: './realizar-pago.component.css'
})
export class RealizarPagoComponent implements OnInit {
  // Pacientes
  pacientes: Paciente[] = [];
  pacienteSeleccionado: Paciente | null = null;
  mostrarModalPaciente = false;
  busquedaPaciente = '';
  pacientesFiltrados: Paciente[] = [];

  // Servicios y detalle
  serviciosBD: ServicioPago[] = [
    { id: 'SERV0001', tipo: 1, nombre: 'Consulta General', tipoNombre: 'Cita Médica', detalle: 'Evaluación médica básica', precio: 60 },
    { id: 'SERV0002', tipo: 1, nombre: 'Consulta Pediátrica', tipoNombre: 'Cita Médica', detalle: 'Para niños menores de 12', precio: 70 },
    { id: 'SERV0003', tipo: 1, nombre: 'Consulta Ginecológica', tipoNombre: 'Cita Médica', detalle: 'Salud femenina', precio: 80 },
    { id: 'SERV0004', tipo: 1, nombre: 'Consulta Cardiológica', tipoNombre: 'Cita Médica', detalle: 'Especialista en corazón', precio: 120 },
    { id: 'SERV0005', tipo: 1, nombre: 'Consulta Dermatológica', tipoNombre: 'Cita Médica', detalle: 'Cuidado de la piel', precio: 90 },
    { id: 'SERV0006', tipo: 1, nombre: 'Consulta Oftalmológica', tipoNombre: 'Cita Médica', detalle: 'Salud visual', precio: 85 },
    { id: 'SERV0007', tipo: 1, nombre: 'Consulta Neurológica', tipoNombre: 'Cita Médica', detalle: 'Sistema nervioso', precio: 150 },
    { id: 'SERV0008', tipo: 1, nombre: 'Consulta Endocrinológica', tipoNombre: 'Cita Médica', detalle: 'Hormonas y metabolismo', precio: 130 },
    { id: 'SERV0009', tipo: 1, nombre: 'Consulta Traumatológica', tipoNombre: 'Cita Médica', detalle: 'Huesos y articulaciones', precio: 100 },
    { id: 'SERV0010', tipo: 1, nombre: 'Consulta Urológica', tipoNombre: 'Cita Médica', detalle: 'Sistema urinario', precio: 110 },
    { id: 'SERV0011', tipo: 2, nombre: 'Hemograma Completo', tipoNombre: 'Examen', detalle: 'Análisis de sangre', precio: 45 },
    { id: 'SERV0012', tipo: 2, nombre: 'Perfil Lipídico', tipoNombre: 'Examen', detalle: 'Colesterol y triglicéridos', precio: 50 },
    { id: 'SERV0013', tipo: 2, nombre: 'Glucosa en Sangre', tipoNombre: 'Examen', detalle: 'Nivel de azúcar', precio: 25 },
    { id: 'SERV0014', tipo: 2, nombre: 'Examen de Orina', tipoNombre: 'Examen', detalle: 'Evaluación urinaria', precio: 30 },
    { id: 'SERV0015', tipo: 2, nombre: 'Radiografía de Tórax', tipoNombre: 'Examen', detalle: 'Imagen pulmonar', precio: 80 },
    { id: 'SERV0016', tipo: 2, nombre: 'Electrocardiograma', tipoNombre: 'Examen', detalle: 'Actividad del corazón', precio: 70 },
    { id: 'SERV0017', tipo: 2, nombre: 'Ecografía Abdominal', tipoNombre: 'Examen', detalle: 'Visualización de órganos', precio: 90 },
    { id: 'SERV0018', tipo: 2, nombre: 'Prueba de Embarazo', tipoNombre: 'Examen', detalle: 'Confirmación de gestación', precio: 20 },
    { id: 'SERV0019', tipo: 2, nombre: 'Prueba de VIH', tipoNombre: 'Examen', detalle: 'Detección del virus', precio: 35 },
    { id: 'SERV0020', tipo: 2, nombre: 'Prueba COVID-19', tipoNombre: 'Examen', detalle: 'Detección de coronavirus', precio: 60 },
  ];
  tipoServicio = 1;
  detalleServicio = '';
  serviciosFiltrados: ServicioPago[] = [];
  detalle: DetallePago[] = [];
  mensajeExito = '';
  metodoPago = { efectivo: false, tarjeta: false };
  modalExito = false;

  constructor(private datosService: MockDatosService) {}

  ngOnInit() {
    this.pacientes = this.datosService.getPacientes();
    this.pacientesFiltrados = this.pacientes;
    this.filtrarServicios();
  }

  abrirModalPaciente() {
    this.filtrarPacientes();
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

  filtrarServicios() {
    this.serviciosFiltrados = this.serviciosBD.filter(s => s.tipo === this.tipoServicio);
    this.detalleServicio = '';
  }

  agregarServicio() {
    const servicio = this.serviciosFiltrados.find(s => s.id === this.detalleServicio);
    if (!servicio) return;
    this.detalle.push({ nombre: `${servicio.tipoNombre} - ${servicio.nombre}`, precio: servicio.precio });
    this.detalleServicio = '';
  }

  eliminarServicio(idx: number) {
    this.detalle.splice(idx, 1);
  }

  get subtotal() {
    return this.detalle.reduce((acc, s) => acc + s.precio, 0);
  }
  get igv() {
    return +(this.subtotal * 0.18).toFixed(2);
  }
  get total() {
    return +(this.subtotal + this.igv).toFixed(2);
  }

  confirmarPago() {
    this.modalExito = true;
  }

  cerrarModalExito() {
    this.modalExito = false;
    // Limpiar formulario
    this.pacienteSeleccionado = null;
    this.busquedaPaciente = '';
    this.detalle = [];
    this.tipoServicio = 1;
    this.detalleServicio = '';
    this.metodoPago = { efectivo: false, tarjeta: false };
    this.filtrarServicios();
  }
}
