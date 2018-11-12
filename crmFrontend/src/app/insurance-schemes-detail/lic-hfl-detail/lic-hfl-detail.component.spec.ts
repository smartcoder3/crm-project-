import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LicHflDetailComponent } from './lic-hfl-detail.component';

describe('LicHflDetailComponent', () => {
  let component: LicHflDetailComponent;
  let fixture: ComponentFixture<LicHflDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LicHflDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LicHflDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
