import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaughterThreapyListComponent } from './laughter-threapy-list.component';

describe('LaughterThreapyListComponent', () => {
  let component: LaughterThreapyListComponent;
  let fixture: ComponentFixture<LaughterThreapyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaughterThreapyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaughterThreapyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
