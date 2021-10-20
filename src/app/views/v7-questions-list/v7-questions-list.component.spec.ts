import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V7QuestionsListComponent } from './v7-questions-list.component';

describe('V7QuestionsListComponent', () => {
  let component: V7QuestionsListComponent;
  let fixture: ComponentFixture<V7QuestionsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ V7QuestionsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(V7QuestionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
