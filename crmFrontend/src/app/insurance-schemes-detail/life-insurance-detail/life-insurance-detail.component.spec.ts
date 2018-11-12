import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeInsuranceDetailComponent } from './life-insurance-detail.component';

describe('LifeInsuranceDetailComponent', () => {
  let component: LifeInsuranceDetailComponent;
  let fixture: ComponentFixture<LifeInsuranceDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeInsuranceDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeInsuranceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
