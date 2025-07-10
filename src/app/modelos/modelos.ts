export interface Paciente {
  idPa: number;
  DNI: number;
  nombres: string;
  apellidos: string;
  correo: string;
  telefono: number;
}

export interface Examen {
  IdExa: number;
  TipoExa: string;
  Descripcion: string;
  Caracteristicas: string;
}

export interface OrdenExamen {
  id: number;
  doctor: string;
  fecha: string;
  paciente: string;
  dni: number;
  resultados: string;
}

export interface Resultado {
  idRes: number;
  Analisis: string;
  Examen: string;
  Archivo: string;
}

export interface Pago {
  IdPago: number;
  fecha: string;
  subtotal: number;
  Igv: number;
  total: number;
}

export interface MetodoPago {
  IdMetodo: number;
  nomMetodo: string;
}

export interface TipoServicio {
  IdServ: number;
  IdTipoSev: number;
  nomTipoServ: string;
  nomServ: string;
  detalleSev: string;
  precioServ: number;
}

export interface DetallePago {
  IdDetalle: number;
  cantidad: number;
  precioUnitario: number;
  importe: number;
}
