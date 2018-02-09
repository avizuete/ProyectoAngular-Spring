import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoUsuComponent } from './evento-usu.component';

describe('EventoUsuComponent', () => {
  let component: EventoUsuComponent;
  let fixture: ComponentFixture<EventoUsuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventoUsuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventoUsuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
