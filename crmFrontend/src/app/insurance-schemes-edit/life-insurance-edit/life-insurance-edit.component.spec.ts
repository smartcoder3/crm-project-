import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeInsuranceEditComponent } from './life-insurance-edit.component';

describe('LifeInsuranceEditComponent', () => {
  let component: LifeInsuranceEditComponent;
  let fixture: ComponentFixture<LifeInsuranceEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeInsuranceEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeInsuranceEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
