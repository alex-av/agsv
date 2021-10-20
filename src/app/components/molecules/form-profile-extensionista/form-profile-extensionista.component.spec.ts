import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProfileExtensionistaComponent } from './form-profile-extensionista.component';

describe('FormProfileExtensionistaComponent', () => {
  let component: FormProfileExtensionistaComponent;
  let fixture: ComponentFixture<FormProfileExtensionistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormProfileExtensionistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormProfileExtensionistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
