import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaughterThreapyEditComponent } from './laughter-threapy-edit.component';

describe('LaughterThreapyEditComponent', () => {
  let component: LaughterThreapyEditComponent;
  let fixture: ComponentFixture<LaughterThreapyEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaughterThreapyEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaughterThreapyEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
