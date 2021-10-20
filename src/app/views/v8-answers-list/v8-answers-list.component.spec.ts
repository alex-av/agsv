import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V8AnswersListComponent } from './v8-answers-list.component';

describe('V8AnswersListComponent', () => {
  let component: V8AnswersListComponent;
  let fixture: ComponentFixture<V8AnswersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ V8AnswersListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(V8AnswersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
