import { Routes } from '@angular/router';
import { RegistrarCitaComponent } from './registrar-cita/registrar-cita.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { GenerarConsultaComponent } from './generar-consulta/generar-consulta.component';
import { RegistrarExamenesComponent } from './registrar-examenes/registrar-examenes.component';
import { RealizarPagoComponent } from './realizar-pago/realizar-pago.component';

export const routes: Routes = [
  { path: 'menu', component: MenuPrincipalComponent },
  { path: 'regcita', component: RegistrarCitaComponent },
  { path: 'genconsulta', component: GenerarConsultaComponent },
  { path: 'regexamenes', component: RegistrarExamenesComponent },
  { path: 'pago', component: RealizarPagoComponent },
  { path: '', redirectTo: '/menu', pathMatch: 'full' },
];
