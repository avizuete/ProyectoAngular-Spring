import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginNegocioComponent } from './login-negocio.component';

describe('LoginNegocioComponent', () => {
  let component: LoginNegocioComponent;
  let fixture: ComponentFixture<LoginNegocioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginNegocioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginNegocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
