import { TestBed, inject } from '@angular/core/testing';

import { UploadFileUsuService } from './upload-file-usu.service';

describe('UploadFileUsuService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UploadFileUsuService]
    });
  });

  it('should be created', inject([UploadFileUsuService], (service: UploadFileUsuService) => {
    expect(service).toBeTruthy();
  }));
});
