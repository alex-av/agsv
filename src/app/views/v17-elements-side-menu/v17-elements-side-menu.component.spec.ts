import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V17ElementsSideMenuComponent } from './v17-elements-side-menu.component';

describe('V17ElementsSideMenuComponent', () => {
  let component: V17ElementsSideMenuComponent;
  let fixture: ComponentFixture<V17ElementsSideMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ V17ElementsSideMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(V17ElementsSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
