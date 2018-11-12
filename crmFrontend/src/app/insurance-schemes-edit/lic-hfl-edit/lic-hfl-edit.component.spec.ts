import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LicHflEditComponent } from './lic-hfl-edit.component';

describe('LicHflEditComponent', () => {
  let component: LicHflEditComponent;
  let fixture: ComponentFixture<LicHflEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LicHflEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LicHflEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
