import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProfileInvestigadorComponent } from './form-profile-investigador.component';

describe('FormProfileInvestigadorComponent', () => {
  let component: FormProfileInvestigadorComponent;
  let fixture: ComponentFixture<FormProfileInvestigadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormProfileInvestigadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormProfileInvestigadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
