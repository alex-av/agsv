import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V6FeedComponent } from './v6-feed.component';

describe('V6FeedComponent', () => {
  let component: V6FeedComponent;
  let fixture: ComponentFixture<V6FeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ V6FeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(V6FeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
