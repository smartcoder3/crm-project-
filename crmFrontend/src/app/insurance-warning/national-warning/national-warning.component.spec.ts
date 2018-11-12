import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalWarningComponent } from './national-warning.component';

describe('NationalWarningComponent', () => {
  let component: NationalWarningComponent;
  let fixture: ComponentFixture<NationalWarningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NationalWarningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NationalWarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
