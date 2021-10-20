import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V4ProfileComponent } from './v4-profile.component';

describe('V4ProfileComponent', () => {
  let component: V4ProfileComponent;
  let fixture: ComponentFixture<V4ProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ V4ProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(V4ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
