import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValoracionEventoNegoComponent } from './valoracion-evento-nego.component';

describe('ValoracionEventoNegoComponent', () => {
  let component: ValoracionEventoNegoComponent;
  let fixture: ComponentFixture<ValoracionEventoNegoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValoracionEventoNegoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValoracionEventoNegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
