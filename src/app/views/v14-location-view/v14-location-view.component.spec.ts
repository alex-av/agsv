import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V14LocationViewComponent } from './v14-location-view.component';

describe('V14LocationViewComponent', () => {
  let component: V14LocationViewComponent;
  let fixture: ComponentFixture<V14LocationViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ V14LocationViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(V14LocationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
