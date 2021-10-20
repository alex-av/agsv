import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V10SingleQuestionComponent } from './v10-single-question.component';

describe('V10SingleQuestionComponent', () => {
  let component: V10SingleQuestionComponent;
  let fixture: ComponentFixture<V10SingleQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ V10SingleQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(V10SingleQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
