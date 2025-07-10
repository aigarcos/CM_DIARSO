import { TestBed } from '@angular/core/testing';

import { MockDatosService } from './mock-datos.service';

describe('MockDatosService', () => {
  let service: MockDatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockDatosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
