import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V20ChatViewComponent } from './v20-chat-view.component';

describe('V20ChatViewComponent', () => {
  let component: V20ChatViewComponent;
  let fixture: ComponentFixture<V20ChatViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ V20ChatViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(V20ChatViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
