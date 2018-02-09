import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FotosNegocioComponent } from './fotos-negocio.component';

describe('FotosNegocioComponent', () => {
  let component: FotosNegocioComponent;
  let fixture: ComponentFixture<FotosNegocioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FotosNegocioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FotosNegocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
