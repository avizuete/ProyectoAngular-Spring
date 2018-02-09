import { TestBed, inject } from '@angular/core/testing';

import { EventoUsuariosServiceService } from './evento-usuarios-service.service';

describe('EventoUsuariosServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventoUsuariosServiceService]
    });
  });

  it('should be created', inject([EventoUsuariosServiceService], (service: EventoUsuariosServiceService) => {
    expect(service).toBeTruthy();
  }));
});
