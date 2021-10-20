import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerStarsComponent } from './answer-stars.component';

describe('AnswerStarsComponent', () => {
  let component: AnswerStarsComponent;
  let fixture: ComponentFixture<AnswerStarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnswerStarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerStarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
