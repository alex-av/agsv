import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V16NotificationsViewComponent } from './v16-notifications-view.component';

describe('V16NotificationsViewComponent', () => {
  let component: V16NotificationsViewComponent;
  let fixture: ComponentFixture<V16NotificationsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ V16NotificationsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(V16NotificationsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
