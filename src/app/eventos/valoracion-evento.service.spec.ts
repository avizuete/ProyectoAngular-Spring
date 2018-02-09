import { TestBed, inject } from '@angular/core/testing';

import { ValoracionEventoService } from './valoracion-evento.service';

describe('ValoracionEventoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValoracionEventoService]
    });
  });

  it('should be created', inject([ValoracionEventoService], (service: ValoracionEventoService) => {
    expect(service).toBeTruthy();
  }));
});
