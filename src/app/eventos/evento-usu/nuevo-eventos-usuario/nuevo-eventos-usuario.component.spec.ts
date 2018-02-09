import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoEventosUsuarioComponent } from './nuevo-eventos-usuario.component';

describe('NuevoEventosUsuarioComponent', () => {
  let component: NuevoEventosUsuarioComponent;
  let fixture: ComponentFixture<NuevoEventosUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoEventosUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoEventosUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
