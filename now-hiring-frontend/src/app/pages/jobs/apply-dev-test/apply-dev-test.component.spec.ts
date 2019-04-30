import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyDevTestComponent } from './apply-dev-test.component';

describe('ApplyDevTestComponent', () => {
  let component: ApplyDevTestComponent;
  let fixture: ComponentFixture<ApplyDevTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyDevTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyDevTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
