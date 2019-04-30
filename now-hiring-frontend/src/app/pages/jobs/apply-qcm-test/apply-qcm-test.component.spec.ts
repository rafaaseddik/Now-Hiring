import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyQcmTestComponent } from './apply-qcm-test.component';

describe('ApplyQcmTestComponent', () => {
  let component: ApplyQcmTestComponent;
  let fixture: ComponentFixture<ApplyQcmTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyQcmTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyQcmTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
