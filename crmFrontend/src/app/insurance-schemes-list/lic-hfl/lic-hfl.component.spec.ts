import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LicHflComponent } from './lic-hfl.component';

describe('LicHflComponent', () => {
  let component: LicHflComponent;
  let fixture: ComponentFixture<LicHflComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LicHflComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LicHflComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
