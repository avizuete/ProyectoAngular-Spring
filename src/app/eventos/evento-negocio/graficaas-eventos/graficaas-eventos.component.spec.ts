import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaasEventosComponent } from './graficaas-eventos.component';

describe('GraficaasEventosComponent', () => {
  let component: GraficaasEventosComponent;
  let fixture: ComponentFixture<GraficaasEventosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficaasEventosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaasEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
