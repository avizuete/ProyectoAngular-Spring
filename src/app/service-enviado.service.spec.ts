import { TestBed, inject } from '@angular/core/testing';

import { ServiceEnviadoService } from './service-enviado.service';

describe('ServiceEnviadoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceEnviadoService]
    });
  });

  it('should be created', inject([ServiceEnviadoService], (service: ServiceEnviadoService) => {
    expect(service).toBeTruthy();
  }));
});
