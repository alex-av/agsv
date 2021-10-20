import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V11SingleAnswerComponent } from './v11-single-answer.component';

describe('V11SingleAnswerComponent', () => {
  let component: V11SingleAnswerComponent;
  let fixture: ComponentFixture<V11SingleAnswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ V11SingleAnswerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(V11SingleAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
