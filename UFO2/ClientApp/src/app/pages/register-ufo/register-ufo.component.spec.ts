import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterUfoComponent } from './register-ufo.component';

describe('RegisterUfoComponent', () => {
  let component: RegisterUfoComponent;
  let fixture: ComponentFixture<RegisterUfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterUfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterUfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
