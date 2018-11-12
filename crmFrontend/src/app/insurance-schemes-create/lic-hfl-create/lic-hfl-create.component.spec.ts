import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LicHflCreateComponent } from './lic-hfl-create.component';

describe('LicHflCreateComponent', () => {
  let component: LicHflCreateComponent;
  let fixture: ComponentFixture<LicHflCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LicHflCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LicHflCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
