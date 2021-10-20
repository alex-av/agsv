import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V5ProfileConfigurationComponent } from './v5-profile-configuration.component';

describe('V5ProfileConfigurationComponent', () => {
  let component: V5ProfileConfigurationComponent;
  let fixture: ComponentFixture<V5ProfileConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ V5ProfileConfigurationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(V5ProfileConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
