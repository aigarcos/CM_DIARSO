import { Injectable } from '@angular/core';
import { Paciente, Examen, OrdenExamen, Resultado, Pago, MetodoPago, TipoServicio, DetallePago } from '../modelos/modelos';

@Injectable({
  providedIn: 'root'
})
export class MockDatosService {
  private pacientes: Paciente[] = [
    { idPa: 1, DNI: 12345678, nombres: 'Juan', apellidos: 'Pérez', correo: 'juan@mail.com', telefono: 987654321 },
    { idPa: 2, DNI: 87654321, nombres: 'Ana', apellidos: 'Gómez', correo: 'ana@mail.com', telefono: 912345678 }
  ];

  private examenes: Examen[] = [
    { IdExa: 1, TipoExa: 'Sangre', Descripcion: 'Hemograma', Caracteristicas: 'Ayuno' },
    { IdExa: 2, TipoExa: 'Orina', Descripcion: 'Uroanálisis', Caracteristicas: 'Muestra fresca' }
  ];

  private especialidades: TipoServicio[] = [
    { IdServ: 1, IdTipoSev: 1, nomTipoServ: 'Consulta', nomServ: 'Medicina General', detalleSev: 'Consulta general', precioServ: 50 },
    { IdServ: 2, IdTipoSev: 1, nomTipoServ: 'Consulta', nomServ: 'Pediatría', detalleSev: 'Consulta pediátrica', precioServ: 60 },
    { IdServ: 3, IdTipoSev: 1, nomTipoServ: 'Consulta', nomServ: 'Cardiología', detalleSev: 'Consulta cardiológica', precioServ: 80 }
  ];

  private medicos = [
    { id: 1, nombres: 'Carlos', apellidos: 'Ramírez', especialidad: 'Medicina General', cmp: 'CMP12345' },
    { id: 2, nombres: 'Lucía', apellidos: 'Fernández', especialidad: 'Pediatría', cmp: 'CMP54321' },
    { id: 3, nombres: 'Miguel', apellidos: 'Soto', especialidad: 'Cardiología', cmp: 'CMP67890' }
  ];

  getPacientes(): Paciente[] {
    return this.pacientes;
  }

  getExamenes(): Examen[] {
    return this.examenes;
  }

  getEspecialidades(): TipoServicio[] {
    return this.especialidades;
  }

  getMedicos() {
    return this.medicos;
  }
}
