import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarExamenesComponent } from './registrar-examenes.component';

describe('RegistrarExamenesComponent', () => {
  let component: RegistrarExamenesComponent;
  let fixture: ComponentFixture<RegistrarExamenesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrarExamenesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarExamenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
