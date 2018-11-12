import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaughterThreapyDetailComponent } from './laughter-threapy-detail.component';

describe('LaughterThreapyDetailComponent', () => {
  let component: LaughterThreapyDetailComponent;
  let fixture: ComponentFixture<LaughterThreapyDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaughterThreapyDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaughterThreapyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
