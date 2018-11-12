import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaughterThreapyCreateComponent } from './laughter-threapy-create.component';

describe('LaughterThreapyCreateComponent', () => {
  let component: LaughterThreapyCreateComponent;
  let fixture: ComponentFixture<LaughterThreapyCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaughterThreapyCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaughterThreapyCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
