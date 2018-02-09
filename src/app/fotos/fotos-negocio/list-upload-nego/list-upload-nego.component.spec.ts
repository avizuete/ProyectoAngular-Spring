import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUploadNegoComponent } from './list-upload-nego.component';

describe('ListUploadNegoComponent', () => {
  let component: ListUploadNegoComponent;
  let fixture: ComponentFixture<ListUploadNegoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListUploadNegoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUploadNegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
