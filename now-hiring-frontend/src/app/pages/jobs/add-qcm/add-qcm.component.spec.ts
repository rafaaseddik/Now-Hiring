import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddQCMComponent } from './add-qcm.component';

describe('AddQCMComponent', () => {
  let component: AddQCMComponent;
  let fixture: ComponentFixture<AddQCMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddQCMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddQCMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
