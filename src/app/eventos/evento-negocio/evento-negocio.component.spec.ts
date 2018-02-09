import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoNegocioComponent } from './evento-negocio.component';

describe('EventoNegocioComponent', () => {
  let component: EventoNegocioComponent;
  let fixture: ComponentFixture<EventoNegocioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventoNegocioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventoNegocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
