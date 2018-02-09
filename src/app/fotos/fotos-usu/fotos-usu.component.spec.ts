import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FotosUsuComponent } from './fotos-usu.component';

describe('FotosUsuComponent', () => {
  let component: FotosUsuComponent;
  let fixture: ComponentFixture<FotosUsuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FotosUsuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FotosUsuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
