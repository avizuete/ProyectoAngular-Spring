import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsUploadNegoComponent } from './details-upload-nego.component';

describe('DetailsUploadNegoComponent', () => {
  let component: DetailsUploadNegoComponent;
  let fixture: ComponentFixture<DetailsUploadNegoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsUploadNegoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsUploadNegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
