import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalInsuranceDetailComponent } from './national-insurance-detail.component';

describe('NationalInsuranceDetailComponent', () => {
  let component: NationalInsuranceDetailComponent;
  let fixture: ComponentFixture<NationalInsuranceDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NationalInsuranceDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NationalInsuranceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
