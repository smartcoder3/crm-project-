import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeInsuranceCreateComponent } from './life-insurance-create.component';

describe('LifeInsuranceCreateComponent', () => {
  let component: LifeInsuranceCreateComponent;
  let fixture: ComponentFixture<LifeInsuranceCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeInsuranceCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeInsuranceCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
