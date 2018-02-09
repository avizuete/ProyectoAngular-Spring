import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUploadUsuComponent } from './list-upload-usu.component';

describe('ListUploadUsuComponent', () => {
  let component: ListUploadUsuComponent;
  let fixture: ComponentFixture<ListUploadUsuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListUploadUsuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUploadUsuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
