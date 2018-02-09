import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NegociosUpdateComponent } from './negocios-update.component';

describe('NegociosUpdateComponent', () => {
  let component: NegociosUpdateComponent;
  let fixture: ComponentFixture<NegociosUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NegociosUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NegociosUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
