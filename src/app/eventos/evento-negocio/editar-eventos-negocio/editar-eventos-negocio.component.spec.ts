import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarEventosNegocioComponent } from './editar-eventos-negocio.component';

describe('EditarEventosNegocioComponent', () => {
  let component: EditarEventosNegocioComponent;
  let fixture: ComponentFixture<EditarEventosNegocioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarEventosNegocioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarEventosNegocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
