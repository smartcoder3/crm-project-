import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalInsuranceComponent } from './national-insurance.component';

describe('NationalInsuranceComponent', () => {
  let component: NationalInsuranceComponent;
  let fixture: ComponentFixture<NationalInsuranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NationalInsuranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NationalInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
