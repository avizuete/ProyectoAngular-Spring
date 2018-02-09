import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUploadUsuComponent } from './form-upload-usu.component';

describe('FormUploadUsuComponent', () => {
  let component: FormUploadUsuComponent;
  let fixture: ComponentFixture<FormUploadUsuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormUploadUsuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormUploadUsuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
