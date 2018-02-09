import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NegocioHomePageComponent } from './negocio-home-page.component';

describe('NegocioHomePageComponent', () => {
  let component: NegocioHomePageComponent;
  let fixture: ComponentFixture<NegocioHomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NegocioHomePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NegocioHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
