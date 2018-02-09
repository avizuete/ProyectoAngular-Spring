import { TestBed, inject } from '@angular/core/testing';

import { UploadFileNegoService } from './upload-file-nego.service';

describe('UploadFileNegoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UploadFileNegoService]
    });
  });

  it('should be created', inject([UploadFileNegoService], (service: UploadFileNegoService) => {
    expect(service).toBeTruthy();
  }));
});
