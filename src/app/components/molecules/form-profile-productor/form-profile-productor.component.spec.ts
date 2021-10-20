import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProfileProductorComponent } from './form-profile-productor.component';

describe('FormProfileProductorComponent', () => {
  let component: FormProfileProductorComponent;
  let fixture: ComponentFixture<FormProfileProductorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormProfileProductorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormProfileProductorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
