import { TestBed, inject } from '@angular/core/testing';

import { EventoNegociosServiceService } from './evento-negocios-service.service';

describe('EventoNegociosServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventoNegociosServiceService]
    });
  });

  it('should be created', inject([EventoNegociosServiceService], (service: EventoNegociosServiceService) => {
    expect(service).toBeTruthy();
  }));
});
