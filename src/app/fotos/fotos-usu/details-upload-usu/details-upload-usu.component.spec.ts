import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsUploadUsuComponent } from './details-upload-usu.component';

describe('DetailsUploadUsuComponent', () => {
  let component: DetailsUploadUsuComponent;
  let fixture: ComponentFixture<DetailsUploadUsuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsUploadUsuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsUploadUsuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
