import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoEventosNegocioComponent } from './nuevo-eventos-negocio.component';

describe('NuevoEventosNegocioComponent', () => {
  let component: NuevoEventosNegocioComponent;
  let fixture: ComponentFixture<NuevoEventosNegocioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoEventosNegocioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoEventosNegocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
