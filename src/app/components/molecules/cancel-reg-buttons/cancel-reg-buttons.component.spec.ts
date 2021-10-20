import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelRegButtonsComponent } from './cancel-reg-buttons.component';

describe('CancelRegButtonsComponent', () => {
  let component: CancelRegButtonsComponent;
  let fixture: ComponentFixture<CancelRegButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelRegButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelRegButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
