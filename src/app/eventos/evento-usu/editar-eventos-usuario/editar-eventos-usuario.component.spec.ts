import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarEventosUsuarioComponent } from './editar-eventos-usuario.component';

describe('EditarEventosUsuarioComponent', () => {
  let component: EditarEventosUsuarioComponent;
  let fixture: ComponentFixture<EditarEventosUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarEventosUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarEventosUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
