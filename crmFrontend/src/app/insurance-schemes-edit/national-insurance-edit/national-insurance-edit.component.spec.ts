import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalInsuranceEditComponent } from './national-insurance-edit.component';

describe('NationalInsuranceEditComponent', () => {
  let component: NationalInsuranceEditComponent;
  let fixture: ComponentFixture<NationalInsuranceEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NationalInsuranceEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NationalInsuranceEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
