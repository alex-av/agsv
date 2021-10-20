import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractionsCounterComponent } from './interactions-counter.component';

describe('InteractionsCounterComponent', () => {
  let component: InteractionsCounterComponent;
  let fixture: ComponentFixture<InteractionsCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InteractionsCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractionsCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
