import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileButtonsRowComponent } from './profile-buttons-row.component';

describe('ProfileButtonsRowComponent', () => {
  let component: ProfileButtonsRowComponent;
  let fixture: ComponentFixture<ProfileButtonsRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileButtonsRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileButtonsRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
