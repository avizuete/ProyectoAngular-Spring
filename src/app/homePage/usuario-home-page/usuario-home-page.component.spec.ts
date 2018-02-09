import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioHomePageComponent } from './usuario-home-page.component';

describe('UsuarioHomePageComponent', () => {
  let component: UsuarioHomePageComponent;
  let fixture: ComponentFixture<UsuarioHomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioHomePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
