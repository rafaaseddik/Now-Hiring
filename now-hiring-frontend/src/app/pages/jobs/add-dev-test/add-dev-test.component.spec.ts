import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDevTestComponent } from './add-dev-test.component';

describe('AddDevTestComponent', () => {
  let component: AddDevTestComponent;
  let fixture: ComponentFixture<AddDevTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDevTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDevTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
