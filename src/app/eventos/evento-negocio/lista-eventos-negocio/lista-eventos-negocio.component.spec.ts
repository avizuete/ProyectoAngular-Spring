import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEventosNegocioComponent } from './lista-eventos-negocio.component';

describe('ListaEventosNegocioComponent', () => {
  let component: ListaEventosNegocioComponent;
  let fixture: ComponentFixture<ListaEventosNegocioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaEventosNegocioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaEventosNegocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
