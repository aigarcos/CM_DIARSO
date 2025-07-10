import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerarConsultaComponent } from './generar-consulta.component';

describe('GenerarConsultaComponent', () => {
  let component: GenerarConsultaComponent;
  let fixture: ComponentFixture<GenerarConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenerarConsultaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerarConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
