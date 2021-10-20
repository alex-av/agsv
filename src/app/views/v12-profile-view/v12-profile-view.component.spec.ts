import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V12ProfileViewComponent } from './v12-profile-view.component';

describe('V12ProfileViewComponent', () => {
  let component: V12ProfileViewComponent;
  let fixture: ComponentFixture<V12ProfileViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ V12ProfileViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(V12ProfileViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
