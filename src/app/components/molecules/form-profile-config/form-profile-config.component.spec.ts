import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProfileConfigComponent } from './form-profile-config.component';

describe('FormProfileConfigComponent', () => {
  let component: FormProfileConfigComponent;
  let fixture: ComponentFixture<FormProfileConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormProfileConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormProfileConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
