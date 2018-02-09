import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUploadNegoComponent } from './form-upload-nego.component';

describe('FormUploadNegoComponent', () => {
  let component: FormUploadNegoComponent;
  let fixture: ComponentFixture<FormUploadNegoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormUploadNegoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormUploadNegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
