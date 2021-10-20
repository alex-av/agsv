import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V3SignUpViewComponent } from './v3-sign-up-view.component';

describe('V3SignUpViewComponent', () => {
  let component: V3SignUpViewComponent;
  let fixture: ComponentFixture<V3SignUpViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ V3SignUpViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(V3SignUpViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
