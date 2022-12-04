import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUfoComponent } from './edit-ufo.component';

describe('EditUfoComponent', () => {
  let component: EditUfoComponent;
  let fixture: ComponentFixture<EditUfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditUfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
