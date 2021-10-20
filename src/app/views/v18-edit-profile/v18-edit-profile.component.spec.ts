import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V18EditProfileComponent } from './v18-edit-profile.component';

describe('V18EditProfileComponent', () => {
  let component: V18EditProfileComponent;
  let fixture: ComponentFixture<V18EditProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ V18EditProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(V18EditProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
