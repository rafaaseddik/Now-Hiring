import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobGridItemComponent } from './job-grid-item.component';

describe('JobGridItemComponent', () => {
  let component: JobGridItemComponent;
  let fixture: ComponentFixture<JobGridItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobGridItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobGridItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
