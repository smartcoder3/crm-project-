import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalInsuranceCreateComponent } from './national-insurance-create.component';

describe('NationalInsuranceCreateComponent', () => {
  let component: NationalInsuranceCreateComponent;
  let fixture: ComponentFixture<NationalInsuranceCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NationalInsuranceCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NationalInsuranceCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
