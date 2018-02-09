import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNegocioComponent } from './create-negocio.component';

describe('CreateNegocioComponent', () => {
  let component: CreateNegocioComponent;
  let fixture: ComponentFixture<CreateNegocioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNegocioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNegocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
