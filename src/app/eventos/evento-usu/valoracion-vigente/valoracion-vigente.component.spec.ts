import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValoracionVigenteComponent } from './valoracion-vigente.component';

describe('ValoracionVigenteComponent', () => {
  let component: ValoracionVigenteComponent;
  let fixture: ComponentFixture<ValoracionVigenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValoracionVigenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValoracionVigenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
